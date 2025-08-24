// Alt + Z 自动换行转换
// playGame('x');
// playGame2('x');

function playGame(person) {
  console.log(`Hi, ${person} is playing`);
}

const playGame2 = function (person) {
  console.log(`No, ${person} can not play`);
};

playGame('cc');
playGame2('cc');

const playGame3 = person => console.log(`${person} is a fool`);

playGame3('cc');

const friends = ['a', 'b', 'c'];
const newLength = friends.push('d');

const xyahhnkvnc = 23;

console.log();
console.log();
console.log(xyahhnkvnc);
// TODO

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
  console.log(
    `Mark Miller's BMI (${mark.BMI}) is higher than John Smith's (${john.BMI})!`
  );
} else {
  console.log(
    `John Smith's BMI (${john.BMI}) is higher than Mark Miller's (${mark.BMI})!`
  );
}

///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
let temp;
let tips = [];
let totals = new Array();
const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  console.log(bills[i]);
  temp = calcTip(bills[i]);
  tips.push(temp);
  totals.push(bills[i] + temp);
}
console.log(tips);
console.log(totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));

/*
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
