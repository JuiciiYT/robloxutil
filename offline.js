if (navigator.onLine === false) {
    document.location.replace('./internet.html?loc=' + document.location.pathname.replace(__dirname, ''))
}