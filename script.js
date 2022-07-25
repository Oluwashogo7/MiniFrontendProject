//object
let userDetailsDatabase = {}




function getUserDetails(){
 //username
    let userName = prompt("Fill in your username")

    if (userName == null) {
        return
    }
    function validateUserName(userName) {
        if(userName.length < 10 && userName.length > 0) {
            return true
        }else {
            return false
        }
    }

    while(validateUserName(userName) == false) {
        userName = prompt("Username must be at least 1 character and at most 9 characters.")
    }
    userDetailsDatabase["Username"] = userName



 //email
    let email = prompt("Fill in your Email")

    if (email == null) {
        return
    }
    function validateEmail(email) {
        const emailCheck = /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        emailCheckResult = emailCheck.test(email)
        if (emailCheckResult == true){
            return true
        }else {
            return false
        }
    }

    while (validateEmail(email) == false) {
        email = prompt("Enter a valid email")
    }
    userDetailsDatabase["Email"] = email



 //phone number
    let phoneNumber = prompt("Fill in your phone number")
 
    if (phoneNumber == null) {
        return
    }
    function validatePhoneNumber(phoneNumber) {
        if (phoneNumber.length == 11 ) {
            return true
        }else {
            return false
        }
    }

    while (validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt("Enter a valid number")
    }
    userDetailsDatabase["PhoneNumber"] = phoneNumber


 //password   
    let password = prompt("What is your pasword")

    if (password == null) {
        return
    }
    function validatePassword(password) {
        if (password.length > 6 && password.length < 12) {
            return true
        }else {
            return false
        }
    }

    while (validatePassword(password) == false) {
        password = prompt("Password must be at least 7 characters or at most 11 characters")
    }
    userDetailsDatabase["Password"] = password



 //confirm password   
    let confirmPassword = prompt("Confirm Password")

    if (confirmPassword == null) {
        return
    }
    function validateConfirmPassword(confirmPassword) {
        if (confirmPassword == password) {
            return true
        }else {
            return false
        }
    }

    while (validateConfirmPassword(confirmPassword) == false) {
        confirmPassword = prompt("Incorrect password")
    }

}

function displayUserDetails(){
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.Username}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nEmail: ${userDetailsDatabase.Email}`)
}


