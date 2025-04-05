let number1=20;
let number2=30;

console.log("This is Number1 :\n ",number1,"\nThis is Number2 : \n ", number2);

console.log(`With Template Literals :- \n This is Number1 : ${number1}\n This is Number2 : ${number2}\n`);

let  user1=Number(prompt("Hi, User1 Enter Number : "));

console.log(`User1 Enter : ${user1}`);

if(user1%2==0)
{
    console.log("User1 Enter Even Number : ",user1);
}
else{
    console.log("User1 Enter Odd Number : ",user1);
}

if(number1%2==0)
{
    console.log(`Already initialized NUmber1 ${number1} is Even`);
}
else{
    console.log(`Already initialized NUmber1 ${number1} is Odd`);
}

if(number2%2==0)
    {
        console.log(`Already initialized NUmber2 ${number2} is Even`);
    }

else{
        console.log(`Already initialized NUmber2 ${number2} is Odd`);
    }

//Functions...........................

function function1(){ 
    if(user1%2==0)
        {
            console.log("With Function : \n User1 Enter Even Number : ",user1);
        }
        else{
            console.log("With Function: \n User1 Enter Odd Number : ",user1);
        }
}
// Arrow Function.........................
function1();

let function2=(X1,X2)=>
    {
    console.log("Sum of Both Funtion Number is = ",Number(X1)+Number(X2));
}

let functionNumber1=21;
 let functionNumber2=89;

console.log(function2(functionNumber1,functionNumber2));

// More Decreased Form of Arrow Function

let function3=(multiply1,multiply2)=>(Number(multiply1)*Number(multiply2));

let mul1=Number(prompt("Enter Numbe1 For Multiply : "));
let mul2=Number(prompt("Enter Numbe2 For Multiply : "));

console.log(`After Multiplying Both Number : ${function3(mul1,mul2)}`);
