const getUser = require("roblox-user-information")

$.getJSON("json/result.json", function(result) {
  (async() => {
    await getUser(result.input).then(user => {
      fs.writeFile("./json/user.json", JSON.stringify(user), function(err){

      })
      const RPC = require("discord-rich-presence")("799757326738259968")
RPC.updatePresence({
  state: user.username,
  details: 'User',
  startTimestamp: Date.now(),
  largeImageKey: 'icon',
  smallImageKey: 'electron',
  instance: true,
});
      if(user.success == false) {
        window.location.replace("./invalid.html")
      }
      document.title = user.username + " | RBXUtil"
      document.getElementById("username").innerHTML = user.username;
      document.getElementById("username-nav").innerHTML = user.username;

      $.getJSON("json/link.json", function(linked) {
        if (linked.id.length === 0) {
          document.getElementById("claim").innerHTML = `<a href="./claim.html?id=${user.id}&username=${user.username}" class="btn">CLAIM THIS ACCOUNT</a>`;
        } else {
          document.getElementById("claim").innerHTML = `<a href="./claim.html?id=${user.id}&username=${user.username}" class="btn disabled">CLAIM THIS ACCOUNT</a>`;
        } 
        
        if (linked.username === user.username) {
          document.getElementById("linked").innerHTML = `<span style="font-size:100%;" class="material-icons">verified_user</span>&nbsp;`
        }
      })

      const axios = require('axios');
      const cheerio = require('cheerio');
    
        const url = 'https://web.roblox.com/users/'+ user.id +'/profile';
    
        axios(url)
          .then(response => {
            const html = response.data;
            const scrape = cheerio.load(html);
            const statsTable = scrape('.icon-premium-medium');
            if (statsTable.length === 1) {
              document.getElementById("premium").innerHTML = "<img style='width:46px;' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTgwIDBhOCA4IDAgMCAxIDggOHY3MmE4IDggMCAwIDEtNy43NSA3Ljk5Nkw4MCA4OEg0MnYtOGgzOFY4SDh2ODBhOCA4IDAgMCAxLTgtOFY4QTggOCAwIDAgMSA3Ljc1LjAwNEw4IDBoNzJ6bS02IDE0djYwaC04VjIySDIydjY2aC04VjE0aDYwek00MiA2MHYtOGgxMFYzNkgzNnY1MmgtOFYyOGgzMnYzMkg0MnptMjQgNnY4SDQydi04aDI0eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+'>&nbsp;"
            }
          })
          .catch(console.error);
          document.getElementById("id").innerHTML = user.id;
      document.getElementById("claim").innerHTML = `<a href="./claim.html?id=${user.id}&username=${user.username}" class="btn">CLAIM THIS ACCOUNT</a>`;
      document.getElementById("friends").innerHTML = user.friends.count;
      document.getElementById("following").innerHTML = user.following.count;
      document.getElementById("followers").innerHTML = user.followers.count;
      document.getElementById("followers").innerHTML = user.followers.count;
      document.getElementById("status1").innerHTML = user.last_online;
      document.getElementById("status-nav").innerHTML = user.last_online;

      if (user.last_online !== "Online right now"){
         document.getElementById("status2").innerHTML = '<div class="determinate orange" style="width:100%;"></div>'
      }

       document.getElementById('headshot').innerHTML = `<img class="circle" src="https://www.roblox.com/headshot-thumbnail/image?userId=${user.id}&width=352&height=352&format=png">`;
       document.getElementById("avatar").innerHTML = `<img src="https://www.roblox.com/avatar-thumbnail/image?userId=${user.id}&width=352&height=352&format=png">`

       if (user.friends.count == 0) {
        document.getElementById("friends-list").innerHTML = "This person's a bit lonely. They have no friends. :("
       } else {
        document.getElementById("friends-list").innerHTML = `<div class="card-panel grey lighten-5 z-depth-1"><div class="row valign-wrapper black-text">${user.friends.friends.join(' • ')}</div>`
       }
   })
  })() 
})


  

