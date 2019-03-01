import {
  signInWithEmailAndPassword,
  fetchSignedInUserData,
  signOutUser
} from '../data/firebase'

export const signedIn = (isSignedIn, errorMessage) => ({
  type: 'SIGNED_IN',
  isSignedIn,
  errorMessage
})

export const fetchedUserData = (displayName, email) => ({
  type: 'FETCHED_USER_DATA',
  displayName,
  email
})

export const signIn = (email, password) => dispatch =>
  signInWithEmailAndPassword(email, password)
    .then(() => dispatch(signedIn(true, '')))
    .then(() => fetchSignedInUserData())
    .then(data => dispatch(fetchedUserData(data.name, data.email)))
    .catch(error => dispatch(signedIn(false, error.message)))

export const signOut = () => dispatch =>
  signOutUser()
    .then(() => dispatch(signedIn(false, '')))
    .then(() => dispatch(fetchedUserData('', '')))
