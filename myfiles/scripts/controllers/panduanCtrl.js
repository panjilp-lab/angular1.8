(function() {
    'use strict';
    angular
      .module('app')
      .controller('panduanCtrl', panduanCtrlFn)
      .controller('belanjaCtrl', belanjaCtrlFn)
      
    
    panduanCtrlFn.$inject = ['$scope'];
    function panduanCtrlFn($scope) {
        const vm = this;
        vm.text = "panduan"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    
    belanjaCtrlFn.$inject = ['$scope'];
    function belanjaCtrlFn($scope) {
        const vm = this;
    }
}
)();