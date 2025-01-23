function largestAndSmallest(arr){
    let n = arr.length;
    let smallest = arr[0];
    let largest = arr[0];

    for(let i =0;i<n;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    console.log("The smallest number in the array: " + smallest);
    console.log("The largest number in the array: " + largest);
}

let arr=[7,2,34,1,8];

largestAndSmallest(arr );



//simple version is 

let arr2 = [34,56,1,23,5];

function second(arr2){
    const small = Math.min(...arr2);
    const big = Math.max(...arr2);

    console.log(small+" . "+big)
}
second(arr2);
