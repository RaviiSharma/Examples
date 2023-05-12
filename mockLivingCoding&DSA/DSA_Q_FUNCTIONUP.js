//que. no. 1-
//checking sum zero i
// getSumPairZero => input [-5,-4,-3,-2,0,2,4,6,8]
//[?,?] => output j
//traversing - to visit each and every element of array

// function getSumPairZero(array){
// for(let i=0; i<array.length;i++){
// for(let j = 1; j<array.length; j++){
// if(array[i] + array[j] === 0){
// return[array[i],array[j]];
// }
// }
// }
// }
// const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result);
// time complexity o(n^2) quadratic time complexity


//solution by linear time complexity
// var array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
// function findSumPairZero(array) {
//   let left = 0; 
//   let right = array.length - 1;

//   while (left < right) {
//     let sum = array[left] + array[right];
//     if (sum === 0) {
//       return [array[left], array[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// };console.log(findSumPairZero(array));

//o(n) linear time complexity


// Next Chapter
// String Anagram
// 'hello' -> 'llheo'
//condition
//length check(for both strings)
// String 'hello' , 'llheo' anagram = hello llheo
//{ h:0, e:0, l:0; o:0} [hello] = [llheo]

// function isAnagram(string1,string2){
// if(string1.length !== string2.length){
// return false;
// }
// let counter = {} //mapping or hashing
// for(let letter of string1){
// counter[letter] = (counter[letter] || 0) + 1;
// //console.log(counter)
// }
// for (let items of string2){
// if(! counter[items]){
// return false;
// }
// counter [items] -= 1
// console.log(counter)
// }
// return true;
// }
// const check = isAnagram('hello','llhex');
// console.log(check)

// because we are not using nested loop so we dont get quadratic time complexity.
// hence we get linear time complexity i.e. o(n)


// count unique numbers
//[1,1,2,2,3,4,4,5,6,7,8,8]
//output -> 8
//conditions
//i = 0, j = 1 i j
// array[i] != array[j] 1 != 2 //[1,2,3,4,5,6,7,8,6,7,8,8]
// 1) i++
// 2) array[i] = array[j] 1 = 2

//solution
// var array = [1, 2, 4, 4, 3, 3, 6];
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
// const result = countUnique(array); //unique 1,2,3,4,6 ye sab hai baki duplicates h,so total unique are : 5
// console.log(result);
//time complexity is linear o(n)


// [1,2,3,4,3,5,4,6,7,8] => total elements - 10 (not sorted)
// count largest sum of consecutive digits
//num = 4 (means w = 4)
// sum = 25 (means output = 25)
// conditions
// num > array -> error message
// 10 - 4+1 => 7 -> total no. of loops also 2 loops involved in this case


//solution

//function findLargest(array, num){
// if (num > array) {
// throw new Error("num is not greater than array")
// } else {
// let max = 0;
// for (let i = 0; i < array.length - num + 1; i++) {
// let temp = 0; //temp = temporary variable
// for (let j = 0; j < num; j++) { // i
// console.log("i" + i + "j", j) // [1,2,3,4,3,5,4,6,7,8]
// temp += array[i + j]; // j
// }
// if (temp > max) {
// max = temp;
// }

// }
// return max;
// }
//}
// const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
// console.log("result", result)

// another method
// function maximum(array) {
// let temp = 0
// let temp2 = 0
// for (i = 0; i < array.length; i++) {
// for (j = i+1; j < array.length; j++) {
// temp2 = array[i] + array[j]
// if (temp2 > temp) {
// temp = temp2
// }

// }
// }
// return temp
// }

// console.log(maximum([1,5,233,9,10]))

//sahi wala largestconsecutive
// function findlargest(array,num){
// let max=0;
// for(let i=0;i<array.length-num+1;i++){
// console.log("i ka iteration ",i)

// let temp=0
// console.log("starting value temp", temp)

// for(let j=0;j<num;j++){
// console.log("j ka iteration ",j)    

// temp+=array[i + j]//index value 1
// console.log("temp values ", temp)
// }
// if(temp>max){
// max=temp
// }
// }
// return max
// };
// console.log(findlargest([1,2,3,4],2))
//0(n^2)
///////////////////////////////////////////////////  DONE //////////////////////////////////////////////////

// question no. 5 - Divide and conquerer Technique //binary search
// find the index of the given no. in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

