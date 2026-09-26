import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({windowName , setWindowsState}) => {
  return (
    <div>
      <MacWindow windowName={windowName} setWindowsState={setWindowsState} width='28vw'>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0&si=d8b2f4066e0e4925" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </MacWindow>
    </div>
  )
}

export default Spotify
