
myApp.controller('AppCtrl', ['$scope', '$http', 'httpService',function($scope, $http , httpService) 
{        
    $scope.employee={
      _id:"",
      name:"",
      email:"",
      dob:"",
      dept:"",
      gender:"",
      age:0
    };

    $scope.employees=[];

    var updateView=function()
    {
       startLoader();
        httpService.getEmployee().then(function(data){
           stopLoader();
          $scope.employees=data;
        },function(err){
           stopLoader();
        });
    };

    updateView();
  
    $scope.addEmployee = function() {
      
        startLoader();
        console.log($scope.myform.$valid);
        httpService.postEmployee($scope.employee).then(function(data){
          $scope.employees=data;
          $scope.employee={
                          _id:"",
                          name:"",
                          email:"",
                          dob:"",
                          dept:"",
                          gender:"",
                          age:0
                        };
          stopLoader();
        },function(err){
           stopLoader();
        });
      }
    
    $scope.editEmployee = function(id) {
      console.log(id);

      $.each( $scope.employees,function(i,item)
      {
          if(item._id==id){
            $scope.employee={
                        _id:item._id,
                        name:item.name,
                        email:item.email,
                        dob:item.dob,
                        dept:item.dept,
                        gender:item.gender,
                        age:item.age
                      };
          }
      });
    };
    
    $scope.updateEmployee = function() {

      if($scope.employee._id=="") return  $scope.addEmployee();
       startLoader();
      httpService.updateEmployee($scope.employee).then(function(data){
          $scope.employees=data;
          console.log(data);
          $scope.employee={
                        _id:"",
                        name:"",
                        email:"",
                        dob:"",
                        dept:"",
                        gender:"",
                        age:0
                      };
            $scope.editClicked=false;
            $scope.textmsg="";
            stopLoader();
        },function(err){
           stopLoader();
        });

    };

    $scope.removeEmployee = function(id) {
      startLoader();
       httpService.deleteEmployee(id).then(function(data){
          $scope.employees=data;
          stopLoader();
        },function(err){
           stopLoader();
        });
    };
    

}]);

function startLoader(){
    console.log("loader Started");
    $(".modal").show();        
}

function stopLoader(){
    console.log("loader stopped");
    $(".modal").hide();
}