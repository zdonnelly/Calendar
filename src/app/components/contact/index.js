import angular from 'angular';
import uirouter from 'angular-ui-router';
import './contact.css';
import routing from './contact.routes';
import ContactController from './contact.controller';

export default angular.module('app.contact', [uirouter])
    .config(routing)
    .controller('ContactController', ContactController)
    .name;