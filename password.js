const passwordBox = document.getElementById('password');
const copyIcon = document.getElementById('copy');
const button = document.getElementById('btn');

const generatePassword = () => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;

    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordBox.value = password;
}            
button.addEventListener('click', generatePassword);

copyIcon.addEventListener('click', () => {

    const passwordCopy = passwordBox.value.trim();
    if (!passwordCopy) {    
        alert("Please generate a password first");
        return;
    }
    navigator.clipboard.writeText(passwordCopy)
    .then(() => {
        alert("Password copied to clipboard!");
    });   
});

eyeIcon.onclick = function(){
    
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }else{
        password.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }

}
    
    

