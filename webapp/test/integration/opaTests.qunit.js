/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"getempdetails/GetEmpDetails/test/integration/AllJourneys"
=======
		"month/MonthDisplay/test/integration/AllJourneys"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});