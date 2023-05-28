$(document).on("submit", "#documentsAdd", function(event) {
	event.preventDefault();
	var form = $("#documentsAdd");
	if (form[0].checkValidity() === false) {
	  event.preventDefault();
	  event.stopPropagation();
	}
	form.addClass('was-validated');
	
	var formData = new FormData(this);
  
	$.ajax({
	  url: "ajax/documents.php",
	  type: "POST",
	  data: formData,
	  dataType: "json",
	  processData: false,
	  contentType: false,
	  success: function(data) {
		if (data.success == "1") {
		  documentsLoad();
		  $("#modal-documents-add").modal("hide");
		  $("#documentsAdd")[0].reset();
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
  

function documentsLoad() {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsLoad": "1",
			"search" : $("input[name=search]").val()
		},
		dataType: "json",
		success: function(data) {
			$("#documentsList").html("");
			var template = Handlebars.templates['documentsList'];
			$("#documentsList").html(template(data));
		}
	});
}
function documentsDelete(id) {
	Swal.fire({
		title: 'Oled sa kindel, et soovid kustutada dokumendi?',
		text: "Seda tegevust ei saa tagasi võtta ja see kustutab kõik dokumendiga seotud andmed!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Jah, kustuta!',
		cancelButtonText: 'Tühista'
	}).then((result) => {
		if (result.isConfirmed) {
			documentsDeleteConfirm(id);
		}
	})
}
function documentsDeleteConfirm(id) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsDelete": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				documentsLoad();
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

function documentsEditData(document_id) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsEditData": "1",
			"document_id": document_id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				$("#modal-documents-edit").modal("show");
				$("#documentsEdit")[0].reset();
				$("#documentsEdit input[name=document_id]").val(data.data.id);
				$("#documentsEdit input[name=name]").val(data.data.name);
				$("#documentsEdit textarea[name=info]").val(data.data.info);
			}
		}
	});
}

$(document).on("submit", "#documentsEdit", function(event) {
	event.preventDefault();
	var form = $("#documentsEdit");
	if (form[0].checkValidity() === false) {
	  event.preventDefault();
	  event.stopPropagation();
	}
	form.addClass('was-validated');
	
	var formData = new FormData(this);
	formData.append('document', $('#documentsEdit #documents-fileinput')[0].files[0]);
  
	$.ajax({
	  url: "ajax/documents.php",
	  type: "POST",
	  data: formData,
	  dataType: "json",
	  processData: false,
	  contentType: false,
	  success: function(data) {
		if (data.success == "1") {
		  documentsLoad();
		  $("#modal-documents-edit").modal("hide");
		  $("#documentsEdit")[0].reset();
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
);


function documentsAddUser(id) {
	$("#modal-documents-used-add input[name=document_id]").val(id);
	$("#modal-documents-used-add").modal("show");
}

$('#modal-documents-used-add').on('shown.bs.modal', function () {
	$.ajax({
		url: "ajax/user.php",
		type: "POST",
		data: {
			"GetAllUsers": "1"
		},
		dataType: "json",
		success: function(data) {
			$("#modal-documents-used-add select[name=employee_id]").html("");
			$.each(data.data, function(key, value) {
				$("#modal-documents-used-add select[name=employee_id]").append("<option value='"+value.id+"'>"+value.name+"</option>");
			});

		}
	});
});

$(document).on("submit", "#documentsUserAdd", function(event) {
	event.preventDefault();
	var form = $("#documentsUserAdd");
	if (form[0].checkValidity() === false) {
	  event.preventDefault();
	  event.stopPropagation();
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
	  url: "ajax/documents.php",
	  type: "POST",
	  data: formData,
	  dataType: "json",
	  success: function(data) {
		if (data.success == "1") {
		  documentsLoad();
		  $("#modal-documents-used-add").modal("hide");
		  $("#documentsUserAdd")[0].reset();
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
);

function documentsAccess(id) {
	$("#modal-documents-access").modal("hide");
	$("#modal-documents-access input[name=document_id]").val(id);
	$("#modal-documents-access").modal("show");
}

$('#modal-documents-access').on('shown.bs.modal', function () {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsAccessView": "1",
			"document_id": $("#modal-documents-access input[name=document_id]").val()
		},
		dataType: "json",
		success: function(data) {
			$("#modal-documents-access .documentsAccessTable").html("");
			$.each(data.data, function(key, value) {
				$("#modal-documents-access .documentsAccessTable").append("<tr><td>"+value.employee_name+"</td><td>"+value.created+"</td><td>"+value.created_by_name+"</td><td><button class='btn btn-sm btn-danger' onClick='documentRemoveAccess("+value.id+")'><i class='fal fa-trash-alt'></i></button></td></tr>");
			}
			);
		}
	});
});
function documentRemoveAccess(id) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsAccessDelete": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				documentsAccess($("#modal-documents-access input[name=document_id]").val());
				documentsLoad();
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

function documentsDownload(id) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsDownload": "1",
			"document_id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				window.open(data.file);
			} else {
				Swal.fire({
					icon: 'error',
					text: data.message
				});
			}
		}
	});
}