angular.module("sincronizando").config(function($routeProvider){
    $routeProvider.when('/telaInicio',{
        controller: 'ctrlTelaInicial',
        templateUrl: '../app/components/tela-Inicial/telaInicial.html'
    }).when('/TelaDadosProponente',{
        controller: 'ctrlTelaDadosProponent',
        templateUrl: '../app/components/telaDadosProponente/telaDadosProponente.html'
    }).when('/TelaDadosImovel', {
        controller: 'ctrlTelaDadosImovel',
        templateUrl: '../app/components/telaDadosImovel/telaDadosImovel.html'
    }).when('/statusAprovado',{
        controller: 'ctrlStatusAprovado',
        templateUrl: '../app/components/telaAprovado/telaAprovado.html'
    })
    .otherwise('/telaInicio')
})