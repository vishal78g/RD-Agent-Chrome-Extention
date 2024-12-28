getData = () => {
    // Get the href value
    var href = document.querySelector('#HREF_printPreview').getAttribute('href');

    // Open the href in a new tab
    window.open(href, '_blank');

}

getData();