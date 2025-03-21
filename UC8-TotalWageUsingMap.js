const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20; 

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = [];
let empDailyWageMap = new Map();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1: return 4; 
        case 2: return 8; 
        default: return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) {
        empHrs = MAX_HRS_IN_MONTH - totalEmpHrs; 
    }

    totalEmpHrs += empHrs;
    let dailyWage = calcDailyWage(empHrs);

    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce(totalWages, 0);

console.log("Employee Daily Wage Map: ", empDailyWageMap);
console.log("Total Employee Wage from Map: " + totalWageFromMap);