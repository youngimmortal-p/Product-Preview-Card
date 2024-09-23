
let  resEL = document.getElementById("res-EL")

function myFunction() {

    resEL.textContent = "Thanks for your patronage!"
    resEL.style.display = "block"
     setTimeout(
        function(){
           resEL = document.getElementById("res-EL")
           resEL.style.display = "none"
        }, 2000);
}

