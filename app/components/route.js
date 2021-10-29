angular.module("sincronizando").config(function($routeProvider){
    $routeProvider.when('/telaInicio',{
        controller: 'ctrlTelaInicial',
        templateUrl: 'tela-Inicial/telaInicial.html'
    }).when('/TelaDadosProponente',{
        controller: 'ctrlTelaDadosProponent',
        templateUrl: 'telaDadosProponente/telaDadosProponente.html'
    }).when('/TelaDadosImovel', {
        controller: 'ctrlTelaDadosImovel',
        templateUrl: 'telaDadosImovel/telaDadosImovel.html'
    }).when('/statusAprovado',{
        controller: 'ctrlStatusAprovado',
        templateUrl: 'telaAprovado/telaAprovado.html'
    })
    .otherwise('/telaInicio')
})