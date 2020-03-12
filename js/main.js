var frameExpandWidth = 8 /*In px*/
var numPerFrame = 4;

function expandFrame(frameNum){
    var frames = document.getElementsByClassName("frame");
    
    var currentFrame = 0;
    
    for(var i=frameNum*numPerFrame; i < frameNum*numPerFrame+numPerFrame; i++){
        frames[i].style.top = frameExpandWidth*currentFrame + "px";
        frames[i].style.left = frameExpandWidth*currentFrame + "px";
        
        currentFrame++;
    }
}

function contractFrame(frameNum){
    var frames = document.getElementsByClassName("frame");
    
    for(var i=frameNum*numPerFrame; i < frameNum*numPerFrame+numPerFrame; i++){
        frames[i].style.top = 0;
        frames[i].style.left = 0;
    }
    
}
