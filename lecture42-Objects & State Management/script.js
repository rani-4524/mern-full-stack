const fruits = ['apple' , 'banana' ,'orange' , 'apple' ,'orange'];

const ans = fruits.reduce((acc,val)=>{
    acc[val]=(acc[val]||0)+1;
    return acc;
},{});

console.log(ans);


// [[1,2],[3],[[4],[5,6]]]


