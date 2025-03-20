let noTime = 0;
let partTime = 1;
let fullTime = 2;

let partTimeHours = 4;
let fullTimeHours = 8;
let wagePerHour = 20;

let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case noTime:
        console.log("Employee is No Time employee");
        console.log("Daily Wage: " + 0);
        break;
    
    case partTime:
        console.log("Employee is Part Time employee");
        console.log("Daily Wage: " + partTimeHours * wagePerHour);
        break;
    
    case fullTime:
        console.log("Employee is Full Time employee");
        console.log("Daily Wage: " + fullTimeHours * wagePerHour);
        break;
    
    default:
        console.log("Employee is not recognized");
}