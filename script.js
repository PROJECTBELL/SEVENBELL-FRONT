let postButton = document.getElementById('getPostButton');
postButton.addEventListener('click', getPost)

function getPost() {
    var settings = {
        "url": "http://127.0.0.1:3000/posts",
        "method": "GET"
    };
    $.ajax(settings).done(function(response) {
        showText(response);
    });
}

function showText(response) {
    console.log(response);
    let textBlock = document.getElementById("textBlock");
    textBlock.innerHTML = "";

    for (let i = 0; i < response.length; i++) {
        let line = document.createElement("LI");
        let lineText = document.createTextNode(`Titre: ${response[i].title}, Content: ${response[i].content}, Date: ${response[i].created_at}`);
        line.appendChild(lineText); // <li>Texte...</li>
        textBlock.appendChild(line);
    }
}




let sendButton = document.getElementById('send');
sendButton.addEventListener('click', sendPost)

function sendPost() {
    var data = {
        title: document.getElementById("link").value,
        content: document.getElementById("title").value
    };

    var settings = {
        url: "http://127.0.0.1:3000/posts",
        method: "POST",
        ContentType: "application/json",
        data: data
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
}