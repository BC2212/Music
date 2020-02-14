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
    });
});

//Auto next
// console.log(currPlay);
// if (currPlay != null && currPlay < option.length) {
//     if (audio[currPlay].ended) {
//         console.log('ended');
//         currPlay = currPlay + 1;
//         audio[currPlay].load();
//         audio[currPlay].play();
//     }
// }

//Press to Stop
$("#stopButton").click(function () {
    audio[currPlay].pause();
    audio[currPlay].currentTime = 0;
});