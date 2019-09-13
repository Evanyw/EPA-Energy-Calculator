function sum1(data){
	var total =  0;
	for(var i = 0; i < data.length;i++) {                  
		if(isNaN(data[i]["Electricity Use"].substring(0,3))){
			continue;
		}
		total += Number(data[i]["Electricity Use"].substring(0,3)); // total electricity usage 
	}

	return total;
}

function sum2(data){
	var total =  0;
	for(var i = 0; i < data.length;i++) {                  
		if(isNaN(data[i]["Number of Days"].substring(0,2))){
			continue;
		}
		total += Number(data[i]["Number of Days"].substring(0,2)); // total days
	}

	return total;
}

function myFunction(data) {
	// var value = data[2]["Electricity Use"].substring(0,3); // fetch the data from results.csv, e.g. data[0]: first month
	var value = sum1(data);
	document.getElementById('display0').innerHTML = value;

	var days = sum2(data);
	document.getElementById('display6').innerHTML = days;

	var amount1 = value * 0.000707/0.06; /*trees*/
	var amount11 = Math.round(amount1*10)/10;
	document.getElementById('display1').innerHTML = amount11;

	var amount2 = value * 0.000707/0.008887; /*gasoline*/
	var amount22 = Math.round(amount2*10)/10;
	document.getElementById('display2').innerHTML = amount22;

	var amount3 = value * 0.000707/0.00000784; /*phone*/
	var amount33 = Math.round(amount3);
	document.getElementById('display3').innerHTML = amount33;

	var amount4 = value * 0.000707/0.000409; /*vehicle miles*/
	var amount44 = Math.round(amount4);
	document.getElementById('display4').innerHTML = amount44;

	var amount5 = value * 0.000707 * 1000; /*CO2 unit: Metric Tons to Kilograms*/ 
	var amount55 = Math.round(amount5*10)/10;
	document.getElementById('display5').innerHTML = amount55;

}

d3.csv('results.csv',function (data) {

  myFunction(data)
})