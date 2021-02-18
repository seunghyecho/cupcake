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