function callbacks(){
    let userr = prompt("Enter a User Name:-)");
    return  userr;
}

function main(greet, user){
    document.getElementById("display").innerHTML=greet + "<br>" + user();
}


function handleclick(){

    main("Hi, ", callbacks);
}