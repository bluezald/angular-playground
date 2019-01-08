'use strict'
var method = 'doIt';
var productView = {
    [method + "-001"]() {
        console.log("in a method");
    }
};
productView['doIt-001']();