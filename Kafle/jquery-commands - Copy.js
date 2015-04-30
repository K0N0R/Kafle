$(document).ready(function () {

    AdjustingElements(1000);
    $(window).resize(function () {
        AdjustingElements(50);
    });
    ClickHandler();


});
function AdjustingElements(DurationTime) {
    $('.bcgr').animate({
        top: 0,
        left: 0,
        height: $(document).height(),
        width: $(document).width(),
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.02,
    }, DurationTime, 'easeInOutQuart');

    $('.active').animate({
        top: 0,
        left: 0,
        height: $(document).height() * 0.70,
        width: $(document).width(),
    }, DurationTime, 'easeInOutQuart');

    $('.view_content').css({
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.051,
    });

    $('.view_link').css({
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.0135,
    });

    $('.right_top_up').animate({
        top: $(document).height() * 0.75,
        left: $(document).width() * 0.63,
        height: $(document).height() * 0.25,
        width: $(document).width() * 0.16,
    }, DurationTime, 'easeInOutQuart');

    $('.right_top_down').animate({
        top: $(document).height() * 0.75,
        left: $(document).width() * 0.84,
        height: $(document).height() * 0.25,
        width: $(document).width() * 0.16,
    }, DurationTime, 'easeInOutQuart');

    $('.left_bottom').animate({
        top: $(document).height() * 0.75,
        left: 0,
        height: $(document).height() * 0.25,
        width: $(document).width() * 0.16,
    }, DurationTime, 'easeInOutQuart');

    $('.middle_bottom').animate({
        top: $(document).height() * 0.75,
        left: $(document).width() * 0.21,
        height: $(document).height() * 0.25,
        width: $(document).width() * 0.16,
    }, DurationTime, 'easeInOutQuart');

    $('.right_bottom').animate({
        top: $(document).height() * 0.75,
        left: $(document).width() * 0.42,
        height: $(document).height() * 0.25,
        width: $(document).width() * 0.16,
    }, DurationTime, 'easeInOutQuart');
};


function ClickHandler() {

    $('.buttons').click(function () {


        var ActualActiveIdName = $('.active').attr('id');
        var ActualActiveContentIdName = ActualActiveIdName + "_content";
        var ActualActiveLinkIdName = ActualActiveIdName + "_link";
        var ClickedIdName = $(this).attr('id');
        var ClickedClassName = $('#' + ClickedIdName).attr('class').replace("buttons", "").trim();
        var ClickedContentIdName = ClickedIdName + "_content";
        var ClickedLinkIdName = ClickedIdName + "_link";
        console.log('#' + ClickedIdName);

        if (ClickedClassName === 'active') {
            return;
        }
        $('#' + ClickedContentIdName).addClass("view_content");
        $('#' + ClickedContentIdName).removeClass("hide_content");

        ClickAnimation(ClickedClassName, 'active', 750);

        $('#' + ClickedLinkIdName).addClass("hide_link");
        $('#' + ClickedLinkIdName).removeClass("view_link");


        $('#' + ActualActiveContentIdName).removeClass("view_content");;
        $('#' + ActualActiveContentIdName).addClass("hide_content");
        ClickAnimation('active', ClickedClassName, 750);
        $('#' + ActualActiveLinkIdName).addClass("view_link");
        $('#' + ActualActiveLinkIdName).removeClass("hide_link");


        $('#' + ClickedIdName).removeClass("buttons");
        $('#' + ClickedIdName).removeClass(ClickedClassName);
        $('#' + ClickedIdName).addClass('active');
        $('#' + ActualActiveIdName).removeClass('active');
        $('#' + ActualActiveIdName).addClass(ClickedClassName);
        $('#' + ActualActiveIdName).addClass("buttons");


        if (ClickedIdName === 'third') {
            $('#third').promise('fx', '#third').done(function () {
                initialize();
            })
        }

        AdjustingElements(500);
    });
}

function ClickAnimation(ClickedClassName, GoalClassName, DurationTime) {

    switch (GoalClassName) {
        case 'active':
            $('.' + ClickedClassName).animate({
                top: 0,
                left: 0,
                height: $(document).height() * 0.70,
                width: $(document).width(),

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'right_top_up':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.75,
                left: $(document).width() * 0.63,
                height: $(document).height() * 0.25,
                width: $(document).width() * 0.16,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'right_top_down':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.75,
                left: $(document).width() * 0.84,
                height: $(document).height() * 0.25,
                width: $(document).width() * 0.16,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'left_bottom':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.75,
                left: 0,
                height: $(document).height() * 0.25,
                width: $(document).width() * 0.16,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'middle_bottom':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.75,
                left: $(document).width() * 0.21,
                height: $(document).height() * 0.25,
                width: $(document).width() * 0.16,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'right_bottom':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.75,
                left: $(document).width() * 0.42,
                height: $(document).height() * 0.25,
                width: $(document).width() * 0.16,

            }, DurationTime, 'easeInOutQuart');
            break;
    }
}
function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(51.971449, 20.512903),
        zoom: 15,
    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: "Mój Warsztat",
    });
    var contentString = document.getElementById('marker_content').innerHTML;

    var infowindow = new google.maps.InfoWindow({
        content: '<div style="height:auto; width:auto; font-size:' + Math.sqrt($(document).height()*$(document).width())*0.015 + 'px;">' + contentString + '</div'
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
