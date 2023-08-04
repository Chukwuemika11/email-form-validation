// function validateForm(){
//     const emailInput = document.getElementById('emailInput');
//     const errorMessage = document.getElementById('errorMessage');

//     //Regular expression to check for the validity of the email
//     const emailRegex = /^[w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
//     //   /^\S+@\S+\.\S+$/

//     if(!emailRegex.test(emailInput.value)){
//         errorMessage.textContent = 'Please enter a valid email address';
//         errorMessage.style.display = 'block';
//         return false; // Prevent form submission if email is invalid
//     }
//     else{
//         errorMessage.style.display='none';
//         return true; //Allow form submission if email is valid
//     }

// }


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the input

    const usernameValue = username.value.trim();
    const emailValue    =  email.value.trim();
    const passwordValue =  password.value.trim();
    const password2Value =password2.value.trim();

    if(usernameValue===''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        // add success class
        setSuccessFor(username);
    }

    if(emailValue===''){
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
      
    }
    else{
        setSuccessFor(email);
    }

    
    if(passwordValue===''){
        //show error
        //add error class
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password2 does not match');
    } 
    else {
        setSuccessFor(password);
    }

    
    if(password2Value===''){
        //show error
        //add error class
        setErrorFor(password2, 'Password2 cannot be blank');
    }
    else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password does not match');
    } 
    else{
        setSuccessFor(password2);
    }



}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside the small tag
    small.innerText= message;
    
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';

}


function isEmail(email){
    return  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
   
}










