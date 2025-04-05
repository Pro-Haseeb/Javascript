let fact=Number(prompt("Enter a Number : "))

for(let i=1;i<=fact;i++)
{
    let result=document.querySelector(".result")
    let num=fact*i;
     result.innerText=`${fact} * ${i} = ${num} \n `;
}