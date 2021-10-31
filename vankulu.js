var fs = require('fs');

fs.readFile('van.txt', "utf-8",function(err, data) {
    let fusul = data.split('\n')
    console.log(fusul);
    // fusul.map(i=>{
    //     i.slice
    // })
  });