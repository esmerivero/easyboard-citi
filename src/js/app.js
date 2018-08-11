function initialization() {
    const config = {
      apiKey: 'AIzaSyCjN9x4Q4B8Nx5xf1ZoKLpWn4mTPiuuC3c',
      authDomain: 'red-social-19985.firebaseapp.com',
      databaseURL: 'https://red-social-19985.firebaseio.com',
      projectId: 'red-social-19985',
      storageBucket: 'red-social-19985.appspot.com',
      messagingSenderId: '169924096887'
    };
    firebase.initializeApp(config);
}

let  auth = initialization();
const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
      window.location.href = '../index.html';
    }).catch(function(error) {
      console.log(error);
    });
  });

