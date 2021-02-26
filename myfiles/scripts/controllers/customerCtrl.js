(function() {
    'use strict';
    angular
      .module('app')
      .controller('customerCtrl', customerCtrlFn)
      .controller('detailCtrl', detailCtrlFn)
      
    
    customerCtrlFn.$inject = ['$scope'];
    function customerCtrlFn($scope) {
        const vm = this;
        vm.text = "panduan"
        vm.headerUrl = "/views/blocks/header.html";
        vm.footerUrl = "/views/blocks/footer.html";
    }
    
    detailCtrlFn.$inject = ['$scope', 'customerFc'];
    function detailCtrlFn($scope, customerFc) {
        const vm = this;
        // vm.listCustomer = customerFc.getListCustomer();
        // console.log(vm.listCustomer)
        
        vm.customer = {
            list : {}
          };
    
          customerFc.getCustomer()
          .then(function (docs) {
            console.log(docs);
            vm.customer.list = docs;
          }, function (err) {
            console.log(err);
          })
    
          var id;
          customerFc.getDetail(id)
          .then((data)=>{
            console.log(data);
          }, (err)=>{
            console.log(err);
          })
    }
}
)();