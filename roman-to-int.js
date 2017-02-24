/**
 * Created by championswimmer on 21/2/17.
 */

var rommanNumber = 'CXXIV';
var RomNOArray = Array.from(rommanNumber).reverse();
var RomMap = {
  I: 1, V:5, X:10, L:50, C:100, D:500, M:100
};
if(isRevRomanNumber(RomNOArray)){
var value = 0;
var preValue = 0;
for(let element of RomNOArray){
    elementValue =RomMap[element];
    if(preValue > elementValue){
        value -= elementValue;
    }
    else{ 
     value += elementValue;
    }
     preValue = elementValue;
}
console.log(value);
}

else{
    console.log('not a roman number');
}
/* checks if not more than 4 romans are equal in forward direction*/
function isRevRomanNumber(array){
     var isRO = true;
     for(var i = 3 ; i < array.length;i++){
        if(array[i]===array[i-1]&&
           array[i-1]===array[i-2]&&
           array[i-2]===array[i-3]){
               isRO = false;
               break;
            }
     }
  /* checks if two previos romans are not equal*/
    for(var j = 0 ; j < array.length-1;j++){
    if( array[j]===array[j+1]){
           isRO = false;
           break;
        }
    }
  return isRO;

}
