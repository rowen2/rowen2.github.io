function populateComments(path){
  var iHateThis = firebase.database().ref(path+ '/Comment');
  iHateThis.on('value', function(snapshot) {
    //document.getElementById("previousC").innerHTML = old + "<br><br/>" + snapshot.val();
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
    newComment.push({'Comment' : comment, 'Name': name });
    var path = newComment.toString();
  document.getElementById("previousC").innerHTML = "Paragraph changed!";
  populateComments(path);
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

