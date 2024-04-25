import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDcFoGnrDFSvK2wpcYQC2JoiQT18HPaEIs",
    authDomain: "primeiroprojetoteste01.firebaseapp.com",
    databaseURL: "https://primeiroprojetoteste01-default-rtdb.firebaseio.com",
    projectId: "primeiroprojetoteste01",
    storageBucket: "primeiroprojetoteste01.appspot.com",
    messagingSenderId: "530867320810",
    appId: "1:530867320810:web:65efd67ecdc9eb4639a493",
    measurementId: "G-EKYWKF6DCE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

var enterEmail = document.querySelector("#enterEmail");
var enterSenha = document.querySelector("#enterSenha");
var Loginbtn = document.querySelector("#Login");

Loginbtn.addEventListener('click', Login);

function Login() {
    signInWithEmailAndPassword(auth, enterEmail.value, enterSenha.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            sessionStorage.setItem("autenticacao", `${user.uid}`);
            sessionStorage.setItem("email", `${user.email}`);
            window.location.href = `index.html`;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });
}