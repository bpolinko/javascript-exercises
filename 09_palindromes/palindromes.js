const palindromes = function (word) {
  const punct = ["!", ".", ",", " "];
  const forwordArray = word.split("");
  const reverseArray = word.split("").reverse();
  
  const resultF = forwordArray.filter(removePunct);
  const resultR = reverseArray.filter(removePunct);

  const joinF = resultF.join("").toLowerCase();
  const joinR = resultR.join("").toLowerCase();

  function removePunct(letter) {
    return !punct.includes(letter);
  }
  
  if (joinF == joinR) {
    return true;
  } else {
    return false;
  }
  
  
};

// Do not edit below this line
module.exports = palindromes;
