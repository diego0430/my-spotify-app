import {
    GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILURE
} from '../actions/albumAction'

const initalState = {
    isFetching: false,
    items: {}
}

const albums = (state = [initalState], action) => {
    switch (action.type) {
        case GET_ALBUMS_REQUEST:
            return [
                ...state,
                {
                    isFetching: true,
                    items: {}
                }
            ]
        case GET_ALBUMS_SUCCESS:
            return [
                ...state,
                {
                    isFetching: false,
                    items: action.albums,
                    lastUpdated: action.receivedAt
                }
            ]
        case GET_ALBUMS_FAILURE:
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

export default albums