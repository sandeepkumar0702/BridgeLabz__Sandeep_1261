let button =document.getElementById("mybtn1");
button.onclick=function(){
    alert("button clicked by you");
};


let button2 =document.getElementById("mybtn2");
button2.addEventListener("click",()=>{
    alert("clicked on addevent listener ")
})


