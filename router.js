/**
 * Created by hygkui on 15/10/2.
 */
App.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('/', {
          url: '/',
          abstract: true,
          templateUrl: 'index.html'
      })
      .state('notice', {
        url: '/notice',
        templateUrl: 'templates/notice.tpl.html'
      })
      .state('score', {
        url: '/score',
        templateUrl: 'templates/score.tpl.html'
      })
      .state('profile', {
        url: '/me',
        templateUrl: 'templates/profile.tpl.html'
      })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/notice');

  });
