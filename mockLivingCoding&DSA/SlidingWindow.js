// // /*_________________ Sliding Window algo________________*/

// // //1. Write the function to calculate the max sum of k consecutive elements in the array?

// // //? ==>Approach
// //?==>Sliding window
// function max3elSum(arr, k) {
//   let sum = 0;
//   //var i = 0;
//   for (var i = 0; i < k; i++) {
//     sum += arr[i];
//   }

//   console.log("ye sum hai ", sum);

//   let max = -Infinity;
//   var j = i;

//   while (j < arr.length - 1) {
//     sum += arr[j + 1] - arr[j - k + 1]; // 0 +  1
//     console.log("ye asli sum hai ", sum); //
//     if (sum > max) {
//       max = sum;
//       console.log("ye max sum hai ", sum);
//     }
//     j++;
//   }
//   return max;
// }
// console.log(max3elSum([2, 1, 3, 4, 5], 3));

// // _______________________________________another method_______________________________
//small code 

// function maxSumOfSubarray(arr, k){
//     let res = 0;
//     for (let i=0; i<k; i++){
//         res += arr[i]
//     }

//     let curr_sum = res;
//     //console.log(curr_sum)
//     let n = arr.length

//     for (let i=k; i<n; i++){
//         //console.log(curr_sum)
//        curr_sum += arr[i] - arr[i-k]; //curr_sum = 4 , arr[i] =1 , arr[i-k]=1
//         //console.log(curr_sum) //6
//         //var bb=arr[i-k] //i yaha par index hai , aur arr[i] yaha par value hai
//         //console.log(bb)
//         //curr_sum +=  - arr[i-k];
//         //console.log(curr_sum)
//         res = Math.max(res, curr_sum);
//     }
//     return res;
// };
// let result = maxSumOfSubarray([1,3,2,3,2,10],3)
// console.log(result)

// //2. Write a program to find the window formed with k window size?  (sliding window)?_____________

// function totalWindowFormed(arr, k) {
//   let n = arr.length; //4
//   let result = [];

//   for (let j = 0; j < n - k + 1; j++) {
//     //4-2+1 = 3 //4-1 =3
//     let max = arr[j]; //
//     for (let i = j; i < j + k; i++) {
//       if (max < arr[i]) {
//         max = arr[i];
//       }
//     }
//     result.push(max);
//     console.log(result);
//   }
//   //console.log(result)
//   return result.length
// }
// let result = totalWindowFormed([1, 3, -1, 3,2,2],2);
// console.log(result)

// //questions which are not parctice
// // - **You are given an array, return the array of the largest element of each windows of size K?**
// // - **Given an integer array. The task is to find the maximum of the minimum of every window size in the array?**
// // - **Given a string you need to print the size of the longest possible substring that has exactly K unique characters. If there is no possible substring then print -1?**
// // - **Longest Substring Without Repeating Characters? Leetcode - 3**
// // - **Given two strings `s`and `t`of lengths `m` and `n` respectively, return *the minimum window substring of* `s` *such that every character in* `t` *(including duplicates) is included in the window. If there is no such substring, return the empty string* `""`*. leetcode -  76***
// // - **Longest Repeating Character Replacement? Leetcode - 424**

// //3. Maximum Product Subarray  - Leetcode 152

// // var maxProduct = function maxProduct(nums) {
// //     let prevMax = nums[0];
// //     let prevMin = nums[0];
// //     let result = nums[0];
// //     for (let i=1;i<nums.length;i++) {
// //         // given the new number, the new maximun can have 3 conditions
// //         // 1. number(+) * prevMax(+) is the largest
// //         // 2. number(+) it self is the largest
// //         // 3. number(-) * prevMin(-) is the largest
// //         curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

// //         curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

// // 		// updating the prevMax & prevMin, these two may swap locations
// //         prevMax = curMax
// //         prevMin = curMin

// //         result = Math.max(curMax, result);
// //     }
// //     return result;
// // }
 
//______________________________________________________________________________________________________________________





