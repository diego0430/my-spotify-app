import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ artists }) => (
    <p>
        <img
            src="{artists.images}}"
            alt=""
        />
    </p>
)

Post.propTypes = {
    artists: PropTypes.object.isRequired
}

export default Post