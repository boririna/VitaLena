//  const openNav = function () {
//     document.getElementById("mySidepanel").style.width = "50%";
//   }

//   const closeNav = function () {
//     document.getElementById("mySidepanel").style.width = "0";
//   }


const btnEl = document.getElementById("openbtn");

btnEl.addEventListener('click', openNav);

function openNav() {
    document.getElementById("mySidepanel").style.width = "50%";
}

const btnEl2 = document.getElementById("closebtn");

btnEl2.addEventListener('click', closeNav);

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}