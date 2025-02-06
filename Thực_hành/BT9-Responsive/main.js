
$(document).ready(function () {
            $('.slide-container').slick({
                dots: true,
                arrows:false
            });        
 });

 document.getElementById("switchButton").onclick = Switch;

 function Switch() {
    console.log("Switch function called");
     document.querySelector("body").classList.toggle("dark");
 }
 
        