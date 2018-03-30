app.directive("appInput", function(){
    
    return{
       restrict: "E",
       scope:{
           data: "="
       },
       templateUrl: "js/components/input-free/input.html"
    };
    
});