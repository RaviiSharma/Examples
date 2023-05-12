//checkin sum zero - prob 1
// [-5,-4,-3,-2,0,2,4,6,8] sorted array

// function getSumPairZero(array){
// for(let num of array){
//     //console.log(num)
//     console.log('outer loop')
//     for(let j=1;j<array.length;j++){
//         console.log('inner loop')
//         if(num + array[j]===0){
//             return [num,array[j]]
//         }
//     }
// }
// };
// let result=getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result)
// //o(n^2) quadratic complexity

// function getSumPairZeroNew(array) {
//   let left = 0,
//     right = array.length - 1;

//   while (left < right) {
//     sum = array[left] + array[right];
//     if (sum === 0) {
//       return [array[left], array[right]];
//     } else if (sum > 0) {
//       right--;
//     }
//     if (sum < 0) {
//       left++;
//     }
//   }
// }
// let result = getSumPairZeroNew([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);
//one times loop runs only so , o(n) t.c

// function something(arr) {
// for(let num of arr){
//     //console.log(num)
//     if(arr[num]>arr[num+1]){
//         [arr[num],arr[num+1]=arr[num+1],arr[num]]
//         return arr
//     };
// }

// };console.log(something([2,1,3]))
//_____________________________________________________--check anagram--__________________________________________________

//counter={h:1,e:1,l:2,o:1}
//  t.c = o(n)
// function isAnagram(str1,str2){
// if(str1.length != str2.length){
//     return false
// }
// let counter={}
// for(let letter of str1){
//     //console.log(letter)
//     counter[letter]=(counter[letter]||0)+1 //counter m letter nhi h toh 0 daao aur 1 se add kro  , agr hai toh  jitna letter h utna daalo phir 1 se add kro
//    // console.log(counter[letter])
//     console.log(counter);
// }
// for(let item of str2){
//     if(! counter[item]){ //counter m str2 ka item match nhi kr rha ,toh return false
//         return false
//     }
//     counter[item] -=1 //agr hai items in counter k ander toh , pehle ke item hata do by decrement 1 usin.
// }
// return true;

// };console.log(isAnagram('hello','llhheo'))

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ unique numbers problems ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++== */
//sorted array
// function countUnique(array) {
//   // i j
//   if (array.length) {
//     let i = 0; // i
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j];
//         //console.log("----",array[i])
//       }
//     }
//     //console.log(i) //4
//     return i + 1; //total unique are 5
//   } else {
//     return "Array is empty";
//   }
// }
// const result = countUnique([1,2,2,3,4]); //unique 1,2,3,4,6 ye sab hai baki duplicates h,so total unique are : 5
// console.log(result);
//time complexity is linear o(n)


/**+++++++++++++++++++++++++++++++++++++++++++++++ check square array +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++== */

