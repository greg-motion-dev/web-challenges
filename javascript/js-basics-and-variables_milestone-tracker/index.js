console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.

//1.how many days i've been practicing , for example 2 years --> 730 days
const daysPracticing = yearsPracticing * 365; 
const milestone = 10 * 365;
console.log("You've been practicing for " + daysPracticing + " days in total.");

//2. calculate the remaining days until 10 years.
const remainingDaysUntilMilestone = milestone - daysPracticing; 
console.log("You need " + remainingDaysUntilMilestone + " to complete your milestone.");

//3. calculate the % of milstone achieved
const percentageMilestone = (daysPracticing / milestone) * 100; 
console.log("You have completed " + percentageMilestone + "% of your milestone target.");

//4. divide the days one has practiced by 24 (h) to get the cumulitive days.
const cumulativeDays = daysPracticing / 24 ; 
console.log("Assuming you spent each day 1h on learning, you've learned for " + daysPracticing + " hours, " + "which accumulate to " + cumulativeDays + " days.");

console.log("You've been practicing for: " + yearsPracticing + " years");
