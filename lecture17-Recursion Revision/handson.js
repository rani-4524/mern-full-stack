/*=============================PRACTICE PROBLEM ON RECURSION============================ */
// 1. find the count of 11 in an array

function array11(arr,N,index=0){
    if(index>N) return 0;

    let cnt=0;
    if(arr[index]==11)
        cnt++;

cnt+=array11(arr,N,index+1);
return cnt;
}
let A=[1,2,11,3];
let N=4;
console.log(array11(A,N));

// 2. print the array using recursion

function printArrayRecursive(arr,n){
    if(n<=0) return  ;
    console.log(n);
    return printArrayRecursive(arr,n-1);
   
}
let A1=[1,2,3,4];
let n=4;
console.log(printArrayRecursive(A1,n));

// 3. find the lastoccurence of an target element 

function lastOccurence(arr,T,index){
    if(index<0) return -1;

    if(arr[index]==T)
        return index;

    return lastOccurence(arr,T,index-1);
}
let A2=[8,9,4,1,1,2,2];
let T=2;
let i=A2.length-1;
console.log(lastOccurence(A2,T,i));

// 4. find the maxElement from an array

function maxElement(arr,n){
    if(n==1) return arr[0];
   
    let ans=maxElement(arr,n-1);
    if(arr[n-1]>ans)
        return arr[n-1];
    else
        return ans;
}
let B=[2,3,10];
let n1=B.length;
console.log(maxElement(B,n1));

// 5. find the indices of target element from an array

function findIndices(arr,n,x){
    if(n==0) return [];
    let ans=findIndices(arr,n-1,x);

    if(arr[n-1]==x)
        ans.push(n-1);

    return ans;
}
let B1=[1,2,3,2,3,4];
let n2=B1.length;
let x=2;
let result=findIndices(B1,n2,x);
console.log(result.join(" "));      

// 6. find the first occurenece of target element from array

function firstOccurence(arr,index=0,T){
    if(index>arr.length) return -1;

    if(arr[index]==T)
        return index;

    return firstOccurence(arr,index+1,T);
}
let C=[1,2,3,4,2,5,4];
let t=4;
let index=0
console.log(firstOccurence(C,index,t));

// 7. find the minimum element in an array

function minElement(arr,n){
    if(n==1) return arr[0];

    let min=minElement(arr,n-1);
    if(arr[n-1]<min){
        return arr[n-1];
    }else{
        return min;
    }
}
let C1=[1,2,0,3];
let n3=C1.length;
console.log(minElement(C1,n3));

// 8. find the sum of array using recursion

function sumOfArray(arr,n){
    if(n<=0) return 0;
    let sum=arr[n-1];
    return sum+sumOfArray(arr,n-1);
}
let AA=[1,2,3,4,5];
let nn=AA.length;
console.log(sumOfArray(AA,nn));

// 9. find the factorial using recursion
function factorial(n){
    if(n==0) return 1;
    return n*factorial(n-1);
}
let num=4;
console.log(factorial(num));

//print N to 1 numbers using recursion 
function print1toN(n){
    if(n==0) return ;
    console.log(n);
    return print1toN(n-1);
    //return n;
}
let m=5;
print1toN(m);

// print 1 to N numbers using recursion
function print1toN(n){
    if(n==0) return ;
    print1toN(n-1);
    console.log(n);
   
}
let m1=5;
print1toN(m1);

/*print the pattern using recursion
*
* *
* * *
*/
function patternPrint(n){
    if(n==0) return 0;
    patternPrint(n-1);
    let line="";
    for(let i=0;i<n;i++){
        line+="* ";
    }
    console.log(line);
}
let m2=5;
patternPrint(m2);

//print the fibbonacci series

function fibbonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;

    return fibbonacci(n-1)+fibbonacci(n-2);
}

let m3=5;
console.log(fibbonacci(m3));

//print the range 

function printRange(m,n){
    if(m>n) return ;
    console.log(m);
    printRange(m+1,n);
     
}

let x1=5;
let x2=8;
printRange(x1,x2);


function permutation(str,index=0){
    let n=str.length;
    if(n==0) {
        console.log(str);
        return ;
    }
    let arr=str.split(" ");
     
    for(let i=index;i<arr.length;i++){
        [arr[index],arr[i]]=[arr[i],arr[index]];
        str=arr.join(" ");

    }
    return str;

}
let str="abc";
let index1=0;
console.log(permutation(str,index1));