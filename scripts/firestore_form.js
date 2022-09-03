// Initialize Firebase
// your firebase info for your project should go here.
const firebaseConfig = {
apiKey: "AIzaSyAZ1B64gnBFIp1w3-cqx9PIaqhPqidngic",
  authDomain: "gwse-70629.firebaseapp.com",
  databaseURL: "https://gwse-70629-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gwse-70629",
  storageBucket: "gwse-70629.appspot.com",
  messagingSenderId: "310289368537",
  appId: "1:310289368537:web:0ca4b9db820d48768085c8"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const docRef = firestore.doc("users/person");


const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function() {
	alert(1)
    const firstNameValue = firstName.value;
    alert(2)
    const lastNameValue = lastName.value;
     alert(3)
    docRef.set({
        firstName: firstNameValue,
        lastName: lastNameValue,
    }).then(function() {
        console.log("Status saved!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    })
});


