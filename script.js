function finished() {
  const fs = require("fs")
  fs.writeFile('./image.json', `{ "url": "${document.getElementById("email_inline").value}" }`, (err) => { if (err) throw err })
  setTimeout(function(){ $.getJSON("./image.json", function(image) { document.getElementById("output").innerHTML = `<img src="${image.url}">` })}, 500);
}

$.getJSON("./image.json", function(image) {
    document.getElementById("output").innerHTML = `<img src="${image.url}">`
})


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });


  