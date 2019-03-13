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
        posts: json,
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

export const getPosts = () => {
    return (dispatch) => {
        dispatch(getPostsRequest());
        return axios.get('https://api.spotify.com/v1/search?q=Eric%20Clapton&type=artist',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer BQBI3dQmjVobxV5whLAsKYGBQpN8kPVMjQxdEJbu4nnNceuzsGqcKetM1CETGgf-5S3wH3IVUkiXMoc4WW0'
                }
            }).then(res =>
                // console.log(res.data)
                dispatch(getPostsSuccess(res.data))
            ).catch(err =>
                dispatch(getPostsFailure(err))
            )
    }
}