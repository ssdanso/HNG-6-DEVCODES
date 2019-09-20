
	function Submit() {

		


		let username = document.getElementById('userName').value;
		let email = document.getElementById('emailS').value;
		let password = document.getElementById('pswd').value;
		let password_confirmation = document.getElementById('pswd_conf').value;

		function validateEmail(email) {
			let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

			if(emailRegex.test(email))
			{
				return true
			}else
			{
				alert('Try Again With A Valid E-mail!')
				email.focus()
				return false
			}
		}
		

		if(username === " ")
		{
			document.signup.uname.focus()
			
			return false
		}
		
		if(email === " ")
		{
			alert("Please Enter Email")
			document.signup.eml.focus()			
			
		}
		else if(validateEmail(email))
		
		if(password === " ")
		{
			alert("Please Enter Password")
			document.signup.psd.focus()
			
		}else if(password_confirmation === " ")
		{
			alert("Please Confirm Password")
			document.signup.psd_conf.focus()
			
		}else if(password !== password_confirmation)
		{
			alert("Password's Do Not Match, Try Again!")
			document.signup.psd_conf.focus()
			document.signup.psd.focus()
			return false
		}else
		{
			// alert('Signup Successful');
			window.open('welcome.html')
			return true
		}


		};

		
