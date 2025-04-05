const para=document.querySelector(".para");
const button=document.querySelector(".button");

button.addEventListener('click', ()=>{
    if(para.style.display==='block')
    {
        para.style.display='None';
        button.textContent="Show";
    }
    else{
        
        para.style.display='block';
        button.textContent="Hide";
    }
})