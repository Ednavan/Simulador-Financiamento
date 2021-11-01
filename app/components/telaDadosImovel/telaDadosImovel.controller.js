sincronizando.controller('ctrlTelaDadosImovel', function($scope, $location, $http){
    $scope.tituloHeadPageImovel = "Dados do Imóvel"

    console.log('imovel')


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


    $scope.voltarPage = function(){
        var analisedesevolv = $location.search()
        var recuperacaoVoltePage = {
            listaNomes: analisedesevolv.dadosDoNome,
            listaProfissao: analisedesevolv.dadosDaProfissao,
            listaCpf: analisedesevolv.dadosDoCpf,
            listaEmail: analisedesevolv.dadosDoEmail,
            listaNascimento: analisedesevolv.dadosDoNascimento,
            listaCep: analisedesevolv.dadosDoCep,
            listaCelular: analisedesevolv.dadosDoCelular,
            
            

        }
        $location.search(recuperacaoVoltePage)
        console.log('clicou em voltar')
        console.log(recuperacaoVoltePage)

        $scope.cod = recuperacaoVoltePage;
        console.log('editando: ', $scope.cod)
      
        // $http({
            
        //     url: recuperacaoVoltePage + $scope.analisedesevolv, //seleciona o dados atraves do id
        //     data: recuperacaoVoltePage, //envia os dados atraves do seu conjunto    
        //     method: "patch", 
        // } )
        // $location.search(recuperacaoVoltePage)
        $location.path('/TelaDadosProponente')

    }
})