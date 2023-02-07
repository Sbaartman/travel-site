var fs = require('fs');
fs.writeFile(__dirname + "/index.html", "<h1>Html is kak</h1>", function(error){
    if (error){
        return console.log(error);
    }else{
        return console.log('wtf!');
    }
})