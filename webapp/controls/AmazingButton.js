sap.ui.define(
	["sap/m/Button"],
	function(Button){
		return Button.extend("ibm.fin.ar.controls.AmazingButton",{
			metadata: {
				events: {
					"nedstark": {}
				}
			},
			onmouseover: function(){
				this.fireNedstark();
			},
			renderer: {}
		}
		);
});