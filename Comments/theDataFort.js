function populateComments(){
  var iHateThis = firebase.database().ref('/Comments/Com1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML = snapshot.val();
  });
}//not yet done
function writeComments(comment) {
  firebase.database().ref('Comments/').push({
    Comment: comment
  });

}
function getVariables(){
      var CM = document.getElementById("com").value;
      writeComments(data);
}