//min = 0, element = 1
// max = array.length-1, element = 15
// midIndex = (min+max)/2 => (0+14)/2 => 7(index), element = 8
// if array[midIndex] < number(7)
//min = midIndex+1;
//else if array[midIndex]>number,max = midIndex-1, min = 0, max = 6 {1,2,3,4,5,6,7}
//(min + max)/2 => 3
// index + 1 => 4(min), max = 6{5,6,7}
//(min + max)/2 => 5+1 => 6(min),max = 6
//(min + max)/2 => 6
//else midIndex => 6, element = 7


// //solution
function searchAlgo(array,number){
let min = 0;
let max = array.length-1;
while(min <= max){
let midIndex = Math.floor((min + max)/2);
//console.log("midIndex"+midIndex+"min"+"max"+max);
if(array[midIndex] < number){
min = midIndex + 1;
}else if(array[midIndex] > number){
max = midIndex - 1;
}else{
return midIndex;
}
}
return -1;
}
const result = searchAlgo([1,2,3,4,5,6],6);
console.log(result);

//time complexity binary 0(log(n))



// question-6 => checking square in another array
// arr1 = [1,2,3,4],
//arr2 = [1,9,4,16]
// if(array1[i]*array1[j] === array2[j])
// let isSquare = true

//solution-
// function isSquareCheck(array1,array2){
// for(let i=0; i<array1.length; i++){
// let isSquare = false;
// for(let j=0; j<array2.length; j++){
// if(array1[i]*array1[i] === array2[j]){
// isSquare = true;
// }
// if(j === array2.length-1){
// if(! isSquare) {
// return false;
// }
// }
// }
// }
// return true;
// }
// const result = isSquareCheck([1,2,3,4],[1,9,4,16]);
// console.log(result)
// time complexity 0(n^2)



//optimum solution

//que- checking square in another array
//arr1 = [1,2,3,4], arr2 = [1,9,4,16] -> case1
//arr2 = [1,2,4,2], arr2 = [1,4,4,16] -> case2
// ||
//map 1 = { 1:1, 2:2, 4:1}
//map 2 = {1:1, 4:2, 16:1}


//sol-
// function checkSquare(array1,array2){
// let map1 = {};
// let map2 = {};
// for(item of array1){
// map1[item] = (map1[item] || 0) + 1;
// }
// console.log("Map1",map1);
// for(item1 of array2){
// map2[item1] = (map2[item1] || 0) + 1;
// }
// console.log("Map2",map2);
// for(let key in map1){
// console.log("Key",key)
// if(!map2[key * key]){ //object keys compare in term of square
// return false;
// }
// if(map1[key] !== map2[key *key]){ // value compare
// return false
// }
// }
// return true;
// }
// const res = checkSquare([1,2,4,2],[1,4,4,16]);
// console.log(res)
//time complexity o(n)



//reverse string
function reverseString(s){
let str= "";
for(let i=s.length-1;i>=0;i--){
str += s[i]
console.log("reverse",s[i])
}
return str
}
console.log(reverseString("hello"))
//time complexity is o(n)

// part 2nd of reverse string second method
// by using inbuilt method

// sol-
// function reverseString(str){
// return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"))



/* question related to dsa for interview
1.find the minimum and maximum no. in an array and also find the time complexity.
2.rearrange the string in order of length of words in regular expression.
3.add upto second
4.find the prime no. in an array.
5.total no's of halves.
6.find if no. is present in an array or not.
7.find the maximum occurence of the character in an array.
8
*/

// find the maximum no. in an array and also find the time complexity.
// let array = [1,2,3,4,5,6,7]
// let max = 0
// for(let i=0; i<array.length; i++){
// for(j=1;j<array.length;j++){
// // console.log("2",array[i])
// // console.log("1",array[j])
// if(array[i] < array[j]){
// max= array[j]
// }
// }
// }
// console.log(max)


// find the minimum in an array and also find the time complexity.

//sol-
// let array = [1,2,3,4,5,6,7]
// let min = 0
// for(let i=array.length-1;i>=0;i--){
// for(let j=array.length-2;j>=0;j--){
// console.log("i",array[i])
// console.log("j",array[j])
// if(array[i] < array[j]){
// min = array[i]
// }
// }
// }
// console.log(min)


//que- find the prime no. in an array
//[1,2,3,4,5,6,7]
//sol-
// function getPrimeNo(a){
// for(let i =1;i<=a.length;i++){
// let x=0
// if(a%i== 0 && a%i==1 ){ //not right
// x = a
// }
// else {
// console.log("it is not a prime no.")
// }
// return x
// }

//  }
// //let y = getPrimeNo(7)
// console.log(getPrimeNo([1,2,3,4,5,6,7]))

