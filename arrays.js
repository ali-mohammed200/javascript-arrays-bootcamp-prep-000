let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arr, elem){
  let newArr = arr.slice();
  newArr.unshift(elem);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr, elem){
  arr.unshift(elem);
  return arr;
}