let postButton = document.getElementById('getPostButton');
postButton.addEventListener('click', getPost)

function getPost(){
  var settings = {
    "url": "http://127.0.0.1:3000/posts",
    "method": "GET"
  };
  $.ajax(settings).done(function (response) {
    showText(response);
  });
}


function showText(response){
  let textBlock = document.getElementById("textBlock");
  textBlock.innerHTML = "";

  for(let i = 0; i < response.length; i++) {
    let line = document.createElement("LI");
    let lineText = document.createTextNode(`Titre: ${response[i].title}, Content: ${response[i].content}, Date: ${response[i].created_at}`);
    line.appendChild(lineText); // <li>Texte...</li>
    textBlock.appendChild(line);
  }
}


let voteButtonUP = document.getElementById('voteup');
voteButtonUP.addEventListener('click', votePostUP)
function votePostUP() {
    var data = {
        Number: true
    };
    var settings = {
        url: "http://127.0.0.1:3000/posts/:post_id/like",
        method: "PUT",
        ContentType: "application/json",
        data: data
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}

let voteButtonDOWN = document.getElementById('votedown');
voteButtonDOWN.addEventListener('click', votePostDOWN)
function votePostDOWN() {
    var data = {
        Number: false
    };
    var settings = {
        url: "http://127.0.0.1:3000/posts/:post_id/dislike",
        method: "PUT",
        ContentType: "application/json",
        data: data
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}

let postButtonUP = document.getElementById('getPostButtonUP');
postButton.addEventListener('click', getvoteUP)

function getvoteUP(){
  var settings = {
    "url": "http://127.0.0.1:3000/posts/:post_id/like",
    "method": "GET"
  };
  $.ajax(settings).done(function (response) {
    showText(response);
  });
}

let postButtonDOWN = document.getElementById('getPostButtonDOWN');
postButton.addEventListener('click', getvoteDOWN)

function getvoteDOWN(){
  var settings = {
    "url": "http://127.0.0.1:3000/posts/:post_id/dislike",
    "method": "GET"
  };
  $.ajax(settings).done(function (response) {
    showText(response);
  });
}

function showText(response){
  let textBlock = document.getElementById("textBlock");
  textBlock.innerHTML = "";

  for(let i = 0; i < response.length; i++) {
    let line = document.createElement("LI");
    let lineText = document.createTextNode(`Titre: ${response[i].title}, Content: ${response[i].content}, Date: ${response[i].created_at}`);
    line.appendChild(lineText); // <li>Texte...</li>
    textBlock.appendChild(line);
  }
}


// POST REQUEST

// var data = {
//   title: document.getElementById("champsTitre").value,
//   content: "azertyuiop"
// };
//
// var settings = {
//   url: "http://127.0.0.1:3000/posts",
//   method: "POST",
//   ContentType: "application/json",
//   data: data
// };
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
