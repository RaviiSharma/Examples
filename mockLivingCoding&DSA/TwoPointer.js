// /*______________________________________________ TWO POINTER APPROACH___________________________________*/

// //1. Swap two variables without using a temp variable?

// // function swapValue(a,b) {
// //     a= a+b
// //     b=a-b
// //     a=a-b
// //     console.log(a,b);
// // }
// // swapValue(4,6)

// //2. Reverse an array without using extra array?

// // we are using an extra variable in this
// // second method without temp variable 

//   // function revserArr(arr){
//   //   let start = 0
//   //   let end = arr.length - 1
//   //   while(start <= end){
//   //     [arr[start] , arr[end]] = [arr[end], arr[start]]
//   //       start++
//   //       end--
//   //   }
//   //   return arr
//   // }
  
//   // let result2 = revserArr([1,2,3]) 
//   // console.log(result2)
  

// //3. Sorting 0’s,1’, and 2’s using two-pointers? (Amazon Question)?
// // write a function to sort, 0,1, and 2 in an array.

// function sort012(a,N){
//     let lo = 0; 
//     let hi = N- 1; 
//     let mid = 0;
    
//     while (mid <= hi){
//         if(a[mid] == 0){
//           [a[lo],a[mid]] =[a[mid],a[lo]] //low ko mid ,mid ko lo
//             lo++; 
//             mid++; 
//         }
//         else if(a[mid] == 1){
//             mid++; 
//         }
//         else{
//             //mid me hi daalna h, hi m mid ko
//          [a[mid],a[hi]]=[a[hi],a[mid]]
//             hi--;
//         }
//     }
//     return a
// } 
// let res = sort012([0 ,2, 1, 2, 0],5)
// console.log(res)

//4. Longest substring without repeating characters?

var lengthOfLongestSubstring = function(s) { 
    if(!s ||s.length===0){
        return 0
    }
    let end = 0
    let start = 0
    let maxLength = 0
    const UniqueCharacters = new Set()
    
    while(end<s.length){
        if(!UniqueCharacters.has(s[end])){
            UniqueCharacters.add(s[end]);
            end++
            maxLength = Math.max(maxLength, UniqueCharacters.size)
        }else{
            UniqueCharacters.delete(s[start]);
            start++
        }
    }
    return maxLength
};
let res1 = lengthOfLongestSubstring("ikk")//6
console.log(res1)