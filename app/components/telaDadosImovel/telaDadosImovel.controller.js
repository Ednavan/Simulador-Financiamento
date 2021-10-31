sincronizando.controller('ctrlTelaDadosImovel', function($scope, $location, $http){
    $scope.tituloHeadPageImovel = "Dados do Imóvel"




    // $scope.data = {}

    // $scope.envioDados= function (){
    //     console.log('chegou')
    //     $http({
    //         url: 'http://localhost:3000/bancoDeListaDados/',
    //         method: 'POST',
    //         data: $scope.data
    //     }).then(function(){
    //         console.log('sucess')
    //     })
       
    // }
    // $http.get('http://localhost:3000/bancoDeListaDados/').
    // then(function(res){
    //     (console.log(res))
    //     $scope.bancoDeListaDados = res.data
    // })



    $scope.irProximaPage = function(){
        console.log(verDados)
        console.log('segunda tela')
        var verDados = $location.search()
        var identificaDadosCadastrados = {
            listaNomes: verDados.dadosDoNome,
            listaProfissao: verDados.dadosDaProfissao,
            listaCpf: verDados.dadosDoCpf,
            listaEmail: verDados.dadosDoEmail,
            listaNascimento: verDados.dadosDoNascimento,
            listaCep: verDados.dadosDoCep,
            listaCelular: verDados.dadosDoCelular,
            
            formularioTipo: $scope.data.imovel,
            formularioRenda: $scope.data.renda,
            formularioValor: $scope.data.valor,
            formularioValorEntrada: $scope.data.valorEntrada
        }
        
        $location.search(identificaDadosCadastrados)
        console.log(identificaDadosCadastrados)

        console.log('chegou')
        $http({
            url: 'http://localhost:3000/bancoDeListaDados/',
            method: 'POST',
            data: identificaDadosCadastrados
        }).then(function(){
            console.log('sucess')
        })
    }
    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function(res){
        (console.log(res))
        $scope.bancoDeListaDados = res.identificaDadosCadastrados
    })
    
    // $location.path('/TelaDadosProponente')
})