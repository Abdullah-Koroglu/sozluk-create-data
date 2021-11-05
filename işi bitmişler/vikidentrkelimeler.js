const harfler = ["Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"]


const axios = require('axios');
var HTMLParser = require('node-html-parser');
var fs = require('fs');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

asyncForEach(harfler, async (i) => {
    try {
      var config = {
        method: 'get',
        url: `Https://tr.wiktionary.org/wiki/${encodeURIComponent("Vikisözlük:Sözcük_listesi")}_(${encodeURIComponent(i)})`
      };
  
      await axios(config)
        .then(function (response) {
          if (response.data) {
            var root = HTMLParser.parse(response.data);
            console.log(root);
            let rows = root.querySelectorAll(".mw-parser-output ul li")
            rows.map(i => {
              console.log(i.rawText);
              fs.appendFileSync("tr_words_from_viki.txt", i.rawText + "@ \n")
            })
          }
          return true
        })
  
    } catch (err) {
      console.log(err);
    }
  
  
  
  })