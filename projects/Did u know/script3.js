function darkMode() {
    var body = document.body;
    body.style.backgroundColor = "black";
    body.style.color = "white";

    var carouselDiv = document.getElementById("carouselDiv")
    carouselDiv.style.backgroundImage = "linear-gradient(rgb(255, 210, 119),black)";

    var secondDiv = document.getElementById("secondDiv")
    secondDiv.style.backgroundImage = "linear-gradient(black,rgb(255, 210, 119))";

    var myIcon = document.getElementById("myIcon")
    myIcon.style.color = "white";

    var myH2 = document.getElementById("myH2")
    myH2.style.color = "white";
    
   
}

function lightMode() {
    var body = document.body;
    body.style.backgroundColor = "white";
    body.style.color = "black";

    
    var carouselDiv = document.getElementById("carouselDiv")
    carouselDiv.style.backgroundImage = "linear-gradient(rgb(255, 210, 119),white)";

    var secondDiv = document.getElementById("secondDiv")
    secondDiv.style.backgroundImage = "linear-gradient(white,rgb(255, 210, 119))";

    var myIcon = document.getElementById("myIcon")
    myIcon.style.color = "black";

    var myH2 = document.getElementById("myH2")
    myH2.style.color = "black";
}