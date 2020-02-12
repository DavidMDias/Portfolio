function btnsVideo()
{
	document.querySelector(".vide").addEventListener("mousedown", function(){
	fermerFenetresVideos();
	stop();
	});

	document.querySelector(".video4").addEventListener("mousedown", function(){
		document.querySelector(".vide").style.display = "block";
		document.querySelector(".fenetreVideo4").style.display = "block";
		document.querySelector(".fenetreVideo4").getElementsByTagName("iframe")[0].src="https://www.youtube.com/embed/3CC2EnNHuN4?rel=0;";
	});
	document.querySelector(".video3").addEventListener("mousedown", function(){
		document.querySelector(".vide").style.display = "block";
		document.querySelector(".fenetreVideo3").style.display = "block";
		document.querySelector(".fenetreVideo3").getElementsByTagName("iframe")[0].src="https://www.youtube.com/embed/4gKsU_PfYtU?rel=0";
	});
	document.querySelector(".video2").addEventListener("mousedown", function(){
		document.querySelector(".vide").style.display = "block";
		document.querySelector(".fenetreVideo2").style.display = "block";
		document.querySelector(".fenetreVideo2").getElementsByTagName("iframe")[0].src="https://www.youtube.com/embed/4gKsU_PfYtU?rel=0";
	});
	document.querySelector(".video1").addEventListener("mousedown", function(){
		document.querySelector(".vide").style.display = "block";
		document.querySelector(".fenetreVideo1").style.display = "block";
		document.querySelector(".fenetreVideo1").getElementsByTagName("iframe")[0].src="https://www.youtube.com/embed/4gKsU_PfYtU?rel=0";
	});
}

function fermerFenetresVideos(){
	document.querySelector(".vide").style.display = "none";

	document.querySelector(".fenetreVideo4").style.display = "none";
	document.querySelector(".fenetreVideo4").getElementsByTagName("iframe")[0].src="";

	document.querySelector(".fenetreVideo3").style.display = "none";
	document.querySelector(".fenetreVideo3").getElementsByTagName("iframe")[0].src="";

	document.querySelector(".fenetreVideo2").style.display = "none";
	document.querySelector(".fenetreVideo2").getElementsByTagName("iframe")[0].src="";

	document.querySelector(".fenetreVideo1").style.display = "none";
	document.querySelector(".fenetreVideo1").getElementsByTagName("iframe")[0].src="";
}

function stop(){
	
}