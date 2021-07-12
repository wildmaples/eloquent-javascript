// Write a function countBs that takes a string as its 
// only argument and returns a number that indicates how 
// many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves 
// like countBs, except it takes a second argument that 
// indicates the character that is to be counted (rather 
// than counting only uppercase “B” characters). 
// Rewrite countBs to make use of this new function.

function countBs(str) {
  return countChar(str, "B")
}

function countChar(str, char) {
  count = 0
  for (let index = 0; index < str.length; index++) {
    if (str[index] == char) {
      count += 1
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
