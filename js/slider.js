$("document").ready(function () {
    $('.slider').slider({
        range: "min",
        min: 0,
        value: 0
    });

    var slider1 = $("#slider1"),
        slider2 = $("#slider2"),
        slider3 = $("#slider3"),
        slider4 = $("#slider4"),

        thumbnail1 = $('#thumbnail1'),
        thumbnail2 = $('#thumbnail2'),
        thumbnail3 = $('#thumbnail3'),
        thumbnail4 = $('#thumbnail4'),

        audio1 = $('#audio1'),
        audio2 = $('#audio2'),
        audio3 = $('#audio3'),
        audio4 = $('#audio4');

    $(".Tooltip").hide();

    slider1.slider({
        slide: function (event, ui) {
            var value = slider1.slider('value');

            thumbnail1.css('animation-duration', ui.value * 0.1 + 's');
            audio1.prop('volume', ui.value * 0.01);
            if (ui.value > 0) {
                audio1[0].play();
            };
            if (ui.value == 0) {
                audio1[0].pause();
            };
        }
    });

    slider2.slider({
        slide: function (event, ui) {
            var value = slider2.slider('value');

            thumbnail2.css('animation-duration', ui.value * 0.1 + 's');
            audio2.prop('volume', ui.value * 0.01);
            if (ui.value > 0) {
                audio2[0].play();
            };
            if (ui.value == 0) {
                audio2[0].pause();
            };
        }
    });

    slider3.slider({
        slide: function (event, ui) {
            var value = slider3.slider('value');

            thumbnail3.css('animation-duration', ui.value * 0.1 + 's');
            audio3.prop('volume', ui.value * 0.01);
            if (ui.value > 0) {
                audio3[0].play();
            };
            if (ui.value == 0) {
                audio3[0].pause();
            };
        }
    });

    slider4.slider({
        slide: function (event, ui) {
            var value = slider4.slider('value');

            thumbnail4.css('animation-duration', ui.value * 0.1 + 's');
            audio4.prop('volume', ui.value * 0.01);
            if (ui.value > 0) {
                audio4[0].play();
            };
            if (ui.value == 0) {
                audio4[0].pause();
            };
        }
    });

    $("#stopButton").click(function () {
        audio1[0].pause();
        audio2[0].pause();
        audio3[0].pause();
        audio4[0].pause();

        $('.thumbnail').css('animation-duration', '0s');
        $('.ui-slider-handle').css('left', '0%');
    });
});