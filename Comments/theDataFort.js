function populateComments(path){
  var iHateThis = firebase.database().ref('/Comments/'+path+'/Comment');
  nextDatabase.on('value', function(snapshot) {
    var data = snapshot.val().toString();
    document.getElementById("previousC").innerHTML =data;
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
    //newComment.push({'Comment' : comment, 'Name': name });
  var newCommentRef = newComment.push();
    newCommentRef.set({ 'Comment' : comment, 'Name': name });
     var path = newCommentRef.name().toString();
  populateComments(path);
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

