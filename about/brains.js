var dataBaseDevs = new Firebase("https://mum-database.firebaseio.com");

function onDev1(){
  var dev1 = firebase.dataBaseDevs().ref('Developers/Dev1');
  dev1.on('value', function(snapshot) {
    document.getElementById("p0").innerHTML = snapshot.val()); 
  });
}
