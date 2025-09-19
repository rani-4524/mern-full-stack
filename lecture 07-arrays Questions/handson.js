console.log("Handson file");

//print sum of each subarray
function sumOfSubarray(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let subarraysum=0;
        for(let j=i;j<n;j++){
            subarraysum+=arr[j];
            console.log("Sum of subarray from " , i , " to ",j," is ",subarraysum);
        }
    }
}
const arrr=[1,2,3,4];
sumOfSubarray(arrr);

//Function to calculate the maximum sum among all subarrays

function maximumSum(arr){
    let max=arr[0];
    let n=arr.length;
    let start=0;
    let end=n-1;

    for(let i=0;i<n;i++){
        let sum1=0;
        for(let j=i;j<n;j++){
            sum1+=arr[j];
            if(max<sum1){
                max=sum1;
                start=i;
                end=j;
            }
        }
    }
    console.log("Maximum subarray sum from " ,start ," to ",end," is: ",max);
}

const arrr1=[-1,5,-3,2,-1,3];
maximumSum(arrr1);


//count the number of subarrays whose sum is K
const arrr2=[1,2,-3,0,1,-1,1];
const k=0;
function countSubarraySum(arr,k){
    let n=arr.length;
    let count=0;
    for(let i=0;i<=n;i++){
        let sum=0;
        for(let j=i;j<=n;j++){
            sum+=arr[j];
            if(sum==k){
            count++;
            }
        }
    }
    return count;
}
console.log("The Count of subarray sum  of k is: ",countSubarraySum(arrr2,k));

//function to find the largest subarray with sum=k

function largestSubarraySum(arr,k){
    let n=arr.length;
    let length=0;
    for(let i=0;i<n;i++){
        let subarray=0;
        for(let j=i;j<n;j++){
            subarray+=arr[j];
            if(subarray==k){
                length=Math.max(length,j-i+1);
            }
        }
    }
    return length;
}
const arrr3=[1,2,3,4,5];
let k1=3;
console.log("Largest Subarray with sum k is:" ,largestSubarraySum(arrr3,k1));

//function to print all subarrays of size k

function printAllSubarray(arr,k){
    let n= arr.length;
    let result=[];
    for(let i=0;i+k<=n;i++){
        let subarray=" ";
        for(let j=i;j<i+k;j++){
            subarray+=arr[j]+" ";
        }
        result.push(subarray);
    }
    return result;
}
console.log(printAllSubarray(arrr3,k1));
