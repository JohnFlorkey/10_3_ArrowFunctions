const names = ['Bob','Bill','Billy Bob','Joe Bob'];
const nums = [9,7,8,6,4,5];

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

//mine
function doubleArrow(arr) {return arr.map(val => val * 2);}
//solution - I missed the requirement to use two arrow functions
const doubleDoubleArrow = arr => (arr.map(val => val * 2));


function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// mine - again I missed the requirement that there should be no named functions, only arrows
function squareAndFindEvensArrow(numbers){
    return numbers.map(val => val ** 2).filter(val => val % 2 === 0)
}
// solution
const squareAndFindEvensAllArrows = arr => arr.map(val => val ** 2).filter(val => val % 2 === 0);
