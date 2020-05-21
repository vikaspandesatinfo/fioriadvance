sap.ui.define(
	[
		"sap/ui/test/Opa5",
		"ibm/fin/ar/test/integration/arrangement/arrangements",
		"ibm/fin/ar/test/integration/MasterJourney",
		"./MasterJourney"
	],
	function (Opa5, myArrangements, MasterJourney) {

		Opa5.extendConfig({
			arrangements: new myArrangements(),
			viewNamespace: "ibm.fin.ar.view",
			autoWait: true
		});

	});