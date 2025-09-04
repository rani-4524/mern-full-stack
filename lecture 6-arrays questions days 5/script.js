//function to print sum of all subarray

const arr=[1,2,3,4];
function subArray(arr){
    let sum=0;
    let n =arr.length;

    //loop for subarray starting from different 

    for(let i=0;i<n;i++){
        //for each j, it will represent a subarray starting from i and ending at j

        let subSum=0;
        for(let j=i;j<n;j++){
            subSum+=arr[j];
            sum+=subSum;
        }
    }
    return sum;
}

console.log("Sum", arr, "is", subArray(arr));

// Q. delete the last element of the array
//Using slice () method 

let array=[1,2,3,4,5,6];
array=array.slice(0,array.length);
console.log(array);//using slice method doesn't change the array, until assigned to array itself

//using splice () method --> changes the original array 
//syntax for splice method--> splice(start,count)

array.splice(array.length-1,1);
console.log(array);

//By changing the length of an array 

array.length=array.length-1;
console.log(array);

//using loop 
//just shift all the elements left by one index, and decrease the length property vlaue by 1

for(let i=array.length-1;i>0;i--){
    array[i-1]=arr[i-1];
}

array.length=array.length-1;
console.log(array);