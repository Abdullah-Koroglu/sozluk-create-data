const request = require('request');
var HTMLParser = require('node-html-parser');
var fs = require('fs');

// let data = fs.readFileSync('data.json', 'utf8');
// console.log(JSON.parse(data));
let arr = []
let total = 30015
const naber = async()=>{
  return new Promise((resolve, reject) => {
    for (let index = 5231; index < total; index++) {
      request(`https://turki.cagdassozluk.com/osmanlica-sozluk-madde-${index+1}.html`, function (error, response, body) {
        let kelime = HTMLParser.parse(response?.body).querySelector('h1')?.rawText
        let img = HTMLParser.parse(response?.body).querySelector('.osmani')?.firstChild?.getAttribute("src")
        error&&console.error('error:', error); // Print the error if one occurred
        console.log('text:',img); // Print the response status code if a response was received
        fs.appendFileSync("append.text" , kelime +"  ,  "+img +  "\n")
        // let otto = kelime.split( "-" )[0].trim()
        // let tr = kelime.split( "-" )[1].trim()
        // arr.push({tr  , otto})
        // if (index == total -1)
        // {
        //   return resolve(true)
        // }
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });
    }
  })
  //   let naber = data.split("\n").map(i=>{
    //     return {"tr" : i}
    // })
}

naber()












// //resim indirme
// const https = require("https");
// const fs = require("fs");

// // URL of the image
// const url = "https://turki.cagdassozluk.com/rsm/turki/0/16-12.jpg";
// https.get(url, res=>{
//   let newUrl = res.headers.location
//   https.get(newUrl, (res) => {
//   const path = "downloaded-image.png";
//   const writeStream = fs.createWriteStream(path);
// // 
//   res.pipe(writeStream);
// // 
//   writeStream.on("finish", () => {
//     writeStream.close();
//     console.log("Download Completed");
//   });
// });
// })