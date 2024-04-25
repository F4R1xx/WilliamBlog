import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const db = getDatabase();

function FindData() {
    const dbref = ref(db);
    for (let i = 1; i <= 10; i++) {
        get(child(dbref, "Cards/" + i))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    create_card(i, snapshot.val().Titulo, snapshot.val().Texto);
                } else {
                    if (i == 1) {
                        create_card_NoData();
                    }
                }
            })
            .catch((error) => {

            })
    }

}

FindData();

// Recupere a variável do sessionStorage usando a chave
var autenticacao = sessionStorage.getItem("autenticacao");
var user_email = sessionStorage.getItem("email");

// Agora, variavelRecuperada terá o valor "Olá, mundo!"

function verifica_login() {
    if (autenticacao != 0) {
        header_logado()
    } else {
        header_login()
    }
}

function header_login() {
    var container = document.getElementById("HeaderLogin");

    // Crie o bloco HTML que deseja inserir
    var headerlogin = `
    <a href="/login.html" class="login_button">Login</a>
    `;

    // Insira o bloco HTML dentro do elemento selecionado
    container.innerHTML += headerlogin;
}

function header_logado() {
    var container = document.getElementById("HeaderLogin");
    var BemVindo = document.getElementById("cards-container");

    // Crie o bloco HTML que deseja inserir
    var admlogin = `
    <a href="/adm.html" class="adm_button">Painel Administrador</a>
    `;

    var logout = `
    <button type="button" class="btn btn-danger adm_button" id="logoutbtn">Deslogar</button>
    `;

    var BemVindo_frase = `
    <h2>Bem vindo, ${user_email}</h2>
    `;

    // Insira o bloco HTML dentro do elemento selecionado
    if (user_email == "williamfunk.11@gmail.com") {
        container.innerHTML += admlogin;
    }
    BemVindo.innerHTML += BemVindo_frase;
    container.innerHTML += logout;
}

verifica_login()

function logout() {
    var x;
    var r = confirm("Realmente deseja deslogar?");
    if (r == true) {
        x = "você pressionou OK!";
        sessionStorage.setItem("autenticacao", 0);
        sessionStorage.setItem("email", 0);
        window.location.href = `index.html`;
    }
    else {
        x = "Você pressionou Cancelar!";
    }
    document.getElementById("demo").innerHTML = x;
}

var logoutbtn = document.querySelector("#logoutbtn");
logoutbtn.addEventListener('click', logout);

console.log(user_email);
console.log(autenticacao);
function verifica_null(){
    if (autenticacao == null){
        sessionStorage.setItem("autenticacao", 0);
        sessionStorage.setItem("email", 0);
        window.location.href = `index.html`;
    }
}
verifica_null()