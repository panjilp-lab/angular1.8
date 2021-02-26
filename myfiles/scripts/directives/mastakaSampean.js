(function() {
    'use strict';
    angular
      .module('app')
      .directive('mastakaNa', mastakaNaFn)
      .directive('sampeanNa', sampeanNaFn)
      .directive('sirahadmNa', sirahadmNaFn)

      function mastakaNaFn() {
          return {
              templateUrl : '/views/blocks/header.html'
          }
      }
      function sampeanNaFn() {
            return {
                templateUrl : '/views/blocks/footer.html'
            }
      }
      function sirahadmNaFn() {
        return {
            templateUrl : '/views/blocks/adminHead.html'
        }
  }
})();