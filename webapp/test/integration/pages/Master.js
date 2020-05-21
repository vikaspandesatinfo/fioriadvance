sap.ui.define([
		"sap/ui/test/Opa5",
		"ibm/fin/ar/test/integration/pages/Commons",
		"sap/ui/test/actions/Press",
		"sap/ui/test/matchers/AggregationLengthEquals",
		"sap/ui/test/actions/EnterText"
	], function(Opa5,Commons, Press,AggregationLengthEquals, EnterText) {
		"use strict";

		var sViewName = "View1";

		Opa5.createPageObjects({
			Master: {
				actions: {
					iFeedValue: function(myActions){
						return this.waitFor({
							id: "idSearch",
							viewName: sViewName,
							actions: myActions
						});
					},
					iClickOnSearch: function(){
						return this.waitFor({
							id: "idSearch",
							viewName: sViewName,
							success: function(oSearchField){
								oSearchField.fireSearch();
							}
						});
					},
					iSearchProduct: function() {
						return this.waitFor({
							id: "idList",
							viewName: sViewName,
							success: function(oList){
								var sTitle = oList.getItems()[0].getTitle();
								return this.iFeedValue(new EnterText({text: sTitle})).iClickOnSearch();
							},
							errorMessage: "Was not able to find the control with the id controlId"
						});
					}
				},
				assertions: {
					iMustSeeItem: function() {
						return this.waitFor({
							id: "idList",
							viewName: sViewName,
							matchers: new AggregationLengthEquals({name:"items", length:1}),
							success: function(oList) {
								Opa5.assert.ok(true, "Yes we found item you were looking");
							},
							errorMessage: "Not able to find the item you were looking"
						});
					}
				}
			}
		});
	}
);