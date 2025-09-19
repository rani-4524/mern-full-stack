//given a parenthesis string consisting of only '(' & ')'
//check  parenthesis sequence , determine if it's valid or not

function isValidParenthesis(str){
    let n=str.length;
    if(n%2) return false;
    let isValid=true;
    let open=0;
   
    for(let i=0;i<n;i++){
        if(str[i]==='(')
            open++;
        else{
            if(open>0){
                open--;
            }else{
                return false;
            }
        }

    }
    if(open!=0) return false;

    return true;
}

console.log("((()))()()", isValidParenthesis("((()))()()"));
console.log("((())))", isValidParenthesis("((())))"));
console.log("()()()(())", isValidParenthesis("()()()(())"));
console.log("()()()(())", isValidParenthesis("()()()(())"));

//generate all valid parenthesis of length N
//TC = O(2^n)
//SC = O(n)

let allParenthesis=[];
function generateParenthesis(n, str="", ind=0, open=0,close=0){
    if(open<close)
        return;

    if(ind==n){
        if(open==close){
            allParenthesis.push(str);
        }
        return;
    }
    generateParenthesis(n , str + "(" , ind+1, open+1,close);
    generateParenthesis(n , str + ")" , ind + 1 , open ,close+1);
}
generateParenthesis(4);
console.log({allParenthesis});

//Permutation problem
let strPermutations=[];
function permutation(str,index=0){
    let n=str.length;
    if(index==n-1){
        strPermutations.push(str);
        return;
    } 
    let arr=str.split("");
    for(let i=index;i<n;i++){   
     [arr[index],arr[i]]=[arr[i],arr[index]];
      permutation(arr.join(""),index+1);
    }
    
}
permutation("abcd");
console.log({strPermutations});


// function swapStr(str,i,j){
//     let arr=str.split("");
//     [arr[i],arr[j]]=[arr[j],arr[i]];
//     return arr.join("");
// }



