/**
 *  index.js launch the application.
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css').use();
    require('splash-screen').enable('circular');
});

require.ensure(['sass/styles.scss', 'splash-screen', './main'], function(require) {

	require('sass/styles.scss');

    var App = require('./main').default;
    (new App()).run();
});
