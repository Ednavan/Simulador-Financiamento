sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location){
    $scope.tituloHeadPage = "Dados Proponente"
    $scope.data = {};
    var  editar = $location.search()
    console.log('PRIMEIRA PAGINA DADOS PROPONENTE',editar)


    if(editar != {}){
        $scope.data.infoNomeCompleto = editar.listaNomes;
        $scope.data.infoProfissao = editar.listaProfissao;
        $scope.data.infoCPF = editar.listaCpf;
        $scope.data.infoEmail = editar.listaEmail;
        $scope.data.infoDataNascimento = editar.listaNascimento;
        $scope.data.infoCEP = editar.listaCep;
        $scope.data.infoCelular = editar.listaCelular
    }

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
        $location.path('/TelaDadosImovel')
    }

})