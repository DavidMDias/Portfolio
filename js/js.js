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

function btnsAfficher()
{
	var Projets_3D, Projets_video, Projets_graphiques, Musiques;

	document.querySelector(".vide").addEventListener("mousedown", function () {
		document.querySelector(".vide").style.display = "none";
	});

	document.querySelector(".btnProjets3D").addEventListener("mousedown", function () {
		if (Projets_3D==false) {
			Projets_3D = true;
			document.querySelector(".Projets_3D").style.display = "none";
			document.querySelector(".hrefProjets3D").textContent = "Afficher";
		}
		else {
			Projets_3D = false;
			document.querySelector(".Projets_3D").style.display = "flex";
			document.querySelector(".hrefProjets3D").textContent = "Cacher";
        }
	});
	document.querySelector(".btnProjetsVideo").addEventListener("mousedown", function () {
		if (Projets_video == false) {
			Projets_video = true;
			document.querySelector(".Projets_video").style.display = "none";
			document.querySelector(".hrefProjetsVideo").textContent = "Afficher";
		}
		else {
			Projets_video = false;
			document.querySelector(".Projets_video").style.display = "flex";
			document.querySelector(".hrefProjetsVideo").textContent = "Cacher";
		}
	});
	document.querySelector(".btnProjetsGraphiques").addEventListener("mousedown", function () {
		if (Projets_graphiques == false) {
			Projets_graphiques = true;
			document.querySelector(".Projets_graphiques").style.display = "none";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Afficher";
		}
		else {
			Projets_graphiques = false;
			document.querySelector(".Projets_graphiques").style.display = "flex";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Cacher";
		}
	});
	document.querySelector(".btnMusiques").addEventListener("mousedown", function () {
		if (Musiques == false) {
			Musiques = true;
			document.querySelector(".Musiques").style.display = "none";
			document.querySelector(".hrefMusiques").textContent = "Afficher";
		}
		else {
			Musiques = false;
			document.querySelector(".Musiques").style.display = "flex";
			document.querySelector(".hrefMusiques").textContent = "Cacher";
		}
	});
}

