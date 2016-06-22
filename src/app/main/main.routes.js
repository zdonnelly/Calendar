routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('main', {
           url: '/',
            template: require('./main.html'),
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('main.home', {
            url: 'home',
            template: require('./main-content.html'),
            controller: 'MainController',
            controllerAs: 'main'
        });
}