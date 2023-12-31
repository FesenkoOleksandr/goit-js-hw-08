import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const timeVideo = throttle(function (data){
  localStorage.setItem("videoplayer-current-time" , data.seconds);
}, 1000);

if(localStorage.getItem("videoplayer-current-time")){
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))};
player.on('timeupdate', timeVideo)
