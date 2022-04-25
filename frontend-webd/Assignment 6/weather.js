function loadDOC(){
    var xhttp = new XMLHttpRequest();//create object
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) //page is loaded and page is okay
        {
            document.getElementById("demo").innerHTML = this.responseText; //display element
        }
    };

    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=mississauga&appid=bc45ef239b298083e2b8e1f23dc24a68", true);
    xhttp.send();
}


document.getElementById("submit").addEventListener("click", loadDOC, false); //run loadDOC whenever submit button is clicked

