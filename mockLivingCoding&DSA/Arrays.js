//SDE SHEET
// /*__________________ Maximum Subarray (Kadane’s algorithm ) || leetCode 53. ________________________________
//1. Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

//approach :-
// When sum is greater than max, assign sum to max and temporarily store the maximum value.
// When sum is less than 0, it will start to accumulate again from 0, and max must be the
// maximum value of the subarray at the end of the loop. 

// 1st approch with 3 loop time complexity n^3 by brute force . so we have to take another

// 2nd approach by kadane's algoritham's (optimize solution)
//T.C:O(n), S.C:O(1) */

var maxSubArray = function (nums) {
  let max = nums[0];
  //console.log(nums[0])
  let sum = 0;
  for (let i = 0; i < nums.length; i++) { //nums.length-1 ,nhi lgya infinite jaa rhi thi loop .
   // console.log("nums len",nums.length)
    sum += nums[i];
    //console.log("sum",sum)
    if (sum > max) {
      max = sum;
    }
    else if  (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
console.log("maximum sum",maxSubArray([-2, 1, -3]));//1

// /* ________________________________________________________________________________________________________________

// 2. Sort an array of 0s, 1s and 2s (Dutch National flag algorithm ) || 75.Sort Colors

// Keep three indices start = 0, mid = 0 and end = nums.length-1.
// There are four ranges, 1 to start (the range containing 0),
// start to mid (the range containing 1), mid to end (the range 
// containing unknown elements) and end to nums.length (the range containing 2).
//T.C: O(N), S.C: O(1) */

 function sortColors(nums) {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  // Traverse the array from start to end and mid is less than end...
  while (mid <= end) {
    // If the element is 0...
    if (nums[mid] == 0) {
      // swap the element with the element at index start...

      [nums[start], nums[mid]] = [nums[mid], nums[start]];

      // Update start = start + 1 and mid = mid + 1...
      start++;
      mid++;
    }
    // If the element is 1 then update mid = mid + 1...
    else if (nums[mid] == 1) {
      mid++;
    }
    // If the element is 2...
    else {
      // Swap the element with the element at index end...

      [nums[end], nums[mid]] = [nums[mid], nums[end]];
      // Update end = end – 1...
      
      end--;
    }
  }
  return nums;
};console.log(sortColors([2,0,2,1,1,0,1,1,1,1,2,2,2,0,0,0]))

// /*________________________________________________________________________________________________________________

// 3.  Best Time to Buy and Sell Stock .

// You want to maximize your profit by choosing a single day to buy one stock and choosing
//  a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any
//  profit, return 0.
// T.C: O(N), S.C: O(1) */

//best way

// function maxProfit(prices) {
//   if(prices.length==0)return 0
//   let profit=0//day 1 
//   let min=prices[0]//day 1 price
//   let max=0
//   for(let i=1;i<prices.length;i++){//start day 2 se loop , we can't  buy n sell stock same day.
//       min=Math.min(min,prices[i])//har din comparison krna h min price
//       profit=prices[i]-min;//har din comparison krna h profit 
//       max=Math.max(profit,max)//har din compare krk max profit
//   }
//   return max;//return max profit
// }

// // function maxProfit(prices) {
// //     let buy =prices[0] //1. first buy ,so prices[0]
// //     prices[0]=0 
// //     //console.log(buy)
// //     let profit=0//and profit will be 0 ,if same day buy & sell
// //     //2. loop will start index 1 ,becoz we cannot buy & sell on day 1
// //           for(let i=1;i<prices.length;i++){
// //                   //3. comparing ,if buying prices is less than prices[i]
// //                   if(buy>prices[i]){
// //                           //then it will loss , so the prices[i] will become 0
// //                           buy =prices[i]
// //                           prices[i]=0
// //                   }else{
// //                           //4. if buying price is grater than prices[i], then it will profit 
// //                           profit=Math.max(prices[i]-buy,profit)
// //                           console.log("profit",profit)
// //                   }
// //           }
// //           return profit
//  //};
//  console.log(maxProfit([7,1,5,3,6,4]))

//  /*________________________________________________________________________________________________________________
// https://youtu.be/FhIhUy8bZww
//  4. Merge Sorted Array 

//  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
//  and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array 
// should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the 
// elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. 
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 

// approach: 2 pointer - first , second & third 
// T.C:O(m+n) , S.C:O(1)                                     */

// function merge(nums1, m, nums2, n) {
//   let fLen =m-1;
//   let sLen=n-1;
//   let i=m+n-1;
  
//   while(sLen>=0){
//       let fval=nums1[fLen];
//       //console.log("fval",fval)
//       let sval=nums2[sLen];

//       if(fval > sval){
//           nums1[i] = fval;
//           i--;
//           fLen--;
//       }else{
//           nums1[i] = sval;
//           i--;
//           sLen--;
//       }
//   }
//   return nums1;
// };console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// /*__________________________________________________________________________________________

// 5. Find the duplicate in an array of N+1 integers

// Given an array of integers nums containing n + 1 integers where each integer is in the 
// range [1, n] inclusive.There is only one repeated number in nums, return this repeated 
// number.You must solve the problem without modifying the array nums and uses onlyconstant extra space.

//  approach:- two pointers 
//  T.C:O(n) , S.C:O(1) */

// function findDuplicate(nums) {
//   let slow=0;
//   let fast=0;
 
//  while(nums){
//      slow=nums[slow];//1 steps
//      fast=nums[nums[fast]]; //2 steps
 
//      if(fast === slow){//cycle 
//          let pointer=0;
 
//         while(pointer !==slow){
//             pointer=nums[pointer];
//             slow=nums[slow];
 
//         }
//         return pointer;//pinter is a index value
//      }
//  }
     
//  };console.log(findDuplicate([1,3,4,2,2]))

//another approach :- 
// var findDuplicate = function(nums) {
//   let map = new Map()
//   for(let items of nums){
//       if(map.get(items)){
//           map.set(items, map.get(items)+1)
//       }else{
//           map.set(items,1)
//       }
//   }
 
//     for(let [key,value] of map){
//         if(value >= 2){
//             return key
//         }
//     }
// };console.log(findDuplicate([1,3,4,2,2]))

// /*___________________________________________________________________________________________
// 6. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only 
// number in the range that is missing from the array
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 
// 8 is the missing number in the range since it does not appear in nums.
//  T.C:O(n) , S.C:O(1) */

// function missingNumber(nums) { //when [0,1]
//   var sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log("index",i) //indexes
//     sum += i + 1 - nums[i] ;//0+1=1, 1-9=-8, so  sum=-8
//             console.log("sum",sum)
//         //  var maza=sum - nums[i]//1-1,  3-1=2 
//         //    console.log("maza",maza)       
//   };
//   return sum;
// };console.log("missing no is",missingNumber([9,6,4,2,3,5,7,0,1]))
// /* _____________________________________________________________________________________________
//  7. Two Sum 

//  Given an array of integers nums and an integer target, return indices of the two numbers 
//  such that they add up to target.You may assume that each input would have exactly one 
//  solution, and you may not use the same element twice.
//  You can return the answer in any order.  T.C:O(n) , S.C:O(1)  */

//   twoSum = (nums, target) => {
//     let vals = {};//object
//     for (let i = 0; i < nums.length; i++) {
//       if (target - nums[i] in vals) {
//         return [vals[target - nums[i]], i];
//       } else {
//         vals[nums[i]] = i;
//       }
//     }
//     return [];
//   };
//   console.log(twoSum([2, 7, 11, 15], 13));

// //   /*__________________________________________________________________________________________
// //   8.  Longest Consecutive Sequence    https://youtu.be/P6RZZMu_maU
  
// //   Given an unsorted array of integers nums, return the length of the longest consecutive 
// //   elements sequence. You must write an algorithm that runs in O(n) time.

// // Input: nums = [100,4,200,1,3,2]
// // Output: 4
// // Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// // brute approach:
// // We can simply sort the array and run a for loop to find the longest consecutive sequence.
// // T.C:We are first sorting the array which will take O(N * log(N)) time and then
// // we are running a for loop which will take O(N) time. Hence, the overall time complexity will be O(N * log(N))
// // S.C:The space complexity for the above approach is O(1) because we are not using any auxiliary space

// // optimal approach:
// //  * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
// //  * Greedy - Max Score
// //  * Time O (N * log(N)) | Space O(1) */
 
// // var longestConsecutive = (nums) => {
// //   if (!nums.length) return 0;

// //   nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

// //   return search(nums);       /* Time O(N) */
// // }
// // const search = (nums) => {
// //   let [ maxScore, score ] = [ 1, 1 ];

// //   for (let i = 1; i < nums.length; i++) {/* Time O(N) */
// //       const isPrevDuplicate = nums[i - 1] === nums[i]
// //       if (isPrevDuplicate) continue

// //       const isStreak = nums[i] === ((nums[i - 1]) + 1)
// //       if (isStreak) { score++; continue; }

// //       maxScore = Math.max(maxScore, score);
// //       score = 1;
// //   }

// //   return Math.max(maxScore, score);
// // };console.log(longestConsecutive([100,4,200,1,3,2]))

// // /*________________________________________________________________________________________________
// // 9. Length of the longest subarray with zero Sum.

// // Given an array having both positive and negative integers. 
// // The task is to compute the length of the largest subarray with sum 0. 
// // Input:
// // N = 8
// // A[] = {15,-2,2,-8,1,7,10,23}
// // Output: 5
// // Explanation: The largest subarray with
// // sum 0 will be -2 2 -8 1 7.
// // Expected Time Complexity: O(N).
// // Expected Auxiliary Space: O(N).*/

// var maxLen = (arr,n)=>{
//   const map = {0:-1}
//   let maxSum =0
//   let sum = 0
//   for(let i =0;i< n;i++){
//       sum+=arr[i]
//       if(sum in map){
//         //console.log("b",sum in map)
//           maxSum = Math.max(maxSum,i-map[sum])
//       }else {
//           map[sum]=i
//       }
//   }
//   return maxSum;
// };console.log("largest subarray with zero sum",maxLen([15,-2,2,-8,1,7,10,23],8))
// // /*__________________________________________________________________________________________________________________________
// // 10. Longest Substring Without Repeating Characters.

// // Brute Approach: 
// // This approach consists of taking the two loops one for traversing the string and another loop 
// // nested loop for finding different substrings and after that, we will check for all substrings one by one and check 
// // for each and every element if the element is not found then we will store that element in HashSet otherwise we will break from the loop and count it.
// // Output: The length of the longest substring without repeating characters is 9
// // Time Complexity: O( N2 )
// // Space Complexity: O(N) where N is the size of HashSet taken for storing the elements
// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.

// // Optimised Approach:sliding window approach
// // A technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.*/
        
// var lengthOfLongestSubstring = function(s) {
    
//   if(!s){
//       return 0;
//   }
      
//   let end=0; //
//   let start=0;//
//   let maxlength=0;//
      
//   const uniquecharacters = new Set();//stores unique values //b
     
//   while (end<=s.length){
//       if(!uniquecharacters.has(s[end])){ // duplicate not present 
             
//           uniquecharacters.add(s[end])
//           end++;
             
//           maxlength=Math.max(maxlength,uniquecharacters.size);//returns largest numbers 
             
//       }else{ // if present 
//           uniquecharacters.delete(s[start]);
//           start++;
//       }
//   }
//   return maxlength;
    
// };console.log(lengthOfLongestSubstring("abcabcbb"))

// //_________________________________________________________________________________________________________________

// //solution by linear time complexity
// function sumPairZero(arr){
//   let left =0;
//   let right=arr.length-1
  
//   while(left<right){
//     sum=arr[left]+arr[right];
//     if(sum===0){
//       return [arr[left], arr[right]]
//     }else if(sum<0){
//       left++;
//     }else{
//       right--;
//     }
//   };return 0
// };console.log("sumPairZero",sumPairZero([-2,1,2]))
//O(n)

function revArr(arr){
  let start=0,end=arr.length-1;
  while(start<=end){
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++;
    end--;
  }
  return arr;
}console.log(revArr([1,2,3]))

//2nd way
function reverseArr(arr){
  let n =arr.length;
 for(let i=0;i<n/2;i++){
     [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
 }
 return arr
 
};console.log(reverseArr([1,2,3,4]))//[2 3 4 1]