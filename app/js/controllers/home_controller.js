angular.module("app").controller('HomeController', ['$scope', '$location', 'CurrentUser', function($scope, $location, CurrentUser) {
  $scope.users = [
    {
      name: 'Matt',
      points: 301,
      rounds: []
    },
    {
      name: 'Mike',
      points: 12,
      rounds: []
    }
  ];

  $scope.throwDart = function(num) {
    CurrentUser.id = 0;
    CurrentUser.user.points = CurrentUser.user.points - num;
    CurrentUser.darts  = CurrentUser.user.darts - 1;

    console.log(CurrentUser.user.points);

    if(CurrentUser.user.darts === 0) {
      CurrentUser.user = $scope.users[CurrentUser.id];
      CurrentUser.id++;
    }
  };
}]);
