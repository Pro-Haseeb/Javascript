let trueFalse=document.querySelector("p");
let result=document.querySelector(".result");

do{


let no=Number(prompt("Enter a Number : "));
trueFalse.innerText=no;
if(no%2===0)
{
    result.innerText=`${no} is True`;
}
else
{
    result.innerText=`${no} is False`;
}
let ask=prompt("Do you want to start again (Yes/No): ");

}while(ask=="yes"||ask=="Yes");
