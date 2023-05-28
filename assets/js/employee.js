$(document).on("submit", "#employeeAdd", function (event) {
	event.preventDefault();
	var form = $("#employeeAdd")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				window.location.href = data.url;
			} else {
				$("#employeeAdd-error").html(data);
			}
		}
	});
});

function employeeLoad() {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: {
			"employeeLoad": "1"
		},
		dataType: "json",
		success: function(data) {
			$("#js-contacts").html("");
			var template = Handlebars.templates['employeeList'];
			$("#js-contacts").html(template(data));
		}
	});
}

function employeeDataLoad(employee_id) {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: {
			"employeeDataLoad": "1",
			"employee_id": employee_id
		},
		dataType: "json",
		success: function(data) {
			$(".fname").html(data.fname);
			$(".lname").html(data.lname);
			$(".departmentName").html(data.department_name);
			const decodedCode = decodePersonalCode(data.code);

			education = $("#modal-profile-personal-edit select[name=education] option[value="+data.education+"]").text();
			language = $("#modal-profile-personal-edit select[name=language] option[value="+data.language+"]").text();


			$("#profileDataTable .fname").html(data.fname);
			$("#profileDataTable .lname").html(data.lname);
			$("#profileDataTable .gender").html(decodedCode.gender);	
			$("#profileDataTable .birthday").html(decodedCode.birthDate+" ("+decodedCode.age+")");		
			$("#profileDataTable .code").html(data.code);
			$("#profileDataTable .phone").html(data.phone);
			$("#profileDataTable .email").html(data.email);
			$("#profileDataTable .address").html(data.address);
			$("#profileDataTable .education").html(education);
			$("#profileDataTable .language").html(language);
			$("#profileDataTable .department").html(data.department);
			$("#profileDataTable .iban").html(data.iban);
			$("#profileDataTable .department").html(data.department_name);

			$("#modal-profile-personal-edit input[name=employee_id]").val(data.id);
			$("#modal-profile-personal-edit input[name=fname]").val(data.fname);
			$("#modal-profile-personal-edit input[name=lname]").val(data.lname);
			$("#modal-profile-personal-edit input[name=code]").val(data.code);
			$("#modal-profile-personal-edit input[name=phone]").val(data.phone);
			$("#modal-profile-personal-edit input[name=email]").val(data.email);
			$("#modal-profile-personal-edit input[name=address]").val(data.address);
			$("#modal-profile-personal-edit select[name=education] option[value="+data.education+"]").attr("selected", "selected");
			$("#modal-profile-personal-edit select[name=language] option[value="+data.language+"]").attr("selected", "selected");
			$("#modal-profile-personal-edit select[name=department] option[value="+data.department_id+"]").attr("selected", "selected");
			$("#modal-profile-personal-edit input[name=iban]").val(data.iban);

			$(".schoolTable tbody").html("");
			if (data.school.length > 0) {
			$.each(data.school, function(key, value) {
				$(".schoolTable tbody").append('<tr><td>'+value.name+'</td><td>'+value.speciality+'</td><td>'+value.start+'</td><td>'+value.end+'</td><td><button class="btn btn-xs btn-danger" onClick="DeleteProfileSchool('+value.id+')"><i class="fas fa-trash-alt"></i></button></td></tr>');
			});
			} 

			$(".kidTable tbody").html("");
			if (data.kid.length > 0) {
			$.each(data.kid, function(key, value) {
				const decodedKidCode = decodePersonalCode(value.code);
				$(".kidTable tbody").append('<tr><td>'+value.fname+'</td><td>'+value.lname+'</td><td>'+decodedKidCode.birthDate+' ('+decodedKidCode.age+')</td><td><button class="btn btn-xs btn-danger" onClick="DeleteProfileKid('+value.id+')"><i class="fas fa-trash-alt"></i></button></td></tr>');
			});
			}
		}
	});
}
$('#modal-profile-personal-edit').on('shown.bs.modal', function () {

	$.ajax({
		url: "ajax/department.php",
		type: "POST",
		data: {
			"departmentLoad": "1",
			"search" : ""
		},
		dataType: "json",
		success: function(data) {
			$("#modal-profile-personal-edit select[name=department]").html("");
			$.each(data, function(key, value) {
				$("#modal-profile-personal-edit select[name=department]").append('<option value="'+value.id+'">'+value.name+'</option>');
			});
		}
	});
});


