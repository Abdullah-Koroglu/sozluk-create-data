// const axios = require("axios");
// const https = require("https");
// const fs = require("fs");

// "https://arapca.cagdassozluk.com/qamus-earabiun-m112000.html"

var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'www.almaany.com',
  'path': '/tr/dict/ar-tr/z%C3%BCy%C3%BCt/',
  'headers': {
    'User-Agent': ' Mozilla/5.0',
    'Cookie': 'PHPSESSID=2v3fcaohinrmijf3b8hv2sccf1'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString() , "vallahi selected");
  });

  res.on("error", function (error) {
    console.error(error , "naber");
  });
});

req.end();
