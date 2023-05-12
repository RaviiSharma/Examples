//_________________________________in binaary search____________________________
/* function or input should be in monotonic means (asending or descending order)
steps: -
1. find mid , then check with target (target == mid) if its true then return .
2.if not, comapre with target 
> target > mid , then move to right , take again mid , then compare , true return 
> target < mid ,then move to left ,  take again mid , then compare , true return , repeat again n again until start and end are same .
 tc= O(logn) , sc= O(1) */

// function searchArr(){
//     let arr=[2,4,6,]
//     let target =4
//     let start=0
//     let end=arr.length-1
//     let mid= Math.floor((start+end)/2)

//     while(start <= end){//game on 
        
//     if(arr[mid] == target){
//         return mid;
//     }//go to right side

//     if(target > arr[mid]){
//       start = mid+1

//     }else{//go to left side
//         end=mid-1
//     }
//     mid= Math.floor((start+end)/2)
//      //console.log(mid)
// }
// return -1,"nhi hai bhai mere"

// };console.log(searchArr())


// _______________________________binary search first occurance and last occurance____________________________________
//first occurance keys :-
function searchArr(){
    let arr=[2,14,16,18,18,20]
    let target =18
    let start=0
    let end=arr.length-1
    let ans=-1
    mid= Math.floor((start+end)/2)

    while(start <= end){//game on
    
    if(arr[mid] == target){
        ans = mid;
        end = mid-1;
    }//go to right side

    if(target > arr[mid]){
      start = mid+1

    }else{//go to left side
        end = mid-1
    }
    mid= Math.floor((start+end)/2)
     //console.log(mid)
}return ans;

};searchArr()
console.log("first occurance at index",searchArr())

