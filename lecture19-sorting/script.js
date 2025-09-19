function sortArr(arr){
    let n=arr.length;
    let i=1;
    while(i<n){
        let temp=arr[i];
        let j=i-1;
        while(j>=0 ){
            if(arr[j]>temp ){
                arr[j+1]=arr[j];
            }else{
                break;
            }
            j--;
        }
        arr[j+1]=temp;
        i++;
    }
    return arr;
}

let A=[3,2,1,3,2,1];
console.log(sortArr(A));


//bubble sort
//best case TC=O(N)
//worst case Tc=O(N^2)
//h.w= acverage case
function bubbleSort(arr){
    let n=arr.length;

    for(let i=0;i<n;i++){
        for(let j=0;j+1<n-i;j++){
            if(arr[j]>arr[j+1]){
             [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }

    }
    return arr; 
}

let A1=[1,4,3,2,1,2,5];
console.log(bubbleSort(A1));
