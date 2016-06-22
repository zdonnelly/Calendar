routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('main.contact', {
            url: 'contact',
            template: require('./contact.html'),
            controller: 'ContactController',
            controllerAs: 'contact'
        });
}