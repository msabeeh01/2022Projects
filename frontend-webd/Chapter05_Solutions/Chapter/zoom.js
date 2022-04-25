/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */


// interpret document contents in JavaScript strict mode
/* global variables */

var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var figFilenameSM = "images/IMG_0" + photoOrderArray[2] + "sm.jpg";
var elementIsClicked = false;


function clickHandler(){ // declare a function that updates the state
   elementIsClicked = true;
 }



function createminiRemove(){
   var opener = window.opener;

   console.log("mini button created");

   var createminiRemove = opener.document.createElement("p");
   createminiRemove.innerHTML = "rmvimg";
   createminiRemove.id = "rmvimg";

   var getnewIMG = opener.document.getElementById("newImg");

   var favdiv = opener.document.getElementById("favdivv");
   favdiv.appendChild(createminiRemove);

   createminiRemove.onclick=function(){removeIMAGE()};

}

function removeIMAGE(){
   var opener = window.opener;
   const favlist = opener.document.getElementById("favimg2");
   const plist = opener.document.getElementById("favdivv");

   if(plist.hasChildNodes()){
      plist.removeChild(plist.children[0]);
   }

   if(favlist.hasChildNodes()){
      favlist.removeChild(favlist.children[0]);
   }
}


function addtoFAVS(){

   var opener = window.opener;
   let count = opener.document.getElementById("favimg2").children.length;

   var element = document.getElementById('addFavs'); // grab a reference to your element
   element.addEventListener('click', clickHandler); // associate the function above with the click event

   

   if(opener) {
      if(count<5){

      const para = opener.document.createElement("img");
      para.src = figFilenameSM;
      para.height=100;
      para.width=200;
      para.id = "newImg";
      para.onclick=function(){createminiRemove();};

      var hello2 = opener.document.getElementById("favimg2");
      hello2.appendChild(para);

         }
      if(count==5 && elementIsClicked == true){
            createRemove();
            //removeHit();
         }
      }
   

   console.log(count);
}


function createRemove(){
   window.alert("please remove a favourite first");
   const getRemove = document.getElementById("removeP");
   getRemove.style.display = 'block';
}

function removeHit(){
   var opener = window.opener;
   const favlist = opener.document.getElementById("favimg2");

   if(favlist.hasChildNodes()){
      favlist.removeChild(favlist.children[0]);
   }
}


/* populate img element and create event listener */
function pageSetup() {
   document.getElementById("mainimg").src = figFilename; // assign filename to img element
   createEventListener();
}

window.onload = pageSetup;



/* close window */
function closeWin() {
   window.close();
}






/* create event listener for close button */
function createEventListener() {
   var opener = window.opener;

   var closeWindowDiv = document.getElementById("closewind");
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }

   var addfavsDiv = document.getElementById("addFavs");
   if (addfavsDiv.addEventListener){
      addfavsDiv.addEventListener("click", addtoFAVS, false);
   }
   else if (addfavsDiv.attachEvent)  {
      addfavsDiv.attachEvent("onclick", addtoFAVS);
    }

   var removeButton = document.getElementById("removeP");
   if(removeButton.addEventListener){
      removeButton.addEventListener("click", removeHit, false);
   }
   else if(removeButton.attachEvent){
      removeButton.attachEvent("onclick", removeHit);
   }

}

/* add img src value and create event listener when page finishes loading */