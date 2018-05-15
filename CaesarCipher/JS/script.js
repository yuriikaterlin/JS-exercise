document.getElementById('in').oninput = function () {
	const set = 3;
	let str = this.value;
	//console.log(str.charCodeAt());
	let out = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		code = code + set;
		out += String.fromCharCode(code);
	}
	document.getElementById('out').innerHTML = out;

}

document.getElementById('cipher').oninput = function () {
	const set = 3;
	let str = this.value;
	//console.log(str.charCodeAt());
	let out = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		code = code - set;
		out += String.fromCharCode(code);
	}
	document.getElementById('string').innerHTML = out;

}