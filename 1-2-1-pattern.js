/**
 * Created by championswimmer on 21/2/17.
 */
/*
Print
 1
 11
 21
 1211
 111221
 */

var n = 5;

var s = "1";
for (var i = 1; i < n; i++) {
  var a =Array.from(s);
  var c = a[0];
  var d = 1;
  var sn = "";
  for (var j = 1; j < a.length; j++) {
    if (a[j] != c) {
      sn = sn + d + c;
      c = a[j];
      d = 1;
    } else {
      d++;
    }
  }
  sn = sn + d + c;
  s = sn;
}

console.log(s)