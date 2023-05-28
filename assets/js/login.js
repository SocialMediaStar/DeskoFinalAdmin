$(document).on("submit", "#js-login", function (event) {
	event.preventDefault();
	var form = $("#js-login")
	if (form[0].checkValidity() === false) {
		event.preventDefault()
		event.stopPropagation()
	}
	form.addClass('was-validated');
	var formData = $(this).serialize();
	$.ajax({
		url: "ajax/user.php",
		type: "POST",
		data: formData,
		dataType: "json",
		success: function(data) {
			if (data.success == "1") {
				location.reload();
			} else {
				$("#js-login-error").html(data);
			}
		}
	});
});


