// 🔹 Day 7 – DOM Manipulation (Part 1) 
// • Selecting elements 
// • Changing content & styles 
// • Event listeners (click, input) 
// ✅ Practice: Make a button that changes page background color on click.

// 1• Selecting elements 
// ID se select
let heading = document.getElementById("head");

// Class se select (first match)
let box = document.querySelector(".box1");

// Class ke saare elements (NodeList return hota hai) in a tree form e.g boxes[1];
let boxes = document.querySelectorAll(".box");

// Tag se select
let paragraphs = document.getElementsByTagName("p");


// 2• Changing content & styles 
let button=true;
let bodyy = document.getElementsByTagName("body")[0];

function buttonToggle(){
    if(!button){
  bodyy.style.backgroundColor = "white";
  bodyy.style.color= "black";
  button=true;
    }
    else{
  bodyy.style.backgroundColor = "black";
  bodyy.style.color= "white";
  button=false;
    }
}


//eventListener

// 🔹 Syntax
// element.addEventListener("eventType", function);


// element → wo HTML element jisme event lagana hai

// "eventType" → jaise click, mouseover, input, keydown

// function → jo kaam karwana hai


let btn = document.querySelector(".but1");

btn.addEventListener("click", buttonToggle);

//mouseover eventlistner

heading.addEventListener("mouseover", function(){
    heading.style.color="red";
})
//mouseout
heading.addEventListener("mouseout", function(){
    heading.style.color="black";
})

//input eventlistner

let input = document.getElementById("name");

input.addEventListener("input", function(e){
  console.log("Typed: ", e.target.value );
})


//onKeydown

document.addEventListener("keydown", function(e){
  alert("Key is been Press: ");
})


document.addEventListener("keypress", function(e){
  alert("Keypress is been Press: ");
})

document.addEventListener("keyup", function(e){
  alert("Keyup ");
})

