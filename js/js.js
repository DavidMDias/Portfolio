function fondu()
{
	var header = document.querySelector("header");   
	var opacite = 0;
	var id = setInterval(frame, 15);
	function frame() {
	  if (opacite == 100) {
		clearInterval(id);
	  } else {
		opacite++; 
		header.style.opacity = opacite/100;
	  }
	}
}
function changerLangue()
{
	document.querySelectorAll(".EN").forEach(el => {
		el.style.display = "none";
	});

	var FR;

	document.querySelector(".changerLangue").addEventListener("mousedown", function () {
		if (FR == false) {
			FR = true;
			document.querySelectorAll(".EN").forEach(el => {
				el.style.display = "none";
			});
			document.querySelectorAll(".FR").forEach(el => {
				el.style.display = "block";
			});
			document.querySelector(".changerLangue").textContent = "EN";

			
		}
		else {
			FR = false;
			document.querySelectorAll(".EN").forEach(el => {
				el.style.display = "block";
			});
			document.querySelectorAll(".FR").forEach(el => {
				el.style.display = "none";
			});
			document.querySelector(".changerLangue").textContent = "FR";
		}
	});
}

function btnsAfficher()
{
	var AutresProjets, AutresJeux, Projets_3D, Projets_video, Projets_graphiques, Musiques;

	document.querySelector(".vide").addEventListener("mousedown", function () {
		document.querySelector(".vide").style.display = "none";
	});
	document.querySelector(".btnAutresProjets").addEventListener("mousedown", function () {
		if (AutresProjets == false) {
			AutresProjets = true;
			document.querySelector(".AutresProjets").style.display = "none";
			document.querySelector(".hrefAutresProjetsFR").textContent = "Afficher";
			document.querySelector(".hrefAutresProjetsEN").textContent = "Expand";
		}
		else {
			AutresProjets = false;
			document.querySelector(".AutresProjets").style.display = "block";
			document.querySelector(".hrefAutresProjetsFR").textContent = "Masquer";
			document.querySelector(".hrefAutresProjetsEN").textContent = "Collapse";
		}
	});
	document.querySelector(".btnAutresJeux").addEventListener("mousedown", function () {
		if (AutresJeux == false) {
			AutresJeux = true;
			document.querySelector(".AutresJeux").style.display = "none";
			document.querySelector(".hrefAutresJeuxFR").textContent = "Afficher";
			document.querySelector(".hrefAutresJeuxEN").textContent = "Expand";
		}
		else {
			AutresJeux = false;
			document.querySelector(".AutresJeux").style.display = "flex";
			document.querySelector(".hrefAutresJeuxFR").textContent = "Masquer";
			document.querySelector(".hrefAutresJeuxEN").textContent = "Collapse";
		}
	});
	document.querySelector(".btnProjets3D").addEventListener("mousedown", function () {
		if (Projets_3D==false) {
			Projets_3D = true;
			document.querySelector(".Projets_3D").style.display = "none";
			document.querySelector(".hrefProjets3DFR").textContent = "Afficher";
			document.querySelector(".hrefProjets3DEN").textContent = "Expand";
		}
		else {
			Projets_3D = false;
			document.querySelector(".Projets_3D").style.display = "flex";
			document.querySelector(".hrefProjets3DFR").textContent = "Masquer";
			document.querySelector(".hrefProjets3DEN").textContent = "Collapse";
        }
	});
	document.querySelector(".btnProjetsVideo").addEventListener("mousedown", function () {
		if (Projets_video == false) {
			Projets_video = true;
			document.querySelector(".Projets_video").style.display = "none";
			document.querySelector(".hrefProjetsVideoFR").textContent = "Afficher";
			document.querySelector(".hrefProjetsVideoEN").textContent = "Expand";
		}
		else {
			Projets_video = false;
			document.querySelector(".Projets_video").style.display = "flex";
			document.querySelector(".hrefProjetsVideoFR").textContent = "Masquer";
			document.querySelector(".hrefProjetsVideoEN").textContent = "Collapse";
		}
	});
	document.querySelector(".btnProjetsGraphiques").addEventListener("mousedown", function () {
		if (Projets_graphiques == false) {
			Projets_graphiques = true;
			document.querySelector(".Projets_graphiques").style.display = "none";
			document.querySelector(".hrefProjetsGraphiquesFR").textContent = "Afficher";
			document.querySelector(".hrefProjetsGraphiquesEN").textContent = "Expand";
		}
		else {
			Projets_graphiques = false;
			document.querySelector(".Projets_graphiques").style.display = "flex";
			document.querySelector(".hrefProjetsGraphiquesFR").textContent = "Masquer";
			document.querySelector(".hrefProjetsGraphiquesEN").textContent = "Collapse";
		}
	});
	document.querySelector(".btnMusiques").addEventListener("mousedown", function () {
		if (Musiques == false) {
			Musiques = true;
			document.querySelector(".Musiques").style.display = "none";
			document.querySelector(".hrefMusiquesFR").textContent = "Afficher";
			document.querySelector(".hrefMusiquesEN").textContent = "Expand";
		}
		else {
			Musiques = false;
			document.querySelector(".Musiques").style.display = "flex";
			document.querySelector(".hrefMusiquesFR").textContent = "Masquer";
			document.querySelector(".hrefMusiquesEN").textContent = "Collapse";
		}
	});
}

