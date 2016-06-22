/**
 * Created by zach on 6/22/2016.
 */
import main from './index';

describe('Controller: Main', function() {
   let $controller;

    beforeEach(angular.mock.module(main));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));
});