sincronizando.controller('ctrlTelaDadosImovel', function($scope, $location, $http){
    $scope.tituloHeadPageImovel = "Dados do Imóvel"


    console.log('imovel')
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
            formularioValorEntrada: $scope.data.valorEntrada,
            formularioQtdParcela: $scope.data.qtdParcelas
        }
        
        $location.search(identificaDadosCadastrados)
        console.log(identificaDadosCadastrados)

        console.log('chegou')
    

        var b = ($scope.data.valor - $scope.data.valorEntrada + ((($scope.data.qtdParcelas/12) * 10/100) *($scope.data.valor - $scope.data.valorEntrada))) / $scope.data.qtdParcelas 
        console.log('valor de b',b)
        if(b <= ($scope.data.renda * 0,3)){
            $location.path('/statusAprovado')
        }else{
            $location.path('/statusReprovado')
        }

      
      
        // $http({
        //     url: 'http://localhost:3000/bancoDeListaDados',
        //     method: 'POST',
        //     data: identificaDadosCadastrados
        // }).then(function(){
        //   console.log('sucesso')
        
        // }).catch(function(){
        //     console.log('não foi possivel estabelecer conexão')
        // });



    }


    // $http.get('http://localhost:3000/bancoDeListaDados/').
    // then(function(res){
    //     (console.log(res))
       
    //     $scope.bancoDeListaDados = res.identificaDadosCadastrados        
    // })
    
    $scope.voltarPage = function(){      
        $location.path('/TelaDadosProponente')
    }

    $.ajax({
  
        url: "http://localhost:3000/tiposImoveis",
        
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $scope.selecImovelCerto = data;
        }
    });
    
    
})
