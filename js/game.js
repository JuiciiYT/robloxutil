$.getJSON("./json/game.json", function(data){
    document.getElementById("uid").innerText = data.uid
    document.getElementById("pid").innerText = data.pid
    document.getElementById("creator").innerText = data.devname
    document.getElementById("player").innerText = data.playing
    document.getElementById("username").innerText = data.name
    document.getElementById("creator").innerText = data.devname

    var gameurl = 'https://web.roblox.com/games/' + data.pid

    document.getElementById('play').innerHTML = `<a onclick="window.open('${gameurl}', 'popup', 'nodeIntegration=no,width=600,height=600,frame=false')">Play this game!</a>`

    $.getJSON("https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds="+data.uid+"&size=768x432&format=Png&isCircular=false", function (image){
        document.getElementById("avatars").innerHTML = `<img style="object-fit: cover;" src="${image.data[0].thumbnails[0].imageUrl}">`
    })
})

        $.ajax({
            url : "./txt/game.txt",
            dataType: "text",
            success : function (data2) {
                $("#friend-list").html(data2);
                  
                  const text = document.getElementById("friend-list").innerHTML
                  
                  
                  document.getElementById('friend-list').innerHTML = convertLinks( text )
            }
        });

        convertLinks = input => {
            let text = input;
            const aLink = [];
            const linksFound = text.match(/(?:www|https?)[^\s]+/g);
        
            if (linksFound != null) {
                for (let i = 0; i < linksFound.length; i++) {
                    let replace = linksFound[i];
        
                    if (!(linksFound[i].match(/(http(s?)):\/\//))) {
                        replace = 'http://' + linksFound[i]
                    }
        
                    let linkText = replace.split('/')[2];
        
                    if (linkText.substring(0, 3) == 'www') {
                        linkText = linkText.replace('www.', '')
                    }
        
                    if (linkText.match(/youtu/)) {
                        const youtubeID = replace.split('/').slice(-1)[0].split('=')[1];
        
                        if (youtubeID === undefined || youtubeID === '') {
                            aLink.push('<a href="' + replace + '" target="_blank">' + linkText + '</a>');
                        } else {
                            aLink.push('<span class="video-wrapper"><iframe src="https://www.youtube.com/embed/' + youtubeID + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>');
                        }
                    } else {
                        aLink.push(`<a onclick="window.open('${replace}', 'popup', 'nodeIntegration=no, width=600, height=600')">` + linkText + '</a>');
                    }
        
                    text = text.split(linksFound[i]).map(item => {
                        return aLink[i].includes('iframe') ? item.trim() : item
                    }).join(aLink[i]);
                }
                return text;
            }
            else {
                return input;
            }
        };