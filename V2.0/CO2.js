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
	document.getElementById('display1').innerHTML = value;

	var days = sum2(data);
	document.getElementById('display2').innerHTML = days;

	var amount1 = value * 0.000707 * 41; /*social cost of CO2 $41*/
	var amount11 = Math.round(amount1*1000)/1000;
	document.getElementById('display3').innerHTML = amount11;

	var amount2 = value * 0.000707 * 1000; /*CO2 unit: Metric Tons to Kilograms*/ 
	var amount22 = Math.round(amount2*10)/10;
	document.getElementById('display4').innerHTML = amount22;

}

d3.csv('results.csv',function (data) {

  myFunction(data)
})