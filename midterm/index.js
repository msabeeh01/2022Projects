document.getElementById("gender").selectedIndex = "-1";
document.getElementById("gender1").selectedIndex = "-1";
document.getElementById("year").selectedIndex = "-1";
document.getElementById("year1").selectedIndex = "-1";

function checkCustomValid() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var saddress = document.getElementById("saddress");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var phone = document.getElementById("phone");
    var year = document.getElementById("year");

    var fname1 = document.getElementById("fname1");
    var lname1 = document.getElementById("lname1");
    var saddress1 = document.getElementById("saddress1");
    var city1 = document.getElementById("city1");
    var state1 = document.getElementById("state1");
    var phone1 = document.getElementById("phone1");
    var year1 = document.getElementById("year1");

    if (!fname.checkValidity()) {
      fname.setCustomValidity("First Name can't be empty.");
      fname.reportValidity();
    } else if (!lname.checkValidity()) {
      lname.setCustomValidity("Last Name can't be empty.");
      lname.reportValidity();
    }
    else if (!saddress.checkValidity()) {
        saddress.setCustomValidity("Street Address can't be empty.");
        saddress.reportValidity();
      }
    else if (!city.checkValidity()) {
        city.setCustomValidity("City can't be empty.");
        city.reportValidity();
      }
    else if (!gender.checkValidity()) {
        gender.setCustomValidity("Gender can't be empty.");
        gender.reportValidity();
      }
    else if (!year.checkValidity()) {
        year.setCustomValidity("Year can't be empty.");
        year.reportValidity();
      }
    else if (!phone.checkValidity()) {
        phone.setCustomValidity("Phone Number can't be empty.");
        phone.reportValidity();
      }
  }

  function handlecheckbox() {
    var checkbox = document.getElementById("samecheck");

    if (checkbox.checked == true) {
      fname1.value = fname.value;
      lname1.value = lname.value;
      saddress1.value = saddress.value;
      city1.value = city.value;
      gender1.value = gender.value;
      year1.value = year.value;
      phone1.value= phone.value;
    } 
    
    else {
      fname1.value = "";
      lname1.value = "";
      saddress1.value = "";
      city1.value = "";
      gender1.value = "";
      zip1.value = "";
      phone1.value = "";
      year1.value = "";
    }

  }