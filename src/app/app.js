// must import angular before uirouter (order matters)
import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import routing from '../app.config';
import main from './main';
import calendar from './components/calendar';
import contact from './components/contact';

let app = () => {
  return {
    template: require('./main/main.html'),
    controller: 'MainController',
    controllerAs: 'main'
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, main, calendar, contact])
  .controller(main)
    .config(routing);

export default MODULE_NAME;