import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD3GvlENwkMR6Khab1g-qT6WukrCVUwGSs",
    authDomain: "nexinnovation-login.firebaseapp.com",
    projectId: "nexinnovation-login",
    storageBucket: "nexinnovation-login.firebasestorage.app",
    messagingSenderId: "558802849966",
    appId: "1:558802849966:web:4339bb803ed781a5ecdd3f",
    measurementId: "G-5NVJF3R8D8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector('.login100-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        await signInWithEmailAndPassword(auth, email, password);
        // alert("Login successful!");
        window.location.href = "dashboard.html";
    } catch (error) {
        alert("Login failed: " + error.message);
    }
});