let num = Math.floor(Math.random() * 100);

function callbacks() {
 let dis;

 let inpVal = document.getElementById("find").value;

 dis=document.getElementById("display");

    if (inpVal == num)
       return("congratulations, You Guess a Number, " + num + " and You Input a Number: " + inpVal);

    else
       return("Number you guess is totally wrong Try Again, , Your numer = "
     + inpVal + " Correct Number: " + num);
}


function main(username, result){
document.getElementById("display").innerHTML=username + "<br>" + result();
}

function handleclick()
{
    main("Hi, Haseeb", callbacks)
}