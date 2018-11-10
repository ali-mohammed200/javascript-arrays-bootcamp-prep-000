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
function addElementToEndOfArraya(arr, elem){
  let newArr = arr.slice();
  newArr.push(elem);
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr, elem){
  arr.push(elem);
  return arr;
}
function accessElementInArray(arr, ind){
  return arr[ind];
}
function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr){
  let newArr = arr.slice();
  newArr.shift();
  return newArr;
}