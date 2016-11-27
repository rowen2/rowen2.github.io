function populateComments(path){
  var iHateThis = firebase.database().ref(path+ '/Comment');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML =snapshot.val();
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
    //newComment.push({'Comment' : comment, 'Name': name });
  var newCommentRef = newComment.push();
    newCommentRef.set({ 'Comment' : comment, 'Name': name });
     var path = newCommentRef.toString();
  populateComments(path);
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