//arr1=[1,2,3,4], arr2=[1,4,16,9]
//if(arr1[i] * arr1[i] === arr2[j])
//isSquare=false
//t.c =o(n^2), s.c=o(n)
// function checkSquare(arr1,arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     //console.log(arr1[i])
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         //console.log(arr1[i]*arr1[i])
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {//esko dia qnki ki ,outer loop chalne s ye true ho rh th, par humre inner loop agr arr1 k squar
//         if(!isSquare){           //nhi mila toh hum retunr false kre g na esiliye .
//            return false;
//         }
        
//       }
//     }
//   }
//   return true;

// };let res=checkSquare([1,2,3,4],[1,4,9,16])
// console.log(res)

//_______________________________________________________________ check square array(optimize solutions) ___________________________________________________________-
//que- checking square in another array
//arr1 = [1,2,3,4], arr2 = [1,9,4,16] -> case1
//arr2 = [1,2,4,2], arr2 = [1,4,4,16] -> case2
// ||
//map 1 = { 1:1, 2:2, 4:1}
//map 2 = {1:1, 4:2, 16:1}
//time complexity o(n)

// //sol-
// function checkSquare(array1, array2) {
//   let map1 = {};
//   let map2 = {};
//   for (item of array1) {   //of array se ele inkal ne k liye 
//     //console.log("item",item)      
//     map1[item] = (map1[item] || 0) + 1;
//     //console.log("Map1", map1);
//   }
//   console.log("Map1", map1);
//   for (item1 of array2) {
//     map2[item1] = (map2[item1] || 0) + 1;
//    // console.log("Map2", map2)
//   }
//   console.log("Map2", map2);
//   for (let key in map1) {     //in map s ele nikal ne ke liye 
//     //console.log("Key", key);
//     if (!map2[key * key]) {  //object keys compare in term of square
//       return false;
//     }
//     if (map1[key] !== map2[key * key]) {  // value compare
     
//       return false;
//     }
//   }
//   return true;
// }
// const res1 = checkSquare([1,2,3,3], [1,4,9,9]);
// console.log(res1);

// //_________________________________________-----find odd/even number-----____________________________________

// //Helper recursive function
// //identify only odd no.'s or even no -
// //[1,2,3,4,5,6,7,8,9,10]
// //[1,3,5,7,9] -> output

// function findOdd(array) {
//   let result = [];
//   function helperRecursive(inputArray) {
//     if (inputArray.length === 0) {
//       return;
//     }
//     if (inputArray[0] % 2 !== 0) {    //inputArray[0] % 2===0 (for even number)
//       //console.log(inputArray[0]);
//       result.push(inputArray[0]);
//     }
//     helperRecursive(inputArray.slice(1)); // ek ek kr ke send kre ga input array me
//   }
//   helperRecursive(array);//1st calling ho rh h , recursive call nhi h , uper wla h
//   return result;
// }
// const res = findOdd([1, 2, 3, 4, 5, 6, 7]);
// console.log("odd no ",res);

// //linear search Algorithms
// const users=[{username:"sunejaajay",email:"sunejaajay@gmail.com"},
// {username:"abc",email:"abc@gmail.com"},
// {username:"xyz",email:"xyz@gmail.com"}
// ]

// function isuserExit(array,val){
// for(let item of array){
// if(item['username']=== val){
// return true;
// }
// }
// return false;
// }
// const res2=isuserExit(users,"abc")
// console.log(res2)

// //___________________________________________________---find maximum occuring character in string-----_______________________________


// function getCharString(str) {
//   const map = {};
//   str.split("").forEach((element) => {
//     //forEach bhi array k aprototype h toh use kr skte h
//     map[element] = map[element] ? map[element] + 1 : 1; //ternsry operator ,es6
//   });
//   //console.log(map)
//   let max = 1;
//   let char = str[0]; //first char of string ,jo max occurance h

//   for (let k in map) {
//     // console.log(map[k])

//     if (map[k] > max) {
//       max = map[k];
//       char = k; //char
//     }
//   }
//   return char;
// }
// const result = getCharString("hello Taraa");
// console.log(result);
//____________________---check if given string palidrome or not---_______________________________________

//dad -> dad : palidrome 
//mom -> mom : palidrome
//level-> level: palidrome 
//ravi -> ivar : not a palidrome 

//split(): split char of string in an array 
//join(): joint the char of array and return string 

//check using js inbuilt function 
// function isPal(str){
//   let reverse= str.split("").reverse().join("")
//   //console.log("yes its palidrome ",reverse)
//   return reverse.toLowerCase()===str.toLowerCase()

// };
// console.log(isPal("noon"))

//check using without inbuilt functions 
function checkPal(str) {
  let lowerStr = str.toLowerCase();
  let left = 0, right = str.length - 1;

  while (left < right) {
    if (lowerStr[left] !== lowerStr[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(checkPal("level"));

//_________________________--longest substring without reapeating character--___________________________
/*sliding window approach:-
A technique which aims to reduce the use of nested loop and replace it with a single loop,
thereby reducing the time complexity.*/
var lengthOfLongestSubstring = function(s) {
    
  if(!s){
      return 0;
  }    
  let end=0, start=0, maxlength=0;
  
  const uniquecharacters = new Set();//stores unique values //b
  
  while (end<s.length){
      if(!uniquecharacters.has(s[end])){ // duplicate not present 
             
          uniquecharacters.add(s[end])
          end++;
             
          maxlength=Math.max(maxlength,uniquecharacters.size);//returns largest numbers 
          
      }else{ // if present 
          uniquecharacters.delete(s[start]);
          start++;
      }
  }
  return maxlength;
    
};console.log(lengthOfLongestSubstring("abcabcbb"))

//_____________________________________Squares of a Sorted Array - Leetcode 977_____________________

var sortedSquares = function(nums) {
  const result = new Array(nums.length);
    let left = 0, right = nums.length - 1;
    
	// don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }
    
    return result;
};
console.log(sortedSquares([]))


//___________________________Single Number - Leetcode 136__________________________________________
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:

Input: nums = [2,2,1]
Output: 1   */

var singleNumber = function(nums) {
  let map = {}
  for(let items of nums){
      map[items] = (map[items] || 0) + 1
  }
  
  for(let num in map){
      if(map[num] === 1){
          return num
      }
  }
};console.log("singleNumber",singleNumber([2,2,4]))


