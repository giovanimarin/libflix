define([
    'angular',
	'angular-route',
	'./app/controllers/index',
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
		'app.controllers',
    ]);
});