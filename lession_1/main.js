
var array = [0, 0, 2, 3, 4, 65];

/** foreach
Array.prototype.forEach2 = function(callback) {

  var arrayLength = this.length;
  console.log(arrayLength)
  for(var i = 0; i < arrayLength; i++) {
    callback(this[i], i);
  }

}

var myCallback = function(item, index) {
  console.log(item, index)
}

var newArray = array.forEach2(myCallback);
 */

/** map2
Array.prototype.map2 = function(callback) {
  var output = [];
  var arrayLength = this.length;
  for(var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    output.push(result);
  }
  return output;

}

var myCallback = function(item, index) {
  return item + 1;
}

var newArray = array.map2(myCallback);
console.log(newArray)
*/

/** Find2
Array.prototype.find2 = function(callback) {
  var arrayLength = this.length;
  for(var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    if (result) {
      return this[i];
    }
  }
  return undefined;

}

var myCallback = function(item, index) {
  return item == 123;
}

var newArray = array.find2(myCallback);
console.log(newArray)
 */

/** Filter2
Array.prototype.filter2 = function(callback) {
  var output = [];
  var arrayLength = this.length;
  for(var i = 0; i < arrayLength; i++) {
    var result = callback(this[i], i);
    if (result) {
      output.push(this[i]);
    }
  }
  return output;
}

var myCallback = function(item, index) {
  return item == 0;
}

var newArray = array.filter2(myCallback);
console.log(newArray)
 */

/** Reduce2
Array.prototype.reduce2 = function(callback, initinal) {
  var length = this.length;
  var save = initinal === undefined ? this[0] : initinal;
  var i = initinal === undefined ? 1 : 0;

  for(i;i < length; i++) {
    save = myCallback(save, this[i], i);
  }
  return save;
}

function myCallback(initial, item, index) {
  return initial + item;
}
var newCount = array.reduce2(myCallback, 0)
console.log(newCount);
*/

//So nguyen to
// function checkNguyenTo(number) {
//   if (number == 1) {
//     return 1
//   }
//   for (var i = 2; i <= number / 2; i++) {
//       if (number % i == 0) {
//         return 0
//       }
//   }
//   return 1;
// }

// function soNguyenTo(array) {
//   let list = [];
//   for(var j = 0; j < array.length; j++) {
//     let result = checkNguyenTo(array[j]);
//     if(result) {
//       list.push(array[j])
//     }
//   }
//   return list
// }

// console.log(soNguyenTo([1,2,3,4,5,6,7,8,9,11,17,19]))

//So hoan hao
// function soHoanHao(number) {
//   let sum = 1;
//   if (number == 1) {
//       return "La so hoan hao"
//   }
//   for (var i = 2; i <= number / 2; i++) {
//       if (number % i == 0) {
//           sum += i
//       }
//   }
//   if (sum == number) {
//       return "So hoan hao"
//   }
//   return "Khong phai so hoan hao"
// }
// console.log(soHoanHao(6))

//So chinh phuong
// function soChinhPhuong(number) {
//   if (number == 1) {
//       return "La so chinh phuong"
//   }
//   for (var i = 2; i <= number / 2; i++) {
//       if (i * i == number) {
//           return "La so chinh phuong"
//       }
//   }
//   return "Khong la so chinh phuong"
// }
// console.log(soChinhPhuong(9))

