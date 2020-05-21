sap.ui.define(
	[
	"sap/ui/test/Opa5"], 
	function(Opa5){
		return Opa5.extend("ibm.fin.ar.test.integration.arrangement.arrangements",{
			
			iStartMyApp: function(){
				return this.iStartMyAppInAFrame("../flpSanboxWithMock.html?#Fruits-manage");
			}	,
			iTeardownMyApp: function(){
				return this.iTeardownMyApp("../../../flpSandboxWithMock.html");
			}
			
		});
});