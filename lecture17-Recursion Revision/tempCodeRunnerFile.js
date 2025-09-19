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