// function primeN(n){
// for(let i=0;i<=n;i++){
// if(n==2){
// return false
// }
// else if(n%2 !=0){
// return true
// }
// else {
// console.log("not a prime number")
// }
// }
// }
// console.log(primeN(38))


//sahi wala Prime No.
// function isPrime(n){
// if(n<2){
// return `${n} is not a prime number`
// } //doubt when take an empty then also gives true
// for(let i = 2;i<n;i++){
// if(n%i===0){
// return `${n} is not a prime number`
// }
// }
// return `${n} is a prime number`

// }
// console.log(isPrime(-2))


// write a program to reverse the string using recursion




// function reve(str){
// if(str.length==0){
// return str
// }
// return reve(str.slice(1))+str[0]
// }
// console.log(reve("hello"))



// palindrom
// function pallindrome(str){
// if(str.length <= 1 ){
// return str
// }
// return pallindrome(str.slice(1))+str[0]
// }
// console.log(pallindrome("hello"))


//2nd way for pallindrome
// function pallindrome(array){
// for(let i=0; i<array.length; i++){
// for(let j=array.length-1; j>=0; j--){
// if(array[i] != array[j]){
// return "No"
// }else{
// return "Yes"
// }
// }
// }
// return "Yes"
// }
// //const result = pallindrome("dad")
// console.log(pallindrome("mom"))




//capitalize (['abc','pqr','xyz'])
// function capitalize(str){
// if(str.length==0){
// return []
// }
// let result=[];
// let s=str[0] [0].toUpperCase()+str[0].slice(1)
// result.push(s)
// return result.concat(capitalize(str.slice(1) ))
// }
// console.log(capitalize(['abc','pqr','xyz']));





// reverse each word
// function reverseEach(str){
// if(str.length==0)
// return ""
// return reverseEach(str.slice(1))+str[0]
// }
// console.log(reverseEach("they are palying a game"));




// reverse the word of sentence
// function reverse(str){
// if(str.length===1){
// return str;
// }
// return reverse(str.slice(1))+str[0];
// }
// function reverseSenenceByWord(sentence){
// let words = sentence.split(" ");
// for(let i =0;i<words.length;i++){
// words[i]=reverse(words[i])
// }
// return words.join(" ");
// }
// console.log(reverseSenenceByWord("I am Jyoti Pratap"))



// // reverse sentence with reverse word
// function reverse(str){
// if(str.length==0)
// return ""
// return reverse(str.slice(1))+str[0]
// }
// function reverseSentenceWithWord(str){
// // let word = str.split(" ");
// for(let i =0;i<str.length;i++){
// str[i] = reverse(str[i])
// }
// return str.join(" ");
// }
// console.log(reverseSentenceWithWord(["I am Jyoti Pratap tiwari"]));








//find duplicate number
// function duplicate(arr){
// let freq = new Map()
// for(let i =0;i<arr.length;i++){
// if(freq.get(arr[i])== undefined) freq.set(arr[i],1)
// else freq.set(arr[i],freq.get(arr[i])+1)
// }
// console.log(freq)
// }
// console.log(duplicate([1,2,3,4,51,2,1,2]))






//function call itself that is recursion

// function div(arr) {
// if ((arr.length) == 0) {
// return
// }
// else {
// let ele = arr.pop()
// if (ele % 7 == 0) {
// console.log("Yes")
// }
// else {
// console.log("NO")
// } //O(n)
// div(arr)
// }
// }
// let arr = [14, 23, 67, 70, 77, 101, 7, 42, 45]
// let result = div(arr)
// console.log(result)






// print sum of n
function sum(n) {
if (n == 1) {
return 1 //what if array is empty
}
else
return (n + sum(n - 1))
}
let result3 = sum(2)
console.log(result3)





// // fact using resursion
// function fact(n) {
// if (n == 1) {
// return 1
// }
// return n * fact(n - 1)
// }
// let result = fact(3)
// console.log(result)




// //print 0 to n number
// function dis(n) {
// if (n == 1) {
// console.log(n); //doubt
// } else {
// dis(--n);
// console.log(n + 1);
// }
// }
// dis(5);





// faibonic serise
// function fibo(n) {
// if (n <= 2) {
// return 1
// }
// return fibo(n - 1) + fibo(n - 2)
// }
// console.log(fibo(7))



// // product of array
// function prod(arr) {
// if (arr.length == 0) {
// return 1
// }
// return arr.pop() * prod(arr) //doubt
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(prod(arr))





