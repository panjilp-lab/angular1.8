(function() {
    'use strict';
    angular
      .module('app')
      .factory('customerFc', customerFcFn)

      function customerFcFn(){
          var customer = {};
          
          var listCustomer = [
              {
                "id" : 1, "nama" : "Wildan", "email" : "wildan@gmail.com", "alamat" : "Pluto", "nomorHp" : "082119", "password" : "password"
            },
          ]

          customer.getListCustomer  = function () {
              return listCustomer;
          }

          return customer;
      }
      function customerFcFn(ajaxCall) {
        const customer = []
        const host = "http://222.22.1.193";
        const hostUrl = "/api/customer/customerAkun";
        customer.getCustomer = function getDataCustomer() {
            return ajaxCall({
                url : host + hostUrl + '/5f75551d5e94bd2ca908736d', 
                method : 'get'
            })
        }
        customer.getDetail = function getDetailCustomer(id) {
            return ajaxCall({
                url : host + hostUrl + '/5f75551d5e94bd2ca908736d', 
                method : 'get'
            })
        }
        return customer;
    }
    }

)();