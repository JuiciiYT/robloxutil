const { data } = require("jquery");

function repeat(func, times) {
  func();
  times && --times && repeat(func, times);
}

$.getJSON("./json/result.json", function (result) {
  $.getJSON("https://api.roblox.com/users/get-by-username?username=" + result.input, function (userRBX) {
    $.getJSON("https://users.roblox.com/v1/users/"+ userRBX.Id, function (usersi){

      const cheerio = require('cheerio'),
      axios = require('axios'),
      url = `https://web.roblox.com/users/` + userRBX.Id + "/profile";
      
axios.get(url)
    .then((response) => {
        let $ = cheerio.load(response.data);
        if ($('.icon-premium-medium').length === 1) {
          document.querySelector("#premium").innerHTML = "<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJNMjggMjRhNCA0IDAgMDEtNCA0SDE0di00aDEwVjRINHYyNGE0IDQgMCAwMS00LTRWNGE0IDQgMCAwMTQtNGgyMGE0IDQgMCAwMTQgNHptLTctN3Y0aC03di00aDN2LTZoLTZ2MTdIN1Y3aDE0djEweiIgZmlsbD0ibm9uZSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNLTUtNWgzOHYzOEgtNXoiLz48L2c+PC9zdmc+' width='5%' style='padding-right:10px;'>"
        }
    }).catch(function (e) {
    console.log(e);
});
      $.getJSON("/json/link.json", function(linked) {
        if (linked.username == usersi.name) {
          document.querySelector("#linked").innerHTML = "<h1 class='material-icons'>admin_panel_settings</h1>"
        }
      })
      // Usernames
      document.getElementById("username").innerHTML = usersi.displayName;
      document.getElementById("username-nav").innerHTML = usersi.displayName + ` (@${usersi.name})`;
      document.getElementById("disp").innerHTML = "@" + usersi.name;

      // ID
      document.getElementById("id").innerHTML = userRBX.Id;

      // CLAIM
      document.getElementById("claim").innerHTML = `<a href="./claim.html?id=${userRBX.Id}&username=${userRBX.username}" class="btn">CLAIM THIS ACCOUNT</a>`;

      $.getJSON("https://friends.roblox.com/v1/users/" + userRBX.Id + "/friends/count", function(friends) {
        $.getJSON("https://friends.roblox.com/v1/users/" + userRBX.Id + "/friends", function(friends2) {
          console.log()
          document.getElementById("friends").innerHTML = friends.count;
          if (friends.count == 0) {
            document.getElementById("superb").innerHTML = "This person's a bit lonely. They have no friends. :("
          } else {
            for (let step = 0; step < friends2.data.length; step++) {
                $('#superb').append(`<div class="chip"><img src="https://www.roblox.com/headshot-thumbnail/image?userId=${friends2.data[step].id}&width=60&height=60&format=png"/>${friends2.data[step].displayName}</div>`)
            }       
          }
        })
      })

      $.getJSON("https://friends.roblox.com/v1/users/" + userRBX.Id + "/followers/count", function(follower) {
        document.getElementById("followers").innerHTML = follower.count;
      })

      $.getJSON("https://friends.roblox.com/v1/users/" + userRBX.Id + "/followings/count", function(following) {
        document.getElementById("following").innerHTML = following.count;
      })
      
      //
      //document.getElementById("followers").innerHTML = usersi.followers.count;
      $.getJSON("https://api.roblox.com/users/" + userRBX.Id + "/onlinestatus/", function(status) {
        if (status.IsOnline == false){
          document.getElementById("status2").innerHTML = '<div class="determinate orange" style="width:100%;"></div>'
       }

      if(status.IsOnline == false) {
        document.getElementById("status1").innerHTML = "Offline";
        document.getElementById("status-nav").innerHTML = "Offline";
      } else {
        document.getElementById("status1").innerHTML = "Online";
        document.getElementById("status-nav").innerHTML = "Online";
          if (status.LastLocation != "Online") {
            document.getElementById("status1").innerHTML = status.LastLocation;
            document.getElementById("status-nav").innerHTML = status.LastLocation;
          }
      }
    })

      document.getElementById('headshot').innerHTML = `<img class="circle" src="https://www.roblox.com/headshot-thumbnail/image?userId=${userRBX.Id}&width=352&height=352&format=png">`;
      document.getElementById("avatar").innerHTML = `<img src="https://www.roblox.com/avatar-thumbnail/image?userId=${userRBX.Id}&width=352&height=352&format=png">`
    })
  })
})

