let pro = new Promise((resolve, reject)=>{
    
    
    setTimeout(()=>{
       
        succs=Math.random() > 0.5;
        if(succs)
       resolve("Promise Resolved:");
    else
       reject("Promise not Resolved:-(");


    },2000)
    
    
})


pro.then(message=>console.log(message)).catch(error=>console.log(error));