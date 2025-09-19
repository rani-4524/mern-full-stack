let a1=[1,2,3];
let a2=[1,2,3,4,5];
let s2=new Set(a2);
let isSubset=true;
for(let i=0;i<a1.length;i++){
    if(!s2.has(a1[i])){
        isSubset=false;
        break;
    }
}    

console.log(isSubset);