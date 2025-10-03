//Given an array,place its last element at a position such that all smaller elements are in left and all greater elements are in right
function sort(arr){
    let n=arr.length;
    let pivot=arr[n-1];
    let ind=0;
    for(let i=0;i<n;i++){
        if(arr[i]>pivot){
            [arr[i],arr[ind]]=[arr[ind],arr[i]];
            ind++;
        } 
    }
    [arr[ind],arr[pivot]]=[arr[pivot],arr[ind]];
    return pivot;
}

let arrr1=[2,5,6,1,3,4];
console.log(sort(arrr1));


//=============================QUICK SORT================================//
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

function mergeSort(arr,low,high){
    if(low<high){
        let pIndex=sorted(arr,low,high);
        mergeSort(arr,low,pIndex-1);
        mergeSort(arr,pIndex+1,high);
    }
    return arr;
}
let arrr2=[3,6,7,2,1,3];
console.log("Quick Sort :", mergeSort(arrr2,0,arrr2.length-1));


//sort() method

//sort() the array in ascending order
let arrr=[6,3,2,5,1,8];
arrr.sort();  //this is for ascending order sorting
console.log("Ascending Order:",arrr);

//sort() method for sorting the array in desending order
arrr.sort().reverse();  //this is for desending order sorting
console.log("Desending Order:",arrr);

//sort() method for sort the array using comparator in ascending order
arrr=[4,3,5,6,1,2];
arrr.sort((a,b)=>(a-b));
console.log("Ascending order:" ,arrr);

//sort() method for sort the array using comparator in desending order
arrr.sort((a,b)=>(b-a));
console.log("Desending Order:", arrr);

//sort() method for sort the students array object according to their age
let students=[
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
students.sort((a,b)=>(a.age-b.age));
console.log(students);
students.sort((a,b)=>{
    if(a.age==b.age)
     return a.RollNo-b.RollNo;
    
    return a.age-b.age;
})
console.log(students);

//sort() method for sorting the nested array 
const arrrr=[[1,3],[2,1],[1,2],[2,4]];
//sort the above array  according to their first value and then second value
arrrr.sort((a,b)=>(a[0]-b[0]));
console.log("Sorted Array:" ,arrrr);
  
