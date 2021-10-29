sincronizando.controller('ctrlTelaDadosImovel', function($scope, $location, $http){
    $scope.tituloHeadPageImovel = "Dados do Imóvel"


    $scope.data = {}

    $scope.envioDados= function (){
        console.log('chegou')
        $http({
            url: 'http://localhost:3000/bancoDeListaDados/',
            method: 'POST',
            data: $scope.data
        }).then(function(){
            console.log('sucess')
        })
       
    }
    $http.get('http://localhost:3000/bancoDeListaDados/').
    then(function(res){
        (console.log(res))
        $scope.bancoDeListaDados = res.data
    })



    $scope.irProximaPage = function(){
        $location.path('/TelaDadosProponente')
    }

})