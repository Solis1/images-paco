app.directive("appMaterias", function(){
    
    return{
        restrict: "E",
        scope:{
            info: "="
        },
        templateUrl: "js/components/materias/materias.html"
    };
    
});