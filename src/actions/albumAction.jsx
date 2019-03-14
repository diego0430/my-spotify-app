import axios from 'axios'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST
    }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (json) => {
    return {
        type: GET_POSTS_SUCCESS,
        albums: json,
        receivedAt: Date.now()
    }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
    return {
        type: GET_POSTS_FAILURE,
        error
    }
}

export const getAlbums = () => {
    return (dispatch) => {
        dispatch(getPostsRequest())
        return axios.get('https://api.spotify.com/v1/artists/6PAt558ZEZl0DmdXlnjMgD/albums',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer BQBXaCRb1NuL7LCzl3bjVNrDd3y70R8BLrQ0AN5upVwZ49wSNc0MTjyefhpuIY0DdNiotYROprtXLC_7dXw'
                }
            }).then(res =>
            dispatch(getPostsSuccess(res.data))
        ).catch(err =>
            dispatch(getPostsFailure(err))
        )
    }
}