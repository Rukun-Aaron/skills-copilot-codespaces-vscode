function skillsMember(){

    return{
        restrict: 'E',
        templateUrl: 'partials/member.html',
        scope: {
            info: '='
        },
        controller: function($scope){
            $scope.member = {};
            $scope.member.name = $scope.info.name;
            $scope.member.shortname = $scope.info.shortname;
            $scope.member.reknown = $scope.info.reknown;
            $scope.member.bio = $scope.info.bio;
        }

    }
}