const fs = require('fs');
/*
fs.readFile('file.txt',  "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
*/
const content = 'Вторая часть марлезонского балета!';

fs.writeFile('file.txt', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
});


