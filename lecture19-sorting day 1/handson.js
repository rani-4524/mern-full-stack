/*=============================Handson File================================== */

console.log("handson File");
//create a function for bubble sort

function bubbleSort(arr){
    for(let i=0;i+1<=arr.length-i;i++){
        for(let j=0;j+1<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
              [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }

        }
    }
    return arr;
}

let AA=[1,6,5,-3,2];
console.log(bubbleSort(AA));

//create a function for selection sort

function selectionSort(arr,n){
    for(let i=0;i<n;i++){
        let minIndex=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]];

    }
    return arr;
}
let A11=[5,-1,3,0,2,4];
let n=A11.length;
console.log(selectionSort(A11,n));

//Create a function for insertion sort

function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let temp=arr[i];
        let j=i-1
        for(;j>=0;j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j];
            }
        }
        arr[j+1]=temp;
    }
    return arr;
}
let A3=[5,4,4,3,3,21,-1];
let n2=A3.length;
console.log(insertionSort(A3,n2));
