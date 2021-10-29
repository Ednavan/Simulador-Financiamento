angular.module("sincronizando").config(function($routeProvider){
    $routeProvider.when('/telaInicio',{
        controller: 'ctrlTelaInicial',
        templateUrl: 'tela-Inicial/telaInicial.html'
    })
    .otherwise('telaInicio')
})