function btnsImage()
{
	document.querySelector(".vide").addEventListener("mousedown", function () {
		fermerFenetresImages();
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
	for (i = 0; i <= 4; i++) {
		document.querySelector(".fenetreImage" + i).style.display = "none";
	}
}

function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
		fermerFenetresVideos();
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
	/*document.querySelector(".video6").addEventListener("mousedown", function () {
		afficherVideo(6);
	});*/
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
	for (i = 0; i <= 21; i++) {
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
			url = "";//Tales of War
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
			url = "https://www.youtube.com/embed/loPUnJBFLLU?rel=0";
			return url;
		case 15:
			url = "https://www.youtube.com/embed/902awzxaVaM?rel=0";
			return url;
		case 16:
			url = "https://www.youtube.com/embed/5oNdgapyMzc?rel=0";
			return url;
		case 17:
			url = "https://www.youtube.com/embed/7mODDnPMOKY?rel=0";
			return url;
		case 18:
			url = "function fondu()
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

function btnsAfficher()
{
	var Projets_3D, Projets_video, Projets_graphiques, Musiques;

	document.querySelector(".vide").addEventListener("mousedown", function () {
		document.querySelector(".vide").style.display = "none";
	});

	document.querySelector(".btnProjets3D").addEventListener("mousedown", function () {
		if (Projets_3D==false) {
			Projets_3D = true;
			document.querySelector(".Projets_3D").style.display = "none";
			document.querySelector(".hrefProjets3D").textContent = "Afficher";
		}
		else {
			Projets_3D = false;
			document.querySelector(".Projets_3D").style.display = "flex";
			document.querySelector(".hrefProjets3D").textContent = "Cacher";
        }
	});
	document.querySelector(".btnProjetsVideo").addEventListener("mousedown", function () {
		if (Projets_video == false) {
			Projets_video = true;
			document.querySelector(".Projets_video").style.display = "none";
			document.querySelector(".hrefProjetsVideo").textContent = "Afficher";
		}
		else {
			Projets_video = false;
			document.querySelector(".Projets_video").style.display = "flex";
			document.querySelector(".hrefProjetsVideo").textContent = "Cacher";
		}
	});
	document.querySelector(".btnProjetsGraphiques").addEventListener("mousedown", function () {
		if (Projets_graphiques == false) {
			Projets_graphiques = true;
			document.querySelector(".Projets_graphiques").style.display = "none";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Afficher";
		}
		else {
			Projets_graphiques = false;
			document.querySelector(".Projets_graphiques").style.display = "flex";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Cacher";
		}
	});
	document.querySelector(".btnMusiques").addEventListener("mousedown", function () {
		if (Musiques == false) {
			Musiques = true;
			document.querySelector(".Musiques").style.display = "none";
			document.querySelector(".hrefMusiques").textContent = "Afficher";
		}
		else {
			Musiques = false;
			document.querySelector(".Musiques").style.display = "flex";
			document.querySelector(".hrefMusiques").textContent = "Cacher";
		}
	});
}

function btnsImage()
{
	document.querySelector(".vide").addEventListener("mousedown", function () {
		fermerFenetresImages();
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
	for (i = 0; i <= 4; i++) {
		document.querySelector(".fenetreImage" + i).style.display = "none";
	}
}

function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
		fermerFenetresVideos();
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
	/*document.querySelector(".video6").addEventListener("mousedown", function () {
		afficherVideo(6);
	});*/
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
	for (i = 0; i <= 21; i++) {
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
			url = "";//Tales of War
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
			url = "https://www.youtube.com/embed/loPUnJBFLLU?rel=0";
			return url;
		case 15:
			url = "https://www.youtube.com/embed/902awzxaVaM?rel=0";
			return url;
		case 16:
			url = "https://www.youtube.com/embed/5oNdgapyMzc?rel=0";
			return url;
		case 17:
			url = "https://www.youtube.com/embed/7mODDnPMOKY?rel=0";
			return url;
		case 18:
			url = "https://www.youtube.com/embed/cLTFzABJeVk?rel=0";
			return url;
		case 19:
			url = "function fondu()
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

function btnsAfficher()
{
	var Projets_3D, Projets_video, Projets_graphiques, Musiques;

	document.querySelector(".vide").addEventListener("mousedown", function () {
		document.querySelector(".vide").style.display = "none";
	});

	document.querySelector(".btnProjets3D").addEventListener("mousedown", function () {
		if (Projets_3D==false) {
			Projets_3D = true;
			document.querySelector(".Projets_3D").style.display = "none";
			document.querySelector(".hrefProjets3D").textContent = "Afficher";
		}
		else {
			Projets_3D = false;
			document.querySelector(".Projets_3D").style.display = "flex";
			document.querySelector(".hrefProjets3D").textContent = "Cacher";
        }
	});
	document.querySelector(".btnProjetsVideo").addEventListener("mousedown", function () {
		if (Projets_video == false) {
			Projets_video = true;
			document.querySelector(".Projets_video").style.display = "none";
			document.querySelector(".hrefProjetsVideo").textContent = "Afficher";
		}
		else {
			Projets_video = false;
			document.querySelector(".Projets_video").style.display = "flex";
			document.querySelector(".hrefProjetsVideo").textContent = "Cacher";
		}
	});
	document.querySelector(".btnProjetsGraphiques").addEventListener("mousedown", function () {
		if (Projets_graphiques == false) {
			Projets_graphiques = true;
			document.querySelector(".Projets_graphiques").style.display = "none";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Afficher";
		}
		else {
			Projets_graphiques = false;
			document.querySelector(".Projets_graphiques").style.display = "flex";
			document.querySelector(".hrefProjetsGraphiques").textContent = "Cacher";
		}
	});
	document.querySelector(".btnMusiques").addEventListener("mousedown", function () {
		if (Musiques == false) {
			Musiques = true;
			document.querySelector(".Musiques").style.display = "none";
			document.querySelector(".hrefMusiques").textContent = "Afficher";
		}
		else {
			Musiques = false;
			document.querySelector(".Musiques").style.display = "flex";
			document.querySelector(".hrefMusiques").textContent = "Cacher";
		}
	});
}

function btnsImage()
{
	document.querySelector(".vide").addEventListener("mousedown", function () {
		fermerFenetresImages();
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
	for (i = 0; i <= 4; i++) {
		document.querySelector(".fenetreImage" + i).style.display = "none";
	}
}

function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
		fermerFenetresVideos();
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
	/*document.querySelector(".video6").addEventListener("mousedown", function () {
		afficherVideo(6);
	});*/
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
	for (i = 0; i <= 21; i++) {
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
			url = "";//Tales of War
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
			url = "https://www.youtube.com/embed/loPUnJBFLLU?rel=0";
			return url;
		case 15:
			url = "https://www.youtube.com/embed/902awzxaVaM?rel=0";
			return url;
		case 16:
			url = "https://www.youtube.com/embed/5oNdgapyMzc?rel=0";
			return url;
		case 17:
			url = "https://www.youtube.com/embed/7mODDnPMOKY?rel=0";
			return url;
		case 18:
			url = "https://www.youtube.com/embed/cLTFzABJeVk?rel=0";
			return url;
		case 19:
			url = "https://www.youtube.com/embed/cLTFzABJeVk?rel=0";
			return url;
		case 20:
			url = "https://www.youtube.com/embed/2xh0f9WcrqM?rel=0";
			return url;
		case 21:
			url = "https://www.youtube.com/embed/G_N3ML95QNU?rel=0";
			return url;
	}
}
";
			return url;
		case 20:
			url = "https://www.youtube.com/embed/2xh0f9WcrqM?rel=0";
			return url;
		case 21:
			url = "https://www.youtube.com/embed/G_N3ML95QNU?rel=0";
			return url;
	}
}
";
			return url;
		case 19:
			url = "https://www.youtube.com/embed/902awzxaVaM?rel=0";
			return url;
		case 20:
			url = "https://www.youtube.com/embed/2xh0f9WcrqM?rel=0";
			return url;
		case 21:
			url = "https://www.youtube.com/embed/G_N3ML95QNU?rel=0";
			return url;
	}
}
