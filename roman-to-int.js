/**
 * Created by championswimmer on 21/2/17.
 */

var roman = "CXXIV";

var romArr = Array.from(roman).reverse();

var romap = {
  I: 1, V:5, X:10, L:50, C:100, D:500, M:100
};
var n = 0, g = 0;
for (var i = 0; i < romArr.length; i++) {
  k = romap[romArr[i]];
  if (k < g) {
    k = -k
  } else {
    g = k
  }

  n += k
}

console.log(n);