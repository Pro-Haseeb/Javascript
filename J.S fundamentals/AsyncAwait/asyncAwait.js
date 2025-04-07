let user = (()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                Name : "Haseeb",
                Class : 15,
                RollNo : 3
                
            })
        },2000)
    })
})

async function runUser(){
   let data = await user();
   
   console.log("User Name is : ", data.Name);
   console.log(`User class is ${data.Class}`)
   console.log(`User class is ${data.RollNo}`)
}

runUser();