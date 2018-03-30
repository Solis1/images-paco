app.directive("appLoading", function(){
   return{
       restrict: "E",
       scope:{
            info: "="       
       },
       templateUrl: "js/components/loadings/loading.html"
   };
});