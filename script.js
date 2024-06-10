window.onload = () => {
    const str = "rajmistry_01rajmistry_01raj_mistry01"
    const txt = document.getElementById("rotatingtext")
    for (let  i = 0 ; i <str.length ;i++) {
        const span = document.createElement("span")
        span.innerHTML = str[i];
        txt.appendChild(span)
        span.style.transform = `rotate(${10*i}deg)`;
    }
}
let mybutton = document.getElementById("myBtn");
let mybutton1 = document.getElementById("myBtn1");
window.onscroll = () => {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton1.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton1.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
const item = document.querySelector(".item")
move = (w,i) => {
    var elem = document.getElementById("pgr"+i);   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
    if (width >= w) {
        clearInterval(id);
    } 
    else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp"+width * 1  + '%';
        elem.style.color = "var(--light-wheat)"
        elem.style.backgroundColor = "var(--DarkLight)";
        elem.style.borderRadius = "24px";
    }
    }
}
move(80,1)
move(60,2)
move(57,3)
move(45,4)
move(40,5)
move(23,6)
