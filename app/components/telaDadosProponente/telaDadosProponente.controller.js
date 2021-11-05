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

    $scope.data = {};
    /**@param editar foi definida uma variavel responsavel por receber os dados como objeto, para que seja capazes de mostrar e consequentemente realizar alterações*/
    var  editar = $location.search()
    
    console.log('PRIMEIRA PAGINA DADOS PROPONENTE',editar)


    if(editar != {}){
        $scope.data.infoNomeCompleto = editar.dadosDoNome;
        $scope.data.infoProfissao = editar.dadosDaProfissao;
        $scope.data.infoCPF = editar.dadosDoCpf;
        $scope.data.infoEmail = editar.dadosDoEmail;
        $scope.data.infoDataNascimento = editar.dadosDoNascimento;
        $scope.data.infoCEP = editar.dadosDoCep;
        $scope.data.infoCelular = editar.dadosDoCelular
    }

    $scope.irParaHome = function(){
        $location.path('/telaInicio')
    }
  
})

$('#inputCpf').mask('000.000.000-00', {reverse: true});

$('#inputCelular').mask(' (00) 0000-0000', {reverse:true})

$('#InputCep').mask('00000-000', {reverse: true});


