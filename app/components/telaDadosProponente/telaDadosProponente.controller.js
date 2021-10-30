sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location){
    $scope.tituloHeadPage = "Dados Proponente"

    $scope.irProximaPage = function(nome, profi, cpf, email, nascimento, cep, celular){
    
     
        var recebendoDados = {
            
            dadosDoNome:  $scope.infoNomeCompleto,
            dadosDaProfissao: $scope.infoProfissao,
            dadosDoCpf: $scope.infoCPF,
            dadosDoEmail: $scope.infoEmail,
            dadosDoNascimento: $scope.infoDataNascimento,
            dadosDoCep: $scope.infoCEP,
            dadosDoCelular: $scope.infoCelular

           
            
        }
        $location.search(recebendoDados)
        console.log(recebendoDados)
        // $location.path('/TelaDadosImovel')
    }
})