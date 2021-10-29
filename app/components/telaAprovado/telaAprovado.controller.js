sincronizando.controller('ctrlStatusAprovado', function($scope, $location){
    $scope.tituloPageAprovado = "Aprovado"

    $scope.irParaInicio = function(){
        $location.path('/telaInicio')
    }
})