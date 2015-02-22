var express = require('express');
var app = express();
var data = require('./data.json')

app.set('view engine','jade');



app.get('/', function(req,res) {
    var imageNum = Math.round(Math.random()*data.pictureNum);
    var tweetNum = Math.round(Math.random()*data.tweets.length);
    var tweet = data.tweets[tweetNum];
    console.log(tweet);
    res.render('index',{title: "WHY HUMAYRA KABIR SUCKS", message:"HUMAYRA KABIR SUCKS BECAUSE", image:"img/"+imageNum+".jpg", tweet:tweet});
})

app.get('/img/:file', function(req,res){
    var file = req.params.file;
    res.sendFile(__dirname+'/img/'+file);
})
app.get('/css/:file', function(req,res){
    var file = req.params.file;
    res.sendFile(__dirname+'/css/'+file);
})

var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
}) 