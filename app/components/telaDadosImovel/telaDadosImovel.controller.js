sincronizando.controller('ctrlTelaDadosImovel', function ($scope, $location, $http) {
    $scope.tituloHeadPageImovel = "Dados do Imóvel"

    $scope.converterNumero = function(valor){
        // criar variável para retornar
        var result;
        // retirar os pontos da string
        result = valor.replace(/\./g, '');
        // transformar a vírgula em um ponto
        result = result.replace(/\,/g, '.');
        // retorna o valor como number
        return parseFloat(result);
    }

    console.log('imovel')
    $scope.irProximaPage = function () {
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
            formularioRenda: $scope.converterNumero($scope.data.renda),
            formularioValor: $scope.converterNumero($scope.data.valor),
            formularioValorEntrada: $scope.converterNumero($scope.data.valorEntrada),
            formularioQtdParcela: $scope.data.qtdParcelas
        }

        $location.search(identificaDadosCadastrados)
        console.log(identificaDadosCadastrados)
        // console.log($scope.data.valor)
        // console.log($scope.data.valorEntrada)
    
        
        // $location.search(identificaDadosCadastrados)

        var rendaMensal = $scope.converterNumero($scope.data.renda);
        var valorImovel = $scope.converterNumero($scope.data.valor);
        var valorEntrada = $scope.converterNumero($scope.data.valorEntrada);
    
        
        var realizaCalculoImovel = (0.2 * valorImovel);
        console.log('Aqui analise feita:   ', realizaCalculoImovel)
        // var analisaValorEntrada = {};

        // $scope.verificaSeEntradaMenorQueVintePorcento = function(){
        //     analisaValorEntrada = valorEntrada < (0.2 * valorImovel);
            
        // }
       
        // console.log('AQUIIII',$scope.verificaSeEntradaMenorQueVintePorcento().analisaValorEntrada)

    


        var expressaoFormula = (((valorImovel - valorEntrada + ((($scope.data.qtdParcelas / 12) * 10 / 100) 
        * (valorImovel - valorEntrada))) / ($scope.data.qtdParcelas)))
       

        if( expressaoFormula <= rendaMensal * 0.3) {
            $location.search(identificaDadosCadastrados)
            console.log('Ja está no if',expressaoFormula)
            $location.path('/statusAprovado')
        }else{
            console.log('Ja está no if',expressaoFormula)
            $location.path('/statusReprovado')
        }

        console.log('Apos o if',expressaoFormula)
       
        $http({
            url: 'http://localhost:3000/bancoDeListaDados',
            method: 'POST',
            data: identificaDadosCadastrados
        }).then(function () {
            console.log('sucesso')

        }).catch(function () {
            console.log('não foi possivel estabelecer conexão')
        });

    }

    

    //     $scope.FormulaDosVintePorCento = function(){
    //         if (!$scope.data) {
    //             return false;
    //         }
    //         if (!$scope.data.valorEntrada || !$scope.data.valor){

    //             return false;
    //         }
    //         var entrada = $scope.converterNumero($scope.data.valorEntrada);
    //         var imovel = $scope.converterNumero($scope.data.valor);
    //         console.log(entrada, imovel, entrada < (0.2 * imovel));
    //     return entrada < (0.2 * imovel) 
    // }

    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function (res) {
        (console.log(res))

        $scope.bancoDeListaDados = res.identificaDadosCadastrados
    })

    
    $scope.voltarPage = function () {
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
$('.dinheiroRenda').mask('#.##0,00', { reverse: true });
$('.dinheiroValorImovel').mask('#.##0,00', { reverse: true });
$('.dinheiroValorEntrada').mask('#.##0,00', { reverse: true });
$('.dinheiroRenda').mask('#.##0,00', { reverse: true });