
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("Hello from server ! ");
});

// ang endpoint

app.post('/enroll',function(req,res){
    
    console.log(req.body);

    res.status(200).send({"message":"data received"});

    // for error msg display
    // 400 BAD REQUEST
    //404 FILE NOT FOUND
    //res.status(400).send({"message":"data received"});
    
})

app.listen(PORT,function(){
    console.log("server running on port no:"+PORT);
});
