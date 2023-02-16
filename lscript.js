// прелоадер
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1200);
}
// переход
document.addEventListener("DOMContentLoaded", function() {
    showSushi();
  });
let containerSushi = document.querySelector(".container-sushi");
let containerPizza = document.querySelector(".container-pizza");
let containerNapoi = document.querySelector(".container-napoi");
let buttonSushi = document.getElementById('topnav-button-sushi');
let buttonPizza = document.getElementById('topnav-button-pizza');
let buttonNapoi = document.getElementById('topnav-button-napoi');
function showSushi() {
    containerSushi.style.display = "block";
    containerPizza.style.display = "none";
    containerNapoi.style.display = "none";
    buttonSushi.classList.add("whiteAndRed");
    buttonPizza.classList.add("RedAndWhite");
    buttonNapoi.classList.add("RedAndWhite");
    buttonSushi.classList.remove("RedAndWhite");
    buttonPizza.classList.remove("whiteAndRed");
    buttonNapoi.classList.remove("whiteAndRed");
  }
function showPizza() {
    containerSushi.style.display = "none";
    containerPizza.style.display = "block";
    containerNapoi.style.display = "none";
    buttonSushi.classList.add("RedAndWhite");
    buttonPizza.classList.add("whiteAndRed");
    buttonNapoi.classList.add("RedAndWhite");
    buttonSushi.classList.remove("whiteAndRed");
    buttonPizza.classList.remove("RedAndWhite");
    buttonNapoi.classList.remove("whiteAndRed");
  }
function showNapoi() {
    containerSushi.style.display = "none";
    containerPizza.style.display = "none";
    containerNapoi.style.display = "block";
    buttonSushi.classList.add("RedAndWhite");
    buttonPizza.classList.add("RedAndWhite");
    buttonNapoi.classList.add("whiteAndRed");
    buttonSushi.classList.remove("whiteAndRed");
    buttonPizza.classList.remove("whiteAndRed");
    buttonNapoi.classList.remove("RedAndWhite");
  }
  
