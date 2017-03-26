var mongoose = require('mongoose');
//var db= "mongodb://localhost:27017/employee";
var db="mongodb://sunil:#{mydatabase}@ds141960.mlab.com:41960/employee";
var chalk= require('chalk');
mongoose.connect(db);

mongoose.connection.on("connected",function(){
    console.log(chalk.green("Connected"));
});

mongoose.connection.on("error",function(err){
    console.log(chalk.red("Error"+err));
});

mongoose.connection.on("disconnected",function(){
    console.log(chalk.blue("Disconnected"));
});



module.exports=mongoose;