function btnsImage()
{
	document.querySelector(".vide").addEventListener("mousedown", function () {
		fermerFenetresImages();
	});
	document.querySelector(".image5").addEventListener("mousedown", function () {
		afficherImage(5);
	});
	document.querySelector(".image3").addEventListener("mousedown", function () {
		afficherImage(3);
	});
	document.querySelector(".image2").addEventListener("mousedown", function () {
		afficherImage(2);
	});
	document.querySelector(".image1").addEventListener("mousedown", function () {
		afficherImage(1);
	});
	document.querySelector(".image0").addEventListener("mousedown", function () {
		afficherImage(0);
	});
}

function afficherImage(n) {
	document.querySelector(".vide").style.display = "block";
	document.querySelector(".fenetreImage" + n).style.display = "block";
}

function fermerFenetresImages()
{
	document.querySelector(".vide").style.display = "none";

	var i;
	for (i = 0; i <= 5; i++) {
		document.querySelector(".fenetreImage" + i).style.display = "none";
	}
}

function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
		fermerFenetresVideos();
	});


	//JE NE PEUX PAS FAIRE UN FOR LOOP POUR DES ADD EVENT LISTENERS (ca met tous les event listeners sur le dernier document du for loop')
	document.querySelector(".video26").addEventListener("mousedown", function () {
		afficherVideo(26);
	});
	document.querySelector(".video25").addEventListener("mousedown", function () {
		afficherVideo(25);
	});
	document.querySelector(".video24").addEventListener("mousedown", function () {
		afficherVideo(24);
	});
	document.querySelector(".video23").addEventListener("mousedown", function () {
		afficherVideo(23);
	});
	document.querySelector(".video22").addEventListener("mousedown", function () {
		afficherVideo(22);
	});
	document.querySelector(".video21").addEventListener("mousedown", function () {
		afficherVideo(21);
	});
	document.querySelector(".video20").addEventListener("mousedown", function () {
		afficherVideo(20);
	});
	document.querySelector(".video19").addEventListener("mousedown", function () {
		afficherVideo(19);
	});
	document.querySelector(".video18").addEventListener("mousedown", function () {
		afficherVideo(18);
	});
	document.querySelector(".video17").addEventListener("mousedown", function () {
		afficherVideo(17);
	});
	document.querySelector(".video16").addEventListener("mousedown", function () {
		afficherVideo(16);
	});
	document.querySelector(".video15").addEventListener("mousedown", function () {
		afficherVideo(15);
	});
	document.querySelector(".video14").addEventListener("mousedown", function () {
		afficherVideo(14);
	});
	document.querySelector(".video13").addEventListener("mousedown", function () {
		afficherVideo(13);
	});
	document.querySelector(".video12").addEventListener("mousedown", function () {
		afficherVideo(12);
	});
	document.querySelector(".video11").addEventListener("mousedown", function () {
		afficherVideo(11);
	});
	document.querySelector(".video10").addEventListener("mousedown", function () {
		afficherVideo(10);
	});
	document.querySelector(".video9").addEventListener("mousedown", function () {
		afficherVideo(9);
	});
	document.querySelector(".video8").addEventListener("mousedown", function () {
		afficherVideo(8);
	});
	document.querySelector(".video7").addEventListener("mousedown", function () {
		afficherVideo(7);
	});
	document.querySelector(".video6").addEventListener("mousedown", function () {
		afficherVideo(6);
	});
	document.querySelector(".video5").addEventListener("mousedown", function () {
		afficherVideo(5);
	});
	document.querySelector(".video4").addEventListener("mousedown", function () {
		afficherVideo(4);
	});
	document.querySelector(".video3").addEventListener("mousedown", function () {
		afficherVideo(3);
	});
	document.querySelector(".video2").addEventListener("mousedown", function () {
		afficherVideo(2);
	});
	document.querySelector(".video1").addEventListener("mousedown", function () {
		afficherVideo(1);
	});
	document.querySelector(".video0").addEventListener("mousedown", function () {
		afficherVideo(0);
	});
	//JE NE PEUX PAS FAIRE UN FOR LOOP POUR DES ADD EVENT LISTENERS (ca met tous les event listeners sur le dernier document du for loop')
}

