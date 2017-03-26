var myApp = angular.module('myApp', []);

    myApp.service("httpService",function($q,$http)
    {
   
    this.getEmployee=function()
    {
        var deferred= $q.defer();
        $http({
            url:"getEmployee",
            method:"GET"
        })
        .then(function(response) 
        {
          
          deferred.resolve(response.data);
        }, function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    },

    this.postEmployee=function(emp)
    {
        var deferred= $q.defer();
        $http({
            url:"getEmployee",
            method:"POST",
            data:emp
        })
        .then(function(response) 
        {
            deferred.resolve(response.data);
        }, function(error)
        {
            deferred.reject(error);
        });
        return deferred.promise;
    },

    this.updateEmployee=function(emp)
    {
        var deferred= $q.defer();
        $http({
            url:"getEmployee",
            method:"PUT",
            data:emp
        })
        .then(function(response) 
        {
            deferred.resolve(response.data);
        }, function(error)
        {
            deferred.reject(error);
        });
        return deferred.promise;
    },

    this.deleteEmployee=function(id)
    {
        var deferred= $q.defer();
        $http({
            url:"getEmployee?id="+id,
            method:"DELETE"
        })
        .then(function(response) 
        {
         
          deferred.resolve(response.data);
        }, function(error){
           
            deferred.reject(error);
        });
        return deferred.promise;
    }

});

