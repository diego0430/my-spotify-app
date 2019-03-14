import {connect} from 'react-redux'
import AlbumList from '../components/album/AlbumList'

const mapStateToProps = (state) => {
    const length = state.albums.length
    const currentState = state.albums[length - 1]  // 一番新しいstateを取り出す
    return {spotifyApi: currentState.items}  // 描画するのに必要なのはとりあえずitemsだけなのでitemsだけ返す
}

const GetPostList = connect(
    mapStateToProps
)(AlbumList)

export default GetPostList
