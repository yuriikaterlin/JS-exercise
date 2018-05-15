$(document).ready(function(){
	//getInfo();
	$('input[type="date"]').on('input', getHistoryData);
});

function getInfo() {
	$.get (
			"https://api.coindesk.com/v1/bpi/currentprice.json",
			function(data) {
				data = JSON.parse(data);
				console.log(data);
			}
	);
}

function getHistoryData() {
	$.get (
			"https://api.coindesk.com/v1/bpi/historical/close.json",
			{
				"start" : $('#date1').val(),
				"end" : $('#date2').val()
			},
			function(data) {
				data = JSON.parse(data);
				console.log(data);
			}

	);
}