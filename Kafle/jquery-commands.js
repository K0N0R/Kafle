$(document).ready(function () {

    AdjustingElements(1000, 'css');
    $(window).resize(function () {
        AdjustingElements(50, 'css');
    });
    ClickHandler();


});
function AdjustingElements(DurationTime, method) {
    var widthofelement = $(document).width() * 0.75 / 4;

    $('.bcgr')[method]({
        top: 0,
        left: 0,
        height: $(document).height(),
        width: $(document).width(),
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.015,
    }, DurationTime, 'easeInOutQuart');

    $('.active')[method]({
        top: $(document).height() * 0.05,
        left: $(document).width() * 0.05,
        height: $(document).height() * 0.6,
        width: $(document).width() * 0.9,
    }, DurationTime, 'easeInOutQuart');

    $('.view_content').css({
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.028,
    });

    $('.view_link').css({
        fontSize: Math.sqrt($(document).height() * $(document).width()) * 0.0135,
        borderWidth: $(document).height() * 0.01,
    });

    $('.bottom_first')[method]({
        top: $(document).height() * 0.70,
        left: $(document).width() * 0.05,
        height: $(document).height() * 0.25,
        width: widthofelement,
    }, DurationTime, 'easeInOutQuart');

    $('.bottom_second')[method]({
        top: $(document).height() * 0.70,
        left: $(document).width() * 0.1 + widthofelement,
        height: $(document).height() * 0.25,
        width: widthofelement,
    }, DurationTime, 'easeInOutQuart');

    $('.bottom_third')[method]({
        top: $(document).height() * 0.70,
        left: $(document).width() * 0.15 + 2 * widthofelement,
        height: $(document).height() * 0.25,
        width: widthofelement,
    }, DurationTime, 'easeInOutQuart');

    if ($(document).height() * 0.6 > $(document).width() * 0.9) {
        $('.fotorama')[method]({
            width: $(document).width() * 0.9,
            height: $(document).width() * 0.9,
        })
    }
    else {
        $('.fotorama')[method]({
            width: Math.sqrt($(document).height() * $(document).width()) * 0.65,
            height: $(document).height() * 0.6,
        })
    }
    $('.fotorama').css({
        "marginTop": "0",
        "marginRight": "auto",
        "marginBottom": "0",
        "marginLeft": "auto"
    })

    $('.bottom_fourth')[method]({
        top: $(document).height() * 0.70,
        left: $(document).width() * 0.2 + 3 * widthofelement,
        height: $(document).height() * 0.25,
        width: widthofelement,
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
        if (ClickedIdName === 'fourth') {
            $('#fourth').promise('fx', '#fourth').done(function () {
                $('.fotorama').fotorama({
                    data: [
                      { img: '/kafle/1.JPG', thumb: '/kafle/1.JPG' },
                      { img: '/kafle/2.JPG', thumb: '/kafle/2.JPG' },
                      { img: '/kafle/3.JPG', thumb: '/kafle/3.JPG' },
                      { img: '/kafle/4.JPG', thumb: '/kafle/4.JPG' },
                      { img: '/kafle/5.JPG', thumb: '/kafle/5.JPG' },
                      { img: '/kafle/6.JPG', thumb: '/kafle/6.JPG' },
                      { img: '/kafle/7.JPG', thumb: '/kafle/7.JPG' },
                      { img: '/kafle/8.JPG', thumb: '/kafle/8.JPG' },
                      { img: '/kafle/9.JPG', thumb: '/kafle/9.JPG' },
                    ]
                });
            })
        }
        AdjustingElements(50, 'animate');
    })
}

function ClickAnimation(ClickedClassName, GoalClassName, DurationTime) {
    var widthofelement = $(document).width() * 0.75 / 4;

    switch (GoalClassName) {
        case 'active':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.05,
                left: $(document).width() * 0.05,
                height: $(document).height() * 0.6,
                width: $(document).width() * 0.9,

            }, DurationTime, 'easeInOutQuart');
            break;

        case 'bottom_first':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.70,
                left: $(document).width() * 0.05,
                height: $(document).height() * 0.25,
                width: widthofelement,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'bottom_second':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.70,
                left: $(document).width() * 0.1 + widthofelement,
                height: $(document).height() * 0.25,
                width: widthofelement,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'bottom_third':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.70,
                left: $(document).width() * 0.15 + 2 * widthofelement,
                height: $(document).height() * 0.25,
                width: widthofelement,

            }, DurationTime, 'easeInOutQuart');
            break;
        case 'bottom_fourth':
            $('.' + ClickedClassName).animate({
                top: $(document).height() * 0.70,
                left: $(document).width() * 0.2 + 3 * widthofelement,
                height: $(document).height() * 0.25,
                width: widthofelement,

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
        content: '<div style="height:auto; width:auto; font-size:' + Math.sqrt($(document).height() * $(document).width()) * 0.015 + 'px;">'
            + contentString + '</div'
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
