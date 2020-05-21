//Changes made by Sunil-11
//Changes made by Sunil-22
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function(Controller, MsgBox, MsgToast, History) {
	"use strict";
	return Controller.extend("ibm.fin.ar.controller.Add", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ibm.fin.ar.view.View2
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			//you are telling router to hit the method every time route changes - registration
			this.oRouter.attachRoutePatternMatched(this.turakmakto, this);
			var oLocalModelAdd = new sap.ui.model.json.JSONModel({
				"productData": {"PRODUCT_ID": "",
				                "TYPE_CODE": "PR",
				                "CATEGORY": "Notebooks",
				                "NAME": "",
				                "DESCRIPTION": "",
				                "SUPPLIER_ID": "0100000046",
				                "SUPPLIER_NAME": "SAP",
				                "PRICE": "",
				                "CURRENCY_CODE": "INR"}
			});
			this.getView().setModel(oLocalModelAdd, "viewModel");
			
		},
		onDelete: function(){
			var prodId = this.getView().getModel("viewModel").getProperty("/productData/PRODUCT_ID");
			this.oDataModel.remove("/ProductSet('" + prodId + "')",{
				success: function(){
					MsgToast.show("Superb@! i did deleted and saved you :)");
				},
				error: function(){
					MsgBox.error("Illa!! couldnt delete");
				}
			});
		},
		//every time the route changes
		turakmakto: function(oEvent){
			if(!this.oDataModel){
				this.oDataModel = this.getView().getModel();
			}
		},
		onSave:function(){
			//access the local model which is pertaining to our view
			var localModel = this.getView().getModel("viewModel");
			//get the product data from the json model
			var productPayload = localModel.getProperty("/productData");
			//get the odata model object to pass this as a POST call to backend
			this.oDataModel.create("/ProductSet",productPayload,{
				success: function(odata){
					MsgToast.show("Wallah!! The product has been created in SAP S4HANA system now.");
				},
				error: function(oError){
					MsgBox.error("error occurred while POST to backend");
				}
			});
			//Send the request to abap server for creating the record
			//success, error
		},
		onBack: function(){
			//var oAppCont = this.getView().getParent();
			//oAppCont.to("idView1");
			//var previousHash = History.getInstance().getPreviousHash();
			//this.oRouter.navTo(previousHash);
			window.history.go(-1);
		},
		onClick: function(){
			MsgToast.show("standard sap button clicked")	;
		}

	});

});