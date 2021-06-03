sap.ui.define([
    'dxc/tech/gsap/vamshi/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("dxc.tech.gsap.vamshi.controller.App",{
        onInit: function(){
            console.log("Hey folks!! the App Controller is ready Now");
        }
    });
});