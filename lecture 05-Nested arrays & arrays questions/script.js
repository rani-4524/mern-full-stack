const value=4+("34" * " ")/17;
console.log({value});

const space=" ";
console.log(space*1);

//GIven a n*n grid, find the primary diagonal sum

const arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
// [
//     [(0,0),(0,1),(0,2)],
//     [(1,0),(1,1),(1,2)],
//     [(2,0),(2,1),(2,2)],
// ]
//for primary diagonal --> i==j
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i][i];   
}
console.log({sum});

//TC = O(n)
//SC =O(1)

//secondary diagonal -->i+j=n-1
sum=0;
let n=arr.length;
for(let i=0;i<n;i++){
      sum+=arr[i][n-i-1];
}

console.log({sum});
//sum of odd columns
 sum=0;
 n=arr.length;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(j%2!=0){
            sum+=arr[i][j];
        }
    }
}
console.log({sum});

const arrr=[
    [1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8],
];

function printOddNumberColElement(arr){
    let rows=arr.length;
    let cols=arr[0].length;
    for(let j=0;j<cols;j++){
    let ans="";
    if(j%2==0)  continue;
    for(let i=0;i<rows;i++){   
     ans+=arr[i][j]+" ";
     console.log(arr[i][j]);
    }
   }
}

printOddNumberColElement(arrr);

//given a 2D matrix ,reverse each odd column and print it..

function reverseOddCol(arr){
    let rows=arr.length;
    let cols=arr[0].length;

    for(let j=0;j<cols;j++){
    
        if((j+1)%2!=0)
         {   
        let top=0;
        let bottom =rows-1;
         while(top<bottom){
            let temp=arr[top][j];
            arr[top][j]=arr[bottom][j];
            arr[bottom][j]=temp;
            top++;
            bottom--;
        }
    }
}
    for(let i=0;i<rows;i++){
    console.log(arr[i].join(' '));
}
}

const arr1=[[1,2,3,4,5,6],
        [2,6,12,43,3,5],
        [8,3,5,21,11,2],
        ];
reverseOddCol(arr1);
