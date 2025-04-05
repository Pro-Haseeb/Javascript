const count=document.querySelector(".num");
const increment=document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
let counting=Number(0); 
increment.addEventListener("click", ()=>{
   counting++;
   count.textContent=counting;
})

decrement.addEventListener("click", ()=>{
    if(counting>0)
    {
        counting--;
    }

    count.textContent=counting;
})