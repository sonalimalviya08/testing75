import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDP_9VNDtGP2LhdOj_4X_mvX_3MHtsxnX8",
  authDomain: "hiranya-c501f.firebaseapp.com",
  projectId: "hiranya-c501f",
  storageBucket: "hiranya-c501f.appspot.com",
  messagingSenderId: "645234367333",
  appId: "1:645234367333:web:71c1c69a8a7ed5795e1f8c"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}


export default firebase.firestore();
