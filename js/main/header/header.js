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