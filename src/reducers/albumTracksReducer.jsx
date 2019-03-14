import {
    GET_ALBUM_TRACKS_REQUEST, GET_ALBUM_TRACKS_SUCCESS, GET_ALBUM_TRACKS_FAILURE
} from '../actions/albumTracksAction'

const initalState = {
    isFetching: false,
    items: {}
}

const tracks = (state = [initalState], action) => {
    switch (action.type) {
        case GET_ALBUM_TRACKS_REQUEST:
            return [
                ...state,
                {
                    isFetching: true,
                    items: {}
                }
            ]
        case GET_ALBUM_TRACKS_SUCCESS:
            return [
                ...state,
                {
                    isFetching: false,
                    items: action.albumTracks,
                    lastUpdated: action.receivedAt
                }
            ]
        case GET_ALBUM_TRACKS_FAILURE:
            return [
                ...state,
                {
                    isFetching: false,
                    error: action.error
                }
            ]
        default:
            return state
    }
}

export default tracks