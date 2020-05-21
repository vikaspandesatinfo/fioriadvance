sap.ui.define(
	["sap/ui/model/json/JSONModel"],
	function(JSONModel){
		return{
			createFruitModel: function(){
				var oModel = new JSONModel();
				oModel.loadData("model/mockData/fruits.json");
				return oModel;
			}	
		};//Added by AJFIORI 0719
});