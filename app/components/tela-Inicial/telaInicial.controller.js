sincronizando.controller('ctrlTelaInicial', function($scope, $location){
    $scope.irProximaPage = function(){
        $location.path('/TelaDadosProponente')
    }
})