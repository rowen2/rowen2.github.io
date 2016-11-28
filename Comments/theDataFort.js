function populateComments(path){
  var data;
  var firstDatabase = firebase.database().ref('/Comments/'+path+'/Comment');
  firstDatabase.on('value', function(snapshot) {
    data = snapshot.val().toString();
  });
  populateNames(data);
}

function populateNames(data){
    var secondDatabase = firebase.database().ref('/Comments/'+path+'/Name');
  secondDatabase.on('value', function(snapshot){
    var nameData = snapshot.val().toString();
    var temp = document.getElementById("previousC").innerHTML;    
    document.getElementById("previousC").innerHTML = temp + '<br> <br/>' + nameData + '<br> <br/>' + data;   
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

