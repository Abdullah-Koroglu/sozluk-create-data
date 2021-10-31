const axios = require("axios");
const https = require("https");
const fs = require("fs");

// // URL of the image
// const url = "https://turki.cagdassozluk.com"+url;
// https.get(url, res=>{
//   let newUrl = res.headers.location
//   https.get(newUrl, (res) => {
//   const path = "files"+url;
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

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

let data = fs.readFileSync("append.txt", "utf8");
let lines = data.split("\n");
//   lines.slice(-20).map();
try {
  asyncForEach(lines.slice(29327), async i => {
    let imgurl = i.split(",")[1];
    if (imgurl) {
      if (imgurl.trim() !=undefined) {
        const url = `https://turki.cagdassozluk.com${imgurl.trim()}`;
        console.log(url);
        let res = await axios.get(url);
        console.log(res.request.res.responseUrl);
        if (res.request.res.responseUrl) {
          await https.get(res.request.res.responseUrl, res => {
            const path = "files" + imgurl.trim();
            const writeStream = fs.createWriteStream(path);
            res.pipe(writeStream);
            writeStream.on("finish", () => {
              //   writeStream.close();
              console.log("Download Completed");
            });
          });
        }
      }
    }
  });
} catch (error) {
  console.log(error);
}
