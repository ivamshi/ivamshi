  
sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("dxc.tech.gsap.vamshi.Component",{
        metadata:{
            manifest: "json"
        },
        init: function(){
            //super->constructor()
            //base class constructor by passing child class object which will
            //enriched by base class with extra stuff
            UIComponent.prototype.init.apply(this);
            var oRouter = this.getRouter();
            oRouter.initialize();
        },
      //  createContent: function(){
        //     var oView = new sap.ui.view({
        //         id: "idAppView",
        //         viewName: "dxc.tech.gsap.vamshi.view.App",
        //         type: "XML"
        //     });

        //     //this.getView().byId()
        //     //Step 1: Get The App Container Control object which will have all the over views as childrens
        //     var oAppCon =  oView.byId("idAppCon");
        //     //Step 2: Create the child view objects
        //     var oView1 = new sap.ui.view({
        //         id: "idView1",
        //         viewName: "dxc.tech.gsap.vamshi.view.View1",
        //         type: "XML"
        //     });
        //     var oView2 = new sap.ui.view({
        //         id: "idView2",
        //         viewName: "dxc.tech.gsap.vamshi.view.View2",
        //         type: "XML"
        //     });
        //     //TODO: If we have 200 views, do we need to write this code 200 times.
        //     //Step 3: Linking - Add both our views inside App Container Control
        //     oAppCon.addMasterPage(oView1).addDetailPage(oView2);


        //     return oView;
        // },
        destroy: function(){

        }
    });
});