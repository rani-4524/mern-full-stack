//question find the frequency of each element in the arr

let arr=[2,3,4,1,0,1,2,3,4,5,10];
let map=new Map();
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    } else{
        map.set(arr[i],1);
    }
}

let obj={};
console.log("Method 1 of printing");
for(let key of map.keys())
    console.log(key, map.get(key));

console.log("Method 2 of printing");
for(let key of map.keys())
    obj[`${key}`]=map.get(key);
console.log(obj);

console.log("Method 3 of printing");
for(let [key,value] of map){
    console.log({key,value});
}

/* About rest operator and destructuring
const [a,...b]=[1,2,4,5];
console.log({a,b});
*/

// question :  remove duplicates from an array and print the array

arr=[1,2,3,2,3,5,1,3,2];
// let set =new Set(arr);
// console.log(set);
console.log([...new Set(arr)]);


//find the frequency of all words in a paragraph (only spaces , A-Z & a-z letters will be there)

const paragraph="Hello how are you How was your day Did you eat how did you find that";

let words=paragraph.toLowerCase().split(" ");
//console.log(str.split(' '));
let wordsMap=new Map();
for(let i=0;i<words.length;i++){
    wordsMap.set(words[i], (wordsMap.get(words[i])||0)+1);
    // if(map1.has(str[i])){
    //     map1.set(str[i],map1.get(str[i])+1);
    // } else{
    //     map1.set(str[i],1);
    // }
}
let freq={};
for(let [key,value] of wordsMap)
    freq[key]=value;

console.log(freq);


//Anagrams
//when two words have same wxact letters but order may change

let str1="mad";
let str2="dam";

//create a map of silent ,then traverse in listen and start decrementing the freq of each element if it exists in map
//TC - O(m+n)
//SC - O(26) ¬ O(1)
function isAnagram(a,b){
    if(str1.length!=str2.length) return false;
    let freqObj={};
  
    for(let i=0;i<str1.length;i++)
       freqObj[str1[i]]=(freqObj[str1[i]]||0)+1;
     
    for(let i=0;i<str2.length;i++){
        if(!freqObj[str2[i]]) return false;
        freqObj[str2[i]]=freqObj[str2[i]]-1;
    }

    for(let value of Object.values(freqObj)) if(value) return false;

return true;
}

console.log(isAnagram(str1,str2));


//************************RECURSION*************************** */
//TC- O(n)
//SC- O(1) , however it uses stack space,nut this is not considered in space complexity

/* two things to look for a correct recursive code
A. Base condition must always get hit
B.Combining return value of recursive

*/
function factorial(N){
    if(N==0)
        return 1;

    let fact=N*factorial(N-1);
    return fact;
}

console.log("factorial of 5 is:",factorial(5));

//print numbers from 1 to N
console.log("Print the numbers 1 to N");
function print1toN(N){
    if(N==0) return ;
    print1toN(N-1);
    console.log(N);
}
print1toN(5);

/* print numbers from N to 1*/
console.log("Print the numbers N to 1");
function print1toN(N){
    if(N==0) return ;
     console.log(N);
    print1toN(N-1);
}
print1toN(5);