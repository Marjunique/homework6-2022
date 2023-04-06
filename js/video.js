var video  = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log(video.volume)
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
		console.log("Current time is" + video.currentTime)
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log("Playback rate is" + video.playbackRate);

});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log("Playback rate is" + video.playbackRate);

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
document.querySelector("#slider").addEventListener("change", function() {
	console.log(this.value)
	video.volume= this.value/100
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"


});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});