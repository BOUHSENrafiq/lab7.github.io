/*
se connecter à la base de données.
 */

var firebaseConfig = {
    apiKey: "AIzaSyCRvPAd5IOLAgAB71L8oywXXDlGu4h60Qc",
    authDomain: "lab7-be05f.firebaseapp.com",
    databaseURL: "https://lab7-be05f.firebaseio.com",
    projectId: "lab7-be05f",
    storageBucket: "lab7-be05f.appspot.com",
    messagingSenderId: "1020267707543",
    appId: "1:1020267707543:web:bc74edd7e89fa47b2cbdd2",
    measurementId: "G-2YVLCDPDHS"
};
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);



const dbRef = firebase.database().ref().child ('participants');

getParticipants();

function getParticipants() {

    dbRef.on('value', snap => {
        console.log(snap.val()); // affichage sur la console
        const object = document.getElementById('table');
        object.innerHTML = "";
        snap.forEach(childSnap  =>{
            let $tr = document.createElement("tr");
            object.append($tr);
            let key = childSnap.key;
            let value = childSnap.val();

            let $td_1 = document.createElement("td");
            let $td_2 = document.createElement("td");
            let $td_3 = document.createElement("td");
            let $td_4 = document.createElement("td");
            let $td_5 = document.createElement("td");

            $td_1.innerHTML = value.age;
            $td_1.innerHTML = value.id;
            $td_1.innerHTML = value.nom;
            $td_1.innerHTML = value.prenom;
            $td_1.innerHTML = value.tele;
            }
        )
    })
}
