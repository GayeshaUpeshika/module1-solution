(function() {
    'use strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if (!$scope.dishes || $scope.dishes.trim().length === 0) {
                $scope.empty = true;
                return;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();