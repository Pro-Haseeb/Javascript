function calcAge(year, firstName) {
    const age = 2024 - year;
    console.log(`${firstName} is ${age} year's old`);
    return age;
  }
  
  calcAge(2004, "Haseeb");
  calcAge(2000, "Farhad");
  calcAge(2005, "Salman");
  calcAge(2010, "Hanzla");
  calcAge(2004, "Abdullah");
  calcAge(2004, "Laiba");
  calcAge(2005, "Sheeza");
  calcAge(2005, "Ifra");
  calcAge(2003, "Amrah");
  
  /*
  ///////////////////////////////////////
  // Activating Strict Mode
  let hasDriversLicense = false;
  const passTest = true;
  
  if (passTest) hasDriversLicense = true;
  if (hasDriversLicense) console.log('I can drive :D');
  
  // const interface = 'Audio';
  // const private = 534;
  
  
  ///////////////////////////////////////
  // Functions
  function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  
  
  ///////////////////////////////////////
  // Function Declarations vs. Expressions
  
  // Function declaration
  function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
  
  ///////////////////////////////////////
  // Arrow functions
   
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2024 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
  
  */
  script.js
  