var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
var fs             =        require('fs');
var crypto         =        require('crypto')
var admin          =        require('firebase-admin')
var Web3           =        require('web3');
var contract       =        require("truffle-contract");
var path           =        require('path');
var MyContractJSON =        require(path.join(__dirname, './EthHacks/build/contracts/DataX.json'));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require('cors');
var yaml = require ("js-yaml");
var fs = require("fs");
var querystring = require('querystring');
var http = require("http");
// var http = require('follow-redirects').http;
var request = require('request');
var serviceAccount = require('./EthUofT-c434a8b7b0f7.json');

var multer = require('multer');
cors({credentials: true, origin: true});
app.use(cors());

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ethuoft-41976.firebaseio.com/'
});

app.get('/handle',function(request,response){
    response.send("hello, im am in handle");
});

app.get('/', function(request,response){
    response.send("hello, im am in general, the root");
});

app.post('/', function(request, response)
    {
        console.log("we received a hit!");
        console.log(request);
    }

);


app.get('/do_yaml_parsing', function(request, response)

    {

        const json_object = yaml.safeLoad(fs.readFileSync('C:\\Users\\johnp\\Downloads\\model_config\\model_config\\patient_data.yaml',
            "utf8"));
        const indentedJson = JSON.stringify(json_object, null, 4);
        // console.log(indentedJson);
        response.send(indentedJson);



        var keys = Object.keys(json_object);
        for (var i = 0; i<keys.length;i++)
        {
            var x = json_object[keys[i]];
            var inner_keys = Object.keys(            json_object[keys[i]]);
            for (var j = 0; j<inner_keys.length;j++)
            {
                console.log(inner_keys[j]);
            }


        }

        // var fields = []
        var fields = new Object();
        fields["title"] = "dw";
        fields["type"] = "long_text";


        //this function returns a set of keys
        //now: to hook it up

        //add all these keys to a json object anyway, and then


    }
);

app.get('/do_stuff', function(req,res)
{
    var json = new Object();
    json["title"] = "dsjiwo";
    request({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "bearer 3zibQwxfxp1AagtpbB2conNf4nucyKhBUNTyByd4HD7C"
        },
        followAllRedirects: true,
        uri: 'http://api.typeform.com/forms',
        json: json,
        method: 'POST'
    }, function (err, result, body) {
        //it works!
        console.log(result);
        res.send(result);
    });


});



app.post('/my_post_req',function(request,response){
    var query1=request.body.abc;
    var query2=request.body["123"];
    console.log(query1); //OK, so it has to be x-www-form-urlencoded data only, or application/json
    console.log(query2);
    response.send("ok you did send me somehting");

//    OK, now we just need to get the stuff from the front end..

});


app.post('/upload_multer', multer({ dest: './uploads/'}).single('files[]'), function(req,res){
    console.log(req.body); //form fields
    /* example output:
    { title: 'abc' }
     */
    console.log(req.file); //form files
    /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
     */


    var file = req.file.destination + req.file.filename;
    console.log(file);
    var shasum = crypto.createHash('sha256');
    var s = fs.ReadStream(file);
    s.on('data', function(d) { shasum.update(d); });
    s.on('end', function() {
        var d = shasum.digest('hex');
        console.log(d);
        var db = admin.database();
        var ref = db.ref('data');
        
    });

    res.json({"filename": req.file.filename, "type": req.file.mimetype});
    res.status(204).end();
 });

app.post("/upload_files", function(request, response)
{
    console.log("There is data");
    // console.log(request);
    var x = request.file;
    request.on('data', (data) => {
        console.log(data.toString());
    });

    var obj = new Object();
    obj["response_code"] = "all good";
    response.send( JSON.stringify(obj));

    var file = x.destination + filename;
    console.log(file);

    var s = fs.ReadStream(file);
    s.on('data', function(d) { shasum.update(d); });
    s.on('end', function() {
        var d = shasum.digest('hex');
        console.log(d);
    });
    

});

app.listen(3000,

    () => console.log("listening via express"));