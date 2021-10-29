sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location){
    $scope.tituloHeadPage = "Dados Proponente"

    $scope.irProximaPage = function(){
        $location.path('/TelaDadosImovel')
    }
})