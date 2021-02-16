$(document).ready(function(){
    console.log('footer');
})
$(document).ready(function(){
    console.log('header');

    var $util = $('#util');
    var $cart = $util.children('li:first-child');

    var $popup = $('.popup');
    var $closeBtn = $popup.children().children('a');

    $popup.hide();

    // 팝업보이기
    $cart.on('click', function(){
        $('.popup').fadeIn();
    });

    // 팝업숨기기
    $closeBtn.on('click', function(e){
        e.preventDefault();
        $('.popup').fadeOut();
        
    });
})
$(document).ready(function(){
    console.log('main intro');
})
$(document).ready(function(){
    console.log('visual');
})
$(document).ready(function(){
    console.log('sub ourstory');
})