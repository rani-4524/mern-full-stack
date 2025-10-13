console.log("HANDSON FILE");
const valuee=4+("34" * " ")/17;
console.log({valuee});

const spacee=" ";
console.log(spacee*1);

//Given a n*n grid. find the primary diagonal sum

const arrr1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("length",arrr1.length);
/*
[
    [(0,0),(0,1),(0,2)],
    [(1,0),(1,1),(1,2)],
    [(2,0),(2,1),(2,2)],
]
 */

//for primary diagonal --> i==j
//TC =O(n) ,  SC=O(1)
let summ=0;
for(let i=0;i<arrr1.length;i++){
    summ+=arrr1[i][i];
}
console.log({summ});


//secondary diagonal --> i+j=n-1
summ=0;
for(let i=0;i<arrr1.length;i++){
    summ+=arrr1[i][n-i-1];
}
console.log({summ});

//sum of odd columns
summ=0;
for(let i=0;i<arrr1.length;i++){
    for(let j=0;j<arrr1.length;j++){
        if(j%2!=0){
            summ+=arrr1[i][j];
        }
    }
}
console.log({summ});

const arrr2=[
    [1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8]
];
function printOddNumberColElement(arr){
    let rows=arr.length;
    let col=arr[0].length;
    for(let j=0;j<col;j++){
        let ans=" ";
        if(j%2==0) continue;

        for(let i=0;i<rows;i++){
            ans+=arr[i][j]+" ";
            console.log(arr[i][j]);
        }
    }
}
printOddNumberColElement(arrr2);

//Given a 2D matrix , reverse each odd column and print it..

function reverseOddCol(arr){
    let rows=arr.length;
    let col=arr[0].length;

    for(let j=0;j<col;j++){
        if((j+1)%2!=0){
            let top=0;
            let bottom=rows-1;
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

const arrr3=[[1,2,3,4,5,6],
        [2,6,12,43,3,5],
        [8,3,5,21,11,2],
        ];
reverseOddCol(arrr3);


const arrr4=[
    [1,2,3,4],
    [5,6,7,8],
    [2,3,4,9],
    [5,2,4,1]
];

//for primary diagonal --> i==j

let sumOfDiagonal=0;
for(let i=0;i<arrr4.length;i++){
    sumOfDiagonal+=arrr4[i][i];
}
console.log("Sum of Primary diagonal is:", sumOfDiagonal);

//for seconday diagonal --> i+j=n-1

sumOfDiagonal=0;
for(let i=0;i<arrr4.length;i++){
    sumOfDiagonal+=arrr4[i][arrr4.length-i-1];
}
console.log("Sum of secondary diagonal is:", {sumOfDiagonal});

//print the sum of odd columns

sumOfDiagonal=0;
let m=arrr4.length;
for(let i=0;i<m;i++){
    for(let j=0;j<m;j++){
        if(j%2!=0)
          sumOfDiagonal+=arrr4[i][j];
    }
}
 console.log("SUm of odd columns elements is:" ,sumOfDiagonal);

//print the odd column elements

function printOddColElement(arr){
    let row=arr.length;
    let col=arr[0].length;

    for(let j=0;j<col;j++){
        if(j%2==0) continue;
        for(let i=0;i<row;i++){
            console.log(arr[i][j]);
        }
    }
}
printOddColElement(arrr4);

//reverse each odd column and print it

function reverseOddColumns(arr){
    let row=arr.length;
    let col=arr[0].length;
    for(let j=0;j<col;j++){
        if(j%2!=0){
            let top=0;
            let bottom=row-1;
            while(top<bottom){
                let temp=arr[top][j];
                arr[top][j]=arr[bottom][j];
                arr[bottom][j]=temp;
                top++;
                bottom--;
            }
        }
    }
    for(let i=0;i<row;i++){
        console.log(arr[i].join(" "));
    }
    
}

reverseOddColumns(arrr4);

//print the multiplication of 2D array
function printMultiplicationOf2DArray(arr1,arr2,n){
    let result=[];
    for(let i=0;i<n;i++){
        result[i]=[];
        for(let j=0;j<n;j++){
            result[i][j]=0;
            for(let k=0;k<n;k++){
                result[i][j]+=arr1[i][k]*arr2[k][j];
            }
        }
    }

    for(let i=0;i<n;i++){
        console.log(result[i].join(' '));
    }
}

let mat1=[
    [1, 2],
    [3, 4],
];
let mat2=[
    [5, 6],
    [7 ,8],
];
let n1=mat1.length;
printMultiplicationOf2DArray(mat1,mat2,n1);


//rotate the the 2D array by 90 degree

// function rotate2DArray90Degree(arr1,arr2,n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             let temp=arr1[i][j];
//             arr1[i][j]=arr2[i][j];
//             arr2[i][j]=temp;
//         }
//     }
// }

function rotateImage(matrix) {
  const size = matrix.length;
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      // place element from (size-1-j, i) into (i, j)
      result[i][j] = matrix[size - 1 - j][i];
    }
    
  }
  for(let i=0;i<size;i++){
    console.log(result[i].join(' '));
  }
  
}
mat1=[
    [7 , 2,  3 ],
[2 , 3 , 4 ],
[5 , 6 , 1 ],
];
rotateImage(mat1);
