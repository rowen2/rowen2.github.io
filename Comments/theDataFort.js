//step 3//this function populates any new comments on to the page
function populateComments(path, commentName){
  //firstDatabase is a string that represents how to get to the next comment
  var firstDatabase = firebase.database().ref('/Comments/'+path+'/Comment');
  //retrieves some value from the firstDatabse ref, in this case, the comment
  firstDatabase.on('value', function(snapshot) {
    //data becomes the comment
    var data = snapshot.val().toString();
    //gets the target html element
     var temp = document.getElementById("previousC").innerHTML;    
    //takes previous element html and adds to it the next data and the comment name, the comment name being supplied earlier
    document.getElementById("previousC").innerHTML = temp + '<br> <br/>' + commentName+ ': '+ data;   
    //ultimately everything above doesn't need the firebase database, but can be improved to loop through the comments and retrieve
    //all comments, howeever last semester i didn't finish this since getting this far took 3 days
  });
}
//step 2//this function adds a new comment to the database under comments                    
function writeComments(name, comment) {  
  //creates new comment
    var newComment = firebase.database().ref('/Comments');
  //pushes comment
  var newCommentRef = newComment.push();
  //sets two branches named comment and name, and assigns the values name and comment from the function argument
    newCommentRef.set({ 'Comment' : comment, 'Name': name });
  //captures the path to this comment into a string
     var path = newCommentRef.toString();
  //captures a piece of the total path needed later into a string
  var key = path.slice(45,65); 
  //calls populateComments
  populateComments(key, name);
}
//step 1//this function is called when submit is clicked, and retrieves the data from the text fields, and calls writeComments()
function getVariables(){
      var CM = document.getElementById("com").value;
      var ID = document.getElementById("cID").value;
      writeComments(ID, CM);
}

