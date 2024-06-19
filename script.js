const fullName = document.getElementById('fullName')
const emailAddress = document.getElementById('emailAddress')
const password = document.getElementById('password')
const conformPassword = document.getElementById('conformPassword')
const submitBtn = document.getElementById('sumbitBtn')

if (localStorage.getItem('token')) {
    alert('Already logged In')
    window.location.href = 'profile.html'
}

function genrateToken(length){
    const allCharacters =
    "0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
    let token = '';
    for (let i = 0; i <length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        token += allCharacters[randomIndex];
    }
    return token;
}

function saveUser(){
    let userData ={
        fullName: fullName.value,
        emailAddress: emailAddress.value,
    }
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('token', genrateToken(16));
    alert('Sign up Successfull')
    window.location.href = 'profile.html';
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault() //required attribute will not work here
    if (!fullName.value || !emailAddress.value || !password.value || !conformPassword.value) {
        alert('All fields are reuired to fill')
    }else{
        // if (condition) {
        //     //email validation
        // }
        if (password.value !== conformPassword.value) {
            alert('Password must be same')
            password.value =''
            conformPassword.value =''
        }else{
            saveUser();
        }
    }
}) 