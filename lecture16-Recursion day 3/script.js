
function isAnagram(s1,s2){
    if(s1.length!=s2.length) return false;

    let freq={};
    for(let i=0;i<s1.length;i++){
        freq[s1[i]]=(freq[s1[i]]||0)+1;
    }
    for(let i=0;i<s2.length;i++){
        if(!freq[s1[i]]) return false;
        freq[s2[i]]=(freq[s2[i]]||0)-1;
    }
    for(let value of Object.values(freq)){
        if(value) return false;
    }
    return true;
}
let strArray=["cat","tea","pet","tac","act","eat"];
let inputArr=["cat","tca","eee","tea"];

function countAnagram(strArray,inputArr){
    
    for(let i=0;i<inputArr.length;i++){
        let anagram="";
        for(let j=0;j<strArray.length;j++){
            if(isAnagram(inputArr[i],strArray[j])) {
                anagram+=strArray[j]+""; 
            }
        }
        if(!anagram.length) {
            console.log(-1);
        }else{
            console.log(anagram);
        }
    }

}
countAnagram(strArray,inputArr);


// 6
// cat tea pet tac act eat
// 4
// cat
// tca
// eee
// tea