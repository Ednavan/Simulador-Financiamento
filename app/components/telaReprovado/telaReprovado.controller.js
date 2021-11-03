sincronizando.controller('ctrlStatusReprovado', function($scope, $location){
    $scope.tituloPageReprovado = "Reprovado"
   var a =  $location.search()
   console.log(a)
    $scope.irParaInicio = function(){
        $location.path('/telaInicio')
    }
        
})