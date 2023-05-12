



function insertionSort(arr) {
    for(let i = 0; i<arr.length; i++) {
        while(i >= 0 && arr[i]>arr[i+1]) {
            //swaping
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            i--
        }
    }
    return arr
};console.log(insertionSort([2,1,3]))