let markmass=78;
let markweight=1.69;

let johnmass= 92;
let johnheight=1.95;

let bmimark=markmass/(markweight*markweight);

let bmijohn=johnmass/(johnheight*johnheight);

if(bmimark>bmijohn)
{
    console.log("Mark Bmi is Greater then John");
}
else{
    console.log("John Bmi is Greater then Mark");
}