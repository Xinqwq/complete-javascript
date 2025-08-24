console.log('Hello World');
let var1 = 'Happy';
// if(var1 === 'Happy'){
//     alert('Happy');
// }else{alert('Unhappy')}
console.log("Kelsi");
console.log(2**5);//2**5 means 2 to the power of 5 = 2*2*2*2*2
////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
const massMarksMass = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let bmiMarks = massMarksMass/heightMarks ** 2;
console.log(bmiMarks);
let bmiJohn = massJohn/heightJohn **2;
console.log(bmiJohn);
let markHigherBMI = bmiMarks > bmiJohn;
if(markHigherBMI){
    console.log('Marks is heavier: '+ markHigherBMI);
}else{
    console.log('Marks is heavier: '+ markHigherBMI);
}

// Template Literals
const firstName = 'Kelsi';
const birthYear = 1900;
const currentYear = 2090;
const kelsi = `I'm ${firstName}, a ${currentYear} - ${birthYear} years old programmer`;
console.log(kelsi);
const kelsi1 = `I'm ${firstName}, a ${currentYear - birthYear} years old programmer`;
console.log(kelsi1);
console.log(`Just a String.........`);
console.log('Just \n\ a \n\ String.........');
console.log(`Just 
a
second
String.........`);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(`Boolean(0): ${Boolean(0)}`);
console.log(`Boolean(''): ${Boolean('')}`);
console.log(`Boolean('Hi'): ${Boolean('Hi')}`);
console.log(`Boolean(undefined): ${Boolean(undefined)}`);
console.log(`Boolean(null): ${Boolean(null)}`);
console.log(`Boolean(NaN): ${Boolean(NaN)}`);
console.log(`Boolean({}): ${Boolean({})}`);
console.log(`Boolean([]): ${Boolean([])}`);

// const favourite = prompt(`What is your favourite colour? `);
// console.log(favourite);
// console.log(typeof favourite);

// const favouriteNum = prompt(`What is your favourite number? `);
// console.log(favouriteNum);
// console.log(typeof favouriteNum);

// const favouriteNumber = Number(prompt(`What is your favourite number? `));
// console.log(favouriteNumber);
// console.log(typeof favouriteNumber);





////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const avrDolphins = (96+108+89)/3;
const avrKoalas = (88+91+110)/3;
console.log(avrDolphins);
console.log(avrKoalas);

if(avrDolphins>avrKoalas){
    console.log(`Dolphins wins`);
} else if(avrDolphins < avrKoalas){
    console.log(`Koalas wins`);
} else {
    console.log(`Both of Dolphins and Koalas are winners`);
}

const avrDolphins1 = (97+112+101)/3;
const avrKoalas1 = (109+95+123)/3;

if(avrDolphins1 > avrKoalas1 && avrDolphins1 >= 100){
    console.log(`Dolphins wins`);
} else if(avrDolphins1 < avrKoalas1 && avrKoalas1 >= 100){
    console.log(`Koalas wins`);
} else if(avrDolphins1 === avrKoalas1){
    console.log(`Dolphins and Koalas has equal scores`);
} else {
    console.log(`Oops, no winners`);
}


const avrDolphins2 = (97+112+101)/3;
const avrKoalas2 = (109+95+106)/3;

if(avrDolphins2 > avrKoalas2 && avrDolphins2 >= 100){
    console.log(`Dolphins wins`);
} else if(avrDolphins2 < avrKoalas2 && avrKoalas2 >= 100){
    console.log(`Koalas wins`);
} else if(avrDolphins2 >= 100 && avrKoalas2 >= 100 && avrDolphins2 === avrKoalas2){
    console.log(`Both of Dolphins and Koalas are winners`);
}else{
    console.log(`Oops, no winners`);
}

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let tip;
let bill = prompt(`Please enter the bill`);
(bill <= 300) && (bill>=50) ? console.log(`The bill was ${bill}, the tip was ${bill*0.15}, and the total value ${bill*1.15}`):console.log(`The bill was ${bill}, the tip was ${bill*0.2}, and the total value ${bill*1.2}`);

