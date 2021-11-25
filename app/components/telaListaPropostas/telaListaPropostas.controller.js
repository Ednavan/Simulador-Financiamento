sincronizando.controller('ctrlListaPropostas',function($scope,$location, $http, sincronizacaoServiceListagem){
    $scope.headTituloInicial = "Histórico de propostas"

    var historicoDadosPropostas = $location.search()
    console.log(historicoDadosPropostas)
    

    

    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function (res) {
        (console.log(res))

        $scope.bancoDeListaDados = res.data
        console.log('verificando saida do get',  $scope.bancoDeListaDados)
    })
    

    $scope.dadosParaModal = function(dadosParaModal){
        // estou passando como objeto o listaCadastros
        sincronizacaoServiceListagem.listaCadastros = dadosParaModal;

    }

    

    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})