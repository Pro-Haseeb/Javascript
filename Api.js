// const api="https://meowfacts.herokuapp.com/";
let api="https://meowfacts.herokuapp.com/";
let para=document.querySelector(".datPara");

async function getFacts(){
   let response=await fetch(api);
   let data= await response.json();
   console.log(data);
   para.innerText=data.data;
}

getFacts();