import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';
import RowContainer from './rowcontainer/rowcontainer';
import './channel.css'
function Channel(props) {
  const [mute, setMute] = useState(false)

  //audio player instance 
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [seek, setSeek] = useState(0.0);
  useEffect(() => {
    if (audioPlayer != null) { 
       audioPlayer.seek(props.currentTimeState);   
    }
  }, [audioPlayer])


  const muteToggle = () => {
    setMute(!mute)
  }
  
  const onseekHandler = (e)=>{
    console.log(e)
  }
  return <RowContainer>
    <div className={'channel' + props.name}>
      <button className='channel-button' onClick={muteToggle}>{(mute) ? 'Play' : 'Mute'}</button>
      <p className='channel-name'>{props.name}</p>
      <div>{audioPlayer?.seek()}</div>
      <ReactHowler
        src={process.env.PUBLIC_URL + props.url}
        playing={props.playingState}
        loop={props.loopState}
        ref={(ref) => (setAudioPlayer(ref))}
        mute={mute}
        onSeek= {onseekHandler()}
      />
    </div>
  </RowContainer>

}

export default Channel;
