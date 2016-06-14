var mentalityValue = "";
var timeValue = "";
var timeLabel = "";
var mentalityLabel = "";
var isMoving = false;

window.addEventListener("load", function() {
	mentalityValue = document.getElementById('Mentality').getAttribute('value');
	timeValue = document.getElementById('Tempo').getAttribute('value');

	init();
});


function init(){
	if(mentalityValue!=='' && timeValue!==''){
		changeInputs();
		document.getElementById('spanMentalityVal').insertAfter('span');
		document.getElementById('spanTempoVal').insertAfter('span');
	}
}

function changeInputs(){

	var mentalityLabel = document.getElementById('spanMentalityVal').innerHTML;
	var timeLabel = document.getElementById('spanTempoVal').innerHTML;

	document.getElementById('spanMentalityVal').innerText = mentalityLabel + ": " + mentalityValue + "%";
	document.getElementById('spanTempoVal').innerText = timeLabel + ": " + timeValue + "%";
}

var dragMentality = document.getElementById('divMentality');
var dragTime = document.getElementById('divTempo');

dragMentality.addEventListener("mousedown", function(){
	
	mentalityLabel = document.getElementById('spanMentalityVal').innerHTML.split(':')[0];

	dragMentality.addEventListener("mousemove", function(){
		mentalityValue = document.getElementById('Mentality').getAttribute('value');

		document.getElementById('spanMentalityVal').innerText = mentalityLabel + ": " + mentalityValue + "%";
	});

});

dragTime.addEventListener("mousedown", function(){

	timeLabel = document.getElementById('spanTempoVal').innerHTML.split(':')[0];

	dragTime.addEventListener("mousemove", function(){
		timeValue = document.getElementById('Tempo').getAttribute('value');

		document.getElementById('spanTempoVal').innerText = timeLabel + ": " + timeValue + "%";
	});

});

dragTime.addEventListener("mouseup", function(){
	document.getElementById('spanTempoVal').innerText = timeLabel + ": " + timeValue + "%";
});

dragMentality.addEventListener("mouseup", function(){
	document.getElementById('spanMentalityVal').innerText = mentalityLabel + ": " + mentalityValue + "%";
});
