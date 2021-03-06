console.log("Assessment loaded!");
// Write the code to solve the following problems.
// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// 1. Even or Odd

// Prompt the user for a number
// If the number is even print "even"
// If the number is odd print "odd"

// var num = prompt("Please provide a number")
//
// if (num % 2 == 0) {
//   console.log("Even");
// }
// else {
//   console.log("Odd");
// }

// 2. The Playground

// Nelson has cornered off the section of the playground right next to the bathrooms.
// He and his friends are only letting a select few through without first giving them swirlies.
// Prompt the user to enter their name.
// If their name is "Bart" or "Bart Simpson" then print out "HA-HA! Where's my lunch money Simpson!"
// If their name is "Ralph" or "Ralph Wiggum" then print out "Swirlie!"
// If their name is "Principle Skinner" then print "Right this way sir!"
// If their name is "Jimbo", "Dolph", or "Kearney" then print "High-Five Dude!"
// If their name isn't one of the ones listed above then print "Take a hike pal!"

// var prompt = prompt("What is your name?")
//
// if(prompt == "Bart" || prompt == "Bart Simpson") {
//   console.log("HA-HA! Where's my lunch money Simpson!");
// }
// else if (prompt == "Ralph" || prompt == "Ralph Wiggum") {
//   console.log("SWIRLIE!");
// }
// else if (prompt == "Principle Skinner") {
//   console.log("Right this way sir!");
// }
// else if (prompt == "Jimbo" || prompt == "Dolph" || prompt == "Kearney") {
//   console.log("High-Five Dude!");
// }
// else {
//   console.log("Take a hike pal!");
// }

// 3. The Bouncer

// Big Gary's job is to make sure that the club only lets in the "best" class of clientele.
// Prompt the user for:
// - their age
// - their income
// - if they are a celebrity ("yes" or "no")
// - if they are wearing sneakers ("yes" or "no")

// If Big Gary let's you in, he prints: "*nod*"
// If he doesn't let you in, he prints: "You're not on the list."

// You are not allowed in if:
//   - you are under 18 or over 35.
//   - you have an income under 100,000.
//   - you are wearing sneakers.

// Otherwise you are let in. However, there are some exceptions, you will also be let in if:
//   - you are over 16 and a celebrity.
//   - you are over 16 and your income is over 5,000,000.
//   - you are under 25 (and over 18), you have an income over 250K, but are wearing sneakers.

// The test cases are as follows:
// age, money, celeb, shoes - Outcome

// Rare
// 15, 100K, y, n - N
// 16, 100K, y, n - Y
// 16, 4.9M, n, n - N
// 16, 5M, n, n - Y
// 17, 250K, n, y - N
// 25, 250K, n, y - N
// 20, 250K, n, y - Y
// 20, 249K, n, y - N

// Age
// 17, 100K, n, n - N
// 18, 100K, n, n - Y
// 36, 100K, n, n - N
// 35, 100K, n, n - Y

// Income
// 20, 99K, n, n - N
// 20, 100K, n, n - Y

// Shoes
// 20, 100K, n, y - N

// var age = window.prompt("What is your age?")
// var income = window.prompt("What is your income?")
// var celebrity = window.prompt("Are you a celebrity?")
// var shoes = window.prompt("Are you wearing sneakers?")
//
// if ((age >= 18 && age <= 35) && (income >= 100000) && (shoes == "no")) {
//   console.log("*nod*");
// } else if ((age >= 16) && (celebrity == "yes")) {
//   console.log("*nod1*");
// } else if ((age >= 16) && (income >= 5000000)) {
//   console.log("*nod2*");
// } else if ((age >= 18 && age < 25) && (income >= 250000) && (shoes == "yes")) {
//   console.log("*nod3*");
// }
// else {
//   console.log("You are not on the list... sorry..");
// }

// 4. The Bank

// You work for a bank and have been tasked with creating a new underwriting model for personal loans
// Prompt the user for:
// - their FICO score (200 - 850)
// - their annual income.
// - How much debt they currently have.
// - How much they pay in rent/mortgage.
// - How many late payments they have made in the last 12 months
// - If they have ever filed for bankruptcy (yes or no)
// - If they are a current resident of the US (yes or no)

// If they are accepted by your model print: "Dolla Dolla Bills!"
// If they are rejected by your model print: "Sorry no cheese!"

// Definitions:
//    - NDI means Net Disposable Income.  In other words how much income you have left over at the end of the month.
//        - Get their monthly income from their annual income.
//        - Rule of thumb is that ppl's rent is 30% of their monthly expenses.
//    -DTI means Debt To Income ratio.
//        - DTI is calculated by placing their debt overtop of their annual income.

// You are NOT allowed to have a loan if:
//    - your FICO is below 660
//    - your income is below 35000
//    - you have filed for bankruptcy
//    - you are not a current resident of the US.
//    - you have more than 2 late payments in the last 12 months
//    - you have a DTI over 50%
//    - you have a NDI less than $500

// However there are a few expections. You are allowed to get a loan if:
//    - If filed for bankruptcy but currently make more than $1,000,000
//    - If you have a FICO below 660 but above 620 and have an NDI greater than $1,500
//    - If you have an income below $35,000 but above $25,000 and currently pay $0 in rent.

