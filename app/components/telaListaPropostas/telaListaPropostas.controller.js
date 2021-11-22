sincronizando.controller('ctrlListaPropostas',function($scope,$location, $http){
    $scope.headTituloInicial = "Histórico de propostas"

    var historicoDadosPropostas = $location.search()
    console.log(historicoDadosPropostas)
    

    

    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function (res) {
        (console.log(res))

        $scope.bancoDeListaDados = res.data
    })

    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})