var frameExpandWidth = 10; /*In px*/

function expandFrame() {
    var frames = document.getElementsByClassName("frame");

    for (var i = 0; i < frames.length; i++) {
        frames[i].style.top = frameExpandWidth * i + "px";
        frames[i].style.left = frameExpandWidth * i + "px";
    }
}

function contractFrame() {
    var frames = document.getElementsByClassName("frame");

    for (var i = 0; i < frames.length; i++) {
        frames[i].style.top = 0;
        frames[i].style.left = 0;
    }
}