function decodePersonalCode(personalCode) {
	const gender = parseInt(personalCode[0]) % 2 === 0 ? 'Naine' : 'Mees';
	const birthYear = parseInt(personalCode.substring(1, 3));
	const birthMonth = parseInt(personalCode.substring(3, 5));
	const birthDay = parseInt(personalCode.substring(5, 7));
	const birthDate = new Date(`19${birthYear}-${birthMonth}-${birthDay}`);
	const ageDiffMs = Date.now() - birthDate.getTime();
	const ageDate = new Date(ageDiffMs);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
	return {
	  birthDate: `${birthDay}.${birthMonth}.${birthYear}`,
	  age: age,
	  gender: gender
	};
}
$(document).on("submit", "#EditProfileData", function (event) {
	event.preventDefault();
	var form = $("#EditProfileData")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				employeeDataLoad(data.employee_id);
				$("#modal-profile-personal-edit").modal("hide");
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

$(document).on("submit", "#AddProfileSchool", function (event) {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: $(this).serialize(),
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				employeeDataLoad(data.employee_id);
				$("#modal-profile-school-add").modal("hide");
				$("#AddProfileSchool")[0].reset();
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

function DeleteProfileSchool(id) {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: {
			"DeleteProfileSchool": "1",
			"id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				employeeDataLoad(data.employee_id);
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
$(document).on("submit", "#AddProfileKid", function (event) {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: $(this).serialize(),
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				employeeDataLoad(data.employee_id);
				$("#modal-profile-kid-add").modal("hide");
				$("#AddProfileKid")[0].reset();
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

$('#myList a[data-toggle="list"]').on('shown.bs.tab', function(e) {
    var targetTab = $(e.target).attr('href'); // Get the href attribute of the newly shown tab
    if (targetTab === '#work-tools-data') {
		LoadProfileWorkTools();
    } else 
	if (targetTab === '#documents-data') {
		LoadProfileDocuments();
	} else
	if (targetTab === '#vacation-data') {
		vacationProfileLoad();
		loadFilterData();
		loadVacationStat();
	} else
	if (targetTab === '#applications-data') {
		statementProfileLoad();
	} else 
	if (targetTab === '#business-trips-data') {
		tripProfileLoad();
	}

});
$('#modal-profile-tools-add').on('shown.bs.modal', function () {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"worktoolsLoad": "1",
			"search" : ""
		},
		dataType: "json",
		success: function(data) {
			$("#modal-profile-tools-add select[name=worktool_id]").html("");
			$.each(data.data, function(key, value) {
				$("#modal-profile-tools-add select[name=worktool_id]").append("<option value='"+value.id+"'>"+value.name+"</option>");
			});
		}
	});
});


$(document).on("submit", "#AddProfileTools", function (event) {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: $(this).serialize(),
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				LoadProfileWorkTools();
				$("#modal-profile-tools-add").modal("hide");
				$("#AddProfileTools")[0].reset();
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

function LoadProfileWorkTools() {
	$.ajax({
		url: "ajax/worktools.php",
		type: "POST",
		data: {
			"LoadEmployeeTools": "1",
			"employee_id": employee_id
		},
		dataType: "json",
		success: function(data) {
			if (data.data.length > 0) {
				$("#workToolsTable tbody").html("");
				$.each(data.data, function(key, value) {

					$("#workToolsTable tbody").append('<tr data-id="'+value.id+'"><td>'+value.worktool_name+'</td><td>'+value.worktool_info+'</td><td>'+value.quantity+'</td><td><button type="button" class="btn btn-sm btn-primary" onClick="worktoolsReturned('+value.worktool_id+','+value.user_id+')">Tagastamine</button></td></tr>');

				});
			} else {
				$("#workToolsTable tbody").html('<tr><td colspan="4">Andmeid ei leitud</td></tr>');
			}

		}
	});
}
$(document).on("change", "select[name=worktoolStatus]", function (event) {
	$.ajax({
		url: "ajax/employee.php",
		type: "POST",
		data: {
			"ChangeWorkToolStatus": "1",
			"tool_id": $(this).closest("tr").attr("data-id"),
			"status": $(this).val(),
			"employee_id": employee_id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				LoadProfileWorkTools();
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
				LoadProfileWorkTools();
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
$("#modal-profile-document-add").on("shown.bs.modal", function () {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsLoad": "1",
			"search" : ""
		},
		dataType: "json",
		success: function(data) {
			$("#modal-profile-document-add select[name=document_id]").html("");
			$.each(data.data, function(key, value) {
				$("#modal-profile-document-add select[name=document_id]").append("<option value='"+value.id+"'>"+value.name+"</option>");
			});
		}
	});
}
);

$(document).on("submit", "#AddProfileDocuments", function (event) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: $(this).serialize(),
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				LoadProfileDocuments();
				$("#modal-profile-document-add").modal("hide");
				$("#AddProfileDocuments")[0].reset();
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
function LoadProfileDocuments() {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"LoadEmployeeDocuments": "1",
			"employee_id": employee_id
		},
		dataType: "json",
		success: function(data) {
			if (data.data.length > 0) {
				$("#documentsTable tbody").html("");
				$.each(data.data, function(key, value) {

					$("#documentsTable tbody").append('<tr data-id="'+value.id+'"><td>'+value.document_name+'</td><td>'+value.document_info+'</td><td>'+value.created+'</td><td>'+value.created_by_name+'</td><td><button type="button" class="btn btn-sm btn-primary" onClick="documentsRemoveAccess('+value.document_id+','+value.user_id+','+value.id+')">Eemalda õigused</button></td></tr>');

				});
			} else {
				$("#documentsTable tbody").html('<tr><td colspan="4">Andmeid ei leitud</td></tr>');
			}

		}
	});
}

function documentsRemoveAccess(document_id,employee_id,id) {
	$.ajax({
		url: "ajax/documents.php",
		type: "POST",
		data: {
			"documentsAccessDelete": "1",
			"employee_id": employee_id,
			"document_id": document_id,
			"id": id
		},
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				LoadProfileDocuments();
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

function vacationProfileLoad() {
	type_id = $(".filterVacation select[name=type_id]").val();	
	status_id = $(".filterVacation select[name=status_id]").val();
	start = $(".filterVacation input[name=start]").val();
	end = $(".filterVacation input[name=end]").val();


	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadProfileVacation" : 1,
			"vacation_type" : type_id,
			"status" : status_id,
			"start" : start,
			"end" : end,
			"employee_id" : employee_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#vacationTable").html("");
			var template = Handlebars.templates['vacationProfileList'];
			$("#vacationTable").html(template(data));
			
		}
	});
}
function acceptVacation(vacation_id) {
	Swal.fire({
		title: 'Kas sa soovid kinnitada puhkust?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Jah, kinnita!',
		cancelButtonText: 'Tühista',
		reverseButtons: true // Reverses the order of buttons
	  }).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: "ajax/vacation.php",
				type: "POST",
				data: {
					"acceptVacation": "1",
					"vacation_id": vacation_id
				},
				dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						vacationProfileLoad();
						
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
function rejectVacation(vacation_id) {
	Swal.fire({
	  title: '<span style="font-size: 20px;">Kas sa soovid tühistada puhkust?</span>',
	  html: `
		<textarea id="reason" rows="4" cols="50" name="reason" placeholder="Puhkuse tühistamise põhjus" class="form-control"></textarea>
		<small>Puhkuse tühistamisel saadetakse töötajale e-mail teade!</small>
	  `,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  cancelButtonText: 'Tühista',
	  confirmButtonText: 'Jah, tühista!',
	  reverseButtons: true // Reverses the order of buttons
	}).then((result) => {
	  if (result.isConfirmed) {
		const reason = document.getElementById('reason').value;
		$.ajax({
		  url: "ajax/vacation.php",
		  type: "POST",
		  data: {
			"rejectVacation": "1",
			"vacation_id": vacation_id,
			"reason": reason
		  },
		  dataType: "json",
		  success: function(data) {
			if (data.success == "1") {
				vacationProfileLoad();
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
$(document).on("change", ".filterVacation select", function () {
	vacationProfileLoad();
});
$(document).on("change", ".filterVacation input", function () {
	vacationProfileLoad();
});


function loadFilterData() {
	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadFilterData" : 1
		},
		success: function (data) {
			data = JSON.parse(data);
			$(".filterVacation #type").html("<option selected value='0'>Kõik tüübid</option>");
			$.each(data.data.type, function (key, value) {
				$(".filterVacation #type").append("<option value='" + value.id + "'>" + value.name + "</option>");
			});
		}
	});
}

function loadVacationStat() {
	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadVacationStat" : 1,
			"employee_id" : employee_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$(".mainUsed").html(data.mainUsed);
			$(".mainTotal").html(data.mainTotal);
			$(".kidsUsed").html(data.kidsUsed);
			$(".kidsTotal").html(data.kidsTotal);
			$(".schoolUsed").html(data.schoolUsed);
			$(".schoolTotal").html(data.schoolTotal);

			if (data.pending > 0) {
				$(".pending").html(data.pending);
				$(".pendingVacation").show();
			} else {
				$(".pendingVacation").hide();
			}
		}
	});
}

$('#modal-profile-vacation-add').on('shown.bs.modal', function () {
	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadAvaibleVacationType": "1",
			"employee_id": employee_id
		},
		dataType: "json",
		success: function(data) {
			$("#modal-profile-vacation-add .modal-body").html("");
			var template = Handlebars.templates['vacationAdd'];
			$("#modal-profile-vacation-add .modal-body").html(template(data));
		
		}
	});
});

$(document).on("submit", "#AddVacationForEmployee", function (event) {
	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: $(this).serialize(),
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				vacationProfileLoad();
				$("#modal-profile-vacation-add").modal("hide");
				$("#AddVacationForEmployee")[0].reset();
				Swal.fire({
					icon: 'success',
					text: data.message
				});
				loadVacationStat();
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

function statementProfileLoad() {
	status_id = $(".filterStatement select[name=status_id]").val();

	$.ajax({
		url: "ajax/statement.php",
		type: "POST",
		data: {
			"loadProfileStatement" : 1,
			"status" : status_id,
			"employee_id" : employee_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#statementTable").html("");
			var template = Handlebars.templates['statementProfileList'];
			$("#statementTable").html(template(data));
			
		}
	});
}

function acceptStatement(statement_id) {
	Swal.fire({
		title: 'Kas sa soovid kinnitada avaldust?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Jah, kinnita!',
		cancelButtonText: 'Tühista',
		reverseButtons: true // Reverses the order of buttons
	  }).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: "ajax/statement.php",
				type: "POST",
				data: {
					"acceptStatement": "1",
					"statement_id": statement_id
				},
				dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						statementProfileLoad();
						
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
function rejectStatement(statement_id) {
	Swal.fire({
	  title: '<span style="font-size: 20px;">Kas sa soovid tühistada avaldust?</span>',
	  html: `
		<textarea id="reason" rows="4" cols="50" name="reason" placeholder="Avalduse tühistamise põhjus" class="form-control"></textarea>
		<small>Avalduse tühistamisel saadetakse töötajale e-mail teade!</small>
	  `,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  cancelButtonText: 'Tühista',
	  confirmButtonText: 'Jah, tühista!',
	  reverseButtons: true // Reverses the order of buttons
	}).then((result) => {
	  if (result.isConfirmed) {
		const reason = document.getElementById('reason').value;
		$.ajax({
		  url: "ajax/statement.php",
		  type: "POST",
		  data: {
			"rejectStatement": "1",
			"statement_id": statement_id,
			"reason": reason
		  },
		  dataType: "json",
		  success: function(data) {
			if (data.success == "1") {
				statementProfileLoad();
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
$(document).on("change", ".filterStatement select", function () {
	statementProfileLoad();
});

function viewStatement(statement_id) {
	$.ajax({
		url: "ajax/statement.php",
		type: "POST",
		data: {
			"viewStatement" : 1,
			"statement_id" : statement_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#modal-statement-view .modal-body").html(data.data.info);		
			$("#modal-statement-view").modal("show");	
		}
	});
}

$(document).on("submit", "#AddTripForEmployee", function (event) {
	event.preventDefault();
	var formData = new FormData(this);
	$.ajax({
		url: "ajax/trip.php",
		type: "POST",
		data: formData,
		contentType: false,
		processData: false,
		success: function (data) {
			data = JSON.parse(data);
			if (data.success == "1") {
				tripLoad();
				$("#modal-profile-trip-add").modal("hide");
				$("#AddTripForEmployee")[0].reset();
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


function tripProfileLoad() {
	status_id = $(".filterTrip select[name=status_id]").val();

	$.ajax({
		url: "ajax/trip.php",
		type: "POST",
		data: {
			"loadProfileTrip" : 1,
			"status" : status_id,
			"employee_id" : employee_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#tripTable").html("");
			var template = Handlebars.templates['tripProfileList'];
			$("#tripTable").html(template(data));
			
		}
	});
}

function acceptTrip(trip_id) {
	Swal.fire({
		title: 'Kas sa soovid kinnitada lähetust?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Jah, kinnita!',
		cancelButtonText: 'Tühista',
		reverseButtons: true // Reverses the order of buttons
	  }).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				url: "ajax/trip.php",
				type: "POST",
				data: {
					"acceptTrip": "1",
					"trip_id": trip_id
				},
				dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						tripProfileLoad();
						
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
function rejectTrip(trip_id) {
	Swal.fire({
	  title: '<span style="font-size: 20px;">Kas sa soovid tühistada lähetust?</span>',
	  html: `
		<textarea id="reason" rows="4" cols="50" name="reason" placeholder="Lähetuse tühistamise põhjus" class="form-control"></textarea>
		<small>Lähetuse tühistamisel saadetakse töötajale e-mail teade!</small>
	  `,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  cancelButtonText: 'Tühista',
	  confirmButtonText: 'Jah, tühista!',
	  reverseButtons: true // Reverses the order of buttons
	}).then((result) => {
	  if (result.isConfirmed) {
		const reason = document.getElementById('reason').value;
		$.ajax({
		  url: "ajax/trip.php",
		  type: "POST",
		  data: {
			"rejectTrip": "1",
			"trip_id": trip_id,
			"reason": reason
		  },
		  dataType: "json",
		  success: function(data) {
			if (data.success == "1") {
				tripProfileLoad();
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
