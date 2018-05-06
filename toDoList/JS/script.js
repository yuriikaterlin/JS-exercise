var toDoList = [];
	if (localStorage.getItem('todo') != undefined) {
		toDoList = JSON.parse(localStorage.getItem('todo'));
		out();

	}

	document.getElementById('add').onclick = function () {
		var inp = document.getElementById('input').value;

		var temp = { };
		temp.todo = inp;
		temp.check = false;
		var i = toDoList.length;
		toDoList[i] = temp;
			console.log(toDoList);

		out();
		localStorage.setItem('todo', JSON.stringify(toDoList));
	}

		function out() {
			var out = ' ';
			for (var key in toDoList) {
				if (toDoList[key] == true) {
					out += '<input type="checkbox" checked>';
				}
				else {
					out += '<input type="checkbox">';	
				}
				out += toDoList[key].todo + '<br>';
			}
			document.getElementById('out').innerHTML = out;
		}