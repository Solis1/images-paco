app.controller("MainController", ["$scope", function($scope){
    
    $scope.inputFreeRead= {
        nameId : "inputFreeRead",
        checkId: "checkRead"
    };
    
    $scope.inputFreeHelp= {
        nameId : "inputFreeHelp",
        checkId: "checkHelp"
    };
    
     $scope.inputFreeExercise= {
        nameId : "inputFreeExercise",
        checkId: "checkExercise" 
    };
    
    $scope.materiasRead = {
        nameMat: "materias",
        nameGrad: "grados",
        nameLev: "niveles",
        nameBloq: "bloques"
    };
    
    $scope.materiasHelp = {
        nameMat: "materiasHelp",
        nameGrad: "gradosHelp",
        nameLev: "nivelesHelp",
        nameBloq: "bloquesHelp"
    };
    
     $scope.materiasExercise = {
        nameMat: "materiasExercise",
        nameGrad: "gradosExercise",
        nameLev: "nivelesExercise",
        nameBloq: "bloquesExercise"
    };
    
    $scope.bloque1 = {
        value: "bloque1"
    }
    
    $scope.bloque2 = {
        value: "bloque2"
    }
    
    $scope.bloque3 = {
        value: "bloque3"
    }
    
    $scope.bloque4 = {
        value: "bloque4"
    }
    
    $scope.bloque5 = {
        value: "bloque5"
    }
    
    $scope.bloques = {
        value: "bloques"
    }
    
    $scope.exercise = {
        value: "exercise"
    }
    
}]);