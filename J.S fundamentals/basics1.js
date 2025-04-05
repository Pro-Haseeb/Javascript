function appendVal(value) {
    document.getElementById("display").value += value;
}

function clearResult()
{
    document.getElementById("display").value="";
}

function displayResult()
{
    try{
    document.getElementById("display").value=eval(document.getElementById("display").value)
    }
    catch(error){
alert("Invalid Expression");
clearResult();
    }
    
}