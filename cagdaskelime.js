const request = require('request');
var HTMLParser = require('node-html-parser');
var fs = require('fs');

// let data = fs.readFileSync('data.json', 'utf8');
// console.log(JSON.parse(data));
let arr = []
let total = 112000
// let total = 20
const naber = async()=>{
  return new Promise((resolve, reject) => {
    for (let index = 73475; index < total; index++) {
      console.log(`https://arapca.cagdassozluk.com/qamus-earabiun-m${index}.html`);
      request(`https://arapca.cagdassozluk.com/qamus-earabiun-m${index}.html`, function (error, response, body) {
        console.log(index);
        let kelime = HTMLParser.parse(response?.body).querySelector('h1')?.rawText
        error&&console.error('error:', error); // Print the error if one occurred
        fs.appendFileSync("append_ar.txt" , kelime +"@" + "\n")
      });
    }
  })
}

naber()