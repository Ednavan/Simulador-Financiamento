sincronizando.controller('ctrlListaPropostas',function($scope,$location, $http, sincronizacaoServiceListagem){
    $scope.headTituloInicial = "Histórico de propostas"
  
    $scope.test = "bem vindo"


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

    $scope.excluindoProponente = function(){
        $http({
            url:'http://localhost:3000/bancoDeListaDados/' + sincronizacaoServiceListagem.listaCadastros.id,
            method:'delete',
            headers:{
                "Content-Type": "application/json"
            }
        }).then(function(res){
            console.log("sucess", res)
        }).catch(function (tratamentoErro){
            console.log('failed',tratamentoErro)
        });
    }
    
    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})
