/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  Chip
 *  @date    January 6, 2015
 *
 */

export default [
    {
        id: 'home',
        isDefault: true,
        when: '/home',
        template: '<home-directive></home-directive>'
    }
];
