$(document).on("submit", "#worktoolsAdd", function (event) {
	event.preventDefault();
	var form = $("#worktoolsAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				worktoolsLoad();
				$("#modal-worktools-add").modal("hide");
				$("#worktoolsAdd")[0].reset();
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

function worktoolsLoad() {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsLoad": "1",
			"search" : $("input[name=search]").val()
		},
		dataType: "json",
		success: function(data) {
			$("#worktoolsList").html("");
			var template = Handlebars.templates['worktoolsList'];
			$("#worktoolsList").html(template(data));
		}
	});
}
function worktoolsDelete(id) {
	Swal.fire({
		title: 'Oled sa kindel, et soovid kustutada töövahendi?',
		text: "Seda tegevust ei saa tagasi võtta ja see kustutab kõik töövahendiga seotud andmed!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Jah, kustuta!',
		cancelButtonText: 'Tühista'
	}).then((result) => {
		if (result.isConfirmed) {
			worktoolsDeleteConfirm(id);
		}
	})
}
function worktoolsDeleteConfirm(id) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsDelete": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				worktoolsLoad();
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
function worktoolsEditData(id) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsEditData": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-worktools-edit input[name=id]").val(data.data.id);
			$("#modal-worktools-edit input[name=name]").val(data.data.name);
			$("#modal-worktools-edit textarea[name=info]").val(data.data.info);
			$("#modal-worktools-edit input[name=quantity]").val(data.data.quantity);
			$("#modal-worktools-edit").modal("show");
		}
	});
}
$(document).on("submit", "#worktoolsEdit", function (event) {
	event.preventDefault();
	var form = $("#worktoolsEdit")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				worktoolsLoad();
				$("#modal-worktools-edit").modal("hide");
				$("#worktoolsEdit")[0].reset();
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
function worktoolsUsed(id) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsUsed": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-worktools-used input[name=id]").val(id);
			$("#modal-worktools-used .worktoolsUsedTable tbody").html("");
			$.each(data.data, function(key, value) {
				$("#modal-worktools-used .worktoolsUsedTable").append("<tr><td>"+value.name+"</td><td>"+value.quantity+"</td><td><button type='button' class='btn btn-success btn-sm' onClick='worktoolsReturned("+id+","+value.user_id+")'>Tagastatud</button></td></tr>");
			});
			$("#modal-worktools-used").modal("show");
		}
	});

}
function worktoolsAddUser(id) {
	$("#modal-worktools-used-add input[name=worktool_id]").val(id);
	$("#modal-worktools-used-add").modal("show");
}

$('#modal-worktools-used-add').on('shown.bs.modal', function () {
	$.ajax({
		url: "ajax/user.php",
		type: "POST",
		data: {
			"GetAllUsers": "1"
		},
		dataType: "json",
		success: function(data) {
			$("#modal-worktools-used-add select[name=employee_id]").html("");
			$.each(data.data, function(key, value) {
				$("#modal-worktools-used-add select[name=employee_id]").append("<option value='"+value.id+"'>"+value.name+"</option>");
			});

		}
	});
});

$(document).on("submit", "#worktoolsUserAdd", function (event) {
	event.preventDefault();
	var form = $("#worktoolsUserAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				worktoolsLoad();
				$("#modal-worktools-used-add").modal("hide");
				$("#worktoolsUserAdd")[0].reset();
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

function worktoolsReturned(worktool_id,employee_id) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsReturned": "1",
			"employee_id": employee_id,
			"worktool_id": worktool_id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				$("#modal-worktools-used").modal("hide");
				worktoolsLoad();
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
function worktoolsViewLog(worktool_id) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsViewLog": "1",
			"worktool_id": worktool_id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-worktools-log .worktoolsLogTable tbody").html("");
			$.each(data.data, function(key, value) {
				$("#modal-worktools-log .worktoolsLogTable").append("<tr><td>"+value.user_name+"</td><td>"+value.type+"</td><td>"+value.created+"</td><td>"+value.created_by_name+"</td></tr>");
			});
			$("#modal-worktools-log").modal("show");
		}
	});
}