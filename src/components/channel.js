import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';
import RowContainer from './rowcontainer/rowcontainer';
import './channel.css'
function Channel(props) {
  const [mute, setMute] = useState(false)

<<<<<<< HEAD
  //audio player instance 
  const [audioPlayer, setAudioPlayer] = useState(null);

=======
>>>>>>> 22c8df76dc02bb0c501929f0f2b5a7db4b595a9b
  const muteToggle = () => {
    setMute(!mute)
  }
  
  
  return <RowContainer>
    <div className={'channel' + props.name}>
      <button className='channel-button' onClick={muteToggle}>{(mute) ? 'Play' : 'Mute'}</button>
      <p className='channel-name'>{props.name}</p>
      <ReactHowler
        src={process.env.PUBLIC_URL + props.url}
        playing={props.playingState}
        loop={props.loopState}
        ref={(ref) => (setAudioPlayer(ref))}
        mute={mute}
      />
    </div>
  </RowContainer>

}

export default Channel;
