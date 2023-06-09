sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
 ], function (Controller, Fragment) {
    "use strict";
    return Controller.extend("task1.controller.App", {
       onInit : function () {
        var data = {
        "Employees": [
          {
            "Emp-id": 13,
            "FirstName": "sirisha",
            "LastName": "arangi",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 14,
            "FirstName": "sweety",
            "LastName": "arangi",
            "Email": "sweety@gmail.com"
            
          },
          {
            "Emp-id": 11,
            "FirstName": "kushal",
            "LastName": "pilli",
            "Email": "kushal@gmail.com"
          },
          {
            "Emp-id": 10,
            "FirstName": "deepika",
            "LastName": "vinni",
            "Email": "deepika@gmail.com"
          },
          {
            "Emp-id": 12,
            "FirstName": "nikhil",
            "LastName": "patcherla",
            "Email": "nikhil@gmail.com"
          }
        ]
      };
      let oModel=new sap.ui.model.json.JSONModel(data);
      this.getView().setModel(oModel,"employee"); 
   },
   onOpenDialog : function (oEvent) {
      var oView = this.getView();
      var path = oEvent.getSource().getBindingContext("employee").getPath();
       // create dialog lazily
       if (!this.byId("openDialog")) {
        // load asynchronous XML fragment
        Fragment.load({
          id: oView.getId(),
          name: "task1.view.Dialog",
          controller: this
        }).then(function (oDialog) {
         // connect dialog to the root view 
         //of this component (models, lifecycle)
         oView.addDependent(oDialog);
         oDialog.bindElement({
         path: path,
         model: "employee"
        });
       oDialog.open();
    });
    }
    },
   onCloseDialog : function () {
     this.byId("openDialog").destroy();
   }
    });
 });
