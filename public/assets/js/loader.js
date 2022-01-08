// modified from https://christopheraue.net/design/fading-pages-on-load-and-unload

function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var loader = document.getElementById('loader');
    loader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    fadeInPage();
    
    if (!window.AnimationEvent) { return; }
    var anchors = document.getElementsByTagName('a');
    
    for (var i=0; i<anchors.length; i+=1) {
        if (anchors[i].hostname !== window.location.hostname ||
            anchors[i].pathname === window.location.pathname) {
            continue;
        }
        anchors[i].addEventListener('click', function(event) {
            var loader = document.getElementById('loader'),
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                loader.removeEventListener('animationend', listener);
            };
            loader.addEventListener('animationend', listener);
            event.preventDefault();
            loader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var loader = document.getElementsByClassName('loader');
    loader.classList.remove('fade-in');
});