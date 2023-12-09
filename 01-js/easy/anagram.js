/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
var _ = require('lodash')
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let s1 = {}
  let s2 = {}
  if (str1.length != str2.length){
    return false
  }
  for (let i=0; i<str1.length; i+=1) {
    c1 = str1[i]
    c2 = str2[i]
    if (s1[c1]) {
      s1[c1] += 1
    } else {
      s1[c1] = 1
    }
    if (s2[c2]) {
      s2[c2] += 1
    } else {
      s2[c2] = 1
    }
  }
  return _.isEqual(s1, s2)
}

// console.log(isAnagram('hello', 'world'))

module.exports = isAnagram;
