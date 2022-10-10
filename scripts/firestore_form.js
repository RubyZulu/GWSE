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

const firestore = firebase.firestore();
const docRef = firestore.doc("users/person");

const title = document.querySelector("#title");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const address = document.querySelector("#address");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
      const titleValue = title.value;
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
        const emailValue = email.value;
    const mobileValue = mobile.value;
    const addressValue = address.value;
    docRef.add({
        title: titleValue,
        firstName: firstNameValue,
        lastName: lastNameValue,
         email: emailValue,
        mobile: mobileValue,
        address: addressValue,
    }).then(function() {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
});
