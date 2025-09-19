console.log("Handson file");
//delete all odd numbers from an array 
function deleteOddElement(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            ans.push(arr[i]);
        }
    }
    return ans.join(' ');
}

let arrr=[1,2,3,4,5];
console.log(deleteOddElement(arrr));

//delete all even numbers from an array 

function deleteEvenElement(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            ans.push(arr[i]);
        }
    }
    return ans.join(' ');
}
console.log(deleteEvenElement(arrr));

