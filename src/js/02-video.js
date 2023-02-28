import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iFrame = document.querySelector('iframe');
const player = new Player(iFrame);

const saveCurrentTime = throttle((currentTime) => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

const getSavedTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  return savedTime ? parseFloat(savedTime) : 0;
};

player.setCurrentTime(getSavedTime());

player.on('timeupdate', (data) => {
  saveCurrentTime(data.seconds);
});
