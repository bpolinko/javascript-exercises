const sumAll = function(firstNumber, secondNumber) {
    let result = 0;

    if ( firstNumber < 0 || secondNumber < 0 || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return "ERROR";
    }

    else if (firstNumber < secondNumber) {
        for ( let i = firstNumber; i <= secondNumber; i++) {
            result += i;
        }
    }
    else { 
        for ( let i = secondNumber; i <= firstNumber; i++) {
        result += i;
    }

    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;




