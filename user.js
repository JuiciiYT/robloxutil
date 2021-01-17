const getUser = require("roblox-user-information")

$.getJSON("./result.json", function(result) {
  (async() => {
    await getUser(result.input).then(user => {
      document.title = user.username + " | RobloxUtil"
      document.getElementById("username").innerHTML = user.username;
      document.getElementById("username-nav").innerHTML = user.username;
  
      document.getElementById("id").innerHTML = user.id;
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
       
      

   })
  })() 
})


  

