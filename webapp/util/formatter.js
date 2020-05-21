sap.ui.define([],
function(){
	return {
		
		getFormattedNumber: function(sValue){
			if(!sValue){return "";}
			return parseFloat(sValue).toFixed(2);
		}
		
	};	
});