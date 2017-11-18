window.onload = function(e) { 
	var disegna = document.getElementById("disegna");
	var codice = document.getElementById("codice");
	var area = document.getElementById("area");
	var re = new RegExp("(\\d+\\w)","g");
	var reDW = new RegExp("(\\d+)(\\w)");

	var creaPixel = function(colore) {
		var pixel = document.createElement("span");
		pixel.className = "pixel " + colore;
		return pixel;
	};

	var creaDisegno = function() {
		var righe, riga, listaPixels, pixels, i, j, k, quanti, colore, info; 

		if (typeof gtag === "function") gtag('event', 'creaDisegno');

		righe = codice.value.split("\n");
		area.innerHTML = '';

		for (i = 0; i < righe.length; i++) {
			riga = righe[i];

			if (riga == null || riga == "")
				continue;

			listaPixels = riga.match(re);

			if (listaPixels == null)
				continue;
			
			for (j = 0; j < listaPixels.length; j ++) {
				pixels = listaPixels[j];
				info = pixels.match(reDW);

				if (info == null || info.length < 3)
					continue;

				quanti = info[1];
				colore = info[2];

				for (k = 0; k < quanti; k++) {
					area.appendChild(creaPixel(colore));
				}
		    }

			area.appendChild(document.createElement("br"));
		}
		
		return false;
	};
	
	disegna.onclick = creaDisegno;
	codice.onkeyup = creaDisegno;
};

