const init = () => {
  let totalCost = 0;

[...document.querySelectorAll('.button')].forEach((buttonItem) => {
totalCost += buttonItem.querySelector('.input').value * buttonItem.querySelector('.input').dataset.price;

});

document.getElementById('total-h').textContent = totalCost;

};

init();

let button = document.getElementById(".button__1h")[0];

elementToDetect[0].addEventListener("click", function(){
  this.style.visibility = "hidden";
});