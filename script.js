angular.module('myApp', ['ngMessages'])
	   .controller('myCtrl', function($scope) {
        // $scope.femaleName = "";
        // $scope.jobTitle = "";
        // $scope.dirtyTask = "";
        // $scope.uselessSkill = "";
        // $scope.celebrity = "";
        // $scope.obnoxiousCelebrity = "";
        // $scope.adjective = "";
        // $scope.hugeNumber = "";
        // $scope.tediousTask = "";

        //show and hide
        $scope.inputShow = "true";
        $scope.resultShow="false";

        $scope.submit = function(){
            if( $scope.form.$invalid ) {
                console.log('The form is not valid');
            } else {
                console.log('The form is valid');
            }
            $scope.resultShow="true";
            $scope.inputShow="false";
        }
    });
