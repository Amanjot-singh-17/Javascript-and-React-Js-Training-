//day 5
//objects 

//objects are defined as the collection of key-value [pairs];
//key is always a string and value can be of any data type

// creation 
let obj={
    name:"amanjot singh",
    age:25,
    height:162,
    weight:"67 kg"
};
//printing as usual
console.log(obj);

// in object use " " for creating string as value

// we can add a function as well in object as key value pair
let newobj={
    name:"amanjot singh",
    age:25,
    height:162,
    weight:"67 kg",
    message:function(){
        console.log("i am new object with function");
    }
}
console.log(newobj);
// calling object's function 
newobj.message();

//creation using constructor
let person = new Object();

person.firstName = "Mayank";
person.lastName = "Pandey";
person.age = 21;
person.hobbies = ["reading", "sleeping", "writing"];
person.message=function(){
    console.log("i am in person object");
}
console.log(person);


//factory function
function createPerson(){

    return {
        firstName : "Mayank",
        lastName : "Pandey",
        age : 21,
        hobbies : ["sleeping", "writing", "playing"]
    }
}

// access using dot operator
console.log(person.age);
console.log(person.hobbies);

// access using bracket notaion
let myName = person["firstname"];
console.log(myName);
let myAge = person["age"];
console.log(myAge);
let message = person["message"]();


// modifying objects  
// adding property in objects 
const people = {
    firstName : "Mayank",
    age : 21
  };
  
  people.lastName = "Pandey";
  people.isRunning = false;
  
  console.log(people);

//   deleting property
delete people.isRunning;
console.log(people);

// changing value of object
people.firstName = "amanjot";
people.lastName = "singh";
people.age = 24;

console.log(people);

// object cloning 
// iteration method 
let newPerson = {};
console.log(newPerson);      // {}

for(let key in person){
    newPerson[key] = person[key];
}
console.log("printing new person");
console.log(newPerson);


// spread operator
 let clonedPerson = {...person};
 console.log("printing cloned object");

console.log(clonedPerson); 



  

