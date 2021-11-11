sincronizando.controller('ctrlStatusAprovado', function($scope, $location){
    $scope.tituloPageAprovado = "Aprovado"
    console.log('TELA DADOS APROVADO')

    
  var DadosListagemValorTotal = $location.search()
    
  console.log(DadosListagemValorTotal)

  var ResultTotalValue= {
      dado1: DadosListagemValorTotal.formularioValor,
      dado2: DadosListagemValorTotal.formularioValorEntrada,
      dados3: DadosListagemValorTotal.formularioQtdParcela
  }

  
  console.log('valores', ResultTotalValue)

 $scope.sub = parseFloat(ResultTotalValue.dado1) - parseFloat(ResultTotalValue.dado2)
  console.log($scope.sub)


  $scope.calculandoParcelaInicial = parseFloat($scope.sub * ((100 + (10) * parseFloat(ResultTotalValue.dados3/12)))/100)/  ResultTotalValue.dados3
  console.log (parseFloat($scope.calculandoParcelaInicial))
    
    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})

 