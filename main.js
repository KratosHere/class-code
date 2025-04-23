const actualMail = "samyak123@23gmail.com" // stored during registration
const actualPassword = "sam321"; // stored during registration
const actualPhonenumber = 11;

let enteredMail = "samyak123@gmail.com";
let enteredPhonenumber = 11;
let enteredPassword = "sam321";


if ((enteredMail === actualMail || enteredPhonenumber === actualPhonenumber) && (enteredPassword === actualPassword)) {
    console.log("User logged in!!");
} else {
    console.log("Invalid Credentials!")
}
