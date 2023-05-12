// // Albanero Prep session - Ashutosh

//reverse string 
function revS(s){
	let str="";
	for(let i=s.length-1;i>=0;i--){
	str +=s[i]
	}
	return str
}console.log(revS("ravi"))//ivar

function revA(s){
	let AAr=[];
	for(let i=s.length-1;i>=0;i--){
	AAr.push(s[i])
	}
	return AAr
}console.log(revA([1,2,3]))//[3,2,1]

function reverseArr(arr){
    let n =arr.length;
   for(let i=0;i<n/2;i++){
       [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
   }
   return arr
   
};console.log(reverseArr([1,2,3,4]))//2 3 4 1


// // Find All prime numbers in the range of [1,n],
// // The most efficient way of find the prime numbers is using Sieve of Erathosthenes.

var countPrimes = function(n) {
    let newArr = new Array(n+1).fill(0);
   // console.log(seen)
    let count = 0;
    let primes = [];

    for (let i = 2; i <= n; i++) {
        if (newArr[i]) continue
        count++
        primes.push(i);
    for (let mult = i * 2; mult <= n; mult += i)
            newArr[mult] = 1
    }
    return primes
};console.log(countPrimes(15))//[ 2, 3, 5, 7, 11, 13 ]

// // TC: O(nloglogn)

// // 2.Sort Colors / Dutch National Flag problem
// // https://leetcode.com/problems/sort-colors/

function sortColors(nums){

let start=0,mid=0,end=nums.length-1;
while(mid<=end){
    if(nums[mid]==0){
        [nums[start],nums[mid]]=[nums[mid],nums[start]]
        start++;
        mid++;
    }if(nums[mid]==1){
        mid++;
    }else if(nums[mid]==2){
        [nums[end],nums[mid]]=[nums[mid],nums[end]]
       
        end--;
    }   
}
return nums
};console.log(sortColors([2,0,2,1,1,0]))

// // 3. Search in sorted Rotated array.// TC: O(logn) SC: O(1)
// // https://leetcode.com/problems/search-in-rotated-sorted-array/

// var search = function(nums, target) {
//    let low = 0;
//    let high = nums.length-1
//    let mid = low + Math.floor((high-low)/2);
//    while(low<=high){
//        
//        if(nums[mid] == target)
//            return mid;
      
//        else if(nums[low] <= nums[mid])
//            {
//                if(target < nums[mid] && target >= nums[low])
//                    high = mid-1;
//                else
//                    low = mid+1;
//            }
//        else if(target > nums[mid] && target <= nums[high] )
//                 low = mid+1;
//            else
//                high = mid-1;
       
//    }

//    return -1; //if you have to come out of binary search loop , which means answer does not exist
// };

// // 4.https://leetcode.com/problems/valid-parentheses/
  var isValid = function(s) {
    let n = s.length;
    let stack = [];
 
    for(let i=0;i<n;i++){
        if(s[i] == '[' || s[i] == '{' || s[i] == '(')
            stack.push(s[i]);
 
        else if(s[i] == ')' && stack[stack.length-1] == '(' ||
         s[i] == ']' && stack[stack.length-1] == '[' ||
          s[i] == '}' && stack.stack.length-1 == '{')
          stack.pop();
               
                else
                    return false;
    
    }
    return stack.length == 0;
 };

//4.
 var removeDuplicates = function(nums) {
        //uniqueIndex 1 hoga qnki [0] unique hi hota h 
       let uniqueIndex=1
 
       for(let i=0;i<nums.length-1;i++){
               //check nums [i] value match with nums ke aage wle index se !
               if(nums[i]!==nums[i+1]){
                 //if not then,storing nums[i+1] ko variable uniqueIndex m
                       nums[uniqueIndex]=nums[i+1]
                       //loop ko aage badh dia phir 
                       uniqueIndex++
               }     
       }return uniqueIndex;
     };console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))//vs code m output worng hai

//      //5.
//      var removeElement = function(nums, val) {
//         let left = 0;
//         let right = nums.length - 1;
        
//         while (left <= right) {
//             if (nums[left] === val) {
//                 nums[left] = nums[right];
//                 right--;
//             }
//             else {
//                 left++;
//             }
//         }
//         return left;
//     };console.log(removeElement([3,2,2,3],3))//vs code m output worng hai leetcode run ho rh


    const originalArray = [1, 2, 3, 4, 5,6];
    originalArray.splice(2, 3); // [3, 4]
    consol222e.log(originalArray); // [1, 2, 5]
    

// //JavaScript Program to find sum of elements in a given array
// 	function sum(arr) {
// 		let sum = 0; 
// 		for (let i = 0; i < arr.length; i++)
// 			sum += arr[i];

