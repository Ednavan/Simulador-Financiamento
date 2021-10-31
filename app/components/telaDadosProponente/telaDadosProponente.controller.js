sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location){
    $scope.tituloHeadPage = "Dados Proponente"

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