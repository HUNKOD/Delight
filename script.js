window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1200);
}

// let KUH1 = document.querySelector("#K1");
// let BAR1 = document.querySelector("#B1");
// let BAR2 = document.querySelector("#B2");

// function VK1() {
//     KUH1.classList.remove("VANISH");
//     BAR1.classList.add("VANISH");
//     BAR2.classList.add("VANISH");
//   }
// function VB1() {
//     BAR2.classList.remove("VANISH");
//     KUH1.classList.add("VANISH");
//     BAR2.classList.add("VANISH");
    
// }
// function VB2() {
//     BAR2.classList.remove("VANISH");
//     KUH1.classList.add("VANISH");
//     BAR1.classList.add("VANISH");
    
// }