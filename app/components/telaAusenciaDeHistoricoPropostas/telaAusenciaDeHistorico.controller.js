sincronizando.controller('ctrlAusenciaHistoricoPropostas',function($scope,$location, $http){
    $scope.headTituloInicial = "Histórico de propostas"

    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})