console.log("Handson File");

//Convert variable name to camel case
function camelCase1(str){
    let ans="";
    str.trim();

    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            ans+=str[i+1].toUpperCase();
            i++;
        }else{
            ans+=str[i];
        }
    }
    return ans;
}
let strr="rani babasaheb aaglave";
console.log(camelCase1(strr));

//Convert variable name to snake case
function snakeCase1(str){
    return str.trim().replaceAll(" " , '_');
}
console.log(snakeCase1(strr));

//create object and add this functions in the object

const caseObj={
    camelCase:function(str){
    let ans="";
    str.trim();

    for(let i=0;i<str.length;i++){
        if(str[i]==' '){
            ans+=str[i+1].toUpperCase();
            i++;
        }else{
            ans+=str[i];
        }
    }
    return ans;
    },
    snakeCase1:function (str){
        return str.trim().replaceAll(" " , '_');
    }
}

console.log(caseObj.camelCase(strr));
console.log(caseObj.snakeCase1(strr));

//write a function to reverse the string

function stringReverse(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        ans+=str[str.length-i-1];
    }
    return ans;
}

let string1="Rani";
console.log("Reverse string: " ,stringReverse(string1));

//write a function to check is a string is palindrome or not 

function isStringPalindrome(str){
    let ans="";
    for(let i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!=str[str.length-i-1]){
            return false;
        }
        return true;

    }
}

let strr2="rar";
console.log("check palindrom" , isStringPalindrome(strr2));

//write a function for count the words in string
let strrr="Rani Aaglave";
console.log(strrr.trim().split().length);

//write a function for find the largest Word
function largestWord(str){
    str=str.trim()
    str=str.split(" ");
    let largest=str[0];
    for(let i=0;i<str.length;i++){
        if(largest.length<str[i].length){
            largest=str[i];
        }
    }
    return largest;
}
let strrr1="Hi I'm Rani";
console.log(largestWord(strrr1));

//HW:write a function for reverser each word of string
function reverseEachWord(str){
    let ans="";
    str=str.trim().split(" ");
    for(let i=0;i<str.length;i++){
     let word=str[i];
     let reverse="";
     for(let j=0;j<word.length;j++){
        reverse+=word[word.length-j-1];
     }
     ans+=reverse;
     if(i<str.length-1){
        ans+=" ";
     }
          
    }
    return ans;
}

let strr3="hi I'm Rani";
console.log(reverseEachWord(strr3));
