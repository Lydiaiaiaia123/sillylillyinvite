document.getElementById("yes").onclick = function() {
  document.getElementById("catImage").src = "happy-cat.gif"; 
  document.getElementById("question").innerText = "OMG!!! Yay!! I knew you'd say yes! Hit me up! ฅ^•ﻌ•^ฅ"; 
  document.querySelector(".buttons").style.display = "none"; 
};

document.getElementById("no").onmouseover = function() {
  let button = document.getElementById("no");
  let windowWidth = window.innerWidth - button.offsetWidth;
  let windowHeight = window.innerHeight - button.offsetHeight;

  let newPosX = Math.random() * windowWidth;
  let newPosY = Math.random() * windowHeight;

  button.style.left = newPosX + "px";
  button.style.top = newPosY + "px";
};
