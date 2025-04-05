let add=document.querySelector(".toDo");
let list=document.querySelector(".list");
let addButton=document.querySelector(".addButton");
let delet = document.querySelector(".delete")
addButton.addEventListener("click", ()=>{
    let val=add.value.trim();
    if(val)
    {
   let addList = document.createElement("li");
    addList.textContent=val;

    list.appendChild(addList);
    add.value="";
    
    }
})

delet.addEventListener("click", ()=>{
    let del=add.value.trim();
    if(del)
    {
    let itm = Array.from(list.querySelectorAll("li"));

    let remItem=itm.filter((rem)=>rem.textContent!==del);
        
    
    list.innerHTML="";
    remItem.forEach((item)=>{
        list.appendChild(item);
        
    })
    
}
add.value="";
})
