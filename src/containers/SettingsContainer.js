import { connect } from 'react-redux'
import Settings from '../components/MainPanel/Settings'

const mapStateToProps = state => ({
  state: state
})

export const SettingsContainer = connect(mapStateToProps)(Settings)
