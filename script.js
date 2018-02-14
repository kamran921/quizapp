var check = function () {
	var correct = 0, elements = document.getElementsByName("102");
	if (elements[2].checked) correct += 1;
	elements = document.getElementsByName("204");
	if (elements[0].checked) correct += 1;
	elements = document.getElementsByName("409");
	if (elements[3].checked) correct += 1;
	elements = document.getElementsByName("819");
	if (elements[2].checked) correct += 1;
	elements = document.getElementsByName("163");
	if (elements[2].checked) correct += 1;
	document.body.removeChild(document.getElementById("mainform"));
	document.getElementById("res").setAttribute("style","display:block;");
	document.getElementById("res").textContent = `Your Result is: ${correct}/5`;
};