// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

//global variable
var currentuser = "";
var currentemail = "";

//check if the user is logged in or out
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    currentuser = user.displayName;
    currentemail = user.email;
    console.log("Logged in ", currentuser, currentemail);
  }
  else{
    console.log("Use is logged out");
    window.location.href = "Login.html";
  }
});

//sign out code
$("#signout").click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("user sign out");
    window.location.href = "index.html";

  }).catch((error) => {
    console.log(error.message);
  });
});


// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
