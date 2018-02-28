export function capitalise(names) {
    return names.map(function (name) {
        return name.toUpperCase()
    })
}

export function extractValue(objects, key) {
    return objects.map(function (object) {
        return object[key]
    })
}

export function extractCompoundValue(objects, keysString) {
    //split the compound key to an array
    let keyStrings = keysString.split('.');
    return objects.map(function (object) {
        let currentVal = object;
        //Go through all the keys applying them to the object
        for (let i = 0; i < keyStrings.length; i++) {
            //if the key exists place the result in the current value
            if (keyStrings[i] in currentVal) {
                currentVal = currentVal[keyStrings[i]];
            } else {
                //otherwise return undefined
                return undefined
            }
        }
        //finally return value
        return currentVal
    })
}
