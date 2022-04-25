"use strict";

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

function check(){
    var expiresDate = new Date();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + expiresDate.toUTCString;
    document.cookie = "email=" + encodeURIComponent(email) + "; expires=" + expiresDate.toUTCString;
    alr();
}

function getCookie(cname) {
    let name = decodeURIComponent(cname + "=");
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        
      }
    }
    return "";
  }

//cookie test
function alr()
{
    alert("Email Cookie:" + getCookie("email"));
    alert("Username Cookie:" + getCookie("username"));
}
//cookie test

document.getElementById("submit").addEventListener("click", check, false);

//cookie retention check
document.getElementById("bubmit").addEventListener("click", alr, false)