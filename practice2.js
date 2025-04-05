let students=[];

let numberofStudents= Number(prompt("Enter the Number of Students : "));

for( let i=0;i<=numberofStudents;i++)
{
    const name=prompt("Enter Name of Student ", i," : ");

    const Marks= Number(prompt("Enter Marks of Students ",i," : "));

    students.push({
        name: name,
        Marks: Marks,
        grade: ""

    })
}

console.table(students);

function assigngrades(std){
    std.forEach(child => {
        if(child.Marks>=90 && child.Marks<100)
        child.grade='A';
    else if(child.Marks>=80 && child.Marks<90)
        child.grade='B';
    else if(child.Marks>=70 && child.Marks<80)
        child.grade='C';
    else if(child.Marks>=60 && child.Marks<70)
        child.grade='D';
    else if(child.Marks>=50 && child.Marks<60)
        child.grade='E';
    else
    child.grade='F';
    });
}

function record(students)
{
    assigngrades(students);
    
    const result= students.filter(topscore=>topscore.grade==='A');
    return result;


    
}

function TotalscoreofAll()
{
    const tot= students.reduce(function(total,student){
        return total+student.Marks;
    },0)
    return tot;
}

function findStudent(search){
    const searching=students.find(function(findstudent){
        return findstudent.name===search;
    })
    return searching;
}

// console.table(record(students));
// console.log("Total Score is : ",TotalscoreofAll());

const nameofStudent=prompt("Enter Name of Student that you want to find : ");
// console.log("name of Student = ", findStudent(nameofStudent));
const nameFind = findStudent(nameofStudent);
// console.log("Name Find = ",nameFind);


if(nameFind.name==nameofStudent)
{
    console.log(nameofStudent," Find :-)");
}
else
{
    console.log(nameofStudent," Not Find :-(");
}