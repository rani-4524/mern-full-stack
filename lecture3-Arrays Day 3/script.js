const arr=[3,5,1,4,5,8];
let sum=[];
sum[0]=arr[0];
for(let i=1;i<arr.length;i++){
    sum[i]=sum[i-1]+arr[i];
}

console.log(sum);

const num=23.5;
console.log(num.toFixed(3)+12);