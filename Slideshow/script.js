var v=document.querySelectorAll(".slideshow");
var slideshow = document.querySelector(".slider .slideshow");
var start=0;
var prev=v.length-1;
for(i=1;i<=prev;i++){
    v[i].style.display="none";
}
setInterval(display,3000);
function display(){
v[start].style.display="none";
start=(start+1)%(v.length);
v[start].style.display="flex";
v[start].style.transform = "scale(0)";
v[start].style.transition = "transform 0s"; // Set initial transition time to 0s

setTimeout(function () {
  v[start].style.transform = "scale(1)";
  v[start].style.transition = "transform 0.6s"; // Apply transition time after a short delay
}, 200);
}