//Tim phan tu lon nhat
// let arrayMax = [1, 2, 3, 4, 5, 6, 7, 87, 123, 213, 214221, 32]
// function maxNumber(array) {
//   let max = array[0];

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] > max) {
//           max = array[i]
//       }
//   }
//   return max;
// }

// console.log(maxNumber(arrayMax));

//Tim phan tu lon nhat
// let arrayMin = [1, 2, 3, 4, 5, 6, 7, 87, 123, 213, 214221, 32]
// function minNumber(array) {
//   let min = array[0];

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] < min) {
//           min = array[i]
//       }
//   }
//   return min;
// }

// console.log(minNumber(arrayMin));

//Tim so trung lap
// let arraySame = [1, 2, 3, 4, 5, 6, 7, 87, 123, 213, 214221, 32, 3]
// function sameNumber(array, number) {

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] == number) {
//           return 'Co trung lap phan tu ' + number;
//       }
//   }
//   return 'Khong co phan tu trung lap';
// }
// console.log(sameNumber(arraySame, 3));

//Closure
//Work with localstorage
// function createLocal(key) {
//   const store = JSON.parse(localStorage.getItem(key)) ?? {};
//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(store))
//   }

//   const storage = {
//     get(key) {
//       return store[key]
//     },
//     set(key, value) {
//       store[key] = value;
//       save()
//     },
//     delete(key) {
//       delete store[key];
//       save()
//     }
//   }
//   return storage
// }

// var key1 = createLocal('Key1')
// key1.delete('name')

//This
// const objParent = {
//   name: 'minh',
//   arrowFunction() {
//     console.log(this)
//   },
//   objChild: {
//     arrowFunction1: () => {
//       console.log(this)
//     },
//     objChild1: {
//       arrow: () => {
//         //
//         console.log(this)
//       },
//       function1(){
//         //
//         // console.log(this)
//       },
//       function2: function(){
//         //
//         // console.log(this)
//       }
//     }
//   }
// }

// objParent.arrowFunction()
// objParent.objChild.arrowFunction1()
// objParent.objChild.objChild1.arrow()
// objParent.objChild.objChild1.function1()
// objParent.objChild.objChild1.function2()

// function Car(name,color) {
//   this.name = name; this.color = color;
// }
// const bmv = new Car('BMV', 'Black');
// console.log(bmv)

// Car.prototype.run = function () {
//   console.log(this)
// }

// var car = {
//   name:'bmw',
//   run: ()=>{
//     console.log(this)
//   }
// }
// car.run()

//Dem so duong, so duong, so 0 nam trong khonag [-100, 100]

// var arraySame = [1,2,3,4,5,5,5,5,5,-1,-2,-3,-4,-5,-6,-7,-8,0,0,0,0,0,123213]

// function checkSame(array) {
//   var duong = 0;
//   var am = 0;
//   var zero = 0;
//   var newArray = array.filter(function(item, index) {
//     return item <= 100 && item >= -100;
//   });
//   console.log(newArray)
//   for(const item of newArray) {
//     if(item > 0) {
//       duong++;
//     } else if(item == 0) {
//       zero++;
//     } else {
//       am++;
//     }
//   }
//   console.log((duong/array.length).toFixed(6));
//   console.log((am/array.length).toFixed(6));
//   console.log((zero/array.length).toFixed(6));
//   return 1;
// }
// checkSame(arraySame);

function numberCheck(array) {
  //sap xep
  let array1 = array.sort((a, b) => parseInt(a) - parseInt(b));
  const hash = {}
  let length = array.length

  for (let i = 0; i < length; i++) {
    const num = array[i];
    if (hash[num] === undefined) hash[num] = true
  }

  let keyObject = Object.keys(hash);
  let arrays = keyObject.map(function (item) {
    return parseInt(item);
  })
  return arrays;
}

console.log(numberCheck([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]))


// let str = "aabbbaaccd";
// let chars = str.split('');
// let count;
// let newStr = "";
// for(let i=0;i< chars.length;i++){
//     count=1;
//     for (let j=i+1;j< chars.length;j++){
//       if(chars[i] == chars[j]){
//         count++;
//       } else {
//         break;
//       }
//       i = j;
//     }
//     newStr += chars[i]+""+count
// }

// let arr = [123123211,22222,333,4,5,6,5, 1111111111111,3,3,2,2,2];
// let num1, num2, num3;

// if(arr[0] >= arr[1]) {
//   num1 = arr[0];
//   num2 = arr[1];
// } else {
//   num1 = arr[1]
//   num2 = arr[0]
// }

// if(arr[2] >= num1) {
//   num3 = num2;
//   num2 = num1;
//   num1 = arr[2]
// } else if(arr[2] >= num2) {
//   num3 = num2;
//   num2 = arr[2];
// } else {
//   num3 = arr[2]
// }

// for(let i = 3; i < arr.length; i++) {
//   let num =  arr[i];
//   if (num >= num1) {
//     num3 = num2;
//     num2 = num1;
//     num1=num
//   } else if(num >=num2) {
//     num3 = num2
//     num2 = num
//   } else if(num >=num3){
//     num3 = num
//   }
// }
// console.log(num1, num2, num3)

// let str1 = 'aaaabbbbdddcccddddsss' 
// let arr = str1.split('');
// let count = 1;
// let str = '';

// for(let i  = 0; i < arr.length; i++) {
//   if (arr[i] == arr[i+1]) {
//     count++
//   } else {
//     str += arr[i] + count
//     count = 1
//   }
// }

// let a = 3;
// let b = 4;

// a = a*b // 12
// b = a/b //3
// a = a/b//4


// console.log(str[8]); 


