// Initialize Firebase
// your firebase info for your project should go here.
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
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

firebase.initializeApp(firebaseConfig);



const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
  const firestore = firebase.firestore();
  const docRef = firestore.doc("users");
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
  
  firestore.collection("users/person").add({
    firstName: "Tokyo",
    lastName: "Japan"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
  
 });  


