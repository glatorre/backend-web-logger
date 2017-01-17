App.controller('MainController', ['$scope', function ($scope) {
    $scope.appToken = "";
    $scope.subscription;
    $scope.logContent = "";

    //var client = new Faye.Client('http://localhost:3600/faye');
    var client = new Faye.Client('/faye');

    $scope.setToken = function(){
        if($scope.subscription != undefined){
            $scope.subscription.cancel();
        }
        $scope.subscription = client.subscribe('/log/'+$scope.appToken, function(message) {
            console.log(JSON.stringify(message));
            //$scope.logContent ="Ciao";//+= message.content + "\n";
            document.getElementById("logArea").value += message.content + "\n";
            // handle message
            
        });
    }
}]);