<<<<<<< Updated upstream
const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
    console.log(bound, video)
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
=======

var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback
playbackConst = 500, 
// get page height from video duration
setHeight = document.getElementById("set-height"), 
// select video element         
vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
var frameNumber  = window.pageYOffset/playbackConst;
vid.currentTime  = frameNumber;
window.requestAnimationFrame(scrollPlay);
>>>>>>> Stashed changes
}

window.requestAnimationFrame(scrollPlay);

// const registerVideo = (bound, video) => {
// 	bound = document.querySelector(bound);
// 	video = document.querySelector(video);
//     console.log(bound, video)
// 	const scrollVideo = ()=>{
// 		if(video.duration) {

// 			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;

// 			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
// 			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
// 			video.currentTime = video.duration * percentScrolled;
//             console.log(video.currentTime)
// 		}
// 		requestAnimationFrame(scrollVideo);
// 	}
// 	requestAnimationFrame(scrollVideo);
// }


// registerVideo("#bound-one", "#bound-one video");

<<<<<<< Updated upstream
registerVideo("#bound-two", "#bound-two video")

registerVideo("#bound-three", "#bound-three video")
=======
// // registerVideo("#bound-two", "#bound-two video")

// // registerVideo("#bound-three", "#bound-three video")
>>>>>>> Stashed changes
