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
    employeeRecord.timeInEvent.push(timeInEvent);
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp) {
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1], 10),
        date: dateStamp.split(" ")[0]
    };
    employeeRecord.timeOutEvent.push(timeInEvent);
    return employeeRecord;
}




