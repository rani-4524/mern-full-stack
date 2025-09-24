//Given an array,place its last element at a position such that all smaller elements are in left and all greater elements are in right
//input: [2,1,7,5,4]
//output: [1,2,4,7,5] (if there are multiple answers ,print any of them)

function sort(arr){
    let n=arr.length;
    let pivot=arr[n-1];
    let ind=0;
    for(let i=ind;i<n;i++){
        if(arr[i]<=pivot ){
          [arr[i],arr[ind]]=[arr[ind],arr[i]];
          ind++;
        }
    }
   // [arr[ind],arr[high]]=[arr[high],arr[ind]];
    return arr;
}
let A=[2,1,7,5,4];
console.log(sort(A));

function quickSort(arr,low,high){
    if(low<high){
      let pIndex=sort(arr,low,high);
      quickSort(arr,low,pIndex-1);
      quickSort(arr,pIndex+1,high);
  }
  return arr;
}

function sorted(arr,low,high){
    let pivot=arr[high];
    let ind=low;
    for(let i=low;i<high;i++){ 
        if(arr[i]<=pivot){
            [arr[i],arr[ind]]=[arr[ind],arr[i]];
            ind++;
        }
    }
    [arr[ind],arr[high]]=[arr[high],arr[ind]];
    return ind;
}
let arr=[2,1,7,5,4];
console.log(quickSort(arr,0,arr.length-1));

// sort() method
//Sort() method for sort the array in ascending order
let arr1=[6,3,2,5,1,8];
arr1.sort();  //this is for ascending order sorting
console.log("Ascending Order:",arr1);

//Sort() method for sort the array in desending order
arr1.sort().reverse();  //this is for desending order sorting
console.log("Desending Order:",arr1);

//sort() method for sort the array using comparator in ascending order
arr1=[4,3,5,6,1,2];
arr1.sort((a,b)=>(a-b));
console.log("Ascending order:" ,arr1);

//sort() method for sort the array using comparator in desending order
arr1.sort((a,b)=>(b-a));
console.log("Desending Order:", arr1);


let student=[
    { 
        name:"Rani",
        age:19,
        RollNo:10
    },
    {
        name:"Teju",
        age:18,
        RollNo:5
    },
    {
        name:"Rutuja",
        age:18,
        RollNo:12
    }
];
student.sort((a,b)=>(a.age-b.age));
console.log(student);
student.sort((a,b)=>{
    if(a.age==b.age)
     return a.RollNo-b.RollNo;
    
    return a.age-b.age;
})
console.log(student);

//sort() method for nested array
const arr2=[[1,3],[2,1],[1,2],[2,4]];
//sort the above array  according to their first value and then second value
arr2.sort((a,b)=>(a[0]-b[0]));
console.log("Sorted Array:" ,arr2);
  

