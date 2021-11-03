sincronizando.controller('ctrlStatusReprovado', function($scope, $location){
    $scope.tituloPageReprovado = "Reprovado"
   
    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
        
})