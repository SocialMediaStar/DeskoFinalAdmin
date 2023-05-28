function statementLoad() {
	department_id = $(".filterStatement select[name=department_id]").val();
	status_id = $(".filterStatement select[name=status_id]").val();


	$.ajax({
		url: "ajax/statement.php",
		type: "POST",
		data: {
			"loadStatement" : 1,
			"department_id" : department_id,
			"status" : status_id,
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#statementList").html("");
			var template = Handlebars.templates['statementList'];
			$("#statementList").html(template(data));
			
		}
	});
}

function loadFilterData() {
	$.ajax({
		url: "ajax/statement.php",
		type: "POST",
		data: {
			"loadFilterData" : 1
		},
		success: function (data) {
			data = JSON.parse(data);
			$(".filterStatement #department").html("<option selected value='0'>Kõik osakonnad</option>");
			$.each(data.data.department, function (key, value) {
				$(".filterStatement #department").append("<option value='" + value.id + "'>" + value.name + "</option>");
			});
		}
	});
}
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
						statementLoad();
						
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
				statementLoad();
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
  statementLoad();
});

