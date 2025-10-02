// 1. document.createElement()

// Ye method ek naya element banata hai, lekin wo tab tak page me visible nahi hota jab tak
//  usay append na kar do.

// // Step 1: Naya element banao
// let newDiv = document.createElement("div");

// // Step 2: Usme content add karo
// newDiv.textContent = "Hello, I am a new div!";

// // Step 3: Us element ko body ya kisi aur element me add karo
// document.body.appendChild(newDiv);


let div = document.createElement("div");

//setting Attribute

div.setAttribute("class", "newClass");

//creating h1 element
let heading = document.createElement("h1");
heading.textContent="Hi I am Heading and Child of Div Element. In 3 second i am gonna remove";

// appending h1 element into div 
div.appendChild(heading);

// Appending div into body
document.body.appendChild(div);

// ..............................................

// Remove Element
setTimeout(()=>{
div.remove();
}, 3000);


// 🔹 Event Bubbling kya hai?

// Jab tum ek element par koi event (jaise click) fire karte ho, to wo event andar se bahar (child → parent → ancestor → document → window) propagate hota hai.
// Is process ko event bubbling kehte hain.
let parent= document.querySelector(".parent");


let button = document.getElementsByTagName("button");
function buttonFunction(){
    
    
    alert("child clicked");
}

// Event Capturing kya hai?

// Default JavaScript me events bubbling (andar → bahar) hote hain.
// Lekin agar tum capturing mode enable kar do to event bahar se andar propagate hota hai (ancestor → parent → child).

let form = document.getElementById("form");

form.addEventListener("submit", function(e){
     e.preventDefault();
    let input = document.getElementById("nameText").value;
    parent.textContent=input;
     console.log("You Typed: ",input)
});