const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;

  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }
  return answer;

};

module.exports = eqArrays;

const assertArraysEqual = function(actual, expected) {
  // actual is eqArray function
  if (actual, expected) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};


module.exports = assertArraysEqual;

const middle = function(arr1) {
  let midResult = [];

  if (arr1.length % 2 === 0) {
    let num1 = arr1[Math.round((arr1.length / 2) - 1)];
    let num2 = arr1[Math.round(arr1.length / 2)];
    midResult = midResult.concat([num1, num2]);
  } else {
    midResult = [arr1[Math.round((arr1.length - 1) / 2)]];
  }
  return midResult;
};

module.exports = middle;

//TEST


 //assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
 //assertArraysEqual(middle([40, 42, 44, 46, 48, 50, 52,]), [48]); // PASS
 //assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // PASS
 //assertArraysEqual(middle([18, 19, 20, 21, 22]), ["20"]); // FAIL
 //assertArraysEqual(middle([67, 69, 72, 75, 78, 81]), [75, 72]); // FAIL