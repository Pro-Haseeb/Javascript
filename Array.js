let friends = ["Awais", "Ahmad", "Ali","Abid"];

friends.push("Hasan");
console.log(friends); //Push Add in Last of Array

friends.pop();
console.log(friends);  //Delete Last from the Array

friends.shift();
console.log(friends);  //Delete First from the Array

friends.unshift("Hamza");
console.log(friends);  //Add First from the Array

friends.push(22);
console.log(friends);  //We can Push any Data Type in Any Array

friends.unshift(true);
console.log(friends);