sincronizando.controller('ctrlListaPropostas',function($scope,$location){
    $scope.headTituloInicial = "Simulador de Financiamentos"

    var historicoDadosPropostas = $location.search()
    console.log(historicoDadosPropostas)
})