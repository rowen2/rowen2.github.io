function populateComments(path){
  var iHateThis = firebase.database().ref('/Comments/'+path+'/Comment');
  iHateThis.on('value', function(snapshot) {
    var data = snapshot.val().toString();
    var temp = document.getElementById("previousC").innerHTML;    
    document.getElementById("previousC").innerHTML = temp + '<br> <br/>' + data;
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
  var newCommentRef = newComment.push();
    newCommentRef.set({ 'Comment' : comment, 'Name': name });
     var path = newCommentRef.toString();
  var key = path.slice(45,65); 
  populateComments(key);
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

