function init(){
	var name = document.getElementsByClassName("center")[1];	
	var i = document.getElementById("entryinput").value;
	var result = document.getElementById('textoutput');
	alert(name.textContent + ": " +i);
	result.innerHTML = '<h2>' + i + "</h2>";
}
var d1 = document.getElementById('entrybutton');
d1.addEventListener('click', init);

