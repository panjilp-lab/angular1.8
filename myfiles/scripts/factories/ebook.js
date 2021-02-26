(function() {
    'use strict';
    angular
      .module('app')
      .factory('ebookFc', ebookFcFn)

      function ebookFcFn(){
          var ebook = {};
          
          var listEbook = [
              {
                  "id" : 1, "judul" : "Kesehatan", "harga" : "Rp 20000", "pengarang" : "Anjay Gurinjay", "deskripsi" : "Bagus" 
              },
              {
                "id" : 2, "judul" : "Corona", "harga" : "Rp 30000", "pengarang" : "Siapa", "deskripsi" : "Bagus Banget" 
              },
              {
                "id" : 3, "judul" : "Covid19", "harga" : "Rp 25000", "pengarang" : "Wildan", "deskripsi" : "Bagus Banget" 
              },
          ]

          ebook.getListEbook  = function () {
              return listEbook;
          }

          return ebook;
      }
      function ebookFcFn(ajaxCall) {
        const ebook = []
        const host = "http://222.22.1.193";
        const hostUrl = "/api/ebook";
        ebook.getEbook = function getDataEbook() {
            return ajaxCall({
                url : host + hostUrl + '/ebookList/0/4', 
                method : 'get'
            })
        }
        ebook.getDetail = function getDetailEbook(id) {
            return ajaxCall({
                url : host + hostUrl + '/ebookList/0/4', 
                method : 'get'
            })
        }
        return ebook;
    }
    }

)();