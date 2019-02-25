import { connect } from 'react-redux'
import MainBoard from '../components/MainPanel/MainBoard'

const mapStateToProps = state => ({
  filteredPosts: state.filteredPosts
})

export const MainBoardContainer = connect(mapStateToProps)(MainBoard)
