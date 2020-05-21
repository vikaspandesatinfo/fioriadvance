sap.ui.define(["ibm/fin/ar/util/formatter"],function(formatter){
	
	QUnit.module("Welcome to QUnitModule with UI5");
	
	function checkResult(assert,sValue,expectedVal){
		var actual = formatter.getFormattedNumber(sValue);
		assert.strictEqual(expectedVal,actual,"Tesing for the number conversion");
	}
	
	QUnit.test("Check if simple postive number is converted to 2 decimal",function(assert){
		checkResult.call(this,assert,"3.123","3.12");
	});	
	QUnit.test("Check if -ve are converting",function(assert){
		checkResult.call(this,assert,"-5","-5.00");
	});
	QUnit.test("Check if  postive number w/o decimal is converted to 2 decimal",function(assert){
		checkResult.call(this,assert,"10","10.00");
	});
	QUnit.test("Check if null return as blank",function(assert){
		checkResult.call(this,assert,null,"");
	});
});