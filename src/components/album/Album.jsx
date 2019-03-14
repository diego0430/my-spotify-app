import React from 'react'
import PropTypes from 'prop-types'

const Album = ({album}) => (
    <div>
        <p>{album.name}</p>
        <p>{album.total_tracks}</p>
        <p>
            {album.images.length > 0 ? <img src={album.images[0].url} alt=""/> : null}
        </p>
    </div>
)


Album.propTypes = {
    album: PropTypes.object.isRequired
}

export default Album