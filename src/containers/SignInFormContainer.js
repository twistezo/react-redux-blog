import { connect } from 'react-redux'
import SignInForm from '../components/Navbar/SignInForm'
import { signIn } from '../actions'

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = { signIn }

export const SignInFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)
