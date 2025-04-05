// Example: Access an element by its ID................................

let elementt = document.getElementById("myElement");
console.dir(elementt);  // Logs the element with id="myElement"

// Example: Access elements by class name.................

let elements = document.getElementsByClassName("myClass");
console.dir(elements[0]);  // Logs the first element with class="myClass"


//Example: Get Element by tag ..............................

//Inner Text concept
let tag=document.getElementsByTagName("div");
console.log(tag[0].innerText);

tag[0].innerText="My Full Name is Haseeb";
console.log(tag[0].innerText);
console.dir(tag[0]);


// Example: Using querySelector and querySelectorAll......................

let firstDiv = document.querySelector("div");  // First <div> element
console.log(firstDiv.innerHTML);

let allDivs = document.querySelectorAll("div");  // All <div> elements
console.log(allDivs[1].innerHTML);

//Event Handling and Events..........................

// Get button and result paragraph by their IDs
let button = document.getElementById("myButton");
let result = document.getElementById("result");

// Add click event listener to the button
button.addEventListener("mouseover", function() {
    // Update the result paragraph text on button click
    result.innerText = "Button was clicked!";
});


//classlist....................................

// Select the element and buttons
let element = document.getElementById("myElement");
let addClassBtn = document.getElementById("addClassBtn");
let removeClassBtn = document.getElementById("removeClassBtn");
let toggleClassBtn = document.getElementById("toggleClassBtn");
let checkClassBtn = document.getElementById("checkClassBtn");

// Add the "highlight" class when the Add Class button is clicked
addClassBtn.addEventListener("click", function() {
    element.classList.add("highlight");
});

// Remove the "highlight" class when the Remove Class button is clicked
removeClassBtn.addEventListener("click", function() {
    element.classList.remove("highlight");
});

// Toggle the "highlight" class when the Toggle Class button is clicked
toggleClassBtn.addEventListener("click", function() {
    element.classList.toggle("highlight");
});

// Check if the element has the "highlight" class when the Check Class button is clicked
checkClassBtn.addEventListener("click", function() {
    if (element.classList.contains("highlight")) {
        alert("The element has the 'highlight' class.");
    } else {
        alert("The element does not have the 'highlight' class.");
    }
});
// switch mode project .........................
// Select the mode switcher button
let switcher = document.querySelector(".modeSwitcher");

// Add click event listener
switcher.addEventListener("click", function() {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle("dark-mode");

    // Change button text based on current mode
    if (document.body.classList.contains("dark-mode")) {
        switcher.innerText = "Switch to Light Mode";
    } else {
        switcher.innerText = "Switch to Dark Mode";
    }
});


