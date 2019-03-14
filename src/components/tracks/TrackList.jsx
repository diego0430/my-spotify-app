import React from 'react'
import Track from './Track'

const LabelComp = ({truck}) => (
    
    truck.items.map((item, index) =>
        <Track key={index} track={item}/>
    )
)

const TrackList = ({spotifyTrucks}) => (
    <ol>
        {spotifyTrucks.items ? <LabelComp truck={spotifyTrucks}/> : null}
    </ol>
)


export default TrackList