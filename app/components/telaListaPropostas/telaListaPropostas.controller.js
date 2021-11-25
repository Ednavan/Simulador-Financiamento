sincronizando.controller('ctrlListaPropostas',function($scope,$location, $http){
    $scope.headTituloInicial = "Histórico de propostas"

    var historicoDadosPropostas = $location.search()
    console.log(historicoDadosPropostas)
    

    

    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function (res) {
        (console.log(res))

        $scope.bancoDeListaDados = res.data
        console.log('verificando saida do get',  $scope.bancoDeListaDados)
    })
    

    $scope.dadosParaModal = function(){
        
        $http.get('http://localhost:3000/bancoDeListaDados/').
        then(function (res) {
            (console.log(res))
    
            $scope.bancoDeListaDados = res.data
            console.log('verificando dentro do get 2',  $scope.bancoDeListaDados)
        })

    }

    

    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})