
window.onload = function () {
	let isValid = false;

	const validCredentials = {
		user1: { email: 'ssdanso@live.com', password: '123abc', username: 'SSD' },
		user2: { email: 'devcodes@gmail.com', password: 'abc123', username: 'devcodes' }
	};

	document.getElementById('loginBtn').onclick = function () {

		if (emailUsername.value.length < 5) {
			emailUsername.textContent = 'Username must be at least 5 letters';
			emailUsername.style.borderColor = '#c22222';
			emailUsername.focus();
		}
		if (password.value.length < 6) {
			password.textContent = 'Password must be at least 7 characters';
			password.style.borderColor = '#c22222';
			password.focus();
		}
	}

	document.getElementById('loginBtn').onclick = function () {
		const emailUsername = document.getElementById('email').value;
		const password = document.getElementById('password').value;


		for (let user in validCredentials) {
			let creds = validCredentials[user];

			const isUnameOrEmailValid = (creds.email === emailUsername) || (creds.username === emailUsername);
			const isPasswordValid = creds.password === password;

			if (isUnameOrEmailValid && isPasswordValid) {
				isValid = true;
			}
		}

		if (isValid) alert('login successful');
		else alert('login failed!');
	}
}
