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
let employeeWageArray = [];

while (totalEmpHrs < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    totalWorkingDays++;
    let flag = Math.floor(Math.random() * 10) % 3;
    let dailyHours = getWorkingHours(flag);

    if (totalEmpHrs + dailyHours > maxWorkingHours) {
        dailyHours = maxWorkingHours - totalEmpHrs; 
    }

    totalEmpHrs += dailyHours;
    let dailyWage = dailyHours * wagePerHour;
    employeeWageArray.push(dailyWage);

    console.log(`Day ${totalWorkingDays}: Work Hours = ${dailyHours}, Employee Wage = ${dailyWage}`);
}

let totalEmployeeWage = employeeWageArray.reduce((total, wage) => total + wage, 0);
console.log("\nTotal Days Worked: " + totalWorkingDays);
console.log("Total Hours Worked: " + totalEmpHrs);
console.log("Total Employee Wage: " + totalEmployeeWage);
console.log("\nEmployee Wage Array: ", employeeWageArray);