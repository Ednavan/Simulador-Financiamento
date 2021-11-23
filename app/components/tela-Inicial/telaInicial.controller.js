sincronizando.controller('ctrlTelaInicial', function($scope, $location, $http){
    $scope.headTituloInicial = "Simulador de Financiamentos"
    $scope.irProximaPage = function(){
        $location.path('/TelaDadosProponente')
    }

    $scope.historicoPropostas = function(){
      console.log('Checargem de dados no banco de dados',$http.get('http://localhost:3000/bancoDeListaDados/').
      then(function (res) {
          if(res.data == 0){
              $location.path('/ausenciaHistoricoProposta')
              
            }else{
              $location.path('/listaPropostas')
          }

      }))

      };

})
