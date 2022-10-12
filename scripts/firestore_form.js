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


const title = document.querySelector("#title");
const email = document.querySelector("#email");
const mobile = document.querySelector("#telnum");
const address = document.querySelector("#address");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");
alert(saveButton);

const fdegree = document.querySelector("#fdegree");
const odegrees = document.querySelector("#odegrees");
const profquals = document.querySelector("#profquals");
const oquals = document.querySelector("#oquals");
const interests = document.querySelector("#interests");
const occupation = document.querySelector("#occupation");
const holddata = document.querySelector("#holddata");
const sharedata = document.querySelector("#sharedata");

saveButton.addEventListener("click", function() {
  const firestore = firebase.firestore();
  const docRef = firestore.doc("users/person");
  
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const titleValue = title.value;
  const addressValue = address.value;
  const mobileValue = mobile.value;
  const emailValue = email.value;
  const fdegreeValue = fdegree.value;
  const odegreesValue = odegrees.value;
  const profqualsValue = profquals.value;
  const oqualsValue = oquals.value;
  const occupationValue = occupation.value;
  var holddataValue;
  var sharedataValue;
  if (holddata.checked) holddataValue="yes";
  else holddataValue="no";
  if (sharedata.checked) sharedataValue="yes";
  else sharedataValue="no";
  
  firestore.collection("users").add({
    title: titleValue,
    firstName: firstNameValue,
    lastName: lastNameValue,
    address: addressValue,
    mobile: mobileValue,
    email: emailValue,
    firstDegree: fdegreeValue,
    otherDegrees: odegreesValue,
    profQuals: profqualsValue,
    otherQuals: oqualsValue,
    occupation: occupationValue,
    holdData: holddataValue,
    sharedata: sharedataValue
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
 
  window.location.href = "https://rubyzulu.github.io/GWSE/thanks.html";
  
 });  


