App.controller('MainController', ['$scope', function ($scope) {
    $scope.appToken = "";
    $scope.subscription;
    $scope.logContent = "";

    var client = new Faye.Client('/faye');

    $scope.setToken = function(){
        if($scope.subscription != undefined){
            $scope.subscription.cancel();
        }
        $scope.subscription = client.subscribe('/log/'+$scope.appToken, function(message) {
            document.getElementById("logArea").value += message.content + "\n";
            document.getElementById("logtarea").scrollTop = document.getElementById("logtarea").scrollHeight;
        });
    }
}]);