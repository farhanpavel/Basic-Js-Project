var v=document.querySelectorAll(".slideshow");
var start=0;
var end=v.length-1;
for(i=1;i<v.length;i++){
    v[i].style.display="none";
}
setInterval(display,3000);
function display(){
    v[start].style.display="none";
    start=(start+1)%(v.length);
    v[start].style.display="block";
    v[start].style.transform="scale(0)";
    v[start].style.transition="transform 0s";
    setTimeout(function () {
        v[start].style.transform = "scale(1)";
        v[start].style.transition = "transform 0.6s"; // Apply transition time after a short delay
      }, 200);

}
