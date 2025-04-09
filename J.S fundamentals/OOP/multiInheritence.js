class person{
    constructor(name, age){
        this.Name=name;
        this.Age=age;

    }

    displayPersonInfo(){
        console.log(`Name: ${this.Name} & Age: ${this.Age}`);
        
    }

}

class employee extends person{
    constructor(name, age, empID){
        super(name, age);
       this.ID=empID        
    }

    displayEmpInfo(){
        console.log(`Employee ID: ${this.ID}`);
        
    }
}

class manager extends employee{
    constructor(name, age, empID,dep){
        super(name, age, empID);
       this.depart=dep        
    }

    displayManagerInfo(){
        console.log(`Manager Department: ${this.depart}`);
        
    }
}


let obj = new manager("Haseeb", 21, 1453, "IT");

obj.displayPersonInfo();
obj.displayEmpInfo();
obj.displayManagerInfo();