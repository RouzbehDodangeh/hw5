/*const arr = [true, false, true, false, true,false,true];
const count = arr.filter(Boolean).length;
console.log(count);*/
/*function countTrue(arr) {
	return arr.filter(a => a === true).length;
}
console.log(countTrue([true, false, false, true, false,true,true]));
console.log(countTrue([false, false, true, false,true]));
console.log(countTrue([]));*/
//.............................................
/*String.prototype.sub_String = function() 
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};

console.log("ali".sub_String());
*/
//............................................
/*const number=45682962;
const str=number.toString();
const result=[str[0]];
for (let i = 1; i < str.length; i++) {
  if (str[i-1]%2===0 && str[i]%2===0) {
    result.push('-',str[i])
  }
  else
  {
    result.push(str[i])
  }
}
console.log(result.join(''));
*/
//.........................................
/*function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

 if (ctr === array1.length) 
 {
    for (x = ctr; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Arrays_sum([7,10,20,5,4], [3,7,5,19,23,12]));
*/

/*const toArray = (obj) => {
  let a = [];
  a = Object.entries(obj);
  return a;
};
console.log(toArray({ a: 1, b: 2 }));*/




