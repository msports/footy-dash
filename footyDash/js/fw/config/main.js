/**
 *  Entrance of config
 *  Exports config modules
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';
import app from './AppConfig';
import notifier from './NotifierConfig';
import router from './RouterConfig';
import sso from './SSOConfig';

export default [
    app,
    notifier,
    router,
    sso
];
