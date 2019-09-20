function validate({ username, email, password, pwdConfm }) {
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const users = getObject('devcodes-users') || {};
	const user = users[username]
	if (user) throw new Error('This username is already taken')
	if (!emailRegex.test(email)) throw new Error('This email is not valid')
	if ((username || '').trim().length < 3) throw new Error('The username is too short')
	if ((password || '').trim().length < 3) throw new Error('The password is too short')
	if (password !== pwdConfm ) throw new Error('The password does not match')
	return true;
}

function showValidationError(message) {
	const errorDiv = document.getElementById('validationError')
	errorDiv.innerText = message
	errorDiv.style.display = 'block';
}

function hideValidationError() {
	const errorDiv = document.getElementById('validationError')
	errorDiv.style.display = 'none';
}
function submit() {
	let username = document.getElementById('userName').value;
	let email = document.getElementById('emailS').value;
	let password = document.getElementById('pswd').value;
	let pwdConfm = document.getElementById('pswd_conf').value;
	console.log('the user ', { username, email, password, pwdConfm })
	try {
		validate({ username, email, password, pwdConfm });
		hideValidationError()
		createUser({ username, email, password })
		gotoWelcomePage();
	} catch (error) {
		console.log('the error is ', error);
		showValidationError(error.message);
	}
}

function gotoWelcomePage() {}

function createUser({ username, email, password }) {
	const users = getObject('devcodes-users') || {};
	const user = users[username] || { username, email, password };
	Object.assign(user, { username, email, password })
	users[username] = user
	saveObject('devcodes-users', users)
}

function Submit() {
	let username = document.getElementById('userName').value;
	let email = document.getElementById('emailS').value;
	let password = document.getElementById('pswd').value;
	let password_confirmation = document.getElementById('pswd_conf').value;

	function validateEmail(email) {
		let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

		if (emailRegex.test(email)) {
			return true
		} else {
			alert('Try Again With A Valid E-mail!')
			email.focus()
			return false
		}
	}


	if (username === " ") {
		document.signup.uname.focus()

		return false
	}

	if (email === " ") {
		alert("Please Enter Email")
		document.signup.eml.focus()

	}
	else if (validateEmail(email))

		if (password === " ") {
			alert("Please Enter Password")
			document.signup.psd.focus()

		} else if (password_confirmation === " ") {
			alert("Please Confirm Password")
			document.signup.psd_conf.focus()

		} else if (password !== password_confirmation) {
			alert("Password's Do Not Match, Try Again!")
			document.signup.psd_conf.focus()
			document.signup.psd.focus()
			return false
		} else {
			// alert('Signup Successful');
			window.open('welcome.html')
			return true
		}


};


