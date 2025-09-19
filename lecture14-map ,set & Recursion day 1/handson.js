/* About rest operator and destructuring
const [a,...b]=[1,2,3,4];
console.log({a,b});
 */
/*==========================================SETS IN JS=========================================*/
// set is a collection of unique values
// set doesn't allowed duplicate values
// sets are unordered

//QUESTIOIN: Remove duplicates from  an array and print the array

arrr=[1,2,3,2,3,5,1,3,2];
console.log([...new Set(arr)]);

//find the count of unique element
let arrr2=[1,2,3,4,5,6,1,2,3,4];
let sett2=new Set([...arrr2]);
console.log({sett2});
console.log(sett2.size);

//SOME METHODS IN SET
// 1. add() mathod--> adding new element in set
console.log(sett2.add(8));
// 2. has() method--> checking the element is present in set or not
//It gives boolean values (true/false)
console.log(sett2.has(1));
// 3. size() method--> it give the size of set
console.log(sett2.size);
// 4. delete() method--> remove element from the set
sett2.delete(2);
// 5. clear() method--> clearing all elements from set OR it gives empty set 
//sett2.clear();
console.log({sett2});

//Iterative loop in set 
for(let value of sett2){
    console.log(value);
}

//keys() & values() both return the iterative values of set
console.log(sett2.keys());
console.log(sett2.values());

for(let entry of sett2.entries()){
    console.log(entry);
}


//find union of two sets

let arrr3=[1,2,3,4,5,6];
let arrr4=[4,5,6,7,8];
let union=new Set([...arrr3],[...arrr4]);
console.log(union);

//find intersection of two sets
let settA=new Set(arrr3);
let settB=new Set(arrr4);
let intersection=new Set();
for(let val of settA){
    if(settB.has(val))
        intersection.add(val);
}
console.log([...intersection]);

//find the different elements of two sets
let differnce=new Set();
for(let val of settA){
    if(!settB.has(val))
        differnce.add(val);
}
console.log([...differnce]);


// check the string has all unique characters
let str="world";
let s1=new Set([...str]);
if(s1.size==str.length)
    console.log(true);
else
    console.log(false);

//check subset

let a1=[1,2,3];
let a2=[1,2,3,4,5];
let s2=new Set(a2);
let isSubset=true;
for(let i=0;i<a1.length;i++){
    if(!s2.has(a1[i])){
        isSubset=false;
        break;
    }
}    

console.log(isSubset);

    

/*======================================MAP IN JS========================================= */
//Map stores key value pair
//keys are unique,but values can repeat

//empty map
let m1=new Map();
console.log(m1);

//METHODS IN MAP
// 1. set() method-->add the element in the map
let array=[['a',1],['b',3]];
let m=new Map([...array]);
m.set(['rani',2],['john',3],['ram',9]);
console.log({m});

// 2. has() method-->check the is present or not 
console.log(m.has('a'));

// 3. size() method--> it gives the size of map
console.log(m.size);

// 4. delete() method--> remove key from map
m.delete('b');
console.log({m});

// 5. clear() method--> remove all element from the map
m.clear();
console.log(m);

//question find the frequency of each element in th array

let num=[1,2,3,4,0,1,2,3];
let m2=new Map();
for(let i=0;i<num.length;i++){
    if(m2.has(num[i])){
        m2.set(num[i],m2.get(num[i])+1);
    }else{
        m2.set(num[i],1);
    }
}

for(let val of m2.keys()){
    console.log(val,m2.get(val));
}

//example 2. calculate the frequency of each element of an array
let arrr=[2,3,4,1,0,1,2,3,4,5,10];
let map1=new Map();
for(let i=0;i<arrr.length;i++){
    if(map1.has(arrr[i])){
        map1.set(arrr[i],map1.get(arrr[i])+1);
    }else{
        map1.set(arrr[i],1);
    }
}

let obj1={};
console.log("Method 1 of printing");
for(let key of map1.keys())
    console.log(key,map1.get(key));

console.log("Mathod 2 of printing");
for(let key of map1.key())
    obj1[`${key}`]=map1.get(key);
console.log(obj1);

console.log("Method 3 of printing");
for(let [key,value] of map1){
    console.log({key,value});
}