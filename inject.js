//Detect if Mac
if (navigator.platform === 'MacIntel' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K') {
    document.getElementById("macos").innerHTML = '<link rel="stylesheet" href="./mac.css" />'
}
