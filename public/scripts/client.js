console.log( 'js' );

// angular module
var myApp = angular.module('myApp', []);

// controller for this app
myApp.controller('ReviewController', function(){
    console.log('NG');
    // hold controller in a var
    var vm = this;
    // array for all bands
    vm.bands = [];
    // add band
    vm.addBand = function () {
        console.log('in addBand', vm.bandIn);
        vm.bands.push(vm.bandIn);
        console.log(vm.bands);
    }
})