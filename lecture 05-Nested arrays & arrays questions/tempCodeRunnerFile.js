
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
