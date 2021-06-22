var firebaseConfig = {
    apiKey: "AIzaSyCt2u73fwhQYDCOosvA7XJsOG_jEAo0FSY",
    authDomain: "kwitter-da854.firebaseapp.com",
    databaseURL: "https://kwitter-da854-default-rtdb.firebaseio.com",
    projectId: "kwitter-da854",
    storageBucket: "kwitter-da854.appspot.com",
    messagingSenderId: "1071920017500",
    appId: "1:1071920017500:web:5ee1b203ddc72cd71e3699",
    measurementId: "G-BR42J7LNZR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
  
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}