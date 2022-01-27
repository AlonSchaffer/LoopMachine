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

    //reference to progressbar


    const handleToggle = () => {
        setPlayingState(!playingState);
    }

    const handleLoop = () => {
        setLoopState(!loopState)
    }



    return <RowContainer>
        <div className='controlPanel'>
            <h2>Control Panel</h2>

            <button onClick={handleToggle} className='button'>{(playingState) ? 'Pause' : 'Play'}</button>
            <div>
                <label htmlFor='btnLoop' className='label'>Loop Mode: </label>
                <button name="btnLoop" onClick={handleLoop} className='button'>{(loopState) ? 'Turn Off' : 'Turn On'}</button>
            </div>          
        </div>
        <div className='channelsPanel'>
            <h2>Channel Clips:</h2>
            <h5>{(loopState) ? 'loop mode is active' : ''}</h5>
            {UrlData.map((data, index) => {
                return <Channel url={data.url} name={data.name} key={index} playingState={playingState} loopState={loopState} currentTimeState= {currentTime} />

            })}
        </div>
    </RowContainer>
}

export default ChannelContainer;
