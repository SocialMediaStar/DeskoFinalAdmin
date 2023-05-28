function vacationLoad() {
	department_id = $(".filterVacation select[name=department_id]").val();
	type_id = $(".filterVacation select[name=type_id]").val();	
	status_id = $(".filterVacation select[name=status_id]").val();
	start = $(".filterVacation input[name=start]").val();
	end = $(".filterVacation input[name=end]").val();


	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadVacation" : 1,
			"department_id" : department_id,
			"vacation_type" : type_id,
			"status" : status_id,
			"start" : start,
			"end" : end
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#vacationList").html("");
			var template = Handlebars.templates['vacationList'];
			$("#vacationList").html(template(data));
			
		}
	});
}

function loadFilterData() {
	department_id = $(".filterVacation select[name=department_id]").val();
	$.ajax({
		url: "ajax/vacation.php",
		type: "POST",
		data: {
			"loadFilterData" : 1,
			"department_id" : department_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$(".filterVacation #department").html("<option selected value='0'>Kõik osakonnad</option>");
			$.each(data.data.department, function (key, value) {
				$(".filterVacation #department").append("<option value='" + value.id + "'>" + value.name + "</option>");
			});
			$(".filterVacation #type").html("<option selected value='0'>Kõik tüübid</option>");
			$.each(data.data.type, function (key, value) {
				$(".filterVacation #type").append("<option value='" + value.id + "'>" + value.name + "</option>");
			});
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
						vacationLoad();
						
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
			  vacationLoad();
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
  vacationLoad();
});
$(document).on("change", ".filterVacation input", function () {
	vacationLoad();
});

