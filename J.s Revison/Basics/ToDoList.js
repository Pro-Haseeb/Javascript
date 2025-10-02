let add = document.querySelector(".addproduct");
let removeInput = document.querySelector(".removeProduct"); // alag naam rakho

let list = document.getElementsByTagName("ol")[0];

// Add function
function submitFunction() {
    if (add.value.trim() === "") return; // empty input na add ho
    let newElement = document.createElement("li");
    newElement.textContent = add.value;
    list.appendChild(newElement);
    add.value = "";
}

// Remove function
function removeFunction() {
    let items = list.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === removeInput.value) {
            list.removeChild(items[i]); // match milte hi remove karo
            break; // ek hi remove karna hai to break
        }
    }
    removeInput.value = ""; // input clear
}

