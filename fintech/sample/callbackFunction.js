var fs = require("fs");

function callbackFunc(callback){
    fs.readFile("./example/test.txt","utf8",function(err, result){
        if(err){
            
            console.error(err);
            throw err;

        } else {
            readData = result
            console.log(readData + 1);
            callback(readData);
        }
    });
}

callbackFunc(function(data){
    console.log(data);
    console.log("끝");
});