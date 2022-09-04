// Initialize Firebase
// your firebase info for your project should go here.
const firebaseConfig = {
  apiKey: "AIzaSyDfvBEmPsp2RhOHQ4cmlr-3_kVwW2mVFOI",
  authDomain: "gwse1-d1302.firebaseapp.com",
  projectId: "gwse1-d1302",
  storageBucket: "gwse1-d1302.appspot.com",
  messagingSenderId: "458621958114",
  appId: "1:458621958114:web:f1f3748aaa8a0fc4482bbb",
  measurementId: "G-PQ567NHR2T"
};


saveButton.addEventListener("click", function() {
	alert(1);
	
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const docRef = firestore.doc("applications");


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");



    const firstNameValue = firstName.value;alert(firstNameValue);

    const lastNameValue = lastName.value;alert(lastNameValue);
    
    writeNewApp(firstNameValue,lastNameValue);
    alert("Thank you, your application has been saved");

   // docRef.set({
   //     firstName: firstNameValue,
   //     lastName: lastNameValue,
   // }).then(function() {
   //     console.log("Status saved!");
   // }).catch(function (error) {
   //     console.log("Got an error: ", error);
   // })
});



function writeNewApp(firstname, lastname) {
  // A post entry.
  var postData = {
    firstname: firstname,
    lastname: lastname
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('applications').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/applications/' + newPostKey] = postData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}