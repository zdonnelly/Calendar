routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('main.calendar', {
            url: 'calendar',
            template: require('./calendar.html'),
            controller: 'CalendarController',
            controllerAs: 'calendar'
        });
}
