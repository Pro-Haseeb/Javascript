let n = 3;

function dubleNumber() {
    return new Promise((resolve) => {
    setTimeout(() => {
        
        resolve(n=n*2);
    
},2000)
})
}

function againDouble() {
    return new Promise((resolve) => {
    setTimeout(() => {
        
        resolve(n=n*2);
    
},4000)
})
}



async function runDouble(){
    let data = await dubleNumber();
    
    console.log(data);
    
    let data1 = await againDouble();

    console.log(data1);
}

runDouble();

