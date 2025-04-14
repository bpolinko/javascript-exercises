const removeFromArray = function(dataSet, ...remove) {
    let newArray = [];
    
    for (let i = 0; i < dataSet.length; i++) {
       if(!remove.includes(dataSet[i])) {
        newArray.push(dataSet[i]);
       }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
