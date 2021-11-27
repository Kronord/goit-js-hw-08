import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(playTime, 1000));
    function playTime (currentTime) {
        try {
              localStorage.setItem("videoplayer-current-time", currentTime.seconds);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

  const currentSec = JSON.parse(localStorage.getItem("videoplayer-current-time"));
  
  function setCurrentTime(param) {
    if (param) {
      player.setCurrentTime(param);
    };
    return;
};
setCurrentTime(currentSec);