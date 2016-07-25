//----- EXAMPLE 1: -----//

function largestOfFour(arr) {
  var result = {
    sum: 0,
    arr: null,
  };
  
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    
    for (var k = 0; k < arr[i].length; k++) {
      sum = sum + arr[i][k];
    }
                       
    if (sum > result.sum) {
      result.sum = sum;
      result.arr = arr[i];
    }
  }
  
  return result.arr;
}

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // returns: [1000000, 1001, 857, 1]
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns: [1000, 1001, 857, 1]

//-----EXAMPLE 2: -----//

function largestOfFour2(arr) {
  
  var array = [];
  
  for (var i = 0; i < arr.length; i++) {
    var largest = 0;
    
    for (var j = 0; j <arr[i].length; j++) {
      if (largest < arr[i][j]) {
        largest = arr[i][j];
      }
    }
    array.push(largest);    
  }
  return array;
}

largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // returns: [9, 35, 97, 1000000]
largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns: [5, 27, 39, 1001]

//----- EXAMPLE 3: USING ES6 -----//

function largestOfFour3(arr) {
  var array = [];
  
  for (var i = 0; i < arr.length; i++) {
    var largest = Math.max(...arr[i]);
    array.push(largest);
  }
  return array;
}

largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // returns: [9, 35, 97, 1000000]
largestOfFour3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // returns: [5, 27, 39, 1001]