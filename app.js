/////////////////////////////////////////
// ============ Functions ============ //
/////////////////////////////////////////

////////////////////////
// Defining Functions //
////////////////////////

// Function Declaration

funcDeclaration() // able to be called before declaring it, because func declarations allow us this ability due to hoisting
// funcExpression() // will throw an error because variables cannot be hoisted the way func declarations can; func expressions cannot be called before declaring 

function funcDeclaration() {
  console.log('This is a function declaration')
}

// Function Expression

const funcExpression = function() {
  console.log('This is a function expression')
}

funcDeclaration()
funcExpression()

// Arrow Function

const arrowFunc = () => {
  console.log('This is a arrow function')
}

arrowFunc()


function addTwoNums(x, y) { // x and y are parameters
  return x + y;
}

console.log(addTwoNums(25, 100)); // example 1; 25 and 100 are arguments

let answer = addTwoNums(10, 5); // example 2; 10 and 5 are arguments
console.log(answer)

console.log("-------------")

//////////////
// Exercise //
//////////////

function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
  
    /* 
      This explains why we get true on line 77:
  
      !(n1 % 2) && !(n2 % 2);
      !(2 % 2) && !(4 % 2);
      !0 && !0
      !false && !false
      true && true
      true
    */
    /*
      This explains why we get false on line 78:
  
      !(n1 % 2) && !(n2 % 2);
      !(2 % 2) && !(3 % 2);
      !0 && !1
      !false && !true
      true && false
      false
    */ 
  }
  
  console.log(areBothEven(2, 4))
  console.log(areBothEven(2, 3))
  console.log("-------------")

  ////////////////
// Exercise 2 //
////////////////

function computeArea(width, height) {
    let area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
  }
  
  console.log(computeArea(10, 5))
  console.log("-------------")

  ////////////////
// Exercise 3 //
////////////////

const planetHasWater = function(planet) {
    // Method 1
    if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
      return true;
    } else {
      return false;
    }
  
    // Method 2
    // return planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars';  
  }
  
  console.log(planetHasWater('Earth')) // true
  console.log(planetHasWater('Mars')) // true
  console.log(planetHasWater('Jupiter')) // false
  console.log(planetHasWater('earth')) // true
  console.log(planetHasWater('MARS')) // true
  console.log(planetHasWater('eArtH')) // true
  console.log(planetHasWater('SATURN')) // false
  console.log("-------------")

  //////////////////////////////
// Parameters and Arguments //
//////////////////////////////

function numOfArgs() {
    // Every function has access to a hidden variable called `arguments` which contains a list of all of the passed in arguments
    console.log(arguments) 
  }
  
  numOfArgs()
  numOfArgs('bryan')
  numOfArgs('bryan', 2, true)
  console.log("-------------")
  
  function getDevObject1(name) {
    let skills = [];
  
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
  
    return {
      devName: name,
      jobSkills: skills
    };
  }
  
  function getDevObject2() {
    let skills = [];
  
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
  
    return {
      devName: arguments[0],
      jobSkills: skills
    };
  }
  
  console.log(getDevObject1('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'))
  console.log(getDevObject2('Jason', 'Node', 'Express', 'React', 'Machine Learning'))
  console.log("-------------")

  /////////////////////
// Rest Parameters //
/////////////////////

function getDevObject3(name, ...skills) {
    console.log(skills)
  
    return {
      devName: name,
      jobSkills: skills
    };
  }
  
  console.log(getDevObject3('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery'))
  console.log("-------------")

  ////////////////////////
// Default Parameters //
////////////////////////

// Older method

function setColor1(bicycle, color) {
    // set color to 'purple' if not provided
    bicycle.color = color || 'purple';
    console.log(bicycle)
  }
  
  setColor1({}, 'blue');  // sets color to blue
  setColor1({});  // sets color to purple by default
  console.log("-------------")
  
  // Newer method
  
  function setColor2(bicycle, color = 'purple') {
    bicycle.color = color;
    console.log(bicycle);
  }
  
  setColor2({}, 'red')
  setColor2({})
  console.log("-------------")

  ////////////////////////////////////////
// Functions as Arguments (Callbacks) //
////////////////////////////////////////

const colors = ['red', 'green', 'blue'];

colors.forEach(function(color) {
  console.log(color);
})

colors.forEach((color) => {
  console.log(color);
})
console.log("-------------")
