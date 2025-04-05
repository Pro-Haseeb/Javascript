const inp=document.querySelector(".inp");
const list=document.querySelector(".list");
const button=document.querySelector(".button");

button.addEventListener('click', ()=>{
    let val=inp.value;
    if(val)
    {
       let li=document.createElement("li");
       li.textContent=val;

       list.appendChild(li);

       inp.value="";
    }
    else{
        alert("No Item Enter in Input Field");
    }
})