// OR
// product of array
// function prod(arr) {
// if (arr.length == 0) {
// return 1
// }
// return arr[0] * prod(arr.slice(1))
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(prod(arr))


// bubble sort algo simlest and popular
// function bubble(arr){
// for(let i=0;i<arr.length;i++){
// let swap =false;
// for(let j =0;j<arr.length;j++){
// if(arr[j]>arr[j+1]){
// [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
// swap =true //O(n^2)
// }
// }
// if(swap ==false)
// break;
// }
// return arr
// }
// console.log(bubble([233,12,6,89,34,56]))




// selection sort
// function selection(arr){
// let min =0;
// for(let i =0;i<arr.length;i++){
// min =i
// for(let j =i+1;j<arr.length;j++){
// if(arr[min]>arr[j]){
// min =j //O(n^2)
// }
// }
// [arr[i],arr[min]]=[arr[min],arr[i]]
// }
// return arr;

// }
// console.log(selection([3,2,1,7,8]))




// insertion sort
// function insertionSort(arr){
// for(let right =1;right<arr.length;right++){
// let curr=right;
// while(arr[curr-1]>arr[curr]){
// [arr[curr-1],arr[curr]]= [arr[curr],arr[curr-1]]
// curr--;
// }
// }
// return arr //O(n^2)
// }
// console.log(insertionSort([9,8,3,6,1,4,3,2,1]))





// merger sort in js
// let arr = [9,8,7,6,2,3,4];
// function mergeSort(arr){
// if (arr.length <= 1){
// return arr
// }
// let mid = Math.floor(arr.length/2);
// let left = mergeSort(arr.slice(0,mid))
// let right = mergeSort(arr.slice(mid)) //O(N*log N)
// return Sort(left,right)
// }
// function Sort(left, right) {
// let Sortedarr = [];
// let i = 0;
// let j = 0;
// while(i < left.length && j < right.length){
// if(left[i] > right[j]){
// Sortedarr.push(right[j]);
// j++
// }else{
// Sortedarr.push(left[i])
// i++
// }
// }
// while(i < left.length){
// Sortedarr.push(left[i])
// i++
// }
// while(j < right.length){
// Sortedarr.push(right[j])
// j++
// }
// return Sortedarr
// }
// console.log(mergeSort(arr))



//recursion function by technical suneja
//sorting using recursive function
//[2,3,1,4] -> by default case
//[2,1,3,4] -> case 1
//[1,2,3,4] -> final output


// let myArray = [2,3,1,4];
// let myNewList = [];
// let i = 0;
// let j = 1;

// function isSorted(array){
// for(let i=0; i<array.length; i++){
// if(array[i]>array[j]){
// return false;
// }
// }
// return true;
// }

// function sortCheck(array){
// if(isSorted(array)){
// myNewList = array;
// return;
// }
// else if(array[i] < array[j]){
// i++;
// j++;
// sortCheck(array)
// }else{
// [array[i],array[j]]=[array[j],array[i]]
// i=0;
// j=1;
// sortCheck(array)
// }
// }

// sortCheck(myArray);
// console.log(myNewList)


//Helper recursive function
//identify only odd no.'s
//[1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9] -> output

function findOdd(array){
let result = [];
function helperRecursive(inputArray){
if(inputArray.length === 0){
return;
}if(inputArray[0] % 2!==0){
    console.log(inputArray[0])
result.push(inputArray[0])
}
helperRecursive(inputArray.slice(1));// ek ek kr ke send kre ga input array me
}
helperRecursive(array)
return result;
}
const res = findOdd([1,2,3]);
console.log(res)


//linear search Algorithms
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
// const res=isuserExit(users,"abc")
// console.log(res)


//Bubble sort (sorting..) //o(n^2) means quadratic isme 2 baar loop chalta hai
// a sorting algorithm where the largest values bubble up at the top

// function bubbleSort(array){
// for(let i=array.length;i>0;i--){
// for(let j=0;j<i-1;j++){
// if(array[j] > array[j+1]){
// [array[j],array[j+1]]=[array[j+1],array[j]]
// }
// }
// }
// return array;
// }
// const res=bubbleSort([5,3,4,1,2,8,6,7])
// console.log(res)



//Selection sort take too much time
//[0,2,34,22,10,19]

// function selectionSort(array){
// for(let i=0;i<array.length;i++){
// let min=i;
// for(let j=i+1;j<array.length;j++){
// if(array[j]< array[min]){
// min=j;
// }
// }
// if(i!==min){
// temp=array[i];
// array[i]=array[min];
// array[min]=temp;
// }
// }
// return array;
// }
// const res= selectionSort([0,2,34,22,10,19])
// console.log(res);


