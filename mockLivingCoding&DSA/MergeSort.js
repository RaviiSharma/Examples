
// T.C = O(n log n), S.C = n 
// ______________________________________Merge Sort________________________________

function merge(arr,s,e){
  let mid=Math.floor((s+e)/2)
  let l1=mid-s+1,l2=e-mid
  let a=[],b=[];
  let k=s;
//add values 
  for(let i=0;i<l1;i++)
    a[i]=arr[k++]
  for(let j=0;j<l2;j++)
    b[j]=arr[k++]

  let i=0,j=0,m=s;//m mid hai yha par dont confused
  while(i<l1 && j<l2){
    if(a[i]<b[j])
      arr[m++]=a[i++]
    else
      arr[m++]=b[j++]
  }
  if(i<l1)
    arr[m++]=a[i++]
  else(j<l2)
    arr[m++]=b[j++]

    

  return arr
}

function mS(arr,s,e){
  //base case
  if(s>=e)
    return -1
  let mid=Math.floor((s+e)/2)
  mS(arr,s,mid)//merging left 
  mS(arr,mid+1,e)//merging right
  return merge(arr,s,e)//final merge
}
let a=[4,5,3,7]
console.log(mS(a,0,a.length-1))
/*Merge Sort is an efficient, stable sorting algorithm with an average,
 best-case, and worst-case time complexity of  T.C = O(n log n), S.C = n */

//______________________________________________ INSERATION SORT____________________________________________

// function fun(arr,n){

//   for(let i=1;i<n;i++){
//     var temp=arr[i]
//     var j=i-1
//     for(;j>=0;j--){
//       if(arr[j]>temp){
//         //shift
//         arr[j+1]=arr[j]
//       }else{
//         //ruk jao
//         break;
//       }
//     }
//   }
//    arr[j+1]=temp;
// };
// //let arr=[3,2,1]
// //let n=3
// console.log(fun([3,2,1],3))


// function insertionSort(arr, n)
// {
// 	let i, key, j;
// 	for (i = 1; i < n; i++)
// 	{
// 		key = arr[i];
// 		j = i - 1;

// 		/* Move elements of arr[0..i-1], that are
// 		greater than key, to one position ahead
// 		of their current position */
// 		while (j >= 0 && arr[j] > key)
// 		{
// 			arr[j + 1] = arr[j];
// 			j = j - 1;
// 		}
// 		arr[j + 1] = key;
   
// 	}
  
// }


// // A utility function to print an array of size n

// function printArray(arr, n)
// {
// 	let i;
// 	for (i = 0; i < n; i++)
// 		console.log(arr[i] + " ")
//     console.log("<br>")
//     console.log(arr[i] + " ");
// 	console.log("<br>");
// }

// //Driver code
// 	let arr = [12, 11, 13, 5, 6 ];
// 	let n = arr.length;

// 	console.log(insertionSort(arr, n));
// 	printArray(arr, n);


// function insertionSort(arr) {
//   for(let i = 0; i<arr.length; i++) {
//       while(i >= 0 && arr[i]>arr[i+1]) {
//           //swaping
//           [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//           i--
//       }
//   }
//   return arr
// };console.log(insertionSort([2,1,3]))