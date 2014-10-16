require.config({
	paths: {
        'angular': 			'bower_components/angular/angular',
		'angular-route': 	'bower_components/angular-route/angular-route',
		'app': 				'app',
		'routes': 			'routes',
		'domReady': 		'bower_components/requirejs-domready/domReady'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
		'angular-route': {
			deps: ['angular']
		},
		'app': {
			deps: ['angular']
		},
		'routes': {
			deps: ['app']
		}
    },

    // kick start application
    deps: ['./bootstrap']
});