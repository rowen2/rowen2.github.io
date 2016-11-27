function populateComments(path){
  var iHateThis = firebase.database().ref(path+ '/Comment');
  iHateThis.on('value', function(snapshot) {
    var old = document.getElementById("previousC").innerHTML;
    //document.getElementById("previousC").innerHTML = old + "<br><br/>" + snapshot.val();
    document.getElementById("previousC").innerHTML = old + "<br><br/>" + "I Wish this Worked.";
  });
}
function writeComments(name, comment) {  
    var newComment = firebase.database().ref('/Comments');
    newComment.push({'Comment' : comment, 'Name': name });
    var path = newComment.toString();
  populateComments(path);
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

