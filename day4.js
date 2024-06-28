//day 4 
//topics covered are strings and  functions in javavscript
//strings 


//creation
let a="my name is amanjot singh";
// printiing a string 
console.log(typeof(a));
console.log(a);
a[5]='u';
console.log(a);
// the result remains the same and do not change
// bcoz sttrig is immutable in javascript

//creation of string using new operator
let str=new String("Amanjot singh");
console.log(str);

// the symbol `` is used for creating template strings
//that is spaced as created and in output as well
let name=`i am 
pursuing 
b tech in 
computer 
science anmd engineering`;
console.log(name);

//VARIOUS IN BUILT OPERATIONS IN STRING 
//CONCATENATION
console.log(name+a);
let final=`${str}${a}`;
console.log(final);

//length function 
let len=name.length;
console.log("the length of the name string is ",len);

//uppercase function 
console.log(name.toUpperCase());
console.log(final.toUpperCase());
console.log(final);
// from above we can conclude that the original string is not affected in case of uppercase and lowercase functions 


//lowercase function 
let upp=new String ("GURU NANAK DEV ENGINEERING COLLEGE");
console.log(upp.toLowerCase());
// from above we can conclude that the original string is not affected in case of uppercase and lowercase functions 


//substring 
let th="tommy hilfiger is a renowed brand ";
//if parameter is mentioned in aubstring function its is starting point and ending point is the end of the string
console.log(th.substring(3));
//if  two parameter is mentioned in substring function then
//first is starting point and second is ending point of substring
console.log(th.substring(5,12));

//split method 
//the mentioned parameter is used to split the string 
console.log(th.split(' '));
console.log(th.split('a'));

//join method 
//it is used to join the string which is split byt the split method and is joined by parameter mentioned
let sp=th.split(' ');
console.log(sp.join('-'));




//FUNCTIONS IN JAVASCRIPT
//CREATING A FUNCTION
function gr(){
    console.log('i am the first function in javascript');
}
//function call
gr();

//function with parameters
//no need to specify the let var or const in parameters
function avg(a,b,c){
    let ans =(a+b+c)/3;
    console.log('the average of the three number is ',ans);

}
avg(6,7,8);

//function with return type
function fact(n){
    let ans=1;
    for(let i=2;i<=n;i++)
        ans=ans*i;
    return ans;
}
let fac=fact(7);
console.log('the factorial is ',fac);

//********** important***************
// function can be embedded in variable as well
const solve=function(a,b)
{
    return a*b;
}
console.log(solve(12,12));


//arrow functions 
const getexp=(x,y)=>{
    return x**y;
}
console.log(getexp(2,8));