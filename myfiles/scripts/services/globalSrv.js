(function() {
    'use strict';
    angular
      .module('app')
      .factory('ajaxCall', ajaxCallFn)

      function ajaxCallFn($q, $http) {
          function getData(option) {
              var d = $q.defer();
              var x = $http(option)
              x.then(function (result) {
                  if (result) {
                      d.resolve(result.data)
                  }else {
                      d.reject('kosong')
                  }
              }, function (err) {
                  d.reject(err)
              })

              return d.promise;
          }
          return getData;
      }
    }
)();