(function() {
    'use strict';
    angular
      .module('app')
      .controller('adminCtrl', adminCtrlFn)
      .controller('dashboardCtrl', dashboardCtrlFn)
      .controller('invoiceCtrl', invoiceCtrlFn)
      .controller('verifikasiCtrl', verifikasiCtrlFn)
      .controller('adminEbookCtrl', adminEbookCtrlFn)
      .controller('tbhEbookCtrl', tbhEbookCtrlFn)
      .controller('dataCtmCtrl', dataCtmCtrlFn)
      .controller('ctmDetailCtrl', ctmDetailCtrlFn)
      
      
    adminCtrlFn.$inject = ['$scope'];
    function adminCtrlFn($scope) {
        const vm = this;
        vm.text = "ini admin"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    dashboardCtrlFn.$inject = ['$scope'];
    function dashboardCtrlFn($scope) {
        const vm = this;
        vm.text = "ini dari belanja"
    }
    invoiceCtrlFn.$inject = ['$scope'];
    function invoiceCtrlFn($scope) {
        const vm = this;
        vm.text = "ini dari belanja"
    }
    verifikasiCtrlFn.$inject = ['$scope'];
    function verifikasiCtrlFn($scope) {
        const vm = this;
        vm.text = "verifikasi"
    }
    adminEbookCtrlFn.$inject = ['$scope'];
    function adminEbookCtrlFn($scope) {
        const vm = this;
        vm.text = "verifikasi"
    }
    tbhEbookCtrlFn.$inject = ['$scope'];
    function tbhEbookCtrlFn($scope) {
        const vm = this;
        vm.text = "tbh ebook"
    }
    dataCtmCtrlFn.$inject = ['$scope'];
    function dataCtmCtrlFn($scope) {
        const vm = this;
        vm.text = "Data Ctm"
    }
    ctmDetailCtrlFn.$inject = ['$scope'];
    function ctmDetailCtrlFn($scope) {
        const vm = this;
        vm.text = "Data Ctm"
    }
    }
)();