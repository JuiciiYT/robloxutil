const { fstat } = require("fs");

const fs = require("fs")

function finished() {
  fs.writeFile(__dirname + "json/image.json", `{ "url": "${document.getElementById("email_inline").value}" }`)
  setTimeout(function(){ 
    $.getJSON(__dirname + "/json/image.json", function(image) {
      document.getElementById("output").innerHTML = `<img src="${image.url}">`
    })
  }, 500)
}

$.getJSON(__dirname + "/json/image.json", function(image) {
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


  