//Insertion Sort
//Steps
//1. Consider 2nd Element, arr[1] - Start yhi se hoga
//2. arr[j]>cur - swapping performm hogi

// const sorted=(arr)=>{
// for(let i=1;i<arr.length;i++){
// let cur=arr[i];
// let j=i-1;
// while(j>=0 && arr[j]>cur){
// arr[j+1]=arr[j];
// j--;
// }
// arr[j+1]=cur;
// }
// return arr;
// }
// const res=sorted(arr)
// console.log(res);


// Palindrome by technical suneja

// function isPalindrome(str){
// let left=0;
// let right=str.length-1;

// while(left<right){
// if(str[left]!==str[right]){
// return false;
// left++;
// right--;
// }else{
// return true;
// }
// }
// }
// const result = isPalindrome("level")
// console.log(result)


//SAHI WALA PALINDROME
// function isPali(string){
// let left =0;
// let right=string.length-1;

// while(left<right){
// if(string[left]!==string[right]){
// return false
// }else{
// left++
// right--
// }
// }
// return true
// }
// console.log(isPali("el"))

// 2nd type of palindrome
// function isPalindrome(str){
// let reverse= str.split("").reverse().join("");
// return str.toLowerCase() === reverse.toLowerCase();
// }
// console.log(isPalindrome("level"))




function getMissingNo(array,n){
let sum =n*(n+1)/2
for(let i=0;i<array.length;i++){
sum = sum - array[i]; //doubt

}
return sum
}
const result1 = getMissingNo([1,2,3,4,6,7],7)
console.log("missing no",result1)





// function n1(n){
// if(n%3==0 && n%5==0){
// return "c"
// }
// else if(n%3==0)
// return "a"
// else if(n%5==0)
// return "b"
// else {
// return -1
// }

// }

// console.log(n1(-1))


//same hai upar jaisa hi
// function n1(n){
// if(n%3===0 && n%5===0){
// return "a"
// }else if(n%3===0){
// return "b"
// }else if (n%5===0){
// return "c"
// }else {

// return -1
// }
// }
// console.log(n1(10))


// function sqrt(n){
// for(i=0; i<n; i++){
// if(i*i*i==n){
// return i
// }
// }
// return "it is not a perfect square of any number"
// }

// console.log(sqrt(27))


// let arr=[34,54,67,78,98]
// function findmaxmin(arr){
// let max=arr[0]
// let min=arr[arr.length-1]
// for(let i=0;i<arr.length;i++){
// if(arr[i]>max){
// max=arr[i]
// } else if(arr[i]<min){
// min=arr[i]
// }
// }
// return [max,min]
// }
// console.log(findmaxmin(arr))

// let arr=[2,0,1,1,2,0,1]
// function sort(arr){
// for(let i=0;i<arr.length;i++){
// for(j=i+1;j<arr.length;j++){
// if(arr[i]>arr[j])
// [arr[i],arr[j]]=[arr[j],arr[i]]
// }
// } return arr
// }
// console.log(sort(arr))


// function unique(array){
// let arr=[]
// for(i=0; i<array.length; i++){
// if(arr.indexOf(array[i]) < 0){ //doubt
// arr.push(array[i])
// }
// }
// return arr
// }console.log(unique([1,2,3,3,3,4,4,5,6]))


// function isArray(array){
// let arr=[]
// for(let i=0;i<array.length;i++){
// if(array.length===0){
// // arr=array[i]
// return []
// }else{
// arr.push(array[i])
// }
// }
// return arr
// }
// console.log(isArray([1,2,3]))


// let arr = [1,2,3]
// let arr1 = []
// function a(arr){
// for(let i=0;i<arr.length;i++){
// arr1.push(arr[i])
// }
// return arr1
// }
// console.log(a(arr))

// let arr=[]
// arr.push(1,2,3)
// console.log(arr)


// function findDuplicate(nums) {
// let freq = new Map()
// for(let i=0;i<nums.length;i++){
// if(freq.has(nums[i]))
// freq.set(nums[i],freq.get(nums[i])+1)
// else{
// freq.set(nums[i],1)
// }
// }
// let r=[]
// for(let [key,value] of freq){
// if(value >1){
// r.push(value)
// }
// for(let i=0;i<r.length;i++){
// if(r[i]<r[i+1]){
// return r[i+1]
// }
// }
// }
// return r[i]
// }; console.log(findDuplicate([1,2,2,1,1,2,2]))