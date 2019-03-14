import React from 'react'
// import PropTypes from 'prop-types'
import Album from './Album'

const ImageComp = ({photo}) => (
    
    photo.items.map((item, index) =>
        <Album key={index} album={item}/>
    )
)

const AlbumList = ({spotifyApi}) => (
    <ol>
        {spotifyApi.items ? <ImageComp photo={spotifyApi}/> : null}
    </ol>
)

// AlbumList.propTypes = {
//     albums: PropTypes.arrayOf(
//         PropTypes.shape({
//             _id: PropTypes.object.isRequired,
//             body: PropTypes.string.isRequired,
//             created_at: PropTypes.string.isRequired,
//             updated_at: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired
// }

export default AlbumList