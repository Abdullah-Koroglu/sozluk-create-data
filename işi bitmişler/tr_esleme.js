var fs = require('fs');

let vk = fs.readFileSync("tr_words_from_viki.txt", "utf8");
let gh = fs.readFileSync("tr_gh_words.txt", "utf8");


vk = vk.split("\n")
gh = gh.split("\n")

let ar = []

gh.map(i=>{
  if(!vk.includes(i)){
        vk.push(i)
        ar.push(i)
  }
})


setTimeout(() => {
    fs.writeFileSync("merged.txt" , vk.join("\n"))
}, 30000);