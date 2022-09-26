let timer = document.getElementsByClassName("timer__visual")[0];

setInterval(stub, 100,"click", function ()
{
    timer.innerHTML = +button.innerHTML + 5;
});

let button = document.getElementsByClassName("button")[0];

elementToDetect[0].addEventListener("click", function(){
  this.style.visibility = "hidden";
});