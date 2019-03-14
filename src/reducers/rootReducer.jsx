import {combineReducers} from 'redux'
import albums from './albumReducer'
import albumTracks from './albumTracksReducer'

const rootReducer = combineReducers({
    albums: albums,
    albumTracks: albumTracks
})

export default rootReducer
