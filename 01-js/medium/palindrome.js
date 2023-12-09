/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    isIAplha = /^[a-z]+$/.test(str[i]);
    isJAplha = /^[a-z]+$/.test(str[j]);
    // console.log(str[i], isIAplha, isJAplha)
    if (isIAplha && isJAplha) {
      if (str[i] != str[j]) {
        return false;
      }
      i += 1;
      j -= 1;
    } else if (!isIAplha) {
      i += 1;
      if (!isJAplha) {
        j -= 1;
      }
    } else if (!isJAplha) {
      j -= 1;
    }
  }
  return true;
}

console.log(isPalindrome('hello'))

module.exports = isPalindrome;
