/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Master"
], function (opaTest) {
	"use strict";

	QUnit.module("All the tests which will be done on Master page");

	opaTest("Check if the search is working on master page", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Actions
		When.Master.iSearchProduct();

		// Assertions
		Then.Master.iMustSeeItem();

		// Cleanup
		///Given.iTeardownMyApp();
	});

});