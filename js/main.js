angular.module('myApp', [])
 
.controller('MainController', ['$scope', function($scope) {
  $scope.selectedPage = 'home';

  $scope.select = function(page) {

    $scope.selectedPage = page;
  };

  $scope.works = [
    {
      name: 'PalmDrive Inc.',
      url: 'http://palmdrive.cn/',
      img: 'img/palmdrive.jpg'
    },
    {
      name: 'Neighborhood Map',
      url: 'http://dbhkhk.github.io/neighborhood-map/',
      img: 'img/neighborhood-map.jpg'
    },
    {
      name: 'Arcade Game Clone',
      url: 'http://dbhkhk.github.io/frontend-nanodegree-arcade-game/',
      img: 'img/arcade_game_500.jpg'
    }
  ];

  $scope.myInfo = {
    github: 'https://github.com/dbhkhk',
    linkedIn: 'https://www.linkedin.com/in/brodychen'
  }
}]);