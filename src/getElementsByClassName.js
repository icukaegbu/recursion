// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // retrieve all elements; and store in an array
  // //create another array to hold matching elements
  // iterate through all elements
  //var elems = document.childNodes; //returns a NodeList
  var elems = document.body.children; //returns a HTMLCollection
  var classArray; 

  for (var k = 0; k < elems.length; k++) {
	processObject(elems[k]);
  }

  //if element doesnt have children
  //	check if it has class attrib and if class attrib === classname
  //	if yes, add to classArray
  //if element has children, loop thru and call recursively
  function processObject(obj){
	if ('class' in obj && obj.classList.contains(className)){
		classArray.push(obj);
	}

	if(obj.children.length > 0) {
		for (var i = 0; i < obj.children.length; i++) {
			processObject(obj.children[i]);
		}
	}
  }

  return classArray;
};
