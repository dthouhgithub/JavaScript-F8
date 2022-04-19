var array = [0,0,2,3,4,65];

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
