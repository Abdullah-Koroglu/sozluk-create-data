const axios = require('axios');
var HTMLParser = require('node-html-parser');

var fs = require('fs');

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let data = fs.readFileSync('data.json', 'utf8');
data = JSON.parse(data)


asyncForEach(data[0], async (i) => {
  console.log(`https://www.arabdict.com/ar/turkish-arabic/${i.tr}`);
  try {
    var config = {
      method: 'get',
      url: `https://www.arabdict.com/ar/turkish-arabic/${encodeURIComponent(i.tr)}`
    };

    await axios(config)
      .then(function (response) {
        if (response.data) {
          var root = HTMLParser.parse(response.data);
          let rows = root.querySelectorAll(".rec-body.description")
          rows.map(i => {
            console.log(i.rawText);
            fs.appendFileSync("arabdict.txt", i.rawText + "@ \n")
          })
        }
        return true
      })

  } catch (err) {
    console.log(err);
  }



})


// data[0].slice(0,1351).map()
