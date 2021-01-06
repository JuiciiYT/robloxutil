$.getJSON( "./user.json", function( data ) {
    if (data.success === false) {
      $.getJSON( "./result.json", function( result ) {  
          document.getElementById("rbx-info").innerHTML = `<div id="code">Please enter a valid Roblox Username<br>Reload the app, and try again.<br>If this issue persists email <a href="mailto:robloxutil@gmail.com?subject=[ISSUE] Roblox User Grabber&body=%5BError%20Info%5D%0A%0ARoblox%20Username%3A%20${result.input}%0AError%20Type%3A%201%0ADevice%3A%20${window.navigator.appVersion}%0A%0A%5BUser%20Info%5D%0A%0A">robloxutil@gmail.com</a>.</pre>`;
      })
    } else {
      let str = ``;
      let str1 = ``;
      let str2 = ``;
      let str3 = ``;
      data.friends.friends.forEach(el=>str+=el+"<br>");
      data.groups.groups.forEach(el=>str1+=el+"<br>");
      data.games.games.forEach(el=>str2+=el+"<br>");
      data.avatar.items.items.forEach(el=>str3+=el+"<br>");
      document.getElementById("rbx-info").innerHTML = `Username: <strong>${data.username}</strong>.<br>ID: <strong>${data.id}</strong>.<br>Friends Count: <strong>${data.friends.count}</strong>.&nbsp;<a href="#modal1" class="modal-trigger">View all</a><br>Last Online: <strong>${data.last_online}</strong>.<br>Status: <strong>${data.status}</strong>.<br>Followers: <strong>${data.followers.count}</strong>.<br>Following: <strong>${data.following.count}</strong>.<br>Games: <strong>${data.games.count}</strong>.&nbsp;<a href="#modal3" class="modal-trigger">View all</a><br>Groups: <strong>${data.groups.count}</strong>.&nbsp;<a href="#modal2" class="modal-trigger">View all</a><br>Avatar Items: <strong>${data.avatar.items.amount}</strong>.&nbsp;<a href="#modal4" class="modal-trigger">View all</a><br>Image Link: <strong><a href="#" onclick="window.open('${data.avatar.link}')">${data.avatar.link}</a></strong>.`;
      document.getElementById("user").innerHTML = `<img class="circle" src="https://www.roblox.com/headshot-thumbnail/image?userId=${data.id}&width=60&height=60&format=png">`;
      document.getElementById("rbx-img").innerHTML = `<img class="materialboxed responsive-img" src="https://www.roblox.com/avatar-thumbnail/image?userId=${data.id}&width=352&height=352&format=png">`;
      document.getElementById("content").innerHTML = `${str}`;
      document.getElementById("content1").innerHTML = `${str1}`;
      document.getElementById("content2").innerHTML = `${str2}`;
      document.getElementById("content3").innerHTML = `${str3}`;
      document.getElementById("name").innerHTML = `<span class="white-text name">${data.username}</span>`;
      document.getElementById("email").innerHTML = `<span class="white-text email">${data.last_online}</span>`;
      document.getElementById("rbx-goto").innerHTML = `<li><a href="#" onclick="myFunction()"><i class="material-icons">exit_to_app</i>Go to Roblox Account</a></li>`;
    }
  });
  
  
  
    function myFunction() {
      var shell = require('electron').shell;
      event.preventDefault();
      $.getJSON( "./user.json", function( data ) { let str4 = data.id; shell.openExternal(`https://roblox.com/users/${ str4 }/profile`); })
  }