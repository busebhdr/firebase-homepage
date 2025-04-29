const firebaseConfig = {
  apiKey: "AIzaSyCUH2yUfg8KXH9dxZNzgT_XQ2xxC-KfsS4",
  authDomain: "vtys-proje.firebaseapp.com",
  projectId: "vtys-proje",
  storageBucket: "vtys-proje.appspot.com", 
  messagingSenderId: "571989393491",
  appId: "1:571989393491:web:1e75aa8a2a503fc83e06a6",
  measurementId: "G-NGP2WK5WG3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const messageP = document.getElementById("message");

signupBtn.addEventListener("click", () => {
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

if (!email || !password) {
  messageP.innerText = "Email ve şifre boş bırakılamaz.";
  return;
}

auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    messageP.innerText = "Sign Up Successful!";
    const user = userCredential.user;


    return db.collection('users').doc(user.uid).set({
      email: user.email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  })
  .then(() => {
    console.log("Kullanıcı Firestore'a kaydedildi.");
  })
  .catch((error) => {
    messageP.innerText = error.message;
    console.error(error);
  });
});


loginBtn.addEventListener("click", () => {
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

if (!email || !password) {
  messageP.innerText = "Email ve şifre boş bırakılamaz.";
  return;
}

auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    messageP.innerText = "Login Successful!";
    logoutBtn.style.display = "block";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1000);
  })
  .catch((error) => {
    messageP.innerText = error.message;
    console.error(error);
  });
});


logoutBtn.addEventListener("click", () => {
auth.signOut()
  .then(() => {
    messageP.innerText = "Logged out!";
    logoutBtn.style.display = "none";
  });
});


auth.onAuthStateChanged(user => {
if (user) {
  console.log("User logged in:", user.email);
  logoutBtn.style.display = "block";
} else {
  console.log("User logged out");
  logoutBtn.style.display = "none";
}
});
