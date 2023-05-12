// function reverseArr(arr){

//     let n =arr.length;
    
    // for(let i=0;i<n/2;i++){
    //     [arr[i],arr[n-i-1]]=[arr[n-i-1],arr[i]]
    // }
    // return arr

    /** not exact correct
     *  let nArr=[]
    // for(let i=n;i>0;i--){
    //     nArr +=i
    // }
    // return nArr; */
    
//};
//console.log(reverseArr([1,4,3,2]))//2 3 4 1

// function findMinAndMax(A,N){
//     //code here
//     if(A ==null || A.length==0)return ;
   
//     let min=A[0];
//     let max=A[0];
//     let sum=0
    
//     //console.log(A.length) 
//     //console.log(N)
//     for(let i=1;i<N;i++){
//         // min=Math.min(min,A[i])
//         // max=Math.max(max,A[i])
//         // sum=min+max
//         if(A[i]<min){
//            min=A[i];//-4
//            console.log("min",min)
          
//         }if (A[i+1]>max){
//             max=A[i+1];//5
//             console.log("max",max)
//         }
//        // console.log("sum",min)
//        sum=min+max
        
        
//      }return sum;
   
// };
// var vv=findMinAndMax([-2, 1, -4, 5, 3],5)
//  console.log(vv)
//__________________________________________________________

// function findMinMax(A,N){
//     //code here
//     if(A ==null || A.length==0)return ;
   
//     let min=A[0];
//     let max=A[0];
//     let sum=0
    
  
//     //console.log(N)
//     for(let i=1;i<N;i++){
//         min=Math.min(min,A[i]);
//         max=Math.max(max,A[i]);
//         sum=min+max;
       
        
//     }
//     //  console.log("min",min)
//     //  console.log("max",max)
//     //  console.log("sum",sum)
    
//     return sum;
   
// };console.log(findMinMax([-2, 1, -4, 5, 3],5))

// function findKthEle(arr,k){
//     // let n= arr.sort()
//     // console.log(n)
//     for(let i=0;i<arr.length;i++)
//       if(arr[i]==k)
      
//     return arr[i];
//     // console.log(arr)

// };console.log(findKthEle([2,3,5,-1],5))

/*4. leetcode 75 sort colors */

// function sortColors(nums){
// let zero=0,one=0,two=0;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]==0)zero++;
//     if(nums[i]==1)one++;
//     if(nums[i]==2)two++;
// }
// for(let i=0;i<zero;i++)nums[i]=0;
// for(let i=zero;i<zero+one;i++)nums[i]=1;
// for(let i=zero+one;i<nums.length;i++)nums[i]=2;
// return nums

// let start=0,mid=0,end=nums.length-1;
// while(mid<=end){
//     if(nums[mid]==0){
//         [nums[start],nums[mid]]=[nums[mid],nums[start]]
//         start++;
//         mid++;
//     }if(nums[mid]==1){
//         mid++;
//     }else if(nums[mid]==2){
//         [nums[end],nums[mid]]=[nums[mid],nums[end]]
       
//         end--;
//     }   
// }
// return nums
// };console.log(sortColors([2,0,2,1,1,0]))


// /*5 Move negative to one side of Array */
// function moveAllNegative(arr){
//     let left=0,right=arr.length-1;
//     while(left<right){

//         while(arr[left]<0)left++;
//         while(arr[right]>0)right--;

//         if(left>right)break;
//         [arr[left],arr[right]]=[arr[right],arr[left]]
        
//     }
//     return arr
// };console.log(moveAllNegative([-1,2,-3,4,5,6,-7,8,9,-6,3]))


// /**6.  189. Rotate Array leetcode
//  * 
//  *  O(n); O(1) */
// function rotate(nums, k) {

//     let n=nums.length;
//     k=k%n;
//     reverseArray(nums,0,n-1);
//     reverseArray(nums,0,k-1);
//     reverseArray(nums,k,n-1);
//     return nums

// };
// function reverseArray(nums,start,end){
//     for(let i=start,j=end;i<j;i++,j--){
//         [nums[i],nums[j]]=[nums[j],nums[i]]
//     }
 
// };console.log(rotate([1,2,3,4,5,6,7],3))//[5,6,7,1,2,3,4]

/**valid paranthese  */
// function isValid(s) {
//     const paranthese=[]
//     const brackets={'(':')','{':'}','[':']'}

//     for(let i=0;i<s.length;i++){
//         if(brackets[s[i]]){
          
//             paranthese.push(s[i])
//         }else if(s[i]=== ')' || s[i]==='}' || s[i]===']'){
//             const lastOpeningBrackets=paranthese.pop();
//                        // console.log(lastOpeningBrackets) //(

//             if(brackets[lastOpeningBrackets]!==s[i]){
//                 return false
//             }
//         }
//     }
//     //console.log(paranthese.length===0)//true
//     return paranthese.length===0
    
// };console.log(isValid("()[]{}")) //

/**_____________________________________________ STRING ______________________________________________ */

//  /*2. palidrome ||gfg  */
function isPalindrome(S){
    //code here
    let n=S.length
    for(let i=0;i<n/2;i++){
        if(S[i]!=S[n-1-i])return 0;
        //console.log(S[i])
    }
    return 1;
};console.log(isPalindrome("aba")) //


// /*3.find duplicate character in string || gfg  O(n) O(1)*/
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
// };printDups("test stringg")

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

	





