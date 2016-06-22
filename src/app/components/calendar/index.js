import angular from 'angular';
import uirouter from 'angular-ui-router';
import './calendar.css';
import routing from './calendar.routes';
import CalendarController from './calendar.controller';

export default angular.module('app.calendar', [uirouter])
    .config(routing)
    .controller('CalendarController', CalendarController)
    .name;
