// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var int=+prompt("Enter positive number");
document.write("Number: "+int + "<br>");
document.write("Round off value: "+Math.round(int) + "<br>");
document.write("floor: "+ Math.floor(int) + "<br>");
document.write("ceil value:  " + Math.ceil(int)+ "<br>");

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var user=+prompt("Enter negative number");
document.write("Number: "+ user + "<br>");
document.write("Round off value: "+Math.round(user) + "<br>");
document.write("floor: "+ Math.floor(user) + "<br>");
document.write("ceil value:  " + Math.ceil(user)+ "<br>");


// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var user=+prompt("Enter absolute value");
user=parseFloat(user);
var absolutevalue=Math.abs(user);
document.write(" The absolute value of " + user + " is "+ absolutevalue +"<br>");

// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var randomvalue=Math.floor(Math.random()*6);
document.write("Random dice value: " + randomvalue + "<br>");

// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var randomvalue=Math.random()*2;
randomvalue=Math.floor(randomvalue);
document.write(randomvalue);
if(randomvalue>0){
    alert("random coin value:  heads "  + "<br>");
}
else{
    alert("random coin value: tails" + "<br>")
}

//  Write a program that shows a random number between 1
// and 100 in your browser.

var randomvalue=Math.random()*100;
randomvalue=Math.floor(randomvalue);
document.write("random number between 1 and 100 is:" + randomvalue + "<br>");

// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var user=+prompt("Enter your weight");
var weight=parseFloat(user);
document.write("The weight of user is:"  + weight +   " kilograms"  + "<br>");

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var random=Math.random()*10;
var random=Math.ceil(random);
var user=+prompt("Enter a number");

if(user==random){
    alert("Congratulation")
}
else{
    alert("try again")
}