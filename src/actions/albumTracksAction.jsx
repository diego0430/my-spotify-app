import axios from 'axios'

export const GET_ALBUM_TRACKS_REQUEST = 'GET_ALBUM_TRACKS_REQUEST'
const getAlbumTracksRequest = () => {
    return {
        type: GET_ALBUM_TRACKS_REQUEST
    }
}

export const GET_ALBUM_TRACKS_SUCCESS = 'GET_ALBUM_TRACKS_SUCCESS'
const getAlbumTracksSuccess = (json) => {
    return {
        type: GET_ALBUM_TRACKS_SUCCESS,
        albumTracks: json,
        receivedAt: Date.now()
    }
}

export const GET_ALBUM_TRACKS_FAILURE = 'GET_ALBUM_TRACKS_FAILURE'
const getAlbumTrucksFailure = (error) => {
    return {
        type: GET_ALBUM_TRACKS_FAILURE,
        error
    }
}

export const getAlbumTracks = () => {
    return (dispatch) => {
        dispatch(getAlbumTracksRequest())
        return axios.get('https://api.spotify.com/v1/albums/1L3jhywNGVbRmOjprKPvzj/tracks',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': ' Bearer BQDiPuHUcKZFCGSzsj49CdHk8NGSVPSs-qH-RcXD4GUA12BztimaxHNKlv4KW22zvye_TwcdCMwnrJhjG8U'
                }
            }).then(res =>
            dispatch(getAlbumTracksSuccess(res.data))
        ).catch(err =>
            dispatch(getAlbumTrucksFailure(err))
        )
    }
}