angular.module("sincronizando").config(function ($routeProvider) {
    $routeProvider.when('/telaInicio', {
        controller: 'ctrlTelaInicial',
        templateUrl: '../app/components/tela-Inicial/telaInicial.html'
    }).when('/TelaDadosProponente', {
        controller: 'ctrlTelaDadosProponent',
        templateUrl: '../app/components/telaDadosProponente/telaDadosProponente.html'
    }).when('/TelaDadosImovel', {
        controller: 'ctrlTelaDadosImovel',
        templateUrl: '../app/components/telaDadosImovel/telaDadosImovel.html'
    }).when('/statusAprovado', {
        controller: 'ctrlStatusAprovado',
        templateUrl: '../app/components/telaAprovado/telaAprovado.html'
    }).when('/statusReprovado', {
        controller: 'ctrlStatusReprovado',
        templateUrl: '../app/components/telaReprovado/telaReprovado.html'
    }).when('/listaPropostas', {
        controller: 'ctrlListaPropostas',
        templateUrl: '../app/components/telaListaPropostas/telaListaPropostas.html'
    })
        .otherwise('/telaInicio')

})
