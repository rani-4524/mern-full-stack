console.log("Handson File");
//function to print the sum of all subarrays

const arrr=[1,2,3,4];
function subarraySum(arr){
    let sum=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        let subsum=0;
        for(j=i;j<n;j++){
            subsum+=arr[j];
            sum+=subsum;
        }
    }
    return sum;
}
console.log("Sum of subarray is :", subarraySum(arrr));

//Another example of finding sum of subarray without function
const arrrr=[1,2,3];
let sum=0;
for(let i=0;i<arrrr.length;i++){
    let subsum=0;
    for(let j=i;j<arrrr.length;j++){
        subsum+=arrrr[j];
        sum+=subsum;
    }
}
console.log(sum);


/*============DELETIONS IN ARRAY============= */
//Question- delete the last element of the array
//using slice() -> doesn't change the array,until assigned to array itself 
let arrr1=[1,2,3,4,5,6];
arrr1=arrr1.slice(0,arrr1.length-1);
console.log("After delete the last element:",arrr1);

//using splice()->changes the original array
arrr1.splice(arrr1.length-1,1);
console.log("After delete the last element:", arrr1);

//using pop()
arrr1.pop();
console.log("After delete the element:", arrr1);

//By changing the length of the array
arrr1.length=arrr1.length-1;
console.log("After delete the last element:",arrr1);

//Question-Insertion of element in an array
//using push() method
arrr1.push(3);
console.log("After insert the element:",arrr1);

//using splice method
arrr1.splice(3,0,4);
console.log("After insert the element:",arrr1);

//Question- delete the element from begining
const arrr2=[10,20,30,40];
console.log("Array before deletion",arrr2);
arrr2.shift();
console.log("Array after deletion:",arrr2);

//Insertion element in begining of an array
//using unshift() method
arrr2.unshift(10);
console.log("Array after insertion:",arrr2);

//using splice() method
arrr2.splice(0,0,15);
console.log("Array after insert the element:", arrr2);

//using loops
//just shift the all elements left by one index,and decrease the length property value by 1

const arrr3=[1,2,3,4,5];
console.log("Array before the deletion:",arrr3);
for(let i=0;i<arrr3.length-1;i++){
    arrr3[i]=arrr3[i+1];
}
arrr3.length=arrr3.length-1;
console.log("Array after the deletion:",arrr3);




