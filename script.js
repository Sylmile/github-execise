var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementById("list"); // my var


function inputLength() {
	return input.value.length;
};

function createListElement() {
	var li = document.createElement("li");
	var dele = document.createElement("button");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	dele.appendChild(document.createTextNode(" X"));
	dele.classList.add("erase");
	span.classList.add("child");
	li.appendChild(span);
	li.appendChild(dele);
	ul.appendChild(li);
	input.value = "";
	}



function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}	
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		
		
	}
};
 //************************my functions************************************

function doneUndone(e) {
	if(e.target && e.target.matches(".child")) {
		e.target.classList.toggle("done");
	}
};

function deleteLi(e) {
	if(e.target && e.target.matches("button.erase")) {
		e.target.parentNode.remove();
	}
};
//*************************************************************************

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//my DRY version of code*******************

list.addEventListener("click", doneUndone);

list.addEventListener("click", deleteLi);

//*****************************************

//**********************************************************
// over 10 hours later finally I get that 3 lines of code!!!! 
//**********************************************************
// list.addEventListener("click", function(e) {
// 	if(e.target && e.target.matches("child")) {
// 		e.target.classList.toggle("done");
// 	}
// });



//FINALLY after first button, this took me only 1 hour to create :)) 

// list.addEventListener("click", function(e) {
// 	if(e.target && e.target.matches("button.erase")) {
// 		e.target.parentNode.remove();
// 	}
// });
