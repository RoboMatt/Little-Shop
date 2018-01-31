//Adds Page-Load Failsafe
  window.onload = firebase.auth().signOut();
 //Get elements
 const txtEmail = document.getElementById('email');
 const textPassword = document.getElementById('pass');
 const btnLogin = document.getElementById('log');
 const btnLogout = document.getElementById('out');

 //login event
 btnLogin.addEventListener('click', e => {
   //get email and pass (user info)
   const email = txtEmail.value;
   const pass = textPassword.value;
   const auth = firebase.auth();
   //do the actual sign in
   const promise = auth.signInWithEmailAndPassword(email,
     pass);
   promise.catch(e => console.log(e.message));

 });

//logout functions
btnLogout.addEventListener('click', e => {
firebase.auth().signOut();
});

let database = firebase.database();
let ref = database.ref("link");

//listener that checks auth state
firebase.auth().onAuthStateChanged(firebaseUser => {
if (firebaseUser){
    console.log("logged in");
    movePages();
}
else{
  console.log('logged out')
}
});

function movePages(){
  let url = firebase.database().ref("link");
  url.toString();
  console.log(url);
  //window.location.assign("www.griswolddrama.com/" + url);
}
