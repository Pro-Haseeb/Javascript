class user{
    constructor( Namee, Agee, cityy){
       this.Name = Namee;
        this.Age = Agee ;
        this.city = cityy;

    }
    output(){
        console.log(`My Name is ${this.Name} and I am only ${this.Age} and I am Living in ${this.city}`)
    }
    obj(){
        this.Name= "Asim";
    }


}


let p1 = new user("Haseeb", 21, "Rahim Yar Khan");

p1.output();

 