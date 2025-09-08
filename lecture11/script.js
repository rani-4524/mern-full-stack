/* write a function to print all the palindromic substrings of a string */

/* ===================Searching===============*/

let arr=[];
for(let i=0;i<100;i++){
    arr.push(i+1);
}
for(let i=0;i<NaN;i++){
    if(arr[i]==57){
        console.log(i);
        break;
    }
}
//console.log(arr);

let arr1=[1,2,4,4,6,6,6,8];
let firstIndexOf6=-1;
let lastIndexOf6=-1;
for(let i=0;i<arr1.length;i++){
    if(arr[i]===6){
        if(firstIndexOf6==-1)
        {
            firstIndexOf6=i;

        }
    
     lastIndexOf6=i
    }
}

console.log({firstIndexOf6,lastIndexOf6});