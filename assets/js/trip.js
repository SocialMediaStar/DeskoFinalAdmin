function tripLoad() {
	department_id = $(".filterTrip select[name=department_id]").val();
	status_id = $(".filterTrip select[name=status_id]").val();


	$.ajax({
		url: "ajax/trip.php",
		type: "POST",
		data: {
			"loadTrip" : 1,
			"department_id" : department_id,
			"status" : status_id,
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#tripList").html("");
			var template = Handlebars.templates['tripList'];
			$("#triptList").html(template(data));
			
		}
	});
}

function loadFilterData() {
	$.ajax({
		url: "ajax/trip.php",
		type: "POST",
		data: {
			"loadFilterData" : 1
		},
		success: function (data) {
			data = JSON.parse(data);
			$(".filterTrip #department").html("<option selected value='0'>Kõik osakonnad</option>");
			$.each(data.data.department, function (key, value) {
				$(".filterTrip #department").append("<option value='" + value.id + "'>" + value.name + "</option>");
			});
		}
	});
}
function viewTrip(trip_id) {
	$.ajax({
		url: "ajax/trip.php",
		type: "POST",
		data: {
			"viewTrip" : 1,
			"trip_id" : trip_id
		},
		success: function (data) {
			data = JSON.parse(data);
			$("#modal-trip-view .modal-body").html(data.data.info);		
			$("#modal-trip-view").modal("show");	
		}
	});
}



function acceptTrip(trip_id) {
	Swal.fire({
		title: 'Kas sa soovid kinnitada töölähetust?',
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
						tripLoad();
						
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
				tripLoad();
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
$(document).on("change", ".filterTrip select", function () {
  tripLoad();
});