// The Boss wants to greet our "high end" customers with a specialized message.
// If the following requirements are met, please greet these customers with "Our Bank is Your Home!"
//    - your FICO is above 700 and you have a DTI lower than 15%.
//    - your FICO is above 750 and you have a DTI lower than 25%.
//    - your FICO is above 800.
//    - your make more than $4,000,000 a year.

var fico = prompt("What is your FICO?")
var income = prompt("What is your annual income?")
var debt = prompt("How much debt do you currently have?")
var rent = prompt("How much do you pay for rent/mortgage?")
var late = prompt("How many late payments have you made in the last 12 months?")
var bankrupt = prompt("Have you ever filed for bankruptcy?")
var resident = prompt("Are you a current US resident?")

var ndi = (income/12) - ((rent/3)*10)
var dti = debt/income

console.log("this is ndi", ndi);
console.log("this is dti", dti);

if (resident == "no" || late > 2 || dti > 0.5 || ndi < 500) {
  console.log("Sorry No Cheese! 1");
} else if(((fico >= 700 && dti < .15) || (fico >= 750 && dti < .25) || fico >= 800 || income >= 4000000) && (bankrupt == "no" && fico >= 660)) {
  console.log("Our Bank is Your Home!");
} else if(fico <= 659) {

    if(fico >= 620 && ndi >= 1500){
      console.log("Dolla Dolla Bills! 1");
    }
    else {
      console.log("Sorry No Cheese! 2");
    }

} else if(bankrupt == "yes") {

    if(income >= 1000000) {
      console.log("Dolla Dolla Bills! 2");
    }
    else{
      console.log("Sorry No Cheese! 3");
    }

} else if(income < 35000){

    if(income >= 25000 && rent == 0) {
      console.log("Dolla Dolla Bills! 3");
    }
    else {
      console.log("Sorry No Cheese! 4");
    }

}
else {
  console.log("Dolla Dolla Bills! 4");
}

// The test cases are as follows:
// fico, income, debt, rent, late, bankrupt, resident - Outcome

// FICO
// 600, 54000, 1000, 900, 0, no, yes - N
// 620, 54000, 1000, 900, 0, no, yes - Y
// 620, 53500, 1000, 900, 0, no, yes - N
// 619, 54000, 1000, 900, 0, no, yes - N
// 660, 54000, 1000, 900, 0, no, yes - Y

// NDI
// 660, 54000, 1000, 1200, 0, no, yes - Y
// 660, 54000, 1000, 1201, 0, no, yes - N

// DTI
// 660, 54000, 27000, 900, 0, no, yes - Y
// 660, 54000, 27001, 900, 0, no, yes - Y

// RESIDENT
// 660, 54000, 1000, 900, 0, no, no - N
// 800, 5000000, 1000, 0, 0, no, no - N

// LATE PAYMENTS
// 660, 54000, 1000, 900, 2, no, yes - Y
// 660, 54000, 1000, 900, 3, no, yes - N
// 800, 5000000, 1000, 0, 3, no, yes - N

// INCOME
// 660, 35000, 1000, 400, 0, no, yes - Y
// 660, 34999, 1000, 400, 0, no, yes - N
// 660, 34999, 1000, 0, 0, no, yes - Y
// 660, 25000, 1000, 0, 0, no, yes - Y
// 660, 24999, 1000, 0, 0, no, yes - N

// BANKRUPT
// 660, 999999, 1000, 900, 0, yes, yes - N
// 660, 1000000, 1000, 900, 0, yes, yes - Y

// SPECIAL CUSTOMER
// 700, 60000, 9000, 900, 0, no, yes - Regular
// 700, 60000, 8999, 900, 0, no, yes - Special
// 700, 60000, 8999, 900, 0, yes, yes - N
// 750, 60000, 15000, 900, 0, no, yes - Regular
// 750, 60000, 14999, 900, 0, no, yes - Special
// 799, 60000, 16000, 900, 0, no, yes - Regular
// 800, 60000, 16000, 900, 0, no, yes - Special
// 800, 60000, 16000, 900, 0, yes, yes - N
// 660, 4000000, 2000000, 900, 0, no, yes - Special
// 660, 3999999, 1000000, 900, 0, no, yes - Regular
// 660, 4000000, 2000001, 900, 0, no, yes - N

// 5. Perfect Change
// Prompt the user for a dollar amount they would like perfect change for. (eg. 100 = $1)
// Write code that intakes the users money and prints to the console perfect change.
// Once the change has been printed in the console the code should stop running.

// Examples:
//    User inputs: 82
//    Console outputs:
//       quarter
//       quarter
//       quarter
//       nickel
//       penny
//       penny

// var userMoney = prompt("How much money would you like perfect change for?")
// var money = userMoney
//
// while (money > 0) {
//   if(money / 25 >= 1) {
//     money -= 25
//     console.log("quarter");
//   } else if (money / 10 >= 1) {
//     money -= 10
//     console.log("dime");
//   } else if (money / 5 >= 1) {
//     money -= 5
//     console.log("nickel");
//   } else if (money / 1 >= 1) {
//     money -= 1
//     console.log("penny");
//   }
// }
