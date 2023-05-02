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

function createEmployeeRecords(createEmployeeRecord) {
    const employeeRecords = [];

    createEmployeeRecord.map(employeeArray => {
        const employeeRecord = createEmployeeRecord(employeeArray);
        employeeRecords.push(employeeRecord);
    });

    return employeeRecords;

}

// function createTimeInEvent(employeeRecord, timeInStamp) {
//     return{ 
//         type: timeIn[0],
//         hour:
//         date:
//     }
//     return employeeRecord;
// }

function createTimeInEvent(employeeRecord, dateStamp)

console.log(employeeRecord);

// function createTimeInEvent(employeeRecord, dateStamp) {
//     const [date, time] = dateStamp.split(' ');
//     const hour = parseInt(time.substring(0, 2), 10);
  
//     const timeInObject = {
//       type: "TimeIn",
//       hour,
//       date
//     };
  
//     employeeRecord.timeInEvents.push(timeInObject);
  
//     return employeeRecord;
//   }