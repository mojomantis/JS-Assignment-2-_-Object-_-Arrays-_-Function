// // Q1

// var cities;
// var citiesarray=[];
// citiesarray[0]= cities;
// console.log(citiesarray);


// // Q2
// for(let i=0; i<5; i++){
//     cities=prompt("enter city no " + (i+1) + "/5");
//     citiesarray[i]=cities;
// }
// console.log(citiesarray);


// // Q3
//  var movies;
//  var moviesarray=[];

//  for(let i=0; i<3; i++){
//      movies=prompt("enter name of fav movie "+ (i+1)+"/3");
//      moviesarray[i]=movies;
//  }
//  console.log(moviesarray);

// Q4

// var city1;
// var city2;
// var city3;
// var citiesObjectArray=[];

// city1={name: "Karachi", population:"16 million", province:"Sindh", capital: false};
// city2={name: "Lahore", population:"2 million", province:"Punjab", capital: false};
// city3={name: "Islamabad", population:"1 million", province:"Punjab", capital: true};

// citiesObjectArray[0]=city1;
// citiesObjectArray[1]=city2;
// citiesObjectArray[2]=city3;
// console.log(citiesObjectArray);
// console.log(citiesObjectArray[0]);
// console.log(citiesObjectArray[1]);
// console.log(citiesObjectArray[2]);

// Q5

// var student={name: null, roll_number: null, fathers_name: null, subjects: null, DOB: null}
// var students=[];

// for(let i=0; i<5; i++){
//     student.name=prompt("enter std " + (i+1) +" name");
//     student.roll_number=prompt("enter std " + (i+1) +" roll number");
//     student.fathers_name=prompt("enter std " + (i+1) +" fathers name");
//     student.subjects=prompt("enter std " + (i+1) +" subjects");
//     student.DOB=prompt("enter std " + (i+1) +" DOB");
//     students[i]=student;

// }

// console.log(students);

// Q6

// function greetings(){
//     console.log("Hello Sir");
// }

// greetings();
// greetings();

// Q7

// function funGreetings(firstName = prompt("enterFirstName"), lastName = prompt("enterLastName")){
//     console.log("Hello " + firstName + " " + lastName);
// }

// funGreetings();

// Q8

// function add(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }

// function substract(firstNumber, secondNumber){
//     console.log(firstNumber - secondNumber);
// }

// function multiply(firstNumber, secondNumber){
//     console.log(firstNumber * secondNumber);
// }

// function divide(firstNumber, secondNumber){
//     console.log(firstNumber / secondNumber);
// }
// add(5,2);
// substract(5,2);
// multiply(5,2);
// divide(6,2);

// Q9

// function square(number){
//     console.log(number*number);
// }

// square(3);

// Q10

// function pythagoras(base,perpendicular){
//     console.log(Math.pow((Math.pow(base, 2)) + (Math.pow(perpendicular, 2)), 0.5));
// }

// pythagoras(4,2);

// Q11

// function returnAsObject(userName,rollNumber,favSubject){
//     var obj = { username: userName, roll_number: rollNumber, fav_subject: favSubject}
//     console.log(obj);
// }

// returnAsObject("s1mple", 100, "oneTaps");

// Q12

// function returnGreeting(userName){
//     console.log("Happy Birthday " + userName);
// }

// returnGreeting("JavaScript");

// Q13

// function aMinusB(a,b){
//     console.log(Math.pow(a,2) + (-2*a*b) + Math.pow(b,2));
// }

// aMinusB(9,2);

// Q14

// function aPlusbPlusc(a,b,c){
//     console.log((Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2))+(2*((a*b)+(b*c)+(c*a))));
// }

// aPlusbPlusc(2,3,4);

// Q15

// function areaOfCircle(radius){
//     console.log(3.14*(Math.pow(radius,2)));
// }

// areaOfCircle(2);

// Q16

// function circumference(radius){
//     console.log(2*3.14*radius);
// }

// circumference(5);
