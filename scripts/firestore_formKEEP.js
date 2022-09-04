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

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const docRef = firestore.doc("users/person");


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");

    const firstNameValue = firstName.value;
  
    const lastNameValue = lastName.value;
   
    docRef.set({
        firstName: firstNameValue,
        lastName: lastNameValue,
    }).then(function() {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
});


