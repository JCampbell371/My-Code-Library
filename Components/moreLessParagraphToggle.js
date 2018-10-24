// Hide and Show Information with More Less Toggle Control

function productMoreLess() {
    var slideHeight = 100; // px
    var defHeight = $('.info-block').height();
    if (defHeight >= slideHeight) {
        $('.info-block').css('height', slideHeight + 'px');
        $('.info-block').after('<div class="read-more"><a href="#">more</a></div>');
        $('.read-more a').click(function () {
            var curHeight = $('.info-block').height();
            if (curHeight == slideHeight) {
                $('.info-block').animate({
                    height: defHeight
                }, "normal");
                $('.read-more a').html('hide');
            } else {
                $('.info-block').animate({
                    height: slideHeight
                }, "normal");
                $('.read-more a').html('more');
            }
            return false;
        });
    }
            return false;
        });
    }

    if ($('.info-block').height() < 100) {
        $(".read-more").hide();
    }
}