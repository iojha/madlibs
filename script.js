angular.module('myApp', [])
	   .controller('myCtrl', function($scope) {
        $scope.femaleName = "Some Name";
        $scope.jobTitle = "Some Job Title";
        $scope.dirtyTask = "Some Task";
        $scope.uselessSkill = "Some Useless Skill";
        $scope.celebrity = "Some Celebrity";
        $scope.obnoxiousCelebrity = "Some Obnoxious Celebrity";
        $scope.adjective = "Some Adjective";
        $scope.hugeNumber = "Some Huge Number";
        $scope.tediousTask = "Some Tedious Task";
    });