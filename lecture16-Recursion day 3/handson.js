function exp(n){
    if(n==0)
        return 1;
    let ans=exp(n/2);
    if(n&1)
        return 2*ans*ans;
    else
        return ans*ans;
}

let num=5;
console.log(exp(num));