function afficherVideo(n)
{
	document.querySelector(".vide").style.display = "block";
	document.querySelector(".fenetreVideo"+n).style.display = "block";
	document.querySelector(".fenetreVideo" + n).getElementsByTagName("iframe")[0].src = recevoirUrl(n);
}

function fermerFenetresVideos()
{
	document.querySelector(".vide").style.display = "none";

	var i;
	for (i = 0; i <= 26; i++) {
		console.log(i);
		document.querySelector(".fenetreVideo"+i).style.display = "none";
		document.querySelector(".fenetreVideo"+i).getElementsByTagName("iframe")[0].src = "";
	}
}

function recevoirUrl(i)
{
	var url;

	switch (i) {
		case 0:
			url = "https://www.youtube.com/embed/WOSiXkK0uiY?rel=0";
			return url;
		case 1:
			url = "https://www.youtube.com/embed/DlR1fxsMHpU?rel=0";
			return url;
		case 2:
			url = "https://www.youtube.com/embed/PtWWvatarlI?rel=0";
			return url;
		case 3:
			url = "https://www.youtube.com/embed/JnC1FgiSUC0?rel=0";
			return url;
		case 4:
			url = "https://www.youtube.com/embed/8l1CvDb_9C8?rel=0";
			return url;
		case 5:
			url = "https://www.youtube.com/embed/cLTFzABJeVk?rel=0";
			return url;
		case 6:
			url = "https://www.youtube.com/embed/pLBnwYgyo6w?rel=0";//Tales of War
			return url;
		case 7:
			url = "https://www.youtube.com/embed/_LcAidsrq78?rel=0";
			return url;
		case 8:
			url = "https://www.youtube.com/embed/P8LQXHpeDFI?rel=0";
			return url;
		case 9:
			url = "https://www.youtube.com/embed/B2qh610kYKI?rel=0";
			return url;
		case 10:
			url = "https://www.youtube.com/embed/GaOr--Z0vIo?rel=0";
			return url;
		case 11:
			url = "https://www.youtube.com/embed/-GGo0RD-oA4?rel=0";
			return url;
		case 12:
			url = "https://www.youtube.com/embed/CYHu_Cfh8LM?rel=0";
			return url;
		case 13:
			url = "https://www.youtube.com/embed/8JrQzxOvaFY?rel=0";
			return url;
		case 14:
			url = "https://www.youtube.com/embed/902awzxaVaM?rel=0";
			return url;
		case 15:
			url = "https://www.youtube.com/embed/loPUnJBFLLU?rel=0";
			return url;
		case 16:
			url = "https://www.youtube.com/embed/5oNdgapyMzc?rel=0";
			return url;
		case 17:
			url = "https://www.youtube.com/embed/7mODDnPMOKY?rel=0";
			return url;
		case 18:
			url = "https://www.youtube.com/embed/uCBbueTDQH8?rel=0";
			return url;
		case 19:
			url = "https://www.youtube.com/embed/NrvLRSrjBGY?rel=0";
			return url;
		case 20:
			url = "https://www.youtube.com/embed/2xh0f9WcrqM?rel=0";
			return url;
		case 21:
			url = "https://www.youtube.com/embed/G_N3ML95QNU?rel=0";
			return url;
		case 22:
			url = "https://www.youtube.com/embed/8EmOgfH3Kls?rel=0";
			return url;
		case 23:
			url = "https://www.youtube.com/embed/9FjrmPBFO3k?rel=0";//BackStealthVR
			return url;
		case 24:
			url = "https://www.youtube.com/embed/naYD7q_Pnt0?rel=0";//Zolik
			return url;
		case 25:
			url = "";//NovaScience
			return url;
		case 26:
			url = "https://www.youtube.com/embed/CtHx9XGE54k?rel=0";//RubberFriends
			return url;
	}
}