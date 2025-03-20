const isPartTime = 1; 
const isFullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20; 

function getWorkingHours (flag) { 
    switch (flag) { 
        case isPartTime: 
            return partTimeHours; 
        case isFullTime: 
            return fullTimeHours; 
        default: 
            return 0; 
    } 
} 

let empHr = 0; 
let flag= Math.floor(Math.random() * 10) % 3; 
empHr = getWorkingHours (flag); 
let emplyeeWage = empHr * wagePerHour; 
console.log("Emp Wage: " + emplyeeWage);