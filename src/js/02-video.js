import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoPlayer = new Player(document.querySelector("#vimeo-player"));

videoPlayer.on('timeupdate', throttle(currentVideoTime, 1000) );

function currentVideoTime(evt) {
  const currentTimeOfVideo = JSON.stringify(evt)
  localStorage.setItem('videoplayer-current-time', currentTimeOfVideo)
}
if(localStorage.getItem('videoplayer-current-time') === null) {
  return
} else {
  const currentLocalVideoTime = JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds
  videoPlayer.setCurrentTime(currentLocalVideoTime)
}




