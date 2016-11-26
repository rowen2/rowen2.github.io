function populateComments(){
  var iHateThis = firebase.database().ref('/Comments/Com1');
  iHateThis.on('value', function(snapshot) {
    document.getElementById("previousC").innerHTML = snapshot.val();
  });
}//not yet done
function writeComments(name, comment) {  
    var newComment = new Firebase('https://mum-database.firebaseio.com/Comments');
    newCommen.push({ name : comment});
  }

function getVariables(){
      var CM = document.getElementById("com").value;
      writeComments("thisisastupidcomment", "stupid");
}

