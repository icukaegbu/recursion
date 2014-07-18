// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  //accumulator variable
  var accumulator;

  //converts a primitive value, array or object to a JSON string
  if (typeof obj === 'undefined' || typeof obj === 'function' ) return undefined;
  else if (typeof obj === 'string') return "\"" + obj + "\"";
  else if (typeof obj === 'boolean' || typeof obj === 'number') return obj.toString();
  else if (obj === null) return 'null';

  //else if(Array.isArray(obj) && obj.length > 0 ) {
  else if(Array.isArray(obj)) {
    //if empty array, return empty string
    if (obj.length === 0) return '[]';

    accumulator = "[";

    for(var indx = 0; indx < obj.length; indx++){
      //if function, append null to the accumulator, else call recursively
      accumulator += (typeof obj[indx] === 'function') ? 'null,' : stringifyJSON(obj[indx]) + ",";
    }
    // _.each(obj, function(value){
    //     accumulator += (typeof value === 'function') ? "null," : stringifyJSON(value) + ",";
    // });

  	//eliminate the last comma; test if the last character in the string is a comma
    if (accumulator.charAt(accumulator.length-1) === ",") accumulator = accumulator.slice(0, accumulator.length-2); 
    //if (accumulator.length > 1 && accumulator.charAt(accumulator.length-1) === ",") accumulator = accumulator.slice(0, accumulator.length-2); //accumulator.slice(-1);

    accumulator += "]";

  	return accumulator;
  }

  else{
    //if empty object, return empty string
    if (Object.keys(obj).length === 0) return '{}';

    accumulator = "{";

    for(var key in obj){
      //accumulator += (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') ? "" : "\""+key+"\":"+stringifyJSON(obj[key])+",";
      if (!(typeof obj[key] === 'function' || typeof obj[key] === 'undefined')) {
        accumulator += "\""+key+"\":"+stringifyJSON(obj[key])+",";
      }
      
    }

    // _.each(obj, function(value, key){
    //   if (!(typeof value === 'function' || typeof value === 'undefined')) {
    //     accumulator += "\""+key+"\":"+stringifyJSON(value)+",";
    //   }
    // });

    if (accumulator.charAt(accumulator.length-1) === ",") accumulator = accumulator.slice(0, accumulator.length-2);
    //if (accumulator.length > 1 && accumulator.charAt(accumulator.length-1) === ",") accumulator = accumulator.slice(0, accumulator.length-2); //accumulator.slice(-1);

    accumulator += "}";

    return accumulator;
  }
};
