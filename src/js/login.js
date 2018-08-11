const initialization = () => {
    const config = {
      apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
      authDomain: 'red-social-19985.firebaseapp.com',
      databaseURL: 'https://red-social-19985.firebaseio.com',
      projectId: 'red-social-19985',
      storageBucket: 'red-social-19985.appspot.com',
      messagingSenderId: '169924096887'
    };

    firebase.initializeApp(config);
    console.log(firebase);
    const db = firebase.firestore();
    return (db);
}
let  DB = initialization();
function goToKanban() {
    alert('hola');
    // window.location.href('/views/kanban.html');
}


 function observador() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        goToKanban();
      } else {
        console.log('No hace nada XD');
      }
    });
}
function valitator(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log("success");
      observador();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
}

function goToKanban() {
    window.location.href = 'views/kanban.html';
}



const google = document.getElementById('btn-google');
    google.addEventListener('click', (event) => {
        authGoogle();
        // goToKanban();
});
