const isPartTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const maxWorkingDays = 20;
const maxWorkingHours = 160;

function getWorkingHours(flag) {
    switch (flag) {
        case isPartTime:
            return partTimeHours;
        case isFullTime:
            return fullTimeHours;
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];

while (totalEmpHrs < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    totalWorkingDays++;
    let flag = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(flag);

    if (totalEmpHrs + dailyHours > maxWorkingHours) {
        dailyHours = maxWorkingHours - totalEmpHrs; 
    }

    totalEmpHrs += dailyHours;
    let dailyWage = dailyHours * wagePerHour;
    empDailyWageArr.push(dailyWage);

    console.log(`Day ${totalWorkingDays}: Work Hours = ${dailyHours}, Employee Wage = ${dailyWage}`);
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("\nUC7A - Total Days:", totalWorkingDays, 
    "Total Hrs:", totalEmpHrs, "Emp Wage:", totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A Emp Wage with reduce:", empDailyWageArr.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return `Day ${dailyCntr} = ${dailyWage}`;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);

console.log("UC7B - Daily Wage Map:");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);

console.log("UC7C - Daily Wage Filter When Full-time Wage Earned:");
console.log(fullDayWageArr);

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Full-time wage was earned on: " + 
    mapDayWithWageArr.find(findFulltimeWage));

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7E - Check If Every Element Has Full-Time Wage: " + 
    fullDayWageArr.every(isAllFulltimeWage));


function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("UC 7F - Check If Any Part-Time Wage Exists: " + 
    mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("UC 7G - Number of Days Employee Worked: " + 
    empDailyWageArr.reduce(totalDaysWorked, 0));