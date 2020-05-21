//Changes done by riju
sap.ui.define(
	[],
	function(){
		//1. which is super class of all my UI Controls in SAPUI5?
		//sap.ui.core.Control
		//2. Which keyword we use to define inheritence
		//Extend
		return sap.ui.core.Control.extend("MyHeading",{
			metadata: {
				properties: {
					"arya":"",
					"color": "",
					"whitewalker": ""
				}
			},
			init: function(){
				this.setColor("red");
			},
			renderer: function(oRm,oControl){
				//oRm - renderer object to talk to browser
				//oRm.write('<h1 style="color: '+ oControl.getColor() +'">' + oControl.getArya() + '</h1>');
				//oControl - object of our custom control itself
				oRm.write("<h1");
				oRm.addStyle("color", oControl.getColor());
				oRm.addStyle("border", oControl.getWhitewalker());
				oRm.writeStyles();
				oRm.write(">" + oControl.getArya() + "</h1>");
				
			}
		});
	}
);