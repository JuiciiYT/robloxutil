$.getJSON("./json/game.json", function(data){
    document.getElementById("uid").innerText = data.uid
    document.getElementById("pid").innerText = data.pid
    document.getElementById("creator").innerText = data.devname
    document.getElementById("player").innerText = data.playing
    document.getElementById("username").innerText = data.name
    document.getElementById("creator").innerText = data.devname

    $.getJSON("https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds="+data.uid+"&size=768x432&format=Png&isCircular=false", function (image){
        document.getElementById("avatars").innerHTML = `<img style="object-fit: cover;" src="${image.data[0].thumbnails[0].imageUrl}">`
    })
})
const Autolinker = require( 'autolinker' );
        $.ajax({
            url : "./txt/game.txt",
            dataType: "text",
            success : function (data2) {
                $("#friend-list").html(Autolinker.link(data2));
            }
        });