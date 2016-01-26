/**
 *  Feature loader
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */
'use strict';

var loader = function(Feature) {
    var feature = new Feature();
    feature.run();
    return feature;
};

export default loader;
