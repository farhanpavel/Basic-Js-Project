var base=document.querySelector(".changer-one");
var inputi=document.querySelector(".changer-one input");
var btn=document.querySelector(".changer-one button");
var adding=document.createElement("div");
adding.classList.add("changer-two");
base.appendChild(adding);
var adding2=document.createElement("div");
var another2=document.createElement("p");
another2.style.backgroundColor="rgb(89, 82, 188)";
another2.innerText="Todo is added";
adding2.classList.add("changer-three");
adding2.appendChild(another2);
adding.appendChild(adding2);
var count=0;
window.addEventListener("load", function () {
  var count = localStorage.getItem("count");
  if (count) {
    for (var i = 0; i < count; i++) {
      var storedData = localStorage.getItem(`data${i}`);
      if (storedData||storedData=="") {
        (function (index) {
          var another = document.createElement("p");
          another.innerHTML = `${storedData} <i class="fa fa-trash"></i>`;
          adding.appendChild(another);
          var trashIcon = another.querySelector("i.fa-trash");
          trashIcon.addEventListener("click", function () {
            another.remove();
            another2.innerText = "Todo is Deleted";
            adding2.classList.remove("changer-three");
            setTimeout(() => {
              adding2.classList.add("changer-three");
            }, 500);

            localStorage.removeItem(`data${index}`);
            if(localStorage.length===1){
              count=0;
              localStorage.setItem("count", count);
              } 
            // var moja=localStorage.length;
            // localStorage.setItem("count", moja);
          });
        })(i);
      }
    }
  }
});
  
btn.addEventListener("click", function(e) {
  var another = document.createElement("p");
  another2.innerText = "Todo is added";
  adding2.classList.remove("changer-three");
  setTimeout(() => {
    adding2.classList.add("changer-three");
  }, 500);
  var count = localStorage.getItem("count");
  if (!count) {
    count = 0;
  }
  localStorage.setItem(`data${count}`, inputi.value);
  another.innerHTML = `${localStorage.getItem(`data${count}`)} <i class="fa fa-trash"></i>`;
  adding.appendChild(another);
  var trashIcon = another.querySelector("i.fa-trash");
  trashIcon.addEventListener("click", function(e) {
    var lasty=another.innerText;
    another.remove();
    another2.innerText = "Todo is Deleted";
    adding2.classList.remove("changer-three");
    setTimeout(() => {
      adding2.classList.add("changer-three");
    }, 500);
    for (let i = 0; i < count; i++) {
      if ( localStorage.getItem(`data${i}`) === lasty) {
        index = i;
        break;
      }
    }
     localStorage.removeItem(`data${index}`);
     if(localStorage.length===1){
      count=0;
      localStorage.setItem("count", count);
      } 
  });
  inputi.value = "";
  count++;
  localStorage.setItem("count", count);
 
  console.log(localStorage.length);
   // Convert count back to a string for storing in localStorage
});
