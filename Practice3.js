function findMax(...numbers){
   let firstMax= Math.max(...numbers);
   console.log("First Max Number is ", firstMax)
   numbers=numbers.filter(num=>num!==firstMax);
   let secondMax= Math.max(...numbers);
   console.log("2nd Max Number is ", secondMax);

   let firstMin= Math.min(...numbers);
   console.log("First Min Number is ", firstMin)
   numbers=numbers.filter(num=>num!==firstMin);
   let secondMin= Math.min(...numbers);
   console.log("2nd Min Number is ", secondMin)

   
}

let record=[];

let numberenter=Number(prompt("How Many Numbers You Want to Enter : "));
for(let i=0;i<numberenter;i++)
{
   let input=Number(prompt("Enter Numbers : "))
    record.push(input);
}

findMax(...record);
    



