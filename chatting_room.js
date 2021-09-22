
const firebaseConfig = {
      apiKey: "AIzaSyBeWKN9m2Lqi11jZHhjCP2BwD1k_A9TvG0",
      authDomain: "kwitter-d8f4f.firebaseapp.com",
      databaseURL: "https://kwitter-d8f4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8f4f",
      storageBucket: "kwitter-d8f4f.appspot.com",
      messagingSenderId: "472086760901",
      appId: "1:472086760901:web:50cff1f2b9b155dae30fac"
    };
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
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

function getData() 
{
      firebase.database().ref("/").on('value', 
      function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 

{ 
      childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " +Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
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

function logout() 
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
