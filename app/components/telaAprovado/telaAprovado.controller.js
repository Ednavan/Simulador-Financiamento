sincronizando.controller('ctrlStatusAprovado', function($scope, $location){
    $scope.tituloPageAprovado = "Aprovado"

    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})

 