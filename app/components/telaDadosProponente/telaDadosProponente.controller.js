sincronizando.controller('ctrlTelaDadosProponent', function($scope,$location){
    $scope.tituloHeadPage = "Dados Proponente"

    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    $scope.celFormat  = /^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/;

    // $scope.regEx=/^[0-9]{10,10}$/;
    
    
    $scope.irProximaPage = function(nome, profi, cpf, email, nascimento, cep, celular){
       
        var recebendoDados = {      
            dadosDoNome:  $scope.data.infoNomeCompleto,
            dadosDaProfissao: $scope.data.infoProfissao,
            dadosDoCpf: $scope.data.infoCPF,
            dadosDoEmail: $scope.data.infoEmail,
            dadosDoNascimento: $scope.data.infomracoesNascimento,
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
        $scope.data.infomracoesNascimento = editar.dadosDoNascimento;
        $scope.data.infoCEP = editar.dadosDoCep;
        $scope.data.infoCelular = editar.dadosDoCelular
    }

    $scope.buttonCancelar = function(){
        var cancelar = $location.search('')
        console.log('teste', cancelar)

        $location.path('/telaInicio')
        
    }

    
    // $scope.menorIdade = function(){
    
    // var verAno = {
    //     mostragem: $scope.data.infomracoesNascimento
    // }
    // console.log('vendo ano definido no input', verAno)
   
    // function dataHoje(){
    //     var data = new Date();
    //     var ano = data.getFullYear();
    //     return ano
    // }
    // console.log('Ano atual', dataHoje())

    // function data_nascimento(){
    //     var ano2 = verAno.mostragem;
    //     return ano2
    // }
    
    // console.log('Data de nascimento informada :  ',data_nascimento())
  
    // var dataInput = data_nascimento();
    // data = new Date(dataInput);
    // dataFromatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    // console.log({dataFromatada} )
  
    // var ano_atual = new Date().getFullYear();
    // console.log("Ano", ano_atual)
    // var data_aniversario = dataFromatada
    // console.log('DEFINIDA NO INPUT :  ',data_aniversario)
    // var ano_informado = data_aniversario.split('/')[2];
    // console.log(ano_informado)
   
    // idade = (ano_atual - ano_informado);
    // console.log(idade); 
   
    // if(idade < 18 ){
    //     console.log('menor de idade'.customerForm.$invalid);
    //     return
    // }else{
   

    //     console.log('maior de idade'.$valid);
        
    // }

// }  

    
})

$('#inputCpf').mask('000.000.000-00', {reverse: true});

// $('#inputCelular').mask('(00) 0 0000-0000', {reverse: true});
$('#inputCelular').mask('(00) 00000-0000');
$('#InputCep').mask('00.000-000', {reverse: true});


