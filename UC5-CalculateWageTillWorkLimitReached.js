const isPartTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

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

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math. floor(Math. random() * 10) % 3;
    let dailyHours = getWorkingHours(empCheck);

    if (totalEmpHrs + dailyHours > MAX_HRS_IN_MONTH) {
        dailyHours = MAX_HRS_IN_MONTH - totalEmpHrs; 
    }

    totalEmpHrs += dailyHours;
    console.log(`Day ${totalWorkingDays}: Work Hours = ${dailyHours}, Total Hours = ${totalEmpHrs}`);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 — Total Days: " + totalWorkingDays + "Total Hrs:" + totalEmpHrs + " Employee Wage:" + empWage);