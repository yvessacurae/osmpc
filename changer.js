var arrElements = ["pressure", "style", "time"];

window.addEventListener("load", function() {
	init();
});

function init(){
	var input = document.getElementsByClassName('form-control');
	for (var i = 0; i < input.length; i++) {
		input[i].style.display = "block";
		input[i].id = arrElements[i];
	};
}

