function messageHistory() {
	$.ajax({
		url: "ajax/message.php",
		type: "POST",
		data: {
			"messageHistory": "1",
			"search" : $("input[name=searchMessages]").val()
		},
		dataType: "json",
		success: function(data) {
			$(".messageHistory").html("");
			var template = Handlebars.templates['messageHistory'];
			$(".messageHistory").html(template(data));
		}
	});
}

$("input[name=searchMessages]").on("keyup", function() {
	messageHistory();
});
function viewMessage(id, employee_id) {
	$.ajax({
		url: "ajax/message.php",
		type: "POST",
		data: {
			"viewMessage": "1",
			"message_id" : id,
			"employee_id" : employee_id
		},
		dataType: "json",
		success: function(data) {
			$(".employeeData").html("");
			var template = Handlebars.templates['messageEmployee'];
			$(".employeeData").html(template(data.employee));

			$(".messageArea").html("");
			var template = Handlebars.templates['messageArea'];
			$(".messageArea").html(template(data));
			$('.messageArea .csc').slimScroll({
				position: 'right',
				height: '100%',
				start: 'bottom',
				railVisible: true,
				alwaysVisible: true
			}); 
		}
	});
}

function searchEmployee() {
	$.ajax({
		url: "ajax/message.php",
		type: "POST",
		data: {
			"searchEmployee": "1",
			"search" : $("input[name=searchEmployee]").val()
		},
		dataType: "json",
		success: function(data) {
			$(".employeeSearch").html("");
			var template = Handlebars.templates['messageEmployeeSearch'];
			$(".employeeSearch").html(template(data));
		}
	});
}
$("input[name=searchEmployee]").on("keyup", function() {
searchEmployee();
});
$(document).on("submit", "#sendMessage", function (event) {
	event.preventDefault();
	var form = $("#sendMessage")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');


	// Get the value of the div with id #msgr_input
    var msgrInputValue = $("#msgr_input").text();
    
    // Append the value to the formData
    var formData = $(this).serialize() + "&content=" + encodeURIComponent(msgrInputValue);
    
	$.ajax({
		url: "ajax/message.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				messageHistory();
				viewMessage(data.message_id, data.employee_id)
				$("#modal-message-send").modal("hide");
				Swal.fire({
					icon: 'success',
					text: data.message
				});
			} else {
				$("#messageSend-error").html(data);
			}
		}
	});
});