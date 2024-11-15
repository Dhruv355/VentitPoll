function moveToNextFrame() {
  var video = document.getElementById("bg-video");

  // Increment the video time by a small amount (e.g., 0.1 second)
  var increment = 0.1; // Change this value to adjust how much each button click advances the video

  // Set the new current time, but make sure it doesn't exceed the video duration
  var newTime = video.currentTime + increment;

  if (newTime < video.duration) {
    video.currentTime = newTime;
  } else {
    // If the new time exceeds the duration, you can either stop the video or loop
    video.currentTime = 0; // Reset to the start, or you can let it stop
    // Optionally, you could also use video.pause() to stop it here
  }

  // Ensure the video is paused after moving to the next frame
  video.pause();
}
