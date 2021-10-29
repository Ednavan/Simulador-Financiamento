sincronizando.controller('ctrlStatusReprovado', function($scope, $location){
    $scope.tituloPageReprovado = "Reprovado"

    $scope.irParaInicio = function(){
        $location.path('/telaInicio')
    }
})