// What is Javascript?

// => High level,interpreted programming language
// => Conforms to the ECMAScript specification
// => Multi paradigm
// => Runs on the clien/browser as well as on the server (Node.js)


// why learn javasript ?

// => it is the programming language of the browser
// => Build very interactive user interface with frameworks like REact
// => Used in building very fast server side and full stack application
// => Used in mobile development (ReactNative,Native Script, Ionic)
// => used in desktop application development (Election JS)


// Code start from here

// console

// alert("Hello");
// console.log("Hello");
// console.warn("This is a warning");
// console.error("This is an error");

// variables
// var,let,const
// var=> globally scope
// let,const => block level scope (mostly use)

// let age=20;
// age=21;
// console.log(age);   // ans=> 21

// const age=20;
// age=21;
// console.log(age);   // ans=> shows error const value can not change and can not declare later

// DATATYPE
// String,Number, Boolean,null,undefined,Symbol

// const name="shitish";
// const age=24;
// const rating=9.3;
// const active=true;
// const x=null;       // (Not initialize any value now)
// const y=undefined;
// let z;

// console.log(typeof (name));
// console.log(typeof (age));
// console.log(typeof (rating));
// console.log(typeof (active));
// console.log(typeof (x));
// console.log(typeof (y));
// console.log(typeof (z));.


// String Concatination

// const name="shitish";
// const age=24;

// Concatination
// console.log("My name is "+ name +" and my age is "+ age);

// Template String
// console.log(`My name is ${name} and my age is ${age}`);

// const msg=`My name is ${name} and my age is ${age}`;
// console.log(msg);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substring(0,3));
// console.log(name.substring(0,3).toUpperCase());


// const s=" aman,shitish,rahul,ayush";
// console.log(s.split(','));


// ARRAYS => Variables that hold multiple values

// const numbers=new Array(1,2,3,4,5);
// const data=['aman','shitish',24,26,true];
// data[3]="ayush";
// data.push("last");
// data.unshift("first");
// data.pop();

// console.log(Array.isArray(data));
// console.log(Array.isArray('shitish'));
// console.log(data.indexOf(24));
// console.log(data);
// console.log(data[1]);


// OBJECT LITERALS

// const person={
//     firstName:"shitish",
//     lastName:"Patel",
//     age:24,
//     hobbies:['music','tabletennis'],
//     address:{
//         city:'Etawah',
//         state:'UP'
//     }
// }

// person.email='shitsih123@gmail.com';  // for adding extra things in objects
// console.log(person);
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName,lastName,address:{city}}=person;
// console.log(firstName);
// console.log(city);


// stringify() The JSON.stringify() method converts a JavaScript object or value to a JSON string,

// parse() The JSON. parse() method parses a JSON string, constructing the JavaScript value or object described by the string


// LOOPS

// const age=[11,23,44,55];
// for (let x of age){
//     console.log(x);
// }



// forEach,map,filter
// age.forEach(function(x){
//     console.log(x);
// })



// const y=age.map(function(x){
//     return x;
// })
// console.log(y);



// const y=age.filter(function(x){
//     return x>25;
// })
// console.log(y);


// Conditionals

// ==  -> check only values
// === -> check values and datattype


// ternary operator
// const x=11;
// const y=x>10 ? 'true' : 'False'
// console.log(y);

// switch(y){
//     case 'true':
//         console.log("True.....");
//         break;
//     case 'false':
//         console.log("False....");
//         break;
//     default:
//         console.log("default....");
//         break;
    
// }


// Functions
//  function sum(x=1,y=4)
//  {
//     // console.log(x+y);
//     return (x+y);
//  }

//  console.log(sum(3,5));

// Fat arrow Function
// const sum=(x,y)=> x+y;
// console.log(sum(3,5));



// OOPS

// Constructor Function
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     // this.dob=dob;
//     this.dob=new Date(dob);
//     // this.getBirthYear=function(){
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName=function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // }
// }


// Person.prototype.getBirthYear=function(){
//     return this.dob.getBirthYear();
// }
// Person.prototype.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`
// }


// class
// class Person{
//     constructor(firstName,lastName,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         // this.dob=dob;
//         this.dob=new Date(dob);   
//     }

//     getBirthYear(){
//         return this.dob.getBirthYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// // Instantiate Object

// const person1= new Person('shitish','patel','01/10/1999');
// const person2= new Person('aman','patel','06/08/1996');

// // console.log(person1.dob.getFullYear());
// // console.log(person1.getBirthYear());
// console.log(person2.getFullName());
// console.log(person1);




// ELEMENT SELECTORS

// Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// // Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }



// --------------------------------------------------------------------------------------------------------

// Map,filter,foreach,reduce,sort

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
  
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });
  
  // filter
  
  // Get 21 and older
  
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
  
//   const canDrink = ages.filter(age => age >= 21);
  
  // Filter retail companies
  
  // const retailCompanies = companies.filter(function(company) {
  //   if(company.category === 'Retail') {
  //     return true;
  //   }
  // });
  
//   const retailCompanies = companies.filter(company => company.category === 'Retail');
  
  // Get 80s companies
  
//   const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  
  // Get companies that lasted 10 years or more
  
//   const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  
  // map
  
  // Create array of company names
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });
  
  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  
  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  
  // const ageMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2);
  
  
  
  // sort
  
  // Sort companies by start year
  
  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  
  // Sort ages
  // const sortAges = ages.sort((a, b) => a - b);
  
  // console.log(sortAges);
  
  
  // reduce
  
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  
  // Get total years for all companies
  
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0);
  
//   const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  
  // Combine Methods
  
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
  
//   console.log(combined);
  

// ----------------------------------------------------------------------------------------------

// async Js programming
// Callback,Promises,async & await

// const datas=[
//     {name:"shitish",profession:"Software Engineer"},
//     {name:"aman",profession:"Software Engineer"}
// ];


// function getDatas(){
//     let output="";
//     setTimeout(() => {
//         datas.forEach((data,index)=>{
//             output += `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML=output;
//     }, 1000);
// }


// function createdata(newdata){
//     setTimeout(() => {
//         datas.push(newdata);
//     }, 2000);
// }

// createdata({name:"rahul",profession:"Software Engineer"})

// getDatas();


// CALLBACK


// function createdata(newdata,callback){
//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000);
// }

// createdata({name:"rahul",profession:"Software Engineer"},getDatas);




// PROMISE

// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             datas.push(newdata);
//             let error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("Error...");
//             }
//         }, 2000);
//     })
// }

// createdata({name:"rahul",profession:"Software Engineer"}).then(getDatas).catch(err => console.log(err));


// Async & Await

// function createdata(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             datas.push(newdata);
//             let error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject("Error...");
//             }
//         }, 2000);
//     })
// }

// async function start(){
//     await createdata({name:"rahul",profession:"Software Engineer"});
//     getDatas();
// };
// start();
