/* Contest Questions */






/* Q1. Typing Mistake */

function convertKeyboardKey(layout1,layput2,text){
    let map={};
    for(let i=0;i<26;i++){
        map[layout1[i]]=layput2[i];
    }

    let result="";
    for(let ch of text){
        if(/[a-z]/.test(ch)){
            result+=map[ch];
        }else if(/[A-Z]/.test(ch)){
            let lower=ch.toLowerCase();
            result+=map[lower].toUpperCase();
        }else{
            result+=ch;
        }
    }
    return result;
}

let keybooard1="qwertyuiopasdfghjklzxcvbnm";
let keybooard2="veamhjsgqocnrbfxdtwkylupzi";
let text="FpcpEbb2019";
console.log(convertKeyboardKey(keybooard1,keybooard2,text));

/* Q2. Anagram */

/* Q3. Generate all possible substring */
// let userProfile = "abcdefghijklmnopqrstuvwxyz";
let map = new Map();

for (let i = 0; i < userProfile.length; i++) {
  for (let j = i + 1; j < userProfile.length; j++) {
    let subString = userProfile.slice(i, j);
    map.set(subString, true);
  }
}
console.log(map);

/* Optimized code for generate all possible substrings */
let userProfile = "abcdefghijklmnopqrstuvwxyz";
//let subString="";
for(let i=0;i<userProfile.length;i++){
    let subString="";
    for(let j=i;j<userProfile.length;j++){
        subString+=userProfile[j]+"";
       console.log(subString);
    }
}
//console.log(subString.length);


// Print all subarray of array 
let arr=[1,2,3,4];
for(let i=0;i<arr.length;i++){
    let subArr="";
    for(let j=i;j<arr.length;j++){
        subArr+=arr[j]+" ";
        console.log(subArr);
    }
}

/* Q4. Explain the code and what will be the output of this code */
let str = "abcde";
for (let i = 0; i < str.length; i++) {
  str[i]= str[i].toUpperCase();
}
console.log(str); //output-abcde

/* Answer for above question 
   -string are immutable 
   -we cannot change string directly
   -In above str[i]=str[i].toUpperCase() => it tries to change direct str[i] (a=A) that's not possible  
   -so, the output is print same as original string i.e abcde
*/

//Corrected code 
str = "abcde";
str= str.toUpperCase();
console.log(str); //output-ABCDE

/* Write a recursive function to check if a given number is a Fibonacci number or not.
 The function should take an integer as input and return true if the number is a Fibonacci number and false otherwise.
 */

function checkFib(n,a=0,b=1){
    if(n==a || n==b) return true;
    if(b>n) return false;
    return checkFib(n,b,a+b);

}
console.log(checkFib(13)); 
console.log(checkFib(9));
console.log(checkFib(21));

/* You have been tasked with writing a iterative function to find all substrings for a given string.  */
function findSubstring(str){
    for(let i=0;i<str.length;i++){
        let ans="";
        for(let j=i;j<str.length;j++){
            ans+=str[j];
            console.log(ans);
        }
    }
}
 str ="Banana";
 findSubstring(str);

/* You have been tasked with writing a recursive function to find all substrings for a given string.  */
 function find(str,start=0,end=1,result=[]){
    if(start==str.length) return result;
    if(end<=str.length){
        let subString=str.slice(start,end);
        result.push(subString);
        return find(str,start,end+1,result);
    }else{
        return find(str,start+1,start+2,result);
    }
    
 }
 str ="Banana";
 console.log(find(str));

/* Q5. The function to calculate the points */
 function calculatePoints(n) {
  if (n < 2) return n;
  let prevPoints = calculatePoints(n - 1);
  let prevPrevPoints = calculatePoints(n - 2);
  return prevPoints * prevPrevPoints + 1;
}
console.log(calculatePoints(5));
/* the exact total number of points earned by this customer is 7 */

/* Q6. What is the time complexity of the following code 
  ==> Time complexity=O(n log n)
*/
function solve(n) {
  if (n <= 1) return;
  solve(n / 2);
  solve(n / 2);
  for (let i = 0; i < n; i++) console.log(i);
}

function deleteOdd(arr,n){
    let result=[];
   for(let i=0;i<n;i++){
    if(arr[i]%2==0){
      result.push(arr[i]);
    }
  }
  console.log(result.join(" "));
  
}
let arr1=[1,2,3,4,5,6,7,8];
let n=arr1.length;
deleteOdd(arr1,n);



// function checkArrIncreasing(arr){
//     for(let i=0;i<arr.length;i++){
//       if((arr[i]>0) && (arr[i]>arr[i+1])){
//         console.log("YES");
//         }
//    else{
//       console.log("NO"); 
//     }
//   }
// }

// arr1=[1, 2, 3, 4 ,5 ,6];
// checkArrIncreasing(arr1);