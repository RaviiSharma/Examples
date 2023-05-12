
// // //____________________________________quickSort_________________________________
/*Worst-Case Complexity
Merge sort performs the same number of comparison and assignment operations for an array of a particular size. Therefore,
 its worst-case time complexity is the same as best-case and average-case time complexity, that is, O(n log n).
 
In quicksort, as we’ve already discussed, the choice of the pivot plays an important role. Let’s suppose we always choose 
the rightmost element of a list to be the pivot and the input array is reverse-sorted. The partitions created
 will be highly unbalanced (of sizes 0 and (n - 1) for a list of size n); that is, the sizes of the partitions differ a lot. This
  results in the worst-case time complexity of O(n2). */
// tc=O(n2), sc= O(1) no extra space taken 
function swap(arr, left, right){ //swaping elements

    [arr[left],arr[right]]=[arr[right],arr[left]]
}
function partition(arr, left, right) {
    var pivot   = arr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        if (arr[i] < pivot) {
            i++;
        }
        if (arr[j] > pivot) {
            j--;
        }
        else if (i <= j) {
            swap(arr, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    //console.log(i)
    return i;
}

function quickSort(arr, left, right) {
   // var index;
    if (arr.length > 1) {
       var index = partition(arr, left, right); //index returned from partition
       
        //console.log(index) //4 2 1 3 5
        if (left < index -1) { //more elements on the left side of the pivot
            quickSort(arr, left, index - 1); //merge ho rh h
        }
        if (right > index) { //more elements on the right side of the pivot
            quickSort(arr, index, right); //merge ho rha h
        }
    }
    return arr;
};
var arr = [5,3,7];
console.log(quickSort(arr, 0, arr.length - 1)); //prints [2,3,5,6,7,9]


// 	// Javascript Program to find the first character that is repeated
	
// 	function findRepeatFirst(s)
// 	{
// 		// this is optimized method
// 		let p = -1, i, k;

// 		// initialized counts of occurrences of
// 		// elements as zero
// 		let MAX_CHAR = 256;
// 		let hash = (MAX_CHAR);
// 		hash.fill(0);

// 		// initialized positions
// 		let pos = new Array(MAX_CHAR);
// 		pos.fill(0);

// 		for (i = 0; i < s.length; i++)
// 		{
// 			k = s[i].charCodeAt();
// 			if (hash[k] == 0)
// 			{
// 				hash[k]++;
// 				pos[k] = i;
// 			}
// 			else if (hash[k] == 1)
// 				hash[k]++;
// 		}

// 		for (i = 0; i < MAX_CHAR; i++)
// 		{
// 			if (hash[i] == 2)
// 			{
// 				if (p == -1) // base case
// 					p = pos[i];
// 				else if (p > pos[i])
// 					p = pos[i];
// 			}
// 		}

// 		return p;
// 	}
	
// 	let str = "abcdefghijaklmnopab";
// 	let pos = findRepeatFirst(str);
// 	if (pos == -1)
// 	console.log("Not found");
// 	else
// 	console.log(str[pos]);

// // // This code is contributed by rameshtravel07.
// function removeDuplicate(str, n)
//     {
//         // Used as index in the modified string
//         var index = 0;
 
//         // Traverse through all characters
//         for (var i = 0; i < n; i++)
//         {
 
//             // Check if str[i] is present before it
//             var j;
//             for (j = 0; j < i; j++)
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }
 
//             // If not present, then add it to
//             // result.
//             if (j == i)
//             {
//                 str[index++] = str[i];
//             }
//         }
         
//         return str.join("").slice(str, index);
//     }
 
//     // Driver code
//         var str = "abcdefghijaklmnopab".split("");
//         var n = str.length;
//         console.log(removeDuplicate(str, n));