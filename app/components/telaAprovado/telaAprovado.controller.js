sincronizando.controller('ctrlStatusAprovado', function($scope, $location){
    $scope.tituloPageAprovado = "Aprovado"
    console.log('TELA DADOS APROVADO')

    
  var DadosListagemValorTotal = $location.search()
    
  console.log(DadosListagemValorTotal)

  var ResultTotalValue= {
      dado1: DadosListagemValorTotal.formularioValor,
      dado2: DadosListagemValorTotal.formularioValorEntrada
  }

  
  console.log('valores', ResultTotalValue)

 $scope.sub = parseInt(ResultTotalValue.dado1) - parseInt(ResultTotalValue.dado2)
  console.log($scope.sub)


    
    $scope.irParaHome = function(){

        $location.path('/telaInicio')
    }
})

 