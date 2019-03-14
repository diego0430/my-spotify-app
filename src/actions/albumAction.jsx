import axios from 'axios'

export const GET_ALBUMS_REQUEST = 'GET_ALBUMS_REQUEST'
const getAlbumsRequest = () => {
    return {
        type: GET_ALBUMS_REQUEST
    }
}

export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS'
const getAlbumsSuccess = (json) => {
    return {
        type: GET_ALBUMS_SUCCESS,
        albums: json,
        receivedAt: Date.now()
    }
}

export const GET_ALBUMS_FAILURE = 'GET_ALBUMS_FAILURE'
const getAlbumsFailure = (error) => {
    return {
        type: GET_ALBUMS_FAILURE,
        error
    }
}

export const getAlbums = () => {
    return (dispatch) => {
        dispatch(getAlbumsRequest())
        return axios.get('https://api.spotify.com/v1/artists/6PAt558ZEZl0DmdXlnjMgD/albums',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer BQDiPuHUcKZFCGSzsj49CdHk8NGSVPSs-qH-RcXD4GUA12BztimaxHNKlv4KW22zvye_TwcdCMwnrJhjG8U'
                }
            }).then(res =>
            dispatch(getAlbumsSuccess(res.data))
        ).catch(err =>
            dispatch(getAlbumsFailure(err))
        )
    }
}