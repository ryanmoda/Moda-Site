function checkForm() {
	if (document.getElementById('email').value == "") {
		Materialize.toast('No email input', 2000);
		return false;
	}
}

