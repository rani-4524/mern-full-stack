/*================================= Functions================================*/
/*===============================Arrow Functions================================*/
//arrow(3,4); Note : gives error , as arrow functions are not hoisted ,but the variable is

const arrow=(a,b)=>{return a-b};
console.log(arrow(5,2));

//write an arrow function to check if number is divisible by 3 or not
//doing it using more than  1 statement
const arrow1=(a)=>{
    if(a%3==0){
        return true;
    }else{
        return false;
    }
}

console.log(arrow1(6));

//doing it using single statement

const isDivisibleBy3=(num)=> !(num%3);
console.log(isDivisibleBy3(15));
console.log(isDivisibleBy3(19));

//Note : arrow functions do not have their owm `this` keyword , they uses parent's `this`
const student={
    fullName:"Rani aaglave",
    age:20,
    result1: function(resultStatus){
        console.log(this.fullName + " has " + resultStatus + " the Exam");
        console.log(this);   //this shows object properties
    },
    result2: (resultStatus)=>{
        //this.fullName gives undefined ,as parent's this doesn't have `fullName` property
        console.log(this.fullName + " has " + resultStatus + " the Exam");
        console.log(this); //doesn't shows the properties of object , instead shows window object(parenr's this)
    },
};

student.result1("passed");
student.result2("failed");

/*===============================Anonymous Functions================================*/

//basically a function with no name

/*/*===============================Higher Order Functions(HOFs)================================*/
/* Types of HOFs */
/*1. forEach
  -applies the callback functions on each statement 
  -iterates over each element and do

 */
let arr=[2,1,6,3,9];
console.log(
    arr.forEach((value,index,array)=>{
        value*=2;
        array[index]=value;
        console.log(value,index,array);
    })
);

console.log(arr);

let users=[
    {name: "Ramesh" ,age:20},
    {name: "Suresh" ,age:10},
    {name: "Rani" ,age:40},
];

//print the name and age users array using foreach

users.forEach((value)=>{
    console.log(value.name + " " + value.age);
});

/* 2.map() method
  -transforms the array 
  -returns an array
  -doesn't change the original array 
*/

arr=[3,2,9,0,10];
let squareArr=arr.map((value,index,array)=>{
    return value*value;
});
console.log({squareArr});

users=[
    {name:"Ramesh" ,age:20},
    {name:"Suresh" ,age:10},
    {name:"Rani" ,age:40},
];

//transform the name of each user to uppercase

let capitalNamesUsers=users.map((value)=>{
    return {name:value.name.toUpperCase() ,age:value.age};
});

console.log({capitalNamesUsers});

/* 3. filter() method
    -keeps the element that passes the condition
    -returns an array
    -doesn't change the original array
    -nums.filter ((value,index,array)=>condition)

 */


let nums=[2,12,9,18,17];
const evenNums=nums.filter((value)=>(value%2));
console.log({evenNums});

const oddNums=nums.filter((value)=>!(value%2));
console.log({oddNums});

// filter above names array with that names less than 5 characters are eliminated

let names=["Pranjal" ,"bavesh","Uday","Sidharth","Rani"];
let ans=names.filter((value)=>(value[0].length>5));
console.log("Names" + ans);

//    for(let i=0;i<this.players.length;i++){
//             console.log(this.players[i]);
//         }
//     },

//     addPlayers:function(id){
//         let exist=false;
//         for(let i=0;i<this.players.length;i++){
//             if(this.players[i].id==id){
//                 exist=true;
//                 break;
//             }
//         }
//         if(!exist){
//             this.players.push({id:id,score:[]});
//         }else{
//             console.log(`players with their ${id} already exist`);
//         }

/* Practice question */
//Cricket Team

const team={
    name:"Indian Cricket Team",
    players:[{
        id:1,
        score:[10,34,80],
    }],

    display:function(){
        for(let i=0;i<this.players.length;i++){
            console.log(this.players[i]);
        }
    },

    addPlayers:function(id){
        this.players.push({id:id,score:[]});
    },
    addScore: function(id, score) {
        let found = false;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].id == id) {
                this.players[i].score.push(score); // ✅ add score to player's score array
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`Player with id ${id} not found`);
        }
    },

    averageScore:function(id){
        let players=null;
        for(let i=0;i<this.players.length;i++){
            if(this.players[i].id==id){
                players=this.players[i];
                break;
            }
        }
        if(players && players.score.length>0){
            let sum=0;
            for(let i=0;i<players.score.length;i++){
                sum+=players.score[i];
            }
            return sum/players.score.length;
        }else{
            return 0;
        }
    },
    teamAverage:function(){
        
    }
};
team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();

console.log("average score of player 1 is " + team.averageScore(1));
console.log("average score of player 2 is " + team.averageScore(2));
