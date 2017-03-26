var employee= require("../mongo/employeeModel");
var chalk=require("chalk");
var routeService={

    getEmployee:function(req,res)
    {
       console.log("get");
       employee.find({},function(err,emp){
           if(err)
            writeChalk("err",err);
            res.json(emp)
       });
      
    },

    saveEmployee:function(req,res,next)
    {
        console.log("save");
        var postData=req.body;
        var emp = new employee();
        var currentTime = new Date();
        emp._id= (new Date()).getTime().toString();
        emp.name=postData.name.toString();
        emp.email=postData.email;
        emp.dob=new Date(postData.dob);
        emp.dept=postData.dept.toString();
        emp.gender=postData.gender.toString();
        emp.age=currentTime.getFullYear()-emp.dob.getFullYear();
        emp.save(function(err,data){
            if(err){
                 writeChalk("err",err);
            }
             writeChalk("info",data);
            next();
        });
    },

    updateEmployee:function(req,res,next)
    {
        var postData=req.body;
        employee.findOne({_id:postData._id},function(err,emp)
        {
                var currentTime= new Date();
                emp.name=postData.name.toString();
                emp.email=postData.email;
                emp.dob=new Date(postData.dob);
                emp.dept=postData.dept.toString();
                emp.gender=postData.gender.toString();
                emp.age=currentTime.getFullYear()-emp.dob.getFullYear();
                for(k in emp) console.log(k,"\t", emp[k]);
                emp.save(function(err){
                    if(err){
                        writeChalk("err",err);
                    }
                    next();
                });
        });
    },

    deleteEmployee:function(req,res,next){
        console.log("delete"+chalk.bgCyan(req.query.id));
        employee.findByIdAndRemove({_id:req.query.id},function(err,response){
            if(err)
                writeChalk("err",err);
            next();
        });
      
    }
};

function writeChalk(type,msg){
    if(type=="err")console.log(chalk.red(msg));
    else console.log(chalk.blue(msg));
}
module.exports=routeService;