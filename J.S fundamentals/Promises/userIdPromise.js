function getUserData(userId){
return new Promise((resolve , reject)=>{
    
    setTimeout(() => {
        let user={
            1 : {name : "haseeb", rollno : 2, class : 3 },
            2 : {name : "Ali", rollno : 3, class : 5 },
            3 : {name : "Hasan", rollno : 5, class : 10 }
            
        }
        let id = user[userId];
        if(id)
        {
            resolve(`User no ${userId} Data is ${JSON.stringify(id)}`);
        }
        else{
            reject(`User not Found ${userId}`);
        }
    }, 3000);
})

}

id = Number(prompt("Enter User Id"));


getUserData(id).then(message=>console.log(message)).catch(error=>console.log(error));