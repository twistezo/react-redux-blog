import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import DataUtils from './dataUtils'

const firebaseConfig = {
  apiKey: 'AIzaSyBU_CK4oTRzwPIOjZWQn8tpF5kOcnESnps',
  authDomain: 'twistezo-blog.firebaseapp.com',
  databaseURL: 'https://twistezo-blog.firebaseio.com',
  projectId: 'twistezo-blog',
  storageBucket: 'twistezo-blog.appspot.com',
  messagingSenderId: '1065707028990'
}
firebase.initializeApp(firebaseConfig)

export default firebase
export const firebaseFirestore = firebase.firestore()

export const fetchPostsFromFirestore = () =>
  firebaseFirestore
    .collection('posts')
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc =>
        DataUtils.firestorePostObjToJsOjb(doc.data())
      )
    )
    .catch(
      error => new Error('Errow while fetching posts. Error message: ', error)
    )

export const addPostToFirestore = post =>
  firebaseFirestore
    .collection('posts')
    .add(DataUtils.jsPostObjToFirestoreObj(post))
    .catch(
      error => new Error('Errow while adding post. Error message: ', error)
    )

export const signInWithEmailAndPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

export const fetchSignedInUserData = () => {
  const user = firebase.auth().currentUser
  const userEmail = user.email
  const displayName = user.displayName
  const newDisplayName =
    displayName === null ? DataUtils.getEmailPrefix(userEmail) : displayName
  return {
    name: newDisplayName,
    email: userEmail
  }
}

export const signOutUser = () => firebase.auth().signOut()
