// ***** Use your configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8dSX-ePcJfSN0ps-OzZVBpVEjrE6E9yg",
  authDomain: "database2023-f6c4f.firebaseapp.com",
  projectId: "database2023-f6c4f",
  storageBucket: "database2023-f6c4f.appspot.com",
  messagingSenderId: "618057405361",
  appId: "1:618057405361:web:ec1f9dca5383e659146390",
  measurementId: "G-TH1KTDF9B7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
      //const db = firebase.firestore();

// for game rank
firebase.firestore().collection("test").orderBy("item").limit(3).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().item}`);
  })
})

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from the form
  // You need to change this.
  var email = 'pmadura@usca.edu';
  var password = '12345678';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successfully');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
        window.location.href = 'Surveyresult.html';
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});