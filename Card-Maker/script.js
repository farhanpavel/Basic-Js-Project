// Posty=[
// {
//     title:"I am title 1",
//     body:"Hello A"
// }
// ,
// {
//     title:"I am title 2",
//     body:"Hello B"
// }
// ,
// {
//     title:"I am title 3",
//     body:"Hello C"
// }
// ,
// {
//     title:"I am title 4",
//     body:"Hello D"
// }
// ,
// {
//     title:"I am title 5",
//     body:"Hello E"
// }
// ,
// {
//     title:"I am title 6",
//     body:"Hello F"
// }
// ,
// {
//     title:"I am title 1",
//     body:"Hello A"
// }
// ,
// {
//     title:"I am title 2",
//     body:"Hello B"
// }
// ,
// {
//     title:"I am title 3",
//     body:"Hello C"
// }
// ,
// {
//     title:"I am title 4",
//     body:"Hello D"
// }
// ,
// {
//     title:"I am title 5",
//     body:"Hello E"
// }
// ,
// {
//     title:"I am title 6",
//     body:"Hello F"
// }
// ]



/* <div class="post-title">
<h1>Description</h1>
<p>Lorem ipsum dolor sit amet.</p>
</div> */
s=document.querySelector(".post");
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => {
    Array.from(json).map((x)=>
    {var dhora=document.createElement("div");
    dhora.classList.add("post-title");
    dhora.innerHTML=`<h1>${x.title}</h1><p>${x.body}</p>`;
    s.appendChild(dhora);
}
    )
})
.catch((er)=>{
    console.log(er);
})

  




