


var http = require('http');
var qs = require('querystring');



function req_res_listener(req, res)
{
    res.writeHead(200,{'Content-type':'text/json'});

    if (req.method === 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;
        });

        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post);
            console.log("this is the value" + post["abc"]);
            console.log("what about this way?" + post.abc);

            // use post['blah'], etc.
        });

    }
    res.end("this is a message from the backend");


//    there is no: "easy" way to access the request params!

}

http.createServer(req_res_listener

).listen(1337, '127.0.0.1');
console.log("Server now up and running! ");

