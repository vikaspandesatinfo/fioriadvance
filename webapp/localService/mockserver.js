sap.ui.define(
	["sap/ui/core/util/MockServer"],
	function(MockServer){
		return {
			init: function(){
				//Step 1: Creating instance of mock server for the registered service
				var oMock = new MockServer({
					rootUri: "/sap/opu/odata/sap/ZJUN_ODATA_SRV/"
				});
				
				//Step 2: define the mocking config
				MockServer.config({
					autoRespond: true,
					autoRespondAfter: 1000
				});
				
				//Bind the metadata of the odata (provide the structure of the data to generate mock data)
				var sPath = jQuery.sap.getModulePath("ibm.fin.ar.localService");
				var sMeta = sPath + '/metadata.xml';
				oMock.simulate(sMeta,{
					sMockdataBaseUrl: sPath + '/mockdata',
					bGenerateMissingMockData : true
				});
				
				oMock.start();
			}	
		};
});