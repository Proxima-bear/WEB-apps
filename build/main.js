let timer = document.getElementsByClassName("timer")[0];

setInterval(stub, 1000);

function stub()
{
    timer.innerHTML = +timer.innerHTML + 1;
}