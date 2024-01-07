/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i === nums.length) return 1;

  return (nums[i] * product(nums, i + 1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  //base case
  if(i === words.length) return 0

  return (Math.max(words[i].length, longest(words, i+1 )))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  //base case
  if(i === str.length) return ''

  //normal case
  let letter = ''
  if(i % 2 === 0){
    letter = str[i]
  } 
  return (letter + everyOther(str, i+1))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  //base case
  if(str.length/2 <= i){
    return true
  }

  //normal case
  let first = str[i];
  let last = str[str.length -i -1];
  let ans = false;
  if (first === last){
    ans = true;
  }
  return (Boolean(Math.min(ans, isPalindrome(str, i + 1))))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  //base case
  if(i === arr.length) return -1;

  //normal case
  if(arr[i] === val) return i
  return findIndex(arr, val, i + 1)

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  //base case
  if(i === str.length) return '';

  //normal case
  return (str[str.length - i - 1] + revString(str, i + 1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0) {
  let stringArr = [];
  for (let key in obj){
    if (typeof obj[key] === 'string') stringArr.push(obj[key]);
    if (typeof obj[key] === 'object') stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i =0) {
  //base case 
  if(i === arr.length) return -1;

  //normal case
  if( arr[i] === val ) return i;

  return binarySearch(arr, val, i + 1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
