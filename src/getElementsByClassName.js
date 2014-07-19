// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, elements, foundArray){
  // retrieve all elements; and store in an array
  // //create another array to hold matching elements
  // iterate through all elements
  //var elems = document.childNodes; //returns a NodeList
  var elems = elements || document.body.childNodes; //returns a HTMLCollection
  var classArray = foundArray || []; 

  for (var k = 0; k < elems.length; k++) {
	 //processObject(elems[k]);
   var obj = elems[k];

   if (obj.classList !== null && obj.classList !== undefined && obj.classList.contains(className)){
      classArray.push(obj);
   }

   if(obj.childNodes.length > 0) {
      getElementsByClassName(className, obj.childNodes, classArray);
   }

  }

  //if element doesnt have children
  //	check if it has class attrib and if class attrib === classname
  //	if yes, add to classArray
  //if element has children, loop thru and call recursively
  //
  // function processObject(obj){
  // 	if ('class' in obj && obj.classList.contains(className)){
  // 		classArray.push(obj);
  // 	}

  // 	if(obj.children.length > 0) {
  // 		for (var i = 0; i < obj.children.length; i++) {
  // 			processObject(obj.children[i]);
  // 		}
  // 	}
  // }

  return classArray;
};
