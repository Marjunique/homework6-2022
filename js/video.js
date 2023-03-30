var video  = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slow").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackrate *= 0.95;
	console.log("Playback rate is" + video.playbackrate)

});