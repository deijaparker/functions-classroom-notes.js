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