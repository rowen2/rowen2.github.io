function onDev1(){
  var iHateThis = firebase.database().ref('/Developers/Dev1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("p0").innerHTML = snapshot.val();
  });
}//not yet done
