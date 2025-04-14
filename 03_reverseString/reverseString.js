const reverseString = function(test) {
    let reverse = [];
    let answer = "";
    if (test == "") {
        return answer;
    }
    for ( i =0; i < test.length; i++){
        reverse.unshift(test.charAt(i));
    }
    if ( test.length == reverse.length) {
        for ( i = 0; i < reverse.length; i++) {
            answer += reverse[i];
        }
    }
    if (answer.length == test.length){
    return answer;
    }
};

// Do not edit below this line
module.exports = reverseString;




