import React from 'react'
import PropTypes from 'prop-types'
import GetAlbumTrackList from "../../containers/GetAlbumTrackListContainer";

const style = {
    "display":'flex',
}

const Album = ({album}) => (
    <div style={style}>
        <div>
            <p>
                {album.images.length > 0 ? <img src={album.images[0].url} alt=""/> : null}
            </p>
        </div>
        <div>
            <p>{album.name}</p>
            <p>{album.total_tracks}</p>
            <GetAlbumTrackList />
        </div>
    </div>

)


Album.propTypes = {
    album: PropTypes.object.isRequired
}

export default Album