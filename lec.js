students=[
    {name: "Haseeb", Age: 20, Marks: 90,grade:""},
    {name: "Ali", Age: 21, Marks: 70, grade:""},
    {name: "Hamza", Age: 25, Marks: 60, grade:""},
    {name: "Haris", Age: 18, Marks: 50, grade:""}
]

function assigngrades(students){
        students.forEach(student => {
            if(student.Marks>=90 && student.Marks<100)
                student.grade='A';
            else if(student.Marks>=80 && student.Marks<90)
            student.grade='B';
            else if(student.Marks>=70 && student.Marks<80)
                student.grade='C';
            else if(student.Marks>=60 && student.Marks<70)
                student.grade='D';
            else if(student.Marks>=50 && student.Marks<60)
                student.grade='D';
            else{
                student.grade='F';
            }
        });

}

function getrecord(students){
     assigngrades(students);
     const record = students.filter(student => student.grade ==='A').map(student => student.name);
     return record;
}

const topstudent=getrecord(students);
console.log(topstudent);