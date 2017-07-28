function press(a) {

  var y = document.getElementById("total").innerHTML;

  if (y === document.getElementById("limite").value) {
	 alert("Contagem de células já finalizada!");
	 return;
  }


	if (a === "d") {  
  	  var x = document.getElementById("bas").innerHTML;
	  x++;
	  document.getElementById("bas").innerHTML = x;
	  y++;
	}

	if (a === "r") {  
  	  var x = document.getElementById("eos").innerHTML;
	  x++; 
	  document.getElementById("eos").innerHTML = x;
	  y++;
	}

	if (a === "f") {  
  	  var x = document.getElementById("neu").innerHTML;
	  x++;
	  document.getElementById("neu").innerHTML = x;
	  y++;
	}

	if (a === "g") {  
  	  var x = document.getElementById("lin").innerHTML;
	  x++; 
	  document.getElementById("lin").innerHTML = x;
	  y++;
	}

	if (a === "h") {  
  	  var x = document.getElementById("mon").innerHTML;
	  x++;
	  document.getElementById("mon").innerHTML = x;
	  y++;
	}

  document.getElementById("total").innerHTML = y;

}


function pegarContagem(abs) {

  var bastao = document.getElementById("bas").innerHTML;
  var eosino = document.getElementById("eos").innerHTML;
  var seg = document.getElementById("neu").innerHTML;
  var linfo = document.getElementById("lin").innerHTML;
  var mono = document.getElementById("mon").innerHTML;

  if (abs) { calcPorcentagem(); }

}


function zerarContagem() {
  document.getElementById("bas").innerHTML = 0;
  document.getElementById("eos").innerHTML = 0;
  document.getElementById("neu").innerHTML = 0;
  document.getElementById("lin").innerHTML = 0;
  document.getElementById("mon").innerHTML = 0;

  document.getElementById("total").innerHTML = 0;
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    press(charStr);
}