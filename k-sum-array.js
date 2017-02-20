/**
 * Created by championswimmer on 21/2/17.
 */

k = 10;

arr = [7,1,9,2,0,4,8,11,-1,-3,12,17,-4,16,14,3,8];

arr.sort(function (a,b) {return a-b});

console.log(arr);

var i = 0, j = arr.length - 1;
while(i<j) {

  var s = arr[i] + arr[j];
  if (s == k) {
    console.log( arr[i] + " + " + arr[j])
    i++; j--;
  } else {
    if (s < k)
      i++;

    if (s > k)
      j--;
  }


}