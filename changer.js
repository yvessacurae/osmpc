var mentalityValue = "";
var timeValue = "";
var isMoving = false;

var timeValue = document.getElementById('Tempo').getAttribute('value');


window.addEventListener("load", function() {
	mentalityValue = document.getElementById('Mentality').getAttribute('value');
	timeValue = document.getElementById('Tempo').getAttribute('value');

	init();
});


function init(){
	if(mentalityValue!=='' && timeValue!==''){
		changeInputs();
	}
}

function changeInputs(){

	var mentalityLabel = document.getElementById('spanMentalityVal').innerHTML;
	var timeLabel = document.getElementById('spanTempoVal').innerHTML;

	document.getElementById('spanMentalityVal').innerText = mentalityLabel + ": " + mentalityValue + "%";
	document.getElementById('spanTempoVal').innerText = timeLabel + ": " + timeValue + "%";
}

var dragMentality = document.getElementById('divMentality');

dragMentality.addEventListener("mousedown", function(){

	dragMentality.addEventListener("mousemove", function(){
		mentalityValue = document.getElementById('Mentality').getAttribute('value');
	});

});

dragMentality.addEventListener("mouseup", function(){
	var mentalityLabel = document.getElementById('spanMentalityVal').innerHTML;
	document.getElementById('spanMentalityVal').innerText = mentalityLabel + ": " + mentalityValue + "%";
});

var dragTime = document.getElementById('divTempo');

dragTime.addEventListener("mousedown", function(){

	dragTime.addEventListener("mousemove", function(){
		timeValue = document.getElementById('Tempo').getAttribute('value');
	});

});

dragTime.addEventListener("mouseup", function(){
	var timeLabel = document.getElementById('spanTempoVal').innerHTML;
	document.getElementById('spanTempoVal').innerText = timeLabel + ": " + timeValue + "%";
});
