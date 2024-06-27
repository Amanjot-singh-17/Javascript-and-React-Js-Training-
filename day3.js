//day 3
//conditional statements 
//iterative statements 


//the various conditional statements are follows:
//if statement
let age=18;
if (age>=18){
    console.log("I can vote");
}

//if-else statement
let number=24;
if (number%2==0)
    console.log("the entered number is even");
else 
console.log("the entered number is odd");


//another example of if else statement:
age=67;
if (age>=18){
    console.log("I can vote");
}
else 
{
    console.log("i cannot vote");
}

//another example for if else statement
let a=345;
if (a>0)
    console.log('the enetered no is positive');
else
    console.log("the enetered no is negative");


//if else if statement
a=-1;
if (a>0)
    console.log("the no is positive");  
else if (a<0)
    console.log("the no is negative");
else
    console.log('the no is zero');


//another example    
a=1;
let b=45;
let c=23;

if (a>b && a>c)
    console.log("a is greatest ",a);
 else if (b>a && b>c)
    console.log("b is greatest ",b);
else 
    console.log("c is greatest ",c);


//switch statement
let num=12;
let num2=12;
let exp='+';
switch(exp)
{
    case '+':
        console.log("the addition of numbers is ",num+num2);
        break;
    case '-':
        console.log("the subtraction of numbers is ",num-num2);
        break;
    case '*':
        console.log("the multiplication of numbers is ",num*num2);
        break;
    case '/':
        console.log("the division of numbers is ",num/num2);
        break; 
    case '%':
        console.log("the division of numbers is ",num%num2);
        break;
    default:
        console.log("the entered option is invalid");
} 



//looping statements ;
//while loop
let ass=0;
while (ass<=7){
    console.log('the no is ',ass);
    ass++;
}

//for loop
let ans=1;
let n=5;
for (let i=1;i<=5;i++)
    {
        ans=ans*i;
    }
    console.log('the factorial of number is',ans);

//do while 
let rt=0;
do {
    console.log('the do while loop execution');

}  while(ass<0) ; 

