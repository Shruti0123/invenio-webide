/*global QUnit*/

sap.ui.define([
	"getempdetails/GetEmpDetails/controller/getView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("getView1 Controller");

	QUnit.test("I should test the getView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});