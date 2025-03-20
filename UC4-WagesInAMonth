const isPartTime = 1;
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
const workingDaysPerMonth = 20;

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

// Looping for 20 working days
for (let day = 1; day <= workingDaysPerMonth; day++) {
    let flag = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(flag);
}

let monthlyWage = totalEmpHrs * wagePerHour;
console.log("Total Monthly Employee Wage: " + monthlyWage);