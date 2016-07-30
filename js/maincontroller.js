var app = angular.module("dashboard", ['ui.bootstrap']);


app.controller("MainController", ['$scope', '$http', '$modal', function($scope, $http, $modal, $modalInstance) 
{
    // Sample options for first chart
                $scope.chartOptions = {
                    title: {
                        text: 'Temperature data'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },

                    series: [{
                        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    }]
                };
        
       $http.get('json/phones.json').
       then (function(response)				// To load json data - i.e Product list to portal page...
		{
		$scope.phone = response.data;
		});
        
        $http.get("http://www.w3schools.com/angular/customers.php")
        .then(function (response) {
            $scope.names = response.data.records;
        });

        $http.get('https://api.myjson.com/bins/2ks7z')
        .then(function (response) {
            $scope.userdetail = response.data;
            console.log( $scope.userdetail);
        })



}]);
app.directive('hcChart', function () {
                return {
                    restrict: 'E',
                    template: '<div></div>',
                    scope: {
                        options: '='
                    },
                    link: function (scope, element) {
                        Highcharts.chart(element[0], scope.options);
                    }
                }

            });
