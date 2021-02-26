(function() {
    'use strict';
    angular
      .module('app')
      .factory('asusFc', asusFcFn)

      function asusFcFn(){
          var asus = {};
          
          var listAsus = [
              {
                  "id" : 1, "nama" : "iPhoneX", "deskripsi" : "frontend", "harga" : "Hehe", "ketersediaan" : "tersedia", "status" : "baru"
              },
              {
                "id" : 1, "nama" : "iPhoneX", "deskripsi" : "frontend", "harga" : "Hehe", "ketersediaan" : "tersedia", "status" : "baru"
              },
              {
                "id" : 1, "nama" : "iPhoneX", "deskripsi" : "frontend", "harga" : "Hehe", "ketersediaan" : "tersedia", "status" : "baru"
              },
              
          ]

          asus.getListAsus  = function () {
              return listAsus;
          }

          return asus;
      }
      function asusFcFn(ajaxCall) {
        const asus = []
        const host = "http://192.168.1.9";
        const hostUrl = "/api/laptop/";
        asus.getAsus = function getDataAsus() {
            return ajaxCall({
                url : host + hostUrl + '/listLaptopAsus/0/2', 
                method : 'get'
            })
        }
        asus.getDetail = function getDetailAsus(id) {
            return ajaxCall({
                url : host + hostUrl + '/listLaptopAsus/0/2', 
                method : 'get'
            })
        }
        return asus;
    }
    }

)();