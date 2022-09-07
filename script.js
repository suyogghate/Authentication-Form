let encryptionRule = {
	'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'_': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': '_'
  }
  
  const encrypt = (inputPassword) => {
	  let encryptedPassword = ''
	  for(char of inputPassword) {
		  encryptedPassword = encryptedPassword + encryptionRule[char]
	  }
	  return encryptedPassword
  }
  
  const decrypt = (encryptedPassword) => { 
	  let actualPassword = ''
	  let keys = Object.keys(encryptionRule)
	  let values = Object.values(encryptionRule)
	  for(char of encryptedPassword) {
		  let requiredIndex = values.findIndex(value => value === char)
		  actualPassword = actualPassword + keys[requiredIndex]
	  }
	  return actualPassword
  }
  
  const DB_USERS = []
  
  const resetSignupFields = () => {
	  document.getElementById('signup-first-name').value = ''
	  document.getElementById('signup-last-name').value = ''
	  document.getElementById('signup-phone').value = ''
	  document.getElementById('signup-email').value = ''
	  document.getElementById('signup-password').value = ''
	  document.getElementById('signup-confirm-password').value = ''
	  document.getElementById('tnC').checked = false;

	  document.getElementById('first-name-valid').style.display = 'none';
	  document.getElementById('last-name-valid').style.display = 'none';
	  document.getElementById('phone-valid').style.display = 'none';
	  document.getElementById('email-valid').style.display = 'none';
	  document.getElementById('password-valid').style.display = 'none';
	  document.getElementById('confirm-password-valid').style.display = 'none';
	  document.getElementById('tnC-valid').style.display = 'none';
  }
  
  const resetLoginFields = () => {
	  document.getElementById('login-email').value = ''
	  document.getElementById('login-password').value = ''
  }
  
  const signup = () => {
	  let flag = false;
	  let firstName = document.getElementById('signup-first-name').value
	  let lastName = document.getElementById('signup-last-name').value
	  let phone = document.getElementById('signup-phone').value
	  let email = document.getElementById('signup-email').value
	  let password = document.getElementById('signup-password').value
	  let confirmPassword = document.getElementById('signup-confirm-password').value;
	  let tnc = document.getElementById('tnC').checked;
	  let signupFailureAlert = document.getElementById('signup-alert-failure');
	  let signupSuccessAlert = document.getElementById('signup-alert-success');
	  

	  if(firstName && firstName.length >= 3 && isNaN(firstName)){
        document.getElementById('first-name-valid').style.display = 'block';
		document.getElementById('first-name-invalid').style.display = 'none';
      } else {
        document.getElementById('first-name-valid').style.display = 'none';
		document.getElementById('first-name-invalid').style.display = 'block';
        flag = true;
      }

	  if(lastName && lastName.length >= 3 && isNaN(lastName)){
        document.getElementById('last-name-valid').style.display = 'block';
		document.getElementById('last-name-invalid').style.display = 'none';
      } else {
        document.getElementById('last-name-valid').style.display = 'none';
		document.getElementById('last-name-invalid').style.display = 'block';
        flag = true;
      }

	  if(phone && phone.length === 10 && parseInt(phone)){
        document.getElementById('phone-valid').style.display = 'block';
		document.getElementById('phone-invalid').style.display = 'none';
      } else {
        document.getElementById('phone-valid').style.display = 'none';
		document.getElementById('phone-invalid').style.display = 'block';
        flag = true;
      }

	  if(email && email.includes("@") && email.includes(".") && email.lastIndexOf(".") <= email.length - 3 && email.indexOf('@') !== 0){
        document.getElementById('email-valid').style.display = 'block';
		document.getElementById('email-invalid').style.display = 'none';
      } else {
        document.getElementById('email-valid').style.display = 'none';
		document.getElementById('email-invalid').style.display = 'block';
        flag = true;
      }

	  if(password && password.length >= 6){
		document.getElementById('password-valid').style.display = 'block';
		document.getElementById('password-invalid').style.display = 'none';
	  } else {
		document.getElementById('password-valid').style.display = 'none';
		document.getElementById('password-invalid').style.display = 'block';
		flag = true;
	  }

	  if(confirmPassword && confirmPassword == password){
		document.getElementById('confirm-password-valid').style.display = 'block';
		document.getElementById('confirm-password-invalid').style.display = 'none';
	  } else {
		document.getElementById('confirm-password-valid').style.display = 'none';
		document.getElementById('confirm-password-invalid').style.display = 'block';
		flag = true;
	  }

	  if(tnc){
		document.getElementById('tnC-valid').style.display = 'block';
		document.getElementById('tnC-invalid').style.display = 'none';
	  } else {
		document.getElementById('tnC-valid').style.display = 'none';
		document.getElementById('tnC-invalid').style.display = 'block';
		flag = true;
	  }
	  
	  if(flag){
		  signupFailureAlert.style.display = 'block';
		  signupSuccessAlert.style.display = 'none';
	  } else {
		  signupFailureAlert.style.display = 'none';
		  signupSuccessAlert.style.display = 'block';
	  }

	  let userDetails = {
		firstName,
		lastName,
		email,
		password: encrypt(password),
		phone
	  }

	  DB_USERS.push(userDetails);
  
	  resetSignupFields();
  }
  
  const login = () => {
	  let enteredEmail = document.getElementById('login-email').value
	  let enteredPassword = document.getElementById('login-password').value
  
	  let loginSuccessAlert = document.getElementById('login-alert-success')
	  let loginFailureAlert = document.getElementById('login-alert-failure')
  
	  let currentUser =  DB_USERS.find(user => user.email === enteredEmail && decrypt(user.password) === enteredPassword)
	  if(currentUser) {
		  loginSuccessAlert.style.display = 'block'
		  loginFailureAlert.style.display = 'none'
	  } else {
		  loginFailureAlert.style.display = 'block'
		  loginSuccessAlert.style.display = 'none'
	  }
  
	  resetLoginFields()
  }
  

/*
		find() -> Return a condition to find the element; If value exists, returns the value; else, returns undefined
		2 steps:
		1. Check whether the email (user) exits in the DB.
		2. Whether enterted password matches with saved password for that user.
*/

