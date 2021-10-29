sincronizando.controller('ctrlTelaDadosImovel', function($scope, $location){
    $scope.tituloHeadPageImovel = "Dados do Imóvel"
    $scope.irProximaPage = function(){
        $location.path('/TelaDadosProponente')
    }

})