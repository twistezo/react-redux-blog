import firebase from "firebase";
import DataUtils from "./dataUtils";

const firebaseConfig = {
  apiKey: "AIzaSyBU_CK4oTRzwPIOjZWQn8tpF5kOcnESnps",
  authDomain: "twistezo-blog.firebaseapp.com",
  databaseURL: "https://twistezo-blog.firebaseio.com",
  projectId: "twistezo-blog",
  storageBucket: "twistezo-blog.appspot.com",
  messagingSenderId: "1065707028990"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
export const firebaseFirestore = firebase.firestore();

export const fetchPostsFromFirestore = () =>
  firebaseFirestore
    .collection("posts")
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc =>
        DataUtils.firestorePostObjToJsOjb(doc.data())
      )
    )
    .catch(
      error =>
        new Error(
          "Errow while fetching posts from Firestore. Error message: ",
          error
        )
    );

export const addPostToFirestore = post =>
  firebaseFirestore
    .collection("posts")
    .add(DataUtils.jsPostObjToFirestoreObj(post))
    .catch(
      error =>
        new Error(
          "Errow while adding post to Firestore. Error message: ",
          error
        )
    );
