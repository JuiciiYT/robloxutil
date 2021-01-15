const robloxUserInformation = require("roblox-user-information");

var navbar = document.querySelector('nav')
var fb = new Firebase("hhttps://robloxutil-electron-default-rtdb.firebaseio.com/");
var verification = fb.child("verify");

verification.push({
  user: rbx.username,
  code: rbx.code
});

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

