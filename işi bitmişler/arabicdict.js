var fs = require('fs');

let vk = fs.readFileSync("arabicdictrim.txt", "utf8");

vk = vk.split("@")
vk = vk.filter(i=> i.indexOf(" توجد نتائج مطابقة") == -1).map(i => {
    fs.appendFileSync("arabicdict.txt" , i.replace(/\s{2,5}/g, ' ')+"@")
})


// setTimeout(() => {
//     fs.writeFileSync("arabicdictrim.txt", vk.join("@\n"))
// }, 400000);