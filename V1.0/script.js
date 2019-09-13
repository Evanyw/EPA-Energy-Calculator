
function myFunction() {
	var amount1 = document.getElementById('hours').value * 0.000707/0.06; /*trees*/
	var amount11 = Math.round(amount1*10)/10;
	document.getElementById('display1').innerHTML = amount11;

	var amount2 = document.getElementById('hours').value * 0.000707/0.008887; /*gasoline*/
	var amount22 = Math.round(amount2*10)/10;
	document.getElementById('display2').innerHTML = amount22;

	var amount3 = document.getElementById('hours').value * 0.000707/0.00000784; /*phone*/
	var amount33 = Math.round(amount3);
	document.getElementById('display3').innerHTML = amount33;

	var amount4 = document.getElementById('hours').value * 0.000707/0.000409; /*vehicle miles*/
	var amount44 = Math.round(amount4);
	document.getElementById('display4').innerHTML = amount44;


}