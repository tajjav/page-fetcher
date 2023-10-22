const request = require('request');
const fs = require('fs');

let cmdUrl = process.argv[2];
let cmdPath = process.argv[3];

//requesting page from internet
request(cmdUrl, (error,response,body) => {
  console.log('error: ', error);
  console.log('status code: ', response && response.statusCode);
  
  let content = body;
  let fileSize = content.length;
 
  //writing to disk
  fs.writeFile(cmdPath, content, err => { 
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${fileSize} bytes to ${cmdPath}`);
  });
})
