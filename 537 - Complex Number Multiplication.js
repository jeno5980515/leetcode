/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const arr1 = a.split('+').map(num => parseInt(num, 10));
  const arr2 = b.split('+').map(num => parseInt(num, 10));
  return `${arr1[0]*arr2[0]-arr1[1]*arr2[1]}+${arr1[0]*arr2[1]+arr1[1]*arr2[0]}i`; 
};