var firebaseConfig = {
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

// save the data
$("#signup-form").submit(function (e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name="username"]').val();
  //var email = ;
  var password = $('input[name="password"]').val();
  var confirmedpassword = $('input[name="cpassword"]').val();

  console.log(username, emailaddress, password, confirmedpassword);

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      // ...
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(() => {
        console.log("update profile successfully")
        console.log(user.displayName, " are signed up");

        var date = "Wed, 29 Nov 2023";
        var userinformation = {
          "username": user.displayName,
          "email": emailaddress,
          "signupDate": date
        };

        var db = firebase.firestore();
        db.collection("usertable").doc(user.displayName).set(userinformation).then(() => {
          console.log("information saved to firestore");
          window.location.href = "Login.html";
        });
      });

      //window.location.href = "Login.html";

    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
