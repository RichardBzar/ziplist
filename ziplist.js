const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];
function zipList(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i], arr2[i]);
  }
  return arr3;
}
function zipListTheSimpleWay(arr1, arr2) {
  const arr3 = [];
  let i = 0;
  _.each(arr1, function (n) {
    arr3.push(n, arr2[i]);
    i++;
  });
  return arr3;
}
console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
