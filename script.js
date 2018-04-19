window.onload = function () {


    var button1 = document.getElementById('lside');
    var actions1 = {
        1: function() {
            setTimeout(function() {
                $('.left_aside').css('left', '0');
                $('.left_aside_menu').css('z-index', '30');
                $('.left_aside').css('transition', 'left 300ms ease-in-out');
            }, 300);

            $('.left_aside').css('left', '-300px');
            $('.left_aside').css('transition', 'left 300ms ease-in-out');
        },
        2: function() {
            setTimeout(function() {
                $('.left_aside').css('left', '0');
                $('.left_aside_menu').css('z-index', '0');
                $('.left_aside').css('transition', 'left 300ms ease-in-out');
            }, 300);

            $('.left_aside').css('left', '-300px');
            $('.left_aside').css('transition', 'left 300ms ease-in-out');
        }
    };
    var counter1 = 0;
    button1.onclick = function() {
        actions1[counter1 = (counter1 % 2) + 1]();
    }


    var button2 = document.getElementById('rside');
    var actions2 = {
        1: function() {
            setTimeout(function() {
                $('.right_aside').css('right', '0');
                $('.right_aside_menu').css('z-index', '30');
                $('.right_aside').css('transition', 'right 300ms ease-in-out');
            }, 300);

            $('.right_aside').css('right', '-300px');
            $('.right_aside').css('transition', 'right 300ms ease-in-out');
        },
        2: function() {
            setTimeout(function() {
                $('.right_aside').css('right', '0');
                $('.right_aside_menu').css('z-index', '0');
                $('.right_aside').css('transition', 'right 300ms ease-in-out');
            }, 300);

            $('.right_aside').css('right', '-300px');
            $('.right_aside').css('transition', 'right 300ms ease-in-out');
        }
    };
    var counter2 = 0;
    button2.onclick = function() {
        actions2[counter2 = (counter2 % 2) + 1]();
    }
};
