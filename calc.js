$(document).ready(function () {
    let $a;
    let $b;
    let $display = $('#screen');
    let $sign;
    let $result;
    
    $("#clear").click(function(){
        $display.text('');
    });
    
    $('.number').click(function(){
        var nums = $(this).data('text');
        $('#screen').text($('#screen').text() + nums);
    });
    
    $('.sign').click(function(){
        $sign = $(this).data('text');
        $a = $display.text();
        $display.text('');
    });
    
    $('.alike').click(function(){
        $b = $("#screen").text();
        $result = '';
        if(typeof($sign) != "undefined" && $sign !== null) {
            if($sign === '+'){
                $result = +$a + +$b;
            }
            else if($sign === '-'){
                $result = +$a - +$b;
            }
            else if($sign === '*'){
                $result = +$a * +$b;
            }
            else if($sign === '/'){
                if($b === '0')
                {
                    $result = "Ошибка";
                }
                else
                {
                $result = +$a / +$b;
                }  
            }
            else if($sign === '^'){
                $result = Math.pow(+$a, +$b);
            }
            else if($sign === '√'){
                if($a > 0)
                {
                    $result = Math.pow(+$a, 0.5);
                }
                else
                {
                    $result = "Ошибка";
                }
            }
            else if($sign === '%'){
                $result = +$a % +$b;
            }
        }
        $a = '';
        $b = '';
        $sign = '';
        $display.text($result);
    });
});
    
