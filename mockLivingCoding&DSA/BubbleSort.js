//______________________________________________Optimized BubbleSort with noSwaps___________


// _________________________________bubble sort with forward for loop___________

function bubbleSort(arr){
  
    var swap=false
    for (let i = 0; i < arr.length ; i++) {
    
        for (let j = 0; j < arr.length - i ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
            // IF no two elements were
            // swapped by inner loop, then break
        if (swap == false)
            break;
    }
    return arr
};
console.log(bubbleSort([-3,-7,6]))

//_____________________________________________________________________________________________
/**
 *(1st pass) arr = [1,6,0,3]
 *                  [1,6,0,3]
 *                  [1,0,6,3]
 *                  [1,0,3,6]
 */

// K’th Smallest / Largest Element in Unsorted Array

//Given an array and a number K where K is smaller than the size of the array.
//Find the K’th smallest element in the given array.Given that all array elements are distinct.
// ye largest element dega
//bubble sorting

function bubbleS(arr, k) {
  let n = arr.length; //5
  var bool = false;
  for (let i = 0; i < n; i++) {
    //5
    for (let j = i; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        bool = true; //agr ek bhi swap ho rh hai toh sorting hogi O(n^2), else sorting nhi hogi already sorted h means O(n)
      }
    }
    if (bool == false) {
      //else sorting nhi hogi already sorted h means O(n)
      break;
    }
  }
  return arr[k - 1]; //smallest ke liye arr[k-1], and largest ke liye :- arr[n-k] //5-2 = 3 index value (5) :- 2nd largest element
}
console.log(bubbleS([2, 1, 6, 3, 5], 1)); //1,2,3,5,6

//T.C= O(n),S.C=O(1)

//_______________________________________max and min of an array_____________________

// function maxAndmin(arr,len) {

//   for (let i = 0; i < len; i++) {
//     for (j = i + 1; j < len; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]; //swaping
//       }
//     }
//   }
//   console.log(arr[0]);//max value of array
//   console.log(arr[0] + arr[1]); //-9 +1 = -8 //minimum sum value of an array
//   console.log(arr[len - 1] + arr[len - 2]); //78 + 9 = 87 //maximum sum value of an array
// };
// maxAndmin([1, 7, 3, 9, 78, -9, 6],7);
// var len = [1, 7, 3, 9, 78, -9, 6]; //-9 1 3 6 7 9 78
// var len =arr.length;

//______________________________________________________________________________________________________________________________________________

//Given string S1 and string S2 ,write function to check whether S2 is a rotation of S1

function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {

        //check whether the character is equal or not
        if(s1[i] != s2[(indexFound + i) % Size])return false;

        // %Size keeps (indexFound+i) in bounds, since it ensures it's value is always less than Size
    }

    return true;
}

// driver code
let s1 = "abcd";
let s2 = "dcab";

if(s1.length != s2.length)
{
    console.log("s2 is not a rotation on s1");
}
else
{
    let indexes = []; //store occurrences of the first character of s1
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }

    let isRotation = false;

    // check if the strings are rotation of each other for every occurrence of firstChar in s2
    for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);

        if(isRotation)
            break;
    }

    if(isRotation)console.log("s2 is rotation of s1")
    else console.log("s2 is not a rotation of s1")
}

//_______________________________________sorting approach__________________________________

/*1. Using a Temporary Variable
//create a temporary variable
let temp;
//swap variables
temp = a;
a = b;
b = temp;

2. Using es6(ES2015) Destructuring assignment

let a=9
let b=8
//using destructuring assignment
a, b = b, a;

console.log(a);
console.log(b);
3. Using Arithmetic Operators
//take input from the users
let a = 3
let b = 2

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);     */


