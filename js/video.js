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

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log("Playback rate is" + video.playbackrate);

});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log("Playback rate is" + video.playbackrate);

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted);
	if (video.muted== false){
	video.muted = true
	this.innerHTML = "Unmute"}
	else{
	video.muted= false
	this.innerHTML = "Mute"}
});
