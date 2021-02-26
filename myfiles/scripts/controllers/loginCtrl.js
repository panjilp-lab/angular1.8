(function() {
  'use strict';
  angular
    .module('app')
    .controller('homeCtrl', homeCtrlFn)
    .controller('ecommCtrl', ecommCtrlFn)
    .controller('loginCtrl', loginCtrlFn)
  
  homeCtrlFn.$inject = ['$scope'];
  function homeCtrlFn($scope) {
      const vm = this;
      vm.text = "ini home"
      vm.headerUrl = "/views/blocks/header.html";
      vm.footerUrl = "/views/blocks/footer.html";
  }
  ecommCtrlFn.$inject = ['$scope'];
  function ecommCtrlFn($scope) {
      const vm = this;
      vm.text = "ini dari home"
  }
  loginCtrlFn.$inject = ['$scope', '$state'];
  function loginCtrlFn($scope, $state) {
  const vm = this;
  vm.customer = {};

  vm.masuk = function(){
    console.log(vm.customer)
    $state.go('customer.detail', {
        id:"1234567"
    })
    }
  }
  }
)();