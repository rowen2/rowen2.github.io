var dev1 = firebase.database().ref("Developers/Dev1");
dev1.on('value', function(snapshot) {
  document.getElementById("p0").innerHTML = "snapshot.val())"; 
});
