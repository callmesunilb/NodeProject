var mongoose = require("./mongoInitialize");
var employeeSchema= new mongoose.Schema({
    _id:{type:"Number",unique:true},
    name:"String",
    email:"String",
    dob:"Date",
    dept:"String",
    gender:"String",
    age:"Number"
}, { collection: 'Employee' });

var employee= mongoose.model("Employee",employeeSchema);
module.exports= employee;