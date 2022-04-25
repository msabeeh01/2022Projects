/*    JavaScript 6th Edition
 *    Chapter 8
 *    Hands-on Project 8-2

 *    Author: 
 *    Date:   

 *    Filename: script.js
 */


// global variables
const areas = ["QC","ON","MN","SK","AB","BC"];

var fname = document.getElementById("fnameinput");
var lname = document.getElementById("lnameinput");
var address = document.getElementById("addrinput");
var city = document.getElementById("cityinput");
var province = document.getElementById("provinput");
var password = document.getElementById("password");
var confirmpass = document.getElementById("confirmpass");
var age = document.getElementById("age");
var postal = document.getElementById("zipinput");
var email = document.getElementById("email");


function valEmail(){

}

function postalFilter (postalCode) {

   if (! postalCode) {
       return null;
   }

   postalCode = postalCode.toString().trim();

   var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

   if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
      return true;
   }
   else{
      window.alert("Enter in a correct postal code");
   }
}

function checkPostal(){
   postalFilter(postal.value);
}

function checkEmail(){

   reexp = /\S+@\S+\.\S+/;

   if (reexp.test(email.value) == true){
      return true;
      //run next check
   }

   else{
      window.alert("Please enter in a correct email");    
   }
}

function checkLocation(){
   if(areas.includes(province.value.toUpperCase())){
      return true;
   }
   else
   {
      window.alert("Incorrect Province.")
   }
}

function checkAge()
{
   if(age.value >= 18){
      return true;
   }
   else
   {
      window.alert("You must be atleast 18 years old");
   }
}

function checkPasswords(){
   var pass1 = document.forms["test"]["password"].value;
   var pass2 = document.forms["test"]["confirmpass"].value;

   if(pass1 == pass2)
   {
      return true;
   }

   else
   {
      window.alert("Passwords are not the same");
   }
}

function isValid(s) {

   // check for null or too short
   if (!s || s.length < 6) {
      window.alert("Password must be atleast 6 characters long");
      return false;
   }

   // check for a number
   if (/[0-9]/.test(s) === false) {
      window.alert("Password must contain 1 number");
      return false;
   }

   //check for capitals
   if (/[A-Z]/.test(s) === false) {
      window.alert("Password must contain atleast 1 capital");
      return false;
  }

   return true;

  

}

function completeMessage(){
   window.alert("Thanks for registering with our website, your customer record was created successfully.")
}

function completeForm() {
   if(fname.value == "" ||
      lname.value == "" ||
      address.value == "" ||
      city.value == "" ||
      province.value == "" ||
      password.value == "" ||
      confirmpass.value == "" ||
      age.value == "" ||
      postal.value == "" ||
      email.value == "")
      {
         window.alert("Please fill out all fields");
      }
   else{
      if(postalFilter(postal.value))
      {
         if(checkLocation())
         {
            if(checkAge())
            {
               if(checkEmail())
               {
                  if(checkPasswords())
                  {
                     if(isValid(password.value)== true)
                     {
                        completeMessage();
                     }
                  }
               }
            }
         }
      }                
   }
}

// create event listeners
function createEventListeners() {
   var fname = document.getElementById("fnameinput");
   var lname = document.getElementById("lnameinput");
   var zip = document.getElementById("zipinput");
   
   var button = document.getElementById("submitBtn");
   if (button.addEventListener) {
      button.addEventListener("click", completeForm, false);
   } else if (button.attachEvent) {
      button.attachEvent("onclick", completeForm);
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}