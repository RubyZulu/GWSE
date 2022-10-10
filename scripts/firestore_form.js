// Initialize Firebase
// your firebase info for your project should go here.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAv2f43xu6x-odfXpjxXQQbvXGdG6b6P0",
  authDomain: "gwse-79990.firebaseapp.com",
  databaseURL: "https://gwse-79990-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gwse-79990",
  storageBucket: "gwse-79990.appspot.com",
  messagingSenderId: "191714628545",
  appId: "1:191714628545:web:e521a44d0f5ea4df1b5540"
};

// Initialize Firebase


// copied from google to here

const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
	alert(1);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);	
//firebase.initializeApp(firebaseConfig);

//const firestore = firebase.firestore();
//const docRef = firestore.doc("applications/person");


const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
//
alert(firstName);
alert(lastName);


    const firstNameValue = firstName.value;alert(2);alert(firstNameValue);

    const lastNameValue = lastName.value;alert(3);alert(lastNameValue);
	
    db.collection("person").doc("p").set({
    fname: firstNameValue,
    lname: lastNameValue,
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
    
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
  var newPostKey = firebase.database().ref().child('applications/person').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/applications/' + newPostKey] = postData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
