function populateComments(){
  var iHateThis = firebase.database().ref('/Comments/Com1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML = snapshot.val();
  });
}//not yet done
function writeComments(commentID, comment) {
  var newKey = firebase.database().ref().child('Comments').push().key;

  var updates = {};
  updates['/Comments/' + newKey] = comment;
  return firebase.database().ref().update(updates);

}
function getVariables(){
      var ID = document.getElementById("cID").value;
      var CM = document.getElementById("com").value;
      writeComments(Com2, data);
}

