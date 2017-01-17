App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'LogController',
        templateUrl: 'app/templates/log.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});