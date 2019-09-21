function validate({ username, password }) {
	let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	const users = getObject('devcodes-users') || {};
	const user = users[username]
	console.log('user vs cred ', { username, password, user })
	if ((username || '').trim().length < 3) throw new Error('The username is too short')
	if (!user) throw new Error('This username is doesnt exist in our system')
	// if (!emailRegex.test(email)) throw new Error('This email is not valid')
	if ((password || '').trim().length < 3) throw new Error('The password is too short')
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
function loginSubmit() {
	let username = document.getElementById('userName').value;
	let password = document.getElementById('password').value;

	console.log('the user ', { username, password })
	try {
		validate({ username, password });
		hideValidationError()
		loginUser({ username, password })
		gotoWelcomePage();
	} catch (error) {
		console.log('the error is ', error);
		showValidationError(error.message);
	}
}

function gotoWelcomePage() {
	window.location.href = window.location.href.replace('index', 'welcome');
}

function loginUser({ username, password }) {
	const users = getObject('devcodes-users') || {};
	const user = users[username];
	if (!user) throw new Error('User name invalid')
	if (!(user.password === password)) throw new Error('Could not log user in')
	saveObject('currentUserName', { username })
	return true
}

window.onload = function () {  }
