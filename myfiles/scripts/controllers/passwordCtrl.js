(function() {
    'use strict';
    angular
      .module('app')
      .controller('lupaCtrl', lupaCtrlFn)
    
      lupaCtrlFn.$inject = ['$scope', '$state'];
      function lupaCtrlFn($scope, $state) {
          const vm = this;
          vm.alamatEmail = {};
  
          vm.kirim = function(){
              console.log(vm.alamatEmail)
              $state.go('login')
          }
    }
    }
)();