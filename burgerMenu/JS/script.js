document.getElementById('result').onclick = getResult;

function getResult () {
	var menu = document.getElementsByClassName('menu'); 
	var price = 0;
	var kkal = 0;
		for (var i = 0; i < menu.length; i++){
			if (menu[i].checked) {
				price += parseFloat(menu[i].getAttribute('data-cost'));			
				kkal += parseFloat(menu[i].getAttribute('data-kkal'));			
			}
		}
	document.getElementById('price').innerHTML = price + " грн";
	document.getElementById('kkal').innerHTML = kkal + " Ккал";
}

