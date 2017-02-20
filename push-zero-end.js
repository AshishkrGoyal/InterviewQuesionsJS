/**
 * Created by championswimmer on 21/2/17.
 */

var arr = [1,0,3,0,2,7,0,3,0,6,4];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    arr.splice(i,1);
    arr.push(0)
  }
}

console.log(arr);