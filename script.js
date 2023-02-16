
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
    showKuhnya();
  });
let containerKuhnya = document.querySelector(".container-kuhnya");
let containerNapoi = document.querySelector(".container-napoi");
let containerKokteli = document.querySelector(".container-kokteli");
let buttonKuhnya = document.getElementById('topnav-button-kuhnya');
let buttonNapoi = document.getElementById('topnav-button-napoi');
let buttonKokteli = document.getElementById('topnav-button-kokteli');
function showKuhnya() {
    containerKuhnya.style.display = "block";
    containerNapoi.style.display = "none";
    containerKokteli.style.display = "none";
    buttonKuhnya.classList.add("whiteAndBlack");
    buttonNapoi.classList.add("blackAndWhite");
    buttonKokteli.classList.add("blackAndWhite");
    buttonKuhnya.classList.remove("blackAndWhite");
    buttonNapoi.classList.remove("whiteAndBlack");
    buttonKokteli.classList.remove("whiteAndBlack");
  }
function showNapoi() {
    containerKuhnya.style.display = "none";
    containerNapoi.style.display = "block";
    containerKokteli.style.display = "none";
    buttonKuhnya.classList.add("blackAndWhite");
    buttonNapoi.classList.add("whiteAndBlack");
    buttonKokteli.classList.add("blackAndWhite");
    buttonKuhnya.classList.remove("whiteAndBlack");
    buttonNapoi.classList.remove("blackAndWhite");
    buttonKokteli.classList.remove("whiteAndBlack");
  }
function showKokteli() {
    containerKuhnya.style.display = "none";
    containerNapoi.style.display = "none";
    containerKokteli.style.display = "block";
    buttonKuhnya.classList.add("blackAndWhite");
    buttonNapoi.classList.add("blackAndWhite");
    buttonKokteli.classList.add("whiteAndBlack");
    buttonKuhnya.classList.remove("whiteAndBlack");
    buttonNapoi.classList.remove("whiteAndBlack");
    buttonKokteli.classList.remove("blackAndWhite");
  }
  
