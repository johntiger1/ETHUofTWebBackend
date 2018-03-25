var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require('cors');

cors({credentials: true, origin: true});
app.use(cors());

app.get('/handle',function(request,response){
    response.send("hello, im am in handle");
});

app.get('/', function(request,response){
    response.send("hello, im am in general, the root");
});

app.post('/my_post_req',function(request,response){
    var query1=request.body.abc;
    var query2=request.body["123"];
    console.log(query1); //OK, so it has to be x-www-form-urlencoded data only, or application/json
    console.log(query2);
    response.send("ok you did send me somehting");

//    OK, now we just need to get the stuff from the front end..

});



app.listen(3000,

    () => console.log("listening via express"));