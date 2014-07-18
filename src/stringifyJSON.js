// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  //accumulator variable
  var accumulator;

  //converts a primitive value, array or object to a JSON string
  if (typeof obj === 'undefined' || typeof obj === 'function' ) return undefined;
  else if (typeof obj === 'string') return "\"" + obj + "\"";
  else if (typeof obj === 'boolean' || typeof obj === 'number') return obj.toString();

  else if(Array.isArray(obj) && obj.length > 0 ){
  	var indx = 0, s;
  	//while
  	//base case
  	//shift the first element into the accumulator and call stringifyJSON on what is left
  	//var s = obj.shift().toString();
  	accumulator = accumulator + "" + obj.shift();
  	console.log(accumulator);
  	return accumulator + stringifyJSON(obj);
  }
};
