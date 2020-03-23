
window.onload = function() {
    getPost();
    showText();

};


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
        console.log(response[i].created_at)
        let re = /(.*?(?=T))/
        let result = re.exec(response[i].created_at)


        let lineText = document.createTextNode(`${response[i].title}     URL:   `);

        let lineText2 = document.createTextNode(`--- ${result[0]}  --- Note :  `);
        line.appendChild(lineText);


        let reyt = /(^(http|https):\/\/)/
        let match = reyt.test(response[i].content)
        console.log(match);
        if (match == false) {
            response[i].content = `http://${response[i].content}`;
        }
        let para = document.createElement("a");
        let paraline = document.createTextNode(` ${response[i].content}`)

        para.setAttribute("href", `${response[i].content}`);
        para.appendChild(paraline);
        line.appendChild(para);


        line.appendChild(lineText2);



        //lineText2.appendChild(lineText); // <li>Texte...</li>
        textBlock.appendChild(line);




    }

}





let sendButton = document.getElementById('send');
sendButton.addEventListener('click', sendPost)

function sendPost() {

    let reyt = /(^(http|https):\/\/)/
    let match = reyt.test(document.getElementById("link").value)
    console.log(match);
    if (match == false) {
        document.getElementById("link").value = "";
    }

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

