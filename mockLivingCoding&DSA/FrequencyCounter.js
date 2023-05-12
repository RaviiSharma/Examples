//___________________________________FREQUENCY COUNTER METHOD____________

/* 1. Find the frequency of an element  */

// var arr = ["a", "b", "c", "d", "e", "f", "g", "h","h", "h","i", "j","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//count the duplicates elements in array 

// function counter(x) {
//   var count = 0
//      temp = [];
// //   x = x.split('');
// //   console.log(x);
// let len=x.length
//   for (var i = 0; i < len-1; i++) {
//     if (x[i] == "d") {
//       temp +=x[i]
//       count++;
     
//     }
//   }
//   console.log("count" , count , "and frequency element ",temp);
// }
// var a = "aabbddd";
// counter(a);
// //__________________________________________________________________________________________________________________________________________________

// // **. Swap two variables without using a temp variable? **
// // function swapValue(a,b) {
// //     a= a+b   //4+6 =10
// //     b=a-b   //10-6 =4
// //     a=a-b  //10-4 =6
// //     console.log(a,b);
// // }
// // swapValue(4,6)

// /* 2. Given the array of repeated elements return the element with the most occurrences ? */
// //using map T.C=O(N^2), S.C= O(N)

function mostRepeated(arr){
    let map = new Map() //store key value pairs
    let max = 1/-0 // - infinity
    let maxChar=0
    for(let el of arr){//arr me element hai toh 
        if(map.get(el)){ //element ko laao
            //console.log(map)
            map.set(el, map.get(el)+1)//element , element value 1 se badha do 
            //console.log(map)
        }else{//nhi toh 
            map.set(el,1)//saare elements ko , value 1 krk set krdo 
            console.log(map)
        }
    }
    //console.log(map)
    for(let [key, val] of map){
        if(val > max){
            max = val//value 
            maxChar = key //key
        }
    }
    return maxChar + " -> " + max //dono return kro 
};
console.log(mostRepeated([1,1,2]))

// //3. Write the most frequent element in the array?

// // function mostFreqElem(arr) {
// //     let map = new Map();
// //     let maxFreq = 1, maxFreqElem = arr[0]
// //     for(let el of arr){
// //         if(map.get(el)) {
// //             map.set(el, map.get(el)+1)
// //             //console.log(map)
// //             //chance to previous freq can be less than map.get(elem)
// //             if(maxFreq < map.get(el)){
// //                 //console.log(map.get(el))
// //                 maxFreq = map.get(el);
// //                 maxFreqElem = el;
// //             }
// //         }else{
// //             map.set(el , 1)
// //             //console.log(map)
// //         }
// //     }
// //     console.log(maxFreqElem+ " --> " +maxFreq)
// // };mostFreqElem([1,3,4,2,2])
// //___________________________________________________________________________________________________________
// function getFrequency(arr){
//   let freq = {}
//   let res = []
//   for(let i=0;i<arr.length;i++){
//       //if str is empty
//       if(arr[i]==" "){
//           continue
//       }
//       //if word is not present in freq give 1 as value
//       if(!freq[arr[i]]){
//           freq[arr[i]] =1
//       }else{
//           //increment the count of word
//           freq[arr[i]]++
//       }
//   }
//   for(i in freq){
//       if(freq[i]>1){
//           res.push(`${i}`)
//       }
//   }
//   return res.join(" ")
// }

// console.log(getFrequency([1,2,3,4,4]))
//___________________________________________________________________________________________________________

// function getFrequency(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }

//     return freq;
// };
// getFrequency(["a","a","a","b","b","c"])

//4.Sum of all non repeating Distinct Pairs in elements?

// const arr = [1,2,3,2,2,3,4]; //ye smjhao do koi //7 
// const distinctSum = arr => {
//    let res = 0;
   
//    for(let i = 0; i < arr.length; i++){
//     //console.log(i)

//       if(i === arr.lastIndexOf(arr[i])){
//         //console.log(arr.lastIndexOf(arr[i]))
//          res += arr[i];
//          console.log(res)
//       };
//       continue; //es line pe
//    };
//    return res;
// };distinctSum(arr)
// //console.log(distinctSum(arr));

//5. In an array find the element without a pair?
// using bitwise operator

// function unique(arr){
//     let ans = 0
//     for(let el of arr){
//         ans ^= el
//     }
//     return ans
// } // this only works, when all other elements are in pairs

// let res = unique([3,4,5,3,4,5,2,6,6])
// console.log(res) //2


// another method - map
//!in an array ,findThe elements without a pair (or those that are present in odd number)
//?Ex. [11,1,7,1,2,2,3,3,3,48,4,4,48] -here 3 and 7
//? => jiska bhi freCount %2 == 1 (odd) hoaga vo number without pair he
//? => we use map here (whenever we need to deal with frq, we use map)

// function withoutPair(arr) {
//     let map = new Map();
  
//     for (let curr of arr) {
//       map.get(curr) == undefined ? map.set(curr, 1) : map.set(curr, map.get(curr) + 1)
//     }
//     for (const [key, val] of map) {
//       if (val % 2 == 1) {
//         console.log("num without pair", key);
//       }
//     }
//   }
//   withoutPair([11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48]);

 // another method

//   let arr = [11, 1, 7, 11, 1]
//   var map = new Map();
// for(let i = 0;i<arr.length;i++){
//     let x = arr[i];                
//     if(map.has(x)){
//         map.set(x,map.get(x)+1)
//     }else{
//         map.set(x,1)
//     }
//     for (const [key, val] of map) {
//         if (val % 2 == 1) {
//           console.log("num without pair", key);
//         }
//       }
// }
