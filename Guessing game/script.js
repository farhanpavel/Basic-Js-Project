var collect = document.querySelector(".guess input");


var btn=document.querySelector(".guess button");
var shb=document.querySelector(".guess");
another=document.createElement("div");
another.classList.add("another");
shb.appendChild(another);
adding=document.createElement("p");
adding_two=document.createElement("p");
var count1=0,count2=0,count3=5;
btn.addEventListener("click",function(e){
    e.preventDefault();
    var randomnum=Math.floor(Math.random()*5)+1;
    if(randomnum==collect.value)
    {
       count1++;
    }
    else{
        count2++;
    }
    count3--;
    adding.innerText=(`Win:${count1} Lose:${count2}`);
    adding_two.innerText=`You Have Only ${count3} chances`;
    another.appendChild(adding);
    another.appendChild(adding_two);
    if(count3==0){
        collect.disabled = true;
        btn.disabled=true;
    }
    
})