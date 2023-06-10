	function convert(){
		
		var temp = document.getElementById('val').value;
		var unit = document.getElementById('select').value;

		if(temp === ""){
			document.getElementById('err').innerHTML = "Empty Temperature";
		}
		else if(unit === "Type"){
			document.getElementById('err').innerHTML = "";
			document.getElementById('err_unit').innerHTML = "Empty Unit";
		}
		else{

			document.getElementById('err').innerHTML = "";
			document.getElementById('err_unit').innerHTML = "";

			var temp_flt = parseFloat(temp);
			if(unit === "Celcius"){
				var t1 = (temp_flt*1.8) + 32;
				var t2 = temp_flt+273.15 ;

				document.getElementById('ans1').innerHTML = t1 + "˚ Fahrenheit";
				document.getElementById('ans2').innerHTML =  t2 + "˚ kelvin";

			}
			else if(unit === "Fahrenheit") {

				var t1 = (temp_flt - 32)/1.8;
				var t2 = ((temp_flt-32)/1.8)+273.15 ;
				document.getElementById('ans1').innerHTML = t1 + "˚ Celcius";
				document.getElementById('ans2').innerHTML =  t2 + "˚ kelvin";

			}
			else if(unit === "Kelvin") {

				var t1 = temp_flt-273.15;
				var t2 = ((temp_flt-273.15)*1.8)+32;
				document.getElementById('ans1').innerHTML = t1 + "˚ Celcius";
				document.getElementById('ans2').innerHTML =  t2 + "˚ Fahrenheit";

			}
		}
	}