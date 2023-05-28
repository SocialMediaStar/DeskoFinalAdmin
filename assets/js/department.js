$(document).on("submit", "#departmentAdd", function (event) {
	event.preventDefault();
	var form = $("#departmentAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				departmentLoad();
				$("#modal-department-add").modal("hide");
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
$(document).on("submit", "#departmentEdit", function (event) {
	event.preventDefault();
	var form = $("#departmentEdit")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				departmentLoad();
				$("#modal-department-edit").modal("hide");
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

function departmentLoad() {
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: {
			"departmentLoad": "1",
			"search" : $("input[name=search]").val()
		},
		dataType: "json",
		success: function(data) {
			$("#departmentList").html("");
			var template = Handlebars.templates['departmentList'];
			$("#departmentList").html(template(data));
		}
	});
}
function departmentEditData(id) {
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: {
			"departmentGet": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-department-edit input[name=id]").val(data.id);
			$("#modal-department-edit input[name=name]").val(data.name);
			$("#modal-department-edit").modal("show");
		}
	});
}
$('#modal-department-edit').on('shown.bs.modal', function () {
	$('#modal-department-edit select[name=lead]').chosen();
	$.ajax({
	  url: 'ajax/department.php',
	  method: 'POST',
	  dataType: 'json',
	  data: {
		"departmetGetLeadList": "1"
 	  },
	  success: function(response) {
		$('#modal-department-edit select[name=lead]').html('<option value="0">Vali osakonnajuht</option>');
		$.each(response, function(index, lead) {
		  $('#modal-department-edit select[name=lead]').append('<option value="' + lead.id + '">' + lead.name + '</option>');
		});
		
		$('#modal-department-edit select[name=lead]').trigger('chosen:updated');
	  },
	  error: function() {
		console.log('Error fetching countries');
	  }
	});
})

function departmentDelete(id) {
	Swal.fire({
		title: 'Oled sa kindel, et soovid kustutada osakonda?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Jah, kustuta!'
	  }).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: "ajax/department.php",
				type: "POST",
				data: {
					"departmentDelete": "1",
					"id": id
				},
				dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						departmentLoad();
						
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
		}
	  })
}
function departmentEmployees(id) {
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: {
			"departmentEmployees": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-department-employees input[name=id]").val(id);
			$("#modal-department-employees .tableArea").html("");
			var template = Handlebars.templates['departmentEmployees'];
			$("#modal-department-employees .tableArea").html(template(data));
			$("#modal-department-employees").modal("show");
		}
	});

}
function departmentEmployeeDelete(id) {
	Swal.fire({
		title: 'Oled sa kindel, et soovid kustutada töötajat osakonnast?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Jah, kustuta!',
		target: document.getElementById('modal-department-employees')
		}).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: "ajax/department.php",
				type: "POST",
				data: {
					"departmentEmployeeDelete": "1",
					"id": id
				},
				dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						department_id = $("#modal-department-employees input[name=id]").val();
						departmentEmployees(department_id);
						departmentLoad();
						loadEmployees();
						Swal.fire({
							icon: 'success',
							text: data.message,
							target: document.getElementById('modal-department-employees')
						});
					} else {
						Swal.fire({
							icon: 'error',
							text: data.message
						});
					}
				}
			});
		}	
	})
}
$('#modal-department-employees').on('shown.bs.modal', function () {
	loadEmployees();
  });

  function loadEmployees() {
	$('#modal-department-employees select[name=employee]').chosen();
	$.ajax({
	  url: 'ajax/department.php',
	  method: 'POST',
	  dataType: 'json',
	  data: {
		"departmentGetEmployeeList": "1"
 	  },
	  success: function(response) {
		$('#modal-department-employees select[name=employee]').html('<option value="0">Vali töötaja</option>');
		$.each(response, function(index, employee) {
		  $('#modal-department-employees select[name=employee]').append('<option value="' + employee.id + '">' + employee.name + '</option>');
		});
		
		$('#modal-department-employees select[name=employee]').trigger('chosen:updated');
	  },
	  error: function() {
		console.log('Error fetching countries');
	  }
	});
	  }

  $(document).on("submit", "#departmentEmployeeAdd", function (event) {
	event.preventDefault();
	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: new FormData(this),
		contentType: false,
		processData: false,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				department_id = $("#modal-department-employees input[name=id]").val();
				departmentEmployees(department_id);
				departmentLoad();
				loadEmployees();
				Swal.fire({
					icon: 'success',
					text: data.message,
					target: document.getElementById('modal-department-employees')
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

$('input[name=search]').on('keyup input', function() {
	departmentLoad();
});