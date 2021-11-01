sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location, $http){
    $scope.tituloHeadPage = "Dados Proponente"
    $scope.data = {};
    var  editar = $location.search()
    console.log('PRIMEIRA PAGINA DE TESTE',editar)
    if(editar != {}){
        $scope.data.infoNomeCompleto = editar.listaNomes;
        $scope.data.infoProfissao = editar.listaProfissao;
        $scope.data.infoCPF = editar.listaCpf;
        $scope.data.infoEmail = editar.listaEmail;
        $scope.data.infoDataNascimento = editar.listaNascimento;
        $scope.data.infoCEP = editar.listaCep;
        $scope.data.infoCelular = editar.listaCelular
        

    }

    console.log('proponente')
    $scope.irProximaPage = function(nome, profi, cpf, email, nascimento, cep, celular){
       
     
        var recebendoDados = {
            
            dadosDoNome:  $scope.data.infoNomeCompleto,
            dadosDaProfissao: $scope.data.infoProfissao,
            dadosDoCpf: $scope.data.infoCPF,
            dadosDoEmail: $scope.data.infoEmail,
            dadosDoNascimento: $scope.data.infoDataNascimento,
            dadosDoCep: $scope.data.infoCEP,
            dadosDoCelular: $scope.data.infoCelular

           
            
        }
        $location.search(recebendoDados)
        console.log(recebendoDados)




        // $scope.cod = recebendoDados;
        // console.log('editando: ', $scope.cod)

        // $http({
        //     url: recebendoDados + $scope.cod,
        //     data: $scope.cod,
        
        // }).then(function(tratamento){
        //     console.log("SUCCESS")
        //     console.log(tratamento)
        // }).catch(function(){
        //     console.log("não foi possivel")
        // })
        


        $location.path('/TelaDadosImovel')
    }

//    var a = $location.search()
//    console.log(a)
//    var verNome = {
//    result: $scope.data.infoNomeCompleto.verNome
//     }
})