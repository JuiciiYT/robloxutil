

$.getJSON( "./user.json", function( data ) {
  document.title = data.username + " | RobloxUtil"
  document.getElementById("username").innerHTML = data.username;
  document.getElementById("username-nav").innerHTML = data.username;
  
  document.getElementById("id").innerHTML = data.id;
  document.getElementById("friends").innerHTML = data.friends.count;
  document.getElementById("following").innerHTML = data.following.count;
  document.getElementById("followers").innerHTML = data.followers.count;
  document.getElementById("followers").innerHTML = data.followers.count;
  document.getElementById("status1").innerHTML = data.last_online;
  document.getElementById("status-nav").innerHTML = data.last_online;

  if(data.last_online !== "Online right now"){
    document.getElementById("status2").innerHTML = '<div class="determinate orange" style="width:100%;"></div>'
  }

  document.getElementById('headshot').innerHTML = `<img class="circle" src="https://www.roblox.com/headshot-thumbnail/image?userId=${data.id}&width=352&height=352&format=png">`;
  document.getElementById("avatar").innerHTML = `<img src="https://www.roblox.com/avatar-thumbnail/image?userId=${data.id}&width=352&height=352&format=png">`


})
