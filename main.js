const actualMail = "samyak123@gmail.com" // stored during registration
const actualPassword = "sam321"; // stored during registration

let enteredMail = "samyak123@gmail.com";
let enteredPassword = "sam321";

if ((enteredMail === actualMail) && (enteredPassword === actualPassword)) {
    console.log("USER LOGGED IN!!")
} else {
    console.log("INVALID INFO!!");
}