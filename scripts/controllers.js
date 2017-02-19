var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function($scope) {
    $scope.answer = "YES"
    
$scope.primeNumbers = function (n) {
    var a = [];
    for (var i = 0; i <= n; i++) {
       a.push(i);
    }
    
    a[1] = 0
    lst = []
    i=2
    while (i<=n){
        if(a[i] != 0){
            lst.push(a[i])
            for (var j = i; j<=n; j= j+i ){
                a[j] = 0
            }
        }
        i++
    }
    return lst
}

$scope.isNumberPrime = function(n){
    var primeNumbers = $scope.primeNumbers(n)
    var answer = $scope.primeNumbers(n).indexOf(n) < 0 ? "НЕТ" : "ДА" 
    return answer
}

$scope.numberChanged = function(n){
    $scope.answer = $scope.isNumberPrime(n)
}
    
})