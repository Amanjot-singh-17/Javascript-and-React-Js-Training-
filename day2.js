//day2
//operators in javascript

//arithmetic operators
// +,-,*,/,**(power),%
let a=23;
let b=123;
let c="amanjot singh";
// + used for addition of string to string and number to number and even no to string and vice verda
console.log('addition results');
console.log(a+b);
console.log(typeof(a+c));   // a string is formed as result of addition of number and string
console.log(c+a);
console.log(typeof(c+a));

// - used for subtraction of string to string and number to number
console.log('subtraction results');
console.log(a-b);
console.log(typeof(a-c)); 
console.log(a-c);  // a string is formed as result of addition of number and string
console.log(c-a);
console.log(typeof(c-a));

//*multiplication operator
console.log('multiplication');
console.log(a*b);
console.log(a*c);

//division operator and modulus operator
console.log(a/b);
console.log(a%b);

//power operator a raise to power b
console.log(a**b);


//assignment operator
// +=.-=.*=,/=,=
   
let e=12;    //here = is used to assign the value to variable
let d=5;
console.log(e+=d);
console.log(e-=d);
console.log(e*=d);
console.log(e/=d);


//comparison operators
//they return true or false depending on the condition
// >,<,<=,>=,==,===,!=,!== 
console.log(e>d);
console.log(e<d);
console.log(e>=d);
console.log(e<=d);
// ==(loose equality) checks the data is similar or not and dont focus on data type
console.log(e==d);
let f=4;
let g='4';
console.log(e==d);
console.log(e===d);
// ===(strict equality) focus on both the data type and value as well

console.log(e!==d);
console.log(c!=d);


//ternary operator
let age=23;
let ans=age>=18?"I can vote":"I cannot vote";
console.log(ans);


//UNARY OPERATOR
// ++,-- (both [pre and post])
// in pre increment or decrement the value is manipulated first then other actions are performed
//in post increment or decrement the value is manipulated lately and other actions are performed first;
let num=67;
console.log(num++);
console.log(num--);
console.log(++num);
console.log(--num);


//logical operators
// && ,|| ,!
//it always works on truthy and falsy
//truthy is something which i not falsy
//falsy isundefined ,null,zero,false,nan or empty string 
console.log(age>18 && a>0);
age=17;
console.log(age>18 || a>0);
console.log(!true);
console.log(!false);


//bitwise operators
//&,|,^,!,~,<<,>>
//very important to remeneber
console.log(~(0));
//output is  -1





