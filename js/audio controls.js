// Choose one in playlist
var option = $(".song"),
    audio = $("audio"),
    currPlay = null;

$.each(option, function (i, e) {
    $(e).click(function () {
        if (currPlay === null) {
            audio[i].play();
            currPlay = i;
        } else {
            if (currPlay == i) {
                if (audio[currPlay].paused) {
                    audio[currPlay].play();
                } else {
                    audio[currPlay].pause();
                }
            } else {
                audio[currPlay].pause();
                audio[currPlay].currentTime = 0;
                audio[i].play();
                currPlay = i;
            }
        }
        AutoNext(currPlay);
    });
});

//Auto next
function AutoNext(curr) {
    if (curr != option.length) {
        $(audio[curr]).on('ended', function () {
            curr = curr + 1;
            audio[curr].play();
            AutoNext(curr);
        });
    }
}

//Press to Stop
$("#stopButton").click(function () {
    audio[currPlay].pause();
    audio[currPlay].currentTime = 0;
});