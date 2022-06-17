function validate(e){
  e.preventDefault();


var fname = document.forms['register']['fname'];

var lname = document.forms['register']['lname'];

var email = document.forms['register']['email'];

var pwd = document.forms['register']['pwd'];
  
let re = /^(([^<>()[/]\.,;:\s@\"]+(\.[^<()[\]\.,;:\s@\"]+)*)|(\"+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if(fname.value === '') {
  fname.classList.add('error');
document.getElementById('fname').style.border= '1px solid red';
  document.getElementById('error-fname').innerHTML='First Name cannot be empty';
}

if(lname.value === '') {
  lname.classList.toggle('error');
document.getElementById('lname').style.border= '1px solid red';
  document.getElementById('error-lname').innerHTML= 'Last Name cannot be empty';
}
if(email.value === '') {
  email.classList.toggle('error');
document.getElementById('email').style.border= '1px solid red';
document.getElementById('email').textContent = 'email@example.com';
  document.getElementById('error-email').innerHTML = 'Looks like this is not an email';
}

if(pwd.value === '') {
  pwd.classList.toggle('error');
document.getElementById('pwd').style.border= '1px solid red';
  document.getElementById('error-pwd').innerHTML = 'Passwords cannot be empty';
}
}