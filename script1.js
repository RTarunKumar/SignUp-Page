let WelcomeHeading = document.getElementById('Welcome-heading');
let name = document.getElementById('name')
let email = document.getElementById('email');
let logoutBtn = document.getElementById('logout-btn');

if (!localStorage.getItem('token')) {
    alert('You need to Sign Up')
    window.location.href = 'index.html'
}

let userData = JSON.parse(localStorage.getItem('userData'));

WelcomeHeading.innerText= `Welcome you ${userData.fullName}`;
name.innerText = userData.fullName;
email.innerText = userData.emailAddress;


logoutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('userData')
    localStorage.removeItem('token')
    alert('You have been logged out');
    window.location.href = 'index.html';
})