function populateComments(){
  var iHateThis = firebase.database().ref('/Comments/Com1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML = snapshot.val();
  });
}//not yet done
function writeComments(comment) {
   var newPostKey = firebase.database().ref().child('Comments').push().key;
  firebase.database().ref('Comments/' + newPostKey).push({
    Comment: comment
  });

}
function getVariables(){
      var CM = document.getElementById("com").value;
      writeComments(data);
}

