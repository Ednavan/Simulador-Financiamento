sincronizando.controller('ctrlTelaInicial', function($scope, $location){
    $scope.headTituloInicial = "Simulador de Financiamentos"
    $scope.irProximaPage = function(){
        $location.path('/TelaDadosProponente')
    }
})
