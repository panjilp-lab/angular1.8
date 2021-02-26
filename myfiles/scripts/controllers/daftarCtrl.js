(function() {
    'use strict';
    angular
      .module('app')
      .controller('daftarCtrl', daftarCtrlFn)
      .controller('akunCtrl', akunCtrlFn)
      
    
    daftarCtrlFn.$inject = ['$scope'];
    function daftarCtrlFn($scope) {
        const vm = this;
        vm.text = "Daftar"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    akunCtrlFn.$inject = ['$scope', '$state'];
    function akunCtrlFn($scope, $state) {
        const vm = this;
        vm.account = {};

        vm.simpan = function(){
            console.log(vm.account)
            $state.go('login', {
                id:"12345"
            })
        }
    }
}
)();