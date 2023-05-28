function addYearMonth(year,months_full) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
  
    $.each(year, function (index, value) {
      $('select[name=year]').append($('<option>', {
        value: value,
        text: value,
        selected: value == currentYear // Add "selected" attribute if value equals currentYear
      }));
    });
  
    $.each(months_full, function (index, value) {
      $('select[name=month]').append($('<option>', {
        value: index,
        text: value,
        selected: index == currentMonth // Add "selected" attribute if index equals currentMonth
      }));
    });
  }

function shiftGetDepartmentList() {
	$.ajax({
	  url: 'ajax/shift.php',
	  method: 'POST',
	  dataType: 'json',
	  data: {
		"shiftGetDepartmentList": "1"
 	  },
	  success: function(response) {
		$('select[name=departmentList]').html('<option value="0">Kõik osakonnad</option>');
		$.each(response, function(index, department) {
		  $('select[name=departmentList]').append('<option value="' + department.id + '">' + department.name + '</option>');
		});
	  },
	  error: function() {
		console.log('Error fetching countries');
	  }
	});
}
function shiftTable() {
    year = $("select[name=year] option:selected").val();
    month = $("select[name=month] option:selected").val();

    $.ajax({
        type: 'POST',
        url: "ajax/shift.php",
        dataType: "json",
        data: {"shiftTable" : 1, "year" : year, "month" : month},
        success: function (data) {
            var template = Handlebars.templates['shiftTable'];
            $("#shiftTable").html(template(data));
			if (data.shift.length != 0) {
            shiftDetailTable(data.shift[0].id);
			} else {
				$("#attendance-data").html('<div class="alert alert-info">Andmed puuduvad</div>');
			}
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
        }
    });    
}  
function shiftDetailTable(shift_id) {
	console.log(shift_id);
	$("#shift_"+shift_id).addClass("bg-primary color-white").siblings().removeClass("bg-primary color-white");
    $.ajax({
        type: 'POST',
        url: "ajax/shift.php",
        dataType: "json",
        data: {"shiftDetailTable" : 1, "shift_id" : shift_id},
        success: function (data) {
            var template = Handlebars.templates['shiftDetailTable'];
            $("#attendance-data").html(template(data));    
			$("#shiftDetailDepartment").html(data.department);
			$("#shiftDetailMonth").html(data.month);
			$("#shiftDetailYear").html(data.year);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
        }
    });    
}  

$(document).on("submit", "#shiftAdd", function (event) {
	event.preventDefault();
	var form = $("#shiftAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				shiftTable();
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			} else {
				Swal.fire({
					icon: 'error',
					text: data.message
				});
			}
		}
	});
});

$(document).on("submit", "#AddLegend", function (event) {
	event.preventDefault();
	var form = $("#AddLegend")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				$("#modal-shift-legend-add").modal("hide");
                    $('#AddLegend').trigger("reset");
                    loadLegends();
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			} else {
				$("#departmentAdd-error").html(data);
			}
		}
	});
});
function loadLegends() {
    $.ajax({
        type: 'POST',
        url: "ajax/shift.php",
        dataType: "json",
        data: {"loadLegends" : 1},
        success: function (data) {
            $(".legends").html('');
            if (data) {
                $.each(data, function (index, value) {
                    $(".legends").append(value.legend);
                });
            } 
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
        }
    });    
}
$(document).on("click",".legends .badge",function() {
    legend_id = $(this).attr("id");
    $.ajax({
        type: 'POST',
        url: "ajax/shift.php",
        dataType: "json",
        data: {"loadLegendData" : 1, "legend_id" : legend_id},
        success: function (data) {
            $("#modal-shift-legend-edit input[name=legend_id]").val(legend_id);
            $("#modal-shift-legend-edit input[name=name]").val(data.legend.name);
            $("#modal-shift-legend-edit input[name=desc]").val(data.legend.description);
            $("#modal-shift-legend-edit input[value="+data.legend.badge+"]").prop("checked",true);
            $("#modal-shift-legend-edit").modal("show");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr);
        }
    });    
});
$(document).on("submit", "#EditLegend", function (event) {
	event.preventDefault();
	var form = $("#EditLegend")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				$("#modal-shift-legend-edit").modal("hide");
                    $('#EditLegend').trigger("reset");
                    loadLegends();
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			} else {
				$("#departmentAdd-error").html(data);
			}
		}
	});
});

