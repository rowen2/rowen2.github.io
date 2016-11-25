var dataBaseDevs = new Firebase("https://mum-database.firebaseio.com/Developers/Dev1");

var updateTheDamnShit = function(snapshot) {
  document.getElementById("p0").innerHTML = snapshot.val()); 
}

function onDev1(){
  dataBaseDevs.on('updatedHTML', updateTheDamnShit);
}
  

}
