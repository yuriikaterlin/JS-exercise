 	for (var i = 0; i < 9; i++) {
 		document.getElementById('block').innerHTML += '<div class="block"></div>'; 	
}

	var hid = 0;

	document.getElementById('block').onclick = function (event) {
			if  (event.target.className == "block") {
				if (hid%2 == 0){
					event.target.innerHTML = "x";
				}
				else {
					event.target.innerHTML = "0";
				}		
			hid++;
			checkWinner ();		
	
			}
	
	} 

	function checkWinner() {
		var allblock = document.getElementsByClassName('block');
		if (allblock[0].innerHTML == "x" &&  allblock[1].innerHTML == "x" && allblock[2].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[3].innerHTML == "x" &&  allblock[4].innerHTML == "x" && allblock[5].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[6].innerHTML == "x" &&  allblock[7].innerHTML == "x" && allblock[8].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[0].innerHTML == "x" &&  allblock[3].innerHTML == "x" && allblock[6].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[1].innerHTML == "x" &&  allblock[4].innerHTML == "x" && allblock[7].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[2].innerHTML == "x" &&  allblock[5].innerHTML == "x" && allblock[8].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[0].innerHTML == "x" &&  allblock[4].innerHTML == "x" && allblock[8].innerHTML == "x") alert('Виграли Хрестики');
		if (allblock[2].innerHTML == "x" &&  allblock[4].innerHTML == "x" && allblock[6].innerHTML == "x") alert('Виграли Хрестики');
		// Ноліки
		if (allblock[0].innerHTML == "0" &&  allblock[1].innerHTML == "0" && allblock[2].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[3].innerHTML == "0" &&  allblock[4].innerHTML == "0" && allblock[5].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[6].innerHTML == "0" &&  allblock[7].innerHTML == "0" && allblock[8].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[0].innerHTML == "0" &&  allblock[3].innerHTML == "0" && allblock[6].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[1].innerHTML == "0" &&  allblock[4].innerHTML == "0" && allblock[7].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[2].innerHTML == "0" &&  allblock[5].innerHTML == "0" && allblock[8].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[0].innerHTML == "0" &&  allblock[4].innerHTML == "0" && allblock[8].innerHTML == "0") alert('Виграли Ноліки');
		if (allblock[2].innerHTML == "0" &&  allblock[4].innerHTML == "0" && allblock[6].innerHTML == "0") alert('Виграли Ноліки');

 	}

 	// 012
 	// 345
 	// 678