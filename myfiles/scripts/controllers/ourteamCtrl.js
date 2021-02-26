(function() {
    'use strict';
    angular
      .module('app')
      .controller('ourteamCtrl', ourteamCtrlFn)
    //   .controller('ecommCtrl', ecommCtrlFn)
    //   .controller('loginCtrl', loginCtrlFn)
    
    homeCtrlFn.$inject = ['$scope'];
    function ourteamCtrlFn($scope) {
        const vm = this;
        vm.text = "halaman team"
        vm.headerUrl = "/views/blocks/header.html";
        // vm.footerUrl = "/views/blocks/footer.html";
    }
    }
)();