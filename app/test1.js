export function filterNames(names, startsWith) {
  let matchedNames = [];
  var searchTerm = startsWith;
  searchTerm = searchTerm.toLowerCase();
  names.forEach(name => {
    if (name.toLowerCase().indexOf(searchTerm) !== -1) {
      matchedNames.push(name);
    }
  })
  return matchedNames;
}

export function objectFilter(objects, key, searchString) {
  return objects.filter(function (object) {
    return (key in object) && object[key] == searchString
  })

}

export function compoundObjectFilter(objects, keysString, searchString) {
  //break the keysString in to its constituent keys to look for
  let keyStrings = keysString.split('.');
  //use filter to find all of those that have the searchstring 
  //in the value at the end of the application of the keys
  return objects.filter(function (object) {
    let currentVal = object;
    //Go through all the keys applying them to the object
    for (var i = 0; i < keyStrings.length; i++) {
      //if the key exists place the result in the current value
      if (keyStrings[i] in currentVal) {
        currentVal = currentVal[keyStrings[i]];
      } else {
        //otherwise return false
        return false
      }
    }
    //finally check for the searchstring at the end of the key chain
    return currentVal == searchString
  })
}
