sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
<<<<<<< HEAD
		viewNamespace: "getempdetails.GetEmpDetails.view.",
=======
		viewNamespace: "month.MonthDisplay.view.",
>>>>>>> refs/heads/master
		autoWait: true
	});
});