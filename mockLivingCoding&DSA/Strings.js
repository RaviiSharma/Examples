 //SDE SHEET
 /*1. Reverse Words in a String.
 Given an input string s, reverse the order of the words.A word is defined as a sequence of non-space 
 characters. The words in s will be separated by at least one space.Return a string of the words in reverse
order concatenated by a single space.Note that s may contain leading or trailing spaces or multiple spaces
 between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
Input: s = "the sky is blue"
Output: "blue is sky the"

optimise approach: O(n) */

function reverseWords(s) {
    let arr=s.split(' ')
    let reverseStr= ''
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i]=='')continue;
        if(reverseStr.length > 0)reverseStr +=' '
        reverseStr +=arr[i]
    }
    return reverseStr;
};console.log(reverseWords("the sky is blue"))



/*__________________________________________________________________________________________________________________
2. Longest Common Prefix 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
Input: strs = ["flower","flow","flight"]
Output: "fl"      */

function longestCommonPrefix(strs) {
    if(strs.length == 0) {return ""}
    let str = strs[0];
    for (let i=0; i<strs[0].length; i++) { //strs[0] : "flower" esme hi itrate hoga 
            for(j=1; j<strs.length; j++){  // ye pure me hoga itate 
                    if(strs[0][i]!= strs[j][i]){ 
                            return strs[0].slice(0,i)
                    }
            }
            
            
    }return strs[0]
};console.log(longestCommonPrefix(["flower","flow","flight"]))
/*____________________________________________________________________________________________________
3.Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once. 

Input: s = "anagram", t = "nagaram"
Output: true
optimise approach:
 */

// function isAnagram(s, t) {
   
//     let arr1 = s.split('').sort()
//     let arr2 = t.split('').sort()
//     return arr1.join('') === arr2.join('')
// };console.log(isAnagram("anagram","nagaram"))


// String Anagram
// 'hello' -> 'llheo'
//condition
//length check(for both strings)
// String 'hello' , 'llheo' anagram = hello llheo
//{ h:0, e:0, l:0; o:0} [hello] = [llheo]

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
    let counter = {}; //mapping or hashing
    
    for (let letter of string1) {
      counter[letter] = (counter[letter] || 0) + 1;
     // console.log(counter)
    }
    for (let items of string2) {
      if (!counter[items]) {
        return false;
      }
      counter[items] -= 1;
      //console.log(counter)
    }
    return true;
  }
  const check = isAnagram("hello", "llheo");
  console.log(check);
  
  // because we are not using nested loop so we dont get quadratic time complexity.
  // hence we get linear time complexity i.e. o(n)