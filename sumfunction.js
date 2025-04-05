let num1 = 10;
let num2 = 20;

function suum(a, b) {
    return a + b;
}
let add = suum(num1, num2);

console.log(add);

let num3 = 10;


let evenOdd = (c) => {
    if (c % 2 == 0) {
        return (true)
    }
}

let answer = evenOdd(num3);

console.log(answer);

let num4 = 10;
let num5 = 20;
let num6 = 40;

let maximum = (max1, max2, max3) => {
    if (max1 > max2 && max1 > max3) {
        return ("Number4 is the Maximum Number");
    }
    else if (max2 > max3 && max2 > max1) {
        return ("Number5 is the Maximum Number");
    }
    else {
        return ("Number6 is the Maximum Number ");
    }
}

let answer2 = maximum(num4, num5, num6);
console.log(answer2);


let dolphins1 = 44;
let dolphins2 = 23;
let dolphins3 = 71;

let kolas1 = 65;
let kolas2 = 54;
let kolas3 = 49;

let calAverage = (data1, data2, data3) => {
    average = (data1 + data2 + data3) / 3;
    return (average);
}

let avgdolphins = calAverage(dolphins1, dolphins2, dolphins3);
let avgkolas = calAverage(kolas1, kolas2, kolas3);

let checkWinner = (avgdolphins1, avgkolas1) => {
    if (avgdolphins1 >= avgkolas1 * 2) {
        return ("Dolphins Wins");
    }
    else if (avgkolas1 >= avgdolphins1 * 2) {
        return ("kolas Wins");
    }

    else {
        return ("No one win");
    }
}

let winner = checkWinner(avgdolphins, avgkolas);
console.log(winner);


let multiple = (num) => {

    if (num % 5 == 0 && num % 3 == 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 == 0) {
        console.log("Fizz");
    }

    else if (num % 5 == 0) {
        console.log("Buzz");
    }


   
    else {
        console.log("number are not multiple of 3 and 5")
    }

}
console.log(multiple(15));