// 		return sum;
// 	};console.log(sum([12, 3, 4, 15]))

// function findKthEle(arr,k){
//     // let n= arr.sort((a,b)=>a-b)
//     // console.log(n)
//     for(let i=0;i<arr.length;i++)
//       if(arr[i]==k)
      
//     return arr[i];
//     // console.log(arr)

// };console.log(findKthEle([2,3,5,-1],3))

//    function findKthLargest(nums, k){
//     let n=nums.length
//     nums.sort((a,b)=>a-b);

//     console.log(nums)
//     return nums[n-k]; //largest nums[n-k] , smallest k liye nums[k-1] 
// };console.log(findKthLargest([1,2,4,3],1))

//approach by kadane's algoritham's (optimize solution)
//T.C:O(n), S.C:O(1) */
// var maxSubArray = function (nums) {//KHADHENS ALGO
//     let max = nums[0];
//     //console.log(nums[0])
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) { //nums.length-1 ,nhi lgya infinite jaa rhi thi loop .
//      // console.log("nums len",nums.length)
//       sum += nums[i];
//       //console.log("sum",sum)
//       if (sum > max) {
//         max = sum;
//       }
//       else if  (sum < 0) {
//         sum = 0;
//       }
//     }
//     return max;
//   };
//   console.log("maximum sum",maxSubArray([-2, 1, -3]));//1


//   //--------------------------MERGE SORT
// function merge(arr,s,e){
//     let mid=Math.floor((s+e)/2)
//     let l1=mid-s+1,l2=e-mid
//     let a=[],b=[];
//     let k=s;
//   //add values 
//     for(let i=0;i<l1;i++)
//       a[i]=arr[k++]
//     for(let j=0;j<l2;j++)
//       b[j]=arr[k++]
  
//     let i=0,j=0,m=s;//m mid hai yha par dont confused
//     while(i<l1 && j<l2){
//       if(a[i]<b[j])
//         arr[m++]=a[i++]
//       else
//         arr[m++]=b[j++]
//     }
//     if(i<l1)
//       arr[m++]=a[i++]
//     else(j<l2)
//       arr[m++]=b[j++]
  
//     return arr
//   }
  
//   function mS(arr,s,e){
//     //base case
//     if(s>=e) return -1
//     let mid=Math.floor((s+e)/2)
//     mS(arr,s,mid)//merging left 
//     mS(arr,mid+1,e)//merging right
//     return merge(arr,s,e)//final merge
//   }
//   let a=[4,5,3,7]
//   console.log(mS(a,0,a.length-1))
//   /*Merge Sort is an efficient, stable sorting algorithm with an average,
//    best-case, and worst-case time complexity of  T.C = O(n log n), S.C = n */


// function fact(n){
//     let fNum=1;
//      for(let i=n;i>0;i--){
//          fNum *=i
//      }
//      return fNum
//  };console.log(fact(5))//120

//  function isPrime(n){
//     if(n<=1)return false

//     for(let i=2;i<n;i++){
//         if(n % 2===0)return false
//     }
//     return true;
//  };console.log(isPrime(4))//false

//  function isEven(n){
//     if(!n)return false

//     for(let i=0;i<n;i++){
//         if(n % 2===0)return false
//     }
//     return true;
//  };console.log(isEven(3))//true

//  function isOdd(n){
//     if(!n)return false

//     for(let i=0;i<n;i++){
//         if(n % 2 !==0)return false
//     }
//     return true;
//  };console.log(isOdd(2))//true

 // function itrativeFibonacci(num){ //when num =4
    //     let arr =[0,1]
    //     sum =0
    //     for(let i=0; i<num;i++){ //
    //         sum = arr[i] + arr[i+1] //already present 0+1 ,1  
    //         arr.push(sum)//[0,1,1]
    //     }
    //     console.log(arr)
    // };
    // itrativeFibonacci(4)

//---------------------------------------------------------STRINGS
// function removeDuplicatesStr(s) {
//     let n=s.length;
//     let map = new Map();
//     let str = "";
//     for (var i = 0; i < n; i++) {
//         if (!map.has(s[i])) {
//             str += s[i];
//             map.set(s[i], 1);
//             //console.log(map)
//         }
//     }
//     return str;
// };console.log(removeDuplicatesStr("ravii")) //ravi

//another method to remove duplicate string by using set 
function removeDuplicate(str){
    let n=str.length;
    // Create a set using String characters
    var s = new Set();
     
    // HashSet doesn't allow repetition of elements
    for (var i = 0;i<n;i++)
        s.add(str[i]);

    // Print content of the set
    for (let value of s) {

        console.log(value);
}
};console.log(removeDuplicate("ravii"))// r a v i

/*3.find duplicate character in string || gfg  O(n) O(1)*/
// function printDups(str){
// 	let count = new Map();
// 	for (let i = 0; i < str.length; i++) {
// 		if(count.has(str[i])){
// 			count.set(str[i],count.get(str[i])+1);
// 		}
// 		else{
// 			count.set(str[i],1);
// 		}
// 		//increase the count of characters by 1
// 	}

// 	for (let [key,value] of count) { //iterating through the unordered map
// 		if (value > 1) //if the count of characters is greater than 1 then duplicate found
// 			console.log(key,", count = ",value);
// 	}
// };printDups("apple")   //p count = 2


//  /*2. palidrome ||gfg  */
// function isPalindrome(S){
//     //code here
//     let n=S.length
//     for(let i=0;i<n/2;i++){
//         if(S[i]!=S[n-1-i])return 0;
//         //console.log(S[i])
//     }
//     return 1;
// };console.log(isPalindrome("aba")) //

// function longestCommonPrefix(strs) {
//     if(strs.length == 0) {return ""}
//     let str1 = strs[0];
//     for (let i=0; i<str1.length; i++) { //strs[0] : "flower" esme hi itrate hoga 
//             for(j=1; j<strs.length; j++){  // ye pure me hoga itate 
//                     if(str1[i]!= strs[j][i]){ 
//                             return str1.slice(0,i)
//                     }
//             }
            
            
//     }return str1
// };console.log(longestCommonPrefix(["flower","flow","flight"]))


//--------------------------------------------------LINKED LIST

// JavaScript program for reversing the linked list || GFG
// var head;
// 	class Node {
// 		constructor(data) {
// 			this.data = data;
// 			this.next = null;
// 		}
// 	}
//  head = new Node(10);
// 	head.next = new Node(20);

// 	// prints content of double linked list
// 	function printNode(node) {
// 		while (node != null) {
// 			console.log(node.data);
// 			node = node.next;
// 		}
// 	}; printNode(head);//10 20 
//     console.log("Reversed linked list")

// 		/* Function to reverse the linked list */
// 		function reverseNode(node) {
// 			var prev = null, current = node, next = null;
		
// 				while (current != null) {
// 					next = current.next;
// 					current.next = prev;
// 					prev = current;
// 					current = next;
// 				}
// 				return prev;
// 			};
// 			printNode(reverseNode(head));//20 10


//____________________________remove nth node from end of list 
// javascript implementation of the approach
// 	var head;
// 	class Node {
// 		constructor(data) {
// 			this.data = data;
// 			this.next = null;
// 		}
// 	}

// //insert a new Node at front of the list
// head=new Node(1)
// head.next=new Node(2)
// head.next.next=new Node(3)

// // Function to print the linked list
// 	function printNode(node) {
// 		while (node != null) {
// 			console.log(node.data);
// 			node = node.next;
// 		}
// 	};printNode(head);
// 		console.log("Linked List after Deletion is:");

// 	// Function to delete the nth node 
	// function deleteNode(n) {
	// 	// First pointer will point to the head of the linked list
	// 			var first = head;
	// 	// Second pointer will point to the Nth node from the beginning
	// 			var second = head;
	// 			for (i = 0; i < n; i++) {
	// 	// If count of nodes in the given linked list is <= N
	// 				if (second.next == null) {
	// 	// If count = N i.e. delete the head node
	// 					//if (i == n - 1)//2
	// 						head = head.next;
	// 					return;
	// 				}
	// 				second = second.next;
	// 			}
	// 	// Increment both the pointers by one until second pointer reaches the end
	// 			while (second.next != null) {
	// 				first = first.next;
	// 				second = second.next;
	// 			}
	// 	// First must be pointing to the Nth node from the end by now So, delete the node first is pointing to
	// 		first.next = first.next.next;
	// 		};var N = 3;
	// 		deleteNode(N);
    //       console.log("after delete nth node")
 	// 		printNode(head);
// /*
// https://leetcode.com/problems/middle-of-the-linked-list/description/
// */

// var head;
// class Node {
// 	constructor(data) {
// 		this.data = data;
// 		this.next = null;
// 	}
// }

// //insert a new Node at front of the list
// head=new Node(1)
// head.next=new Node(2)
// head.next.next=new Node(3)
// head.next.next.next=new Node(4)
// head.next.next.next.next=new Node(5)
// head.next.next.next.next.next=new Node(6)


// Function to print the linked list
// function printNode(node) {
// 	while (node != null) {
// 		console.log(node.data);
// 		node = node.next;
// 	}
// };printNode(head);

// function middleNode(node) {

//    let slow = node;
//    let fast = node;

//    while(fast != null && fast.next != null){

//            slow = slow.next;
//            fast = fast.next.next;
//    }
//    return slow;
// };console.log(middleNode(head)) //4 5 6



