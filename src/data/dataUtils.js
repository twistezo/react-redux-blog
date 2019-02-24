import Chance from "chance";
import showdown from "showdown";
import firebase from "./firebase";
import { firebaseFirestore } from "../data/firebase";
import hljs from "highlight.js";
import "../dracula.css";
import { Post } from "../data/index";
import DataGenerator from "./generator";

class DataUtils {
  static randomArrayItem = array =>
    array[Math.floor(Math.random() * array.length)];

  static isNullEmptyOrUndefinded = value =>
    value === null || value === [] || value === undefined || value.length === 0;

  static arrayFromArrayRandomItems = array => {
    const result = Array.from(array).filter(() => DataUtils.randomBoolean());
    return result.length === 0 ? [array[0]] : result;
  };

  static randomBoolean = () => Math.random() >= 0.5;

  static arrayContainsAllElementsFromAnother = (array0, array1) =>
    array1
      .map(a => {
        return array0.some(b => {
          return b === a;
        });
      })
      .every(e => e);

  static generateExampleMarkdownText = () => {
    const chance = new Chance();
    const randomSentence = words => chance.sentence({ words });
    const randomParagraph = sentences =>
      chance.paragraph({
        sentences
      });
    const word = length => chance.word({ length });

    return `### ${randomSentence(6)}
        \n ${randomParagraph(10)}
        \n![Alt Text](https://avatars.dicebear.com/v2/identicon/${word(
          15
        )}.svg =200x200)
        \nPhoto: *${randomSentence(6)}*
        \nVisit: <http://www.example.com>
        \n### ${randomSentence(6)}
        \n${randomParagraph(6)}
        \n${word()} ${word()}:
        \n* ${word()}
        \n* ${word()}
        \n* ${word()}
        \n### ${randomSentence(6)}
        \nSome code:
        \n
        \`\`\`
        function resolveAfter2Seconds() {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve('resolved');
            }, 2000);
          });
        }
        
        async function asyncCall() {
          console.log('calling');
          var result = await resolveAfter2Seconds();
          console.log(result);
          // expected output: 'resolved'
        }
        
        asyncCall();
        \`\`\`
        `;
  };

  static convertMarkdownToHtml = markdownString =>
    new showdown.Converter({ noHeaderId: true }).makeHtml(markdownString);

  static updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  };

  static jsPostObjToFirestoreObj = post => ({
    id: post.id,
    title: post.title,
    shortDescription: post.shortDescription,
    text: post.text,
    author: post.author,
    date: firebase.firestore.Timestamp.fromDate(post.date),
    tags: post.tags,
    mainImage: post.mainImage
  });

  static firestorePostObjToJsOjb = firestoreObj =>
    new Post(
      firestoreObj.id,
      firestoreObj.title,
      firestoreObj.shortDescription,
      firestoreObj.text,
      firestoreObj.author,
      firestoreObj.date.toDate(),
      firestoreObj.tags,
      firestoreObj.mainImage
    );

  /**
   * Use only for first time writing to firestore random generated data.
   * It creates in firestore  `posts` collection with documents `post` by `post.id`.
   */
  static addPostsToFirestore = num => {
    new DataGenerator()
      .fetch(num)
      .then(posts => {
        posts.forEach(post => {
          firebaseFirestore
            .collection("posts")
            .doc(post.id)
            .set(DataUtils.jsPostObjToFirestoreObj(post))
            .catch(error =>
              console.error("Skipping write document cause: ", error)
            );
        });
      })
      .catch(err => console.log(err));
  };
}

export default DataUtils;
