const item1=document.querySelector(".item1");
const item2=document.querySelector(".item2");
const item3=document.querySelector(".item3");
const item4=document.querySelector(".item4");

item1.addEventListener("mouseover", ()=>{
    item1.style.background ="green";
   
});

item2.addEventListener("mouseover", ()=>{
    
    item2.style.background ="black";
    
});

item3.addEventListener("mouseover", ()=>{
   
    item3.style.background ="grey";
   
});

item4.addEventListener("mouseover", ()=>{
  
    item4.style.background ="red";
});


item1.addEventListener("mouseout", ()=>{
    item1.style.background ="black";
   
});

item2.addEventListener("mouseout", ()=>{
    
    item2.style.background ="purple";
    
});

item3.addEventListener("mouseout", ()=>{
   
    item3.style.background ="brown";
   
});

item4.addEventListener("mouseout", ()=>{
  
    item4.style.background ="blue";
});