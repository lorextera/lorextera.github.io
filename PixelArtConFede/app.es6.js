window.addEventListener("load", (e) => { 
	var disegna = document.getElementById("disegna");
	var codice = document.getElementById("codice");
	var area = document.getElementById("area");
	var re = new RegExp("(\\d+\\w)","g");
	var reDW = new RegExp("(\\d+)(\\w)");

	var creaPixel = (colore) => {
		var pixel = document.createElement("span");
		pixel.className = "pixel " + colore;
		return pixel;
	};

	var creaDisegno = () => {
		var righe = codice.value.split("\n");
		area.innerHTML = '';

		righe.forEach( (riga) => {

			if (riga == null || riga == "") return;

			var listaPixels = riga.match(re);

			if (listaPixels == null) return;
			
			listaPixels.forEach( (pixels) => {

				try {
					var info = pixels.match(reDW);
				} catch (ex) {
					console.log(2,e);
					return false;
				}

				var quanti = info[1];
				var colore = info[2];

				for (let i = 0; i < quanti; i++) {
					area.appendChild(creaPixel(colore));
				}
		    });
			area.appendChild(document.createElement("br"));
		});
		
		return false;
	};
	
	disegna.addEventListener("click", creaDisegno);
	codice.addEventListener("keyup", creaDisegno);
});

