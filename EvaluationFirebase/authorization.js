import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toggleLink = document.getElementById("toggleLink");
const formTitle = document.getElementById("formTitle");

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  const isLogin = loginForm.style.display !== "none";

  loginForm.style.display = isLogin ? "none" : "block";
  signupForm.style.display = isLogin ? "block" : "none";
  formTitle.textContent = isLogin ? "Sign Up" : "Login";
  toggleLink.textContent = isLogin ? "Login" : "Sign up";
  toggleLink.parentElement.firstChild.textContent = isLogin
    ? "Already have an account? "
    : "Don't have an account? ";
});

signupForm.addEventListener("submit", async function (e) {
  console.log("function called!!!");
  e.preventDefault();

  const Email = signupForm.querySelector('input[type="email"]').value.trim();
  const Password = signupForm
    .querySelector('input[type="password"]')
    .value.trim();
  console.log(Email, Password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      Email,
      Password
    );
    const user = userCredential.user;
    alert("Signup successful! User ID: " + user.uid);

    signupForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.textContent = "Login";
    toggleLink.textContent = "Sign up";
    toggleLink.parentElement.firstChild.textContent = "Don't have an account? ";
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});

loginForm.addEventListener("submit", async function (e) {
  console.log("function called!!!");
  e.preventDefault();

  const Email = loginForm.querySelector('input[type="email"]').value.trim();
  const Password = loginForm
    .querySelector('input[type="password"]')
    .value.trim();
  console.log(Email, Password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      Email,
      Password
    );
    const user = userCredential.user;
    alert("Login successful!!");
    window.location.href = "index.html";
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBZEwe-uIlzaxcobXNp3K0kKubyC70_hdM",
  authDomain: "paievaluation.firebaseapp.com",
  databaseURL:
    "https://paievaluation-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "paievaluation",
  storageBucket: "paievaluation.firebasestorage.app",
  messagingSenderId: "19826895367",
  appId: "1:19826895367:web:26db7fca34a0c4f4bf18a2",
  measurementId: "G-CLQXV78Y32",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
