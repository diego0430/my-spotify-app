import React from 'react'
import PropTypes from 'prop-types'

const Track = ({track}) => (
        <li>{track.name} {track.preview_url}</li>
)

Track.propTypes = {
    track: PropTypes.object.isRequired
}

export default Track