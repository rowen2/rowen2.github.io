function populateComments(){
  var iHateThis = firebase.database().ref('/Comments/Com1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML = snapshot.val();
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
    newComment.push({ 'Name': name , 'Comment' : comment});
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      writeComments("thisisastupidcomment", "stupid");
}