$(document).on("click", "#attendance-data .add", function (event) {

	date = $(this).data("date") + 1;
	worker_id = $(this).data("worker_id");
	shift_id = $(this).data("shift_id");

	if (date < 10) {
		date = "0" + date;
	}

	$("#modal-shift-detail-add").modal("show");
	$("#modal-shift-detail-add input[name=worker_id]").val(worker_id);
	$("#modal-shift-detail-add input[name=date]").val(date);
	$("#modal-shift-detail-add input[name=shift_id]").val(shift_id);
});

$('#modal-shift-detail-add').on('shown.bs.modal', function () {
	worker_id = $("#modal-shift-detail-add input[name=worker_id]").val();
	y = $("#shiftAdd select[name=year]").val();
	m = $("#shiftAdd select[name=month]").val();
	d = $("#modal-shift-detail-add input[name=date]").val();
	date = y + "-" + m + "-" + d;
	$("#modal-shift-detail-add input[name=dateFull]").val(date);
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: {"legendList" : 1, "worker_id" : worker_id},
		dataType: "json",
		success: function(data) {
			if (data) {
				$("#modal-shift-detail-add .workerName").html(data.worker);
				$("#modal-shift-detail-add .dateName").html(date);

				$("#modal-shift-detail-add select[id=legendList]").html('<option value="0">Vali töötamise tüüp</option>');
				$.each(data.legends, function (index, value) {
					$('<option>', {
						value: value.id,
						text: value.name
					}).appendTo('#modal-shift-detail-add select[id=legendList]');
				});
			} 
		}
	});


});
$(document).on("submit", "#shiftDetailAdd", function (event) {
	event.preventDefault();
	var form = $("#shiftDetailAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				shift_id = $("#modal-shift-detail-add input[name=shift_id]").val();
				$("#modal-shift-detail-add").modal("hide");
                    $('#shiftDetailAdd').trigger("reset");
                    shiftDetailTable(shift_id);
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			} else {
				$("#modal-shift-detail-add").modal("hide");
				Swal.fire({
					icon: 'error',
					text: data.message
				});
			}
		}
	});
});
$(document).on("click", "#attendance-data .view", function (event) {

	d = $(this).data("date") + 1;
	worker_id = $(this).data("worker_id");
	shift_id = $(this).data("shift_id");

	if (d < 10) {
		d = "0" + d;
	}
	y = $("#shiftAdd select[name=year]").val();
	m = $("#shiftAdd select[name=month]").val();
	date = y + "-" + m + "-" + d;
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: {"shiftDetailView" : 1, "worker_id" : worker_id, "shift_id" : shift_id, "date" : date},
		dataType: "json",
		success: function(data) {
			if (data.success) {
				var template = Handlebars.templates['shiftDetailView'];
				$("#shiftDetailView").html(template(data.detail));
				$("#modal-shift-detail-view").modal("show");
			}
		}
	});
});
function deleteShiftDetailView(shift_detail_id,shift_id) {
	$("#modal-shift-detail-view").modal("hide");
	Swal.fire({
		title: 'Kas oled kindel?',
		text: "Kas soovid kustutada töötamise?",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#6c757d',
		confirmButtonText: 'Kustuta',
		cancelButtonText: 'Tühista'
	}).then((result) => {
		if (result.value) {
			$.ajax({
				url: "ajax/shift.php",
				type: "POST",
				data: {"deleteShiftDetailView" : 1, "shift_detail_id" : shift_detail_id, "shift_id" : shift_id},
				dataType: "json",
				success: function(data) {
					if (data.success) {
						$("#modal-shift-detail-view").modal("hide");
						shiftDetailTable(shift_id);
						Swal.fire({
							icon: 'success',
							text: data.message
						});
					}
				}
			});
		}
	});
}
function ShiftStatusChange(shift_id) {
	$.ajax({
		url: "ajax/shift.php",
		type: "POST",
		data: {"ShiftStatusChange" : 1, "shift_id" : shift_id},
		dataType: "json",
		success: function(data) {
			if (data.success) {
				shiftTable();
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			}
		}
	});
}

function changeShift(id) {
	shiftDetailTable(id);
}

$(document).on("change", "select[name=year], select[name=month]", function (event) {
	shiftTable();
});