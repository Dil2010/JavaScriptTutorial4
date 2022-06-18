// while loop

// var num=0;

// while (num<100){
//     num+=1;
//     console.log(num);
// }

// function k(){
//     var i=10;
//     console.log(i);
// }

// k();

// for (let num=0;num<100;num++ ){
//     console.log(num);
// }

// var yourAge=18;//number
// let yourName='Bob';//string
// let name={first:'Jane',last:'Doe'};//object
// let truth=false;//boolean
// let groceries =['apple','banana','orange']//array
// let nothing=null;//value null

// //string in Javascript
// let fruit=['banana','orange','balckberry'];
// let morefruit='apple\banaa';
// console.log(morefruit);

// console.log(fruit.indexOf('a'));

// console.log(fruit.length);

// console.log(fruit.slice(2,6));

// console.log(fruit.replace('ban','123'));

// console.log(fruit.toUpperCase());

// console.log(fruit.toLowerCase());

// console.log(fruit.split(','));

// console.log(fruit.split(''));

let fruits=['banana','apple','orange','pineapple'];
console.log(fruits);
// letfruits=new Array('banana','apple','orange','prineapple');

// console.log((fruits[0]));

// fruits[0]='pear';
// console.log(fruits);

// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// //array common method
// console.log('to string',fruits.toString());

// console.log(fruits.join('*'));

// console.log(fruits,fruits.pop(),fruits)

// console.log(fruits.push('blackberry'),fruits);

// console.log(fruits[4]);

// fruits[4]='new fruit';
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift('kini');
// console.log(fruits);

// let vegetables=['aspphrasgus','tomato','bracolli'];
// let allgrocery=fruits.concat(vegetables);
// console.log(allgrocery);

// console.log(allgrocery.reverse());

// console.log(allgrocery.sort());

// let somenumbers=[5,10,2,25,1,3,4];
// console.log(somenumbers.sort());
// console.log(somenumbers.sort(function(a,b){return a-b}));

// let emptyArray= new Array();
// for (let num=0;num<10;num++){
//     emptyArray.push(num);
// }

// console.log(emptyArray);

// let student ={
//     first:'Rafeh',
//     last:'Quaz',
//     age:25,
//     height:170,
//     studentInfo:function (){
//         return this.first+'\n'+this.last+'\n'+this.age;
//     }
// };
// console.log(student.first);
// console.log(student.last);
// student.first='notRafeh';
// student.age++;
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

// consditionally control flows (if else)
// 18-35 is my target demograpic

// var age=prompt('What is your age');

// if((age>=18)&& (age<=35)){
//     sta='target demo';
//     console.log(sta);
// }else{
//     sta='not my audiance'
//     console.log(sta);
// }

// Switch Statement
// difference between weekday vs weekend

// day0-->Sunday
// day 6-->Saturday
// day 4-->Thursday-->Weekday

var day=prompt('What is day');

let t;

//  if(day=='Mon'){
//     t=1;
//  }
//  else if(day=='Tue'){
//     t=2;
//  }
//  else if(day=='Wed'){
//     t=3;
//  }
//  else if(day=='Thu'){
//     t=4;
//  }
//  else if(day=='Fri'){
//     t=5;
//  }
//  else if(day=='Sat'){
//     t=6;
//  }
//  else {
//     t=0;
//  }

switch(day){
    case 'MON':
        t=1;
        break;
    case 'TUE':
        t=2;
        break;
    case 'WED':
        t=3;
        break;
    case 'THU':
        t=4;
        break;
    case 'FRI':
        t=5;
        break;
    case 'SAT':
        t=6;
        break;
    default:
        t=0;
}

console.log(t);

switch(t){
    case 0:
        text='Weekend';
        break;
    case 6:
        text='Weekend';
        break;
    default:
        text='weekday'
}

console.log(text);