//Given a sorted array merge them 
console.log("Handson File");
function mergeSort(arr1,arr2){
    let n= arr1.length;
    let m= arr2.length;
    let ans=[];
    let i=0;
    let j=0;
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++;
        }
    }
    while(i<n){
        ans.push(arr1[i]);
        i++;
    }
    while(j<m){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}

let arr=[-2,6,7,8];
let arr1=[-1,3,5];
console.log("Merge two sorted array",mergeSort(arr,arr1));

//create a function for merge sort 
function merge(arr,low,high){
    if(low==high) return [arr[low]];
    let mid=Math.floor((low+high)/2);
    let leftSortedArray=merge(arr,low,mid);
    let rightSortedArray=merge(arr,mid+1,high);
    return mergeSort(leftSortedArray,rightSortedArray);
}

let arr3=[8,5,4,2,-7,1,8];
console.log("Merge Sorted Array", merge(arr3,0,arr3.length-1));

//insert a element in sorted array 
function insertElement(arr,x){
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]>x){
            arr.splice(i,0,x);
            break;
        }else{
            continue;
        }
    }
    return arr;
}

let arr4=[3,5,8,9];
let x=6;
console.log("Insert Element in array" ,insertElement(arr4,x));

//insertion sort  using swapping

function insertionSort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let j=i;
        while(j>=0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            j--;
        }
    }
    return arr;
}

let arr5=[6,7,4,3,2,1,-5];
console.log("Insertion Sort" ,insertionSort(arr5));

//insertion sort using shift element 

function insertionSortArray(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=temp;
    }
    return arr;
}

let arr6=[4,6,8,9,2,1,4,-7];
console.log("Insertion sort ",insertionSortArray(arr6));