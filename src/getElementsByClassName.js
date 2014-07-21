// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // retrieve all elements; and store in an array
  // //create another array to hold matching elements
  // iterate through all elements

  var elems = arguments[1] || document.body;
  var classArray = arguments[2] || [];

  if (elems.classList !== null && elems.classList !== undefined && elems.classList.contains(className)){
      classArray.push(elems);
  }

  for (var indx = 0; indx < elems.childNodes.length; indx++) {
   //processObject(elems[k]);
   var obj = elems.childNodes[indx];

   getElementsByClassName(className, obj, classArray);

  }

  return classArray;

  // var elems = (arguments[1] == null || arguments[1] == undefined) ? document.body.childNodes : arguments[1]; //returns a HTMLCollection
  // var classArray = (arguments[2] == null || arguments[2] == undefined) ? [] : arguments[2]; 
  // 
  //  // if($(elems).hasClass(className)){
  //   classArray.push(elems);
  // }

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

};
