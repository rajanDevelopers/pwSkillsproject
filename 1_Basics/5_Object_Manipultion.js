console.log("Object Manipulationg Vlaue in Object ");

// Object ==> Set Of Key Values that is Called Object 
// Cretating the Object 

// Example of Object 

let StudentInfo = {
    RollNO: "20CS109",
    Reg_No : 620820104078,
    Name : "Rajan Kumar Mahto", 
    Sec: "B",
    Year: "4th", 
}

let StudentInfo2 = {
    RollNO: "20CS110",
    Reg_No : 620820104078,
    Name : "Pankaj kumar", 
    Sec: "B",
    Year: "4th",
}
 console.log(StudentInfo);


// Another Method for create the Object 

let SudentObj = new Object();
// console.log(SudentObj);
// Assing the value in Empty Object 
SudentObj.id = `20CS48`;
SudentObj.Sec = 'B';
SudentObj.Year ='4th';
SudentObj.Name = 'Jannai M'; 
SudentObj.Reg = 620820104078;

 console.table(SudentObj);


// Create the Object Using Function KeyWord 

function Employee(i,n,s,S) {
    this.id = i;
    this.Name = n;
    this.sec = s;
    this.Salary =S;

}

let ResultEmployee = new Employee(102,'Rajan Kumar','B',40000);
 console.table(ResultEmployee);
 console.log(ResultEmployee);


function Staff(R,N,S) {
    this.Reg = R;
    this.Name = N;
    this.Salary = S;
}

let StaffValue = new Staff(103,'Kokill Kumari',35600)
console.table(StaffValue)
  console.log(StaffValue);

// How to Fetch the Key Value Of Object 
console.log(StaffValue.Reg);

console.log(ResultEmployee.id);
console.log(ResultEmployee.Name);
console.log(StaffValue.Name);


// How to Inset the Extra Value in the Object 


ResultEmployee.Registor = 620820104078;
 console.log(ResultEmployee);

StaffValue.Salary = 12500;
console.log(StaffValue);

StaffValue['Salary'] = 120500;
 console.table(StaffValue);

// Object vlaue ko Delete Karne ke liye Delete key 

delete ResultEmployee.sec;
console.table(ResultEmployee);
console.log(ResultEmployee);
