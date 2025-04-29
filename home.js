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
  

  const auth = firebase.auth();
  

  auth.onAuthStateChanged(user => {
    if (user) {
      document.getElementById('user-info').innerText = `Logged in as: ${user.email}`;
    } else {

      window.location.href = "index.html";
    }
  });
  

  document.getElementById("logout-btn").addEventListener("click", () => {
    auth.signOut()
      .then(() => {
        window.location.href = "index.html"; 
      });
  });
  