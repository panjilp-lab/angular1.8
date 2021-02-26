/**
 * @ngdoc function
 * @name app.config:uiRouter
 * @description
 * # Config
 * Config for the router
 */
(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];
      function config( $stateProvider,   $urlRouterProvider,   MODULE_CONFIG ) {
        
        $urlRouterProvider
          .otherwise('/wilujeng/sumping');
        $stateProvider
          .state('wilujeng', {
            abstract: true,
            url: '/wilujeng',
            templateUrl: "/views/layout/imahInduk.html",
            controller: "homeCtrl as home",
            resolve:load(["/scripts/controllers/homeCtrl.js"])
          })
            .state('wilujeng.sumping', {
              url: '/sumping',
              templateUrl: "/views/pages/imahAnak.html",
              data : { title: 'wilujengsumping' },
              controller: "ecommCtrl as ecm",
              resolve:load(["/scripts/factories/ebook.js"])
            })
          .state('halaman',{
            url:'/halaman',
            templateUrl:'/views/layout/imahInduk.html',
            controller: 'beritaCtrl as brt',
            resolve:load(['/scripts/controllers/beritaCtrl.js'])
          })
            .state('halaman.berita',{
              url:'/berita',
              templateUrl:'/views/pages/berita.html',
              data: {title : 'berita'}
            })
          .state('our',{
            url:'/our',
            templateUrl:'/views/layout/imahInduk.html',
            controller:'ourteamCtrl as our',
            resolve:load(['/scripts/controllers/ourteamCtrl.js'])
          })
            .state('our.team',{
              url:'/team',
              templateUrl:'/views/pages/ourteam.html',
              data: {title : 'ourteam'}
            })
          .state('login',{
            url:'/login',
            templateUrl:'/views/layout/imahInduk.html',
            data: {title : 'login'}
          })
            .state('login.page',{
              url: '/page',
              templateUrl: '/views/pages/login.html'
            })
      //     .state('berita',{
      //       abstract: true,
      //       url: '/berita',
      //       templateUrl: "/views/layout/beritaParent.html",
      //       controller: "daftarCtrl as daftar",
      //       resolve:load(["/scripts/controllers/daftarCtrl.js"])
      //     })
      //       .state('page.berita', {
      //         url: '/detail',
      //         templateUrl: "/views/pages/berita.html",
      //         data : { title: 'akun' },
      //         controller: "akunCtrl as akun"
      //       })
      //     .state('login',{
      //       url: '/login/:id',
      //       templateUrl: "/views/pages/login.html",
      //       controller: "loginCtrl as login",
      //       data : { title: 'login' },
      //       resolve:load(["/scripts/controllers/loginCtrl.js"])
      //     })
      //     .state('produk',{
      //       abstract: true,
      //       url: '/produk',
      //       templateUrl: "/views/layout/produkParent.html",
      //       controller: "produkCtrl as produk",
      //       resolve:load(["/scripts/controllers/produkCtrl.js"])
      //     })
      //       .state('produk.ebook', {
      //         url: '/ebook',
      //         templateUrl: "/views/pages/ebook.html",
      //         data : { title: 'ebook' },
      //         controller: "ebookCtrl as ebook",
      //         resolve:load(['/scripts/factories/ebook.js'])
      //       })
      //       .state('produk.detail', {
      //         url: '/detail',
      //         templateUrl: "views/pages/ebookDetail.html",
      //         data: { title: 'detail'},
      //         controller: "detailCtrl as detail"
      //       })
      //     .state('panduan',{
      //       abstract: true,
      //       url: '/panduan',
      //       templateUrl: "/views/layout/panduanParent.html",
      //       controller: "panduanCtrl as panduan",
      //       resolve:load(['/scripts/controllers/panduanCtrl.js'])
      //     })
      //       .state('panduan.belanja',{
      //         url: '/belanja',
      //         templateUrl: "/views/pages/panduan.html",
      //         data: { title : 'belanja' },
      //         controller: "belanjaCtrl as belanja"
      //       })
      //     .state('customer', {
      //       abstract: true,
      //       url: '/profile',
      //       templateUrl: "/views/layout/myaccountParent.html",
      //       controller: "customerCtrl as customer",
      //       resolve:load(['/scripts/controllers/customerCtrl.js'])
      //     })
      //       .state('customer.detail', {
      //         url: '/detail',
      //         templateUrl: "/views/pages/myaccount.html",
      //         data: { title : 'detail'},
      //         controller: "detailCtrl as detail",
      //         resolve:load(['/scripts/factories/customer.js'])
      //       })
      //     .state('lupaPassword',{
      //       url: '/recovery',
      //       templateUrl: "/views/pages/lupaPassword.html",
      //       data: { title : 'recovery'},
      //       controller: "lupaCtrl as lupa",
      //       resolve:load(["/scripts/controllers/passwordCtrl.js"])
      //     })
      //   .state('keranjang', {
      //     abstract: true,
      //     url: '/keranjang',
      //     templateUrl: "/views/layout/keranjangParent.html",
      //     data: {title: 'keranjang'},
      //     controller: "keranjangCtrl as keranjang",
      //     resolve:load(["/scripts/controllers/chartCtrl.js"])
      //   })
      //     .state('keranjang.belanja', {
      //       url: '/belanja',
      //       templateUrl: "/views/pages/keranjang.html",
      //       data: {title: 'belanja'},
      //       controller: "belanjaCtrl as belanja"
      //     })
      //   .state('checkout',{
      //     url: '/pembayaran',
      //     templateUrl: "/views/pages/checkout.html",
      //     data: {title: 'checkout'},
      //     controller: "checkoutCtrl as checkout",
      //     resolve:load(["/scripts/controllers/checkoutCtrl.js"])
      //   })
      //   .state('pesananku',{
      //     url: '/pesananku',
      //     templateUrl: "/views/pages/pesanan.html",
      //     data: {title: 'pesananku'},
      //     controller: "pesanankuCtrl as pesananku",
      //     resolve:load(["/scripts/controllers/pesanankuCtrl.js"])
      //   })
      //  //config router untuk admin dibawah
      //  .state('admin',{
      //   //  abstract: true,
      //    url: '/admin',
      //    templateUrl: "/views/layout/adminSide.html",
      //    data: {title: 'admin'},
      //    controller: "adminCtrl as admin",
      //    resolve:load(["/scripts/controllers/adminCtrl.js"])
      //  })
      //    .state('admin.dashboard',{
      //      url: '/dashboard',
      //      templateUrl: "/views/pages/admin/dashboard.html",
      //      data: {title: 'dashboard'},
      //      controller: "dashboardCtrl as dashboard"
      //    })
      //    .state('admin.invoice',{
      //      url: '/invoice',
      //      templateUrl: "/views/pages/admin/invoice.html",
      //      data: {title: 'invoice'},
      //      controller: "invoiceCtrl as invoice"
      //    })
      //    //script untuk verifikasi
      //    .state('admin.verifikasi',{
      //      url: '/verifikasi',
      //      templateUrl: "/views/pages/admin/verifikasi.html",
      //      data: {title: 'verifikasi'},
      //      controller: "verifikasiCtrl as verifikasi"
      //    })
      //    .state('admin.ebook',{
      //      url: '/ebook',
      //      templateUrl: "/views/pages/admin/adminEbook.html",
      //      data: {title: 'adminEbook'},
      //      controller: "adminEbookCtrl as adminEbook"
      //    })
      //    .state('admin.tambahebook',{
      //      url: '/tambah',
      //      templateUrl: "/views/pages/admin/tambahEbook.html",
      //      data: {title: 'tambahEbook'},
      //      controller: "tbhEbookCtrl as tbhEbook"
      //    })
      //    .state('admin.customer',{
      //      url: '/datacustomer',
      //      templateUrl: "/views/pages/admin/dataCustomer.html",
      //      data: {title: 'dataCustomer'},
      //      controller: "dataCtmCtrl as datactm"
      //    })
      //    .state('admin.ctmdetail',{
      //      url: '/customerdetail',
      //      templateUrl: "/views/pages/admin/customerDetail.html",
      //      data: {title: 'ctmdetail'},
      //      controller: "ctmDetailCtrl as ctmdetail"
      //    })

        //  config router baru dibawah 2021
        .state('percobaan',{
          url: '/percobaan',
          templateUrl: '/views/pages/percobaan.html',
          data: { title: 'percobaan'}
        })
        function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }

        function getParams(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
      }
})();
