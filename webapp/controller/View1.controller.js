sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("month.MonthDisplay.controller.View1", {
		onInit: function () {
		},
	month1: function(){
		MessageToast.show("January");
	},
	month2: function(){
		MessageToast.show("February");
	},
	month3: function(){
		MessageToast.show("March");
	},
	month4: function(){
		MessageToast.show("April");
	},
	month5: function(){
		MessageToast.show("May");
	},
	month6: function(){
		MessageToast.show("June");
	},
	month7: function(){
		MessageToast.show("July");
	},
	month8: function(){
		MessageToast.show("August");
	},
	month9: function(){
		MessageToast.show("September");
	},
	month10: function(){
		MessageToast.show("October");
	},
	month11: function(){
		MessageToast.show("November");
	},
	month12: function(){
		MessageToast.show("December");
	}
	
		
 

	});
});