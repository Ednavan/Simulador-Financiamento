angular.module("sincronizando").config(function($routeProvider){
    $routeProvider.when('/telaInicio',{
        controller: 'ctrlTelaInicial',
        templateUrl: 'tela-Inicial/telaInicial.html'
    }).when('/TelaDadosProponente',{
        controller: 'ctrlTelaDadosProponent',
        templateUrl: 'telaDadosProponente/telaDadosProponente.html'
    })
    .otherwise('telaInicio')
})