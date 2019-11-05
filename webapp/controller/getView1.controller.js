sap.ui.define([
	"sap/ui/core/mvc/Controller",
	/*	"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"*/
], function (Controller) {
	"use strict";

	return Controller.extend("getempdetails.GetEmpDetails.controller.getView1", {
	/*	handleSearch: function(oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("Name", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getSource().getBinding("items");
			oBinding.filter([oFilter]);
		},*/
		onValueHelpRequested : function(oEvent){
			var id = oEvent.getParameters().id.split('--')[2];
			 var oDialog = sap.ui.xmlfragment("getempdetails.GetEmpDetails.fragments.SelectDialog",this);
			 this.getView().addDependent(oDialog);
				oDialog.open(); 
		
			 if(id == "input1"){
			 oDialog.bindAggregation("items",{

				path : "Empname>/ename",

				template : new sap.m.StandardListItem({

				title: "{Empname>name}"

				})
			 });
			 }
			 else{
			 	 oDialog.bindAggregation("items",{

				path : "City>/ecity",

				template : new sap.m.StandardListItem({

				title: "{City>city}"

				})
			 });
			 }
			
		}
	});
	
});