// //Given two sorted arrays A=[1,3,4,7,10] & B=[2,9,12] merge them
// function mergeSortedArrays(A,B){
//     let n=A.length;
//     let m=B.length;
//     let i=0;
//     let j=0;
//     let k=0;
//     let ans=new Array(n+m);
//     while(i<n && j<m){
//         if(A[i]<B[j]){
//             ans[k]=A[i];
//             i++;
//         }else{
//             ans[k]=B[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n) {

//         ans[k]=A[i];
//         i++;
//         k++;
//     }
//     while (j < m) {
//        ans[k]=B[j];
//         j++;
//         k++;
//     }
//     return ans;
// }

function mergeSortedArrays(A,B){
    let n=A.length;
    let m=B.length;
    let i=0;
    let j=0;

    let ans=[];
    while(i<n && j<m){
        if(A[i]<B[j]){
            ans.push(A[i]);
            i++;
        }else{
            ans.push(B[j]);
            j++;
        }
    }
    while (i < n) {
       ans.push(A[i]);
        i++;
    }
    while (j < m) {
        ans.push(B[j]);
        j++;
    }
    return ans;
}
let A=[1,3,4,7,10];
let B=[2,9,12];
console.log("Merge two sorted Array",mergeSortedArrays(A,B));

function sort(A,low,high){
    if(low==high) return [A[low]] ;
    let mid=Math.floor((low+high)/2);
    let leftSortedArray=sort(A,low,mid);
    let rightSortedArray=sort(A,mid+1,high);
    let mergedArr=mergeSortedArrays(leftSortedArray,rightSortedArray);
    return mergedArr;
}

let B1=[3,7,1,5,3,3,1,2,4];

console.log("Merge Sort Array",sort(B1,0,B1.length-1));

//Insert a element in sorted array
function insert(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>6){
            arr.splice(i,0,6);
            break;
        }
        else{
            continue;
        }
    }
    return arr;
}

let arrr=[1,2,7,9];

console.log("Insert a element in sorted array",insert(arrr));

//Insertion sort using swap
function insertionSort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let  j=i;
        while(j>=0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
            j--;
        }
    }
    return arr;
}

let arrr1=[1,2,7,9,3,4,-5];
console.log("Insertion Sort",insertionSort(arrr1));

//insertion sort using shifting element 

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

let arrr2=[6,5,4,8,9,-3,1,2];
console.log("Insertion Sort Array",insertionSortArray(arrr2));


// //Insertion sort 
// function insertAnElement(arr){
//     let n=arr.length;
//     let lastElement=arr[n-1];
//     let indexToInsert=0;
    
//     for(let i=n-2;i>=0;i--){
//         if(arr[i]>lastElement){
//             arr[i+1]=arr[i];
//         }else{
//             indexToInsert=i+1;
//             break;
//          }
//     }
//     arr[indexToInsert]=lastElement;
//      return arr;
// }

// let arr=[3,1,6,2,8,7,4];
// console.log("sorted array using insertion sort:" + insertAnElement(arr).join(" "));

//Insertion Sort

function insertionSortedArray(arr){
    let n=arr.length;
    let ind=0;
    for(let i=1;i<n;i++){
        let firstElemOfUnsortedPart=arr[i];
        let indexToInsert=0;
        for(let j=ind;j>=0;j--){
            if(arr[j]>firstElemOfUnsortedPart){
                arr[j+1]=arr[j];
            }else{
                indexToInsert=j+1;
                break;
            }
        }
        arr[indexToInsert]=firstElemOfUnsortedPart;
        ind++;
    }
    return arr;
}
let arr1=[3,1,6,2,8,7,4];
console.log("sorted array using insertion sort:" + insertionSortedArray(arr1).join(" "));