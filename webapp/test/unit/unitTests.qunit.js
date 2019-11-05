/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< HEAD
		"getempdetails/GetEmpDetails/test/unit/AllTests"
=======
		"month/MonthDisplay/test/unit/AllTests"
>>>>>>> refs/heads/master
	], function () {
		QUnit.start();
	});
});