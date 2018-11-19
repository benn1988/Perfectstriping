var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
Modernizr.on('webp', function (result) {
    if (result) {
        $("logo").setAttribute("src", "images/webp/".concat($("logo").getAttribute("src-data")).concat(".webp"));
        var i, images = window.document.getElementsByClassName("img-fluid");
        for (i = 0; i < images.length; i += 1) {
            images[i].setAttribute("src", "images/webp/".concat(images[i].getAttribute("src-data")).concat(".webp"));
        }
        var imagesDiv = window.document.getElementsByClassName("lightbox");
        for (i = 0; i < images.length; i += 1) {
            imagesDiv[i].setAttribute("data-at-420", "images/webp/".concat.(imagesDiv[i].getAttribute("src-data")).concat("_small.webp"));
            imagesDiv[i].setAttribute("data-at-800", "images/webp/".concat.(imagesDiv[i].getAttribute("src-data")).concat(".webp"));
        }
    } else {
        $("logo").setAttribute("src", $("logo").getAttribute("src-data").concat(".png"));
        var images = window.document.getElementsByClassName("img-fluid");
        for (let i = 0; i < images.length; i += 1) {
            images[i].setAttribute("src", images[i].getAttribute("src-data").concat(".jpg"));
        }
        var imagesDiv = window.document.getElementsByClassName("lightbox");
        for (let i = 0; i < images.length; i += 1) {
            imagesDiv[i].setAttribute("data-at-420", imagesDiv[i].getAttribute("src-data").concat("_small.jpg"));
            imagesDiv[i].setAttribute("data-at-800", imagesDiv[i].getAttribute("src-data").concat(".jpg"));
        }
    }
});
