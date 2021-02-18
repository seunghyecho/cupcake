$(document).ready(function(){
    console.log('footer');
})
$(document).ready(function(){
    console.log('header');

    var $util = $('#util');
    var $cart = $util.children('li:first-child');

    var $cartPopup = $('.popup.cart');
    var $closeBtn = $cartPopup.children().children('a');

    $cartPopup.hide();

    // 팝업보이기
    $cart.on('click', function(){
        $('.cart').fadeIn();
    });

    // 팝업숨기기
    $closeBtn.on('click', function(e){
        e.preventDefault();
        $('.cart').fadeOut();
        
    });
})
$(document).ready(function(){
    console.log('main intro');
})
$(document).ready(function(){
    console.log('visual');
})
$(document).ready(function(){
    console.log('header');

    // var $doneBtn = $('.done');
    var $payment = $('.payment')
    var $payBtn = $('.payBtn');
    var $closeBtn = $payment.children().children('a');

    $payment.hide();

    // 팝업보이기
    $payBtn.on('click', function(){
        $payment.fadeIn();
    });

    // 팝업숨기기
    $closeBtn.on('click', function(e){
        e.preventDefault();
        $payment.fadeOut();
        
    });
})
$(document).ready(function(){
    console.log('sub ourstory');
})