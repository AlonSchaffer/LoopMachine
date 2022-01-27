import React, { useState, useRef, useEffect } from 'react';
import Channel from './channel';
import UrlData from './urldata';
import RowContainer from './rowcontainer/rowcontainer'
import './channelContainer.css'

function ChannelContainer() {
    //states
    const [playingState, setPlayingState] = useState(false);
    const [loopState, setLoopState] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(17);

    //reference to full song
    const fullSongAudio = useRef();
    //reference to progressbar
    const progressBar = useRef();

    const animationRef = useRef();


    useEffect(() => {
        const seconds = Math.floor(fullSongAudio.current.duration);
    },[])

    const handleToggle = () => {
        const prevValue = playingState
        setPlayingState(!prevValue);
        console.log(playingState)
        if(!prevValue)
        {
            animationRef.current = requestAnimationFrame(whilePlaying)
        }
        else{
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = ()=>{
        progressBar.current.value= currentTime;
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration *100}%`)
        setCurrentTime(progressBar.current.value)
        
    }  
    const handleLoop = () => {
        setLoopState(!loopState)
    }

    const changeRange = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration *100}%`)
        setCurrentTime(progressBar.current.value)
    }

    return <RowContainer>
        <div className='controlPanel'>
            <h2>Control Panel</h2>

            <button onClick={handleToggle} className='button'>{(playingState) ? 'Pause' : 'Play'}</button>
            <div>
                <label htmlFor='btnLoop' className='label'>Loop Mode: </label>
                <button name="btnLoop" onClick={handleLoop} className='button'>{(loopState) ? 'Turn Off' : 'Turn On'}</button>
            </div>
            <audio ref={fullSongAudio} muted>
                <source src={process.env.PUBLIC_URL + 'assets/Loopfiles/ALL TRACK.mp3'} type='audio/mpeg' />
            </audio>
        </div>
        <div className='channelsPanel'>
            <h2>Channel Clips:</h2>
            <h5>{(loopState) ? 'loop mode is active' : ''}</h5>
            <RowContainer>
            <label htmlFor='progressBar'>{currentTime}</label>
            <input type='range' name='progressBar' className='progressbar' min='0' max={duration ? duration.toFixed(2) : 0}
            step='0.1' value={currentTime} ref={progressBar} onChange={changeRange}/>
            </RowContainer>
            {UrlData.map((data, index) => {
                return <Channel url={data.url} name={data.name} key={index} playingState={playingState} loopState={loopState} currentTimeState= {currentTime} />

            })}
        </div>
    </RowContainer>
}

export default ChannelContainer;
