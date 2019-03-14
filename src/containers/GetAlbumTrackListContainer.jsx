import {connect} from 'react-redux'
import TrackList from '../components/tracks/TrackList'

const mapStateToProps = (state) => {
    const length = state.albumTracks.length
    const currentState = state.albumTracks[length - 1]  // 一番新しいstateを取り出す
    return {spotifyTrucks: currentState.items}  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}

const GetAlbumTrackList = connect(
    mapStateToProps
)(TrackList)

export default GetAlbumTrackList
