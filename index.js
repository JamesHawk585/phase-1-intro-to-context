// Your code here


function createEmployeeRecord(employeeArray) {
    return{
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeArrays) {
    const employeeRecords = [];

    employeeArrays.map(employeeArray => {
        const employeeRecord = createEmployeeRecord(employeeArray);
        employeeRecords.push(employeeRecord);
    });
    return employeeRecords;
}

function createTimeInEvent(employeeRecord, dateStamp) {
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    };
    if (!employeeRecord.timeInEvents) {
        employeeRecord.timeInEvents = [];
    }
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;
}

// function createTimeOutEvent(employeeRecord, dateStamp) {
//     const timeOutEvent = {
//         type: "TimeOut",
//         hour: parseInt(dateStamp.split(" ")[1], 10),
//         date: dateStamp.split(" ")[0]
//     };
//     employeeRecord.timeOutEvents.push(timeInEvent);
//     return employeeRecord;
// 

function createTimeOutEvent(employeeRecord, dateStamp) {
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    };
    employeeRecord.timeOutEvents.push(timeOutEvent);
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, dateStamp) {
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === dateStamp);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === dateStamp);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payOwed = hoursWorked * employeeRecord.payPerHour;
    return payOwed;
}

function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, date);
    }, 0);
    return totalWages;
}

function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employeeRecord) => {
      return total + allWagesFor(employeeRecord);
    }, 0);
    return totalPayroll;
}