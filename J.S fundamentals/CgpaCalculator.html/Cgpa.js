function generateSubject(){

let sub = Number(document.getElementById("subject").value);
let subDiv = document.querySelector(".subNumber");

for (let i=1; i<=sub; i++)
{
    let newSub = document.createElement("label");
    
    newSub.innerHTML=`<b>Subject ${i} :</b>`;

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Subject Name";
    
    let br = document.createElement("br");

        subDiv.appendChild(newSub);
        subDiv.appendChild(input);
        subDiv.appendChild(br);
}
}