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
<<<<<<< HEAD
        setPlayingState(!playingState);
    }

=======
        const prevValue = playingState
        setPlayingState(!prevValue);
   
    }

 
>>>>>>> 22c8df76dc02bb0c501929f0f2b5a7db4b595a9b
    const handleLoop = () => {
        setLoopState(!loopState)
    }

<<<<<<< HEAD

=======
>>>>>>> 22c8df76dc02bb0c501929f0f2b5a7db4b595a9b

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
<<<<<<< HEAD
=======
            <RowContainer>
            step='0.1' value={currentTime} ref={progressBar} onChange={changeRange}/>
            </RowContainer>
>>>>>>> 22c8df76dc02bb0c501929f0f2b5a7db4b595a9b
            {UrlData.map((data, index) => {
                return <Channel url={data.url} name={data.name} key={index} playingState={playingState} loopState={loopState} currentTimeState= {currentTime} />

            })}
        </div>
    </RowContainer>
}

export default ChannelContainer;
