$("document").ready(function(){
    $("a").click(function(e){
        e.preventDefault();
        $("a").removeClass('active');
        $(this).addClass('active');
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200) {
            var style1 = {
                'background' : 'rgb(255, 255, 255)', 
                'border-bottom' : '2px solid #919191',
                'height' : '80px',
                'transition' : '600ms'
            };
            $(".navbar").css(style1);
        }
        else if(scroll < 200) {
                var style1 = {
                'background' : 'none', 
                'border-bottom': '0.5px solid #e7e7e7',
                'height' : '70px',
                'transition' : '600ms'
            };
            $(".navbar").css(style1);
        }
    });
    $("#front-end-tab").click(function(){
        $("#back-end").hide();
        $("#front-end").show( 2000 );
        $(this).addClass('active');
        $("#back-end-tab").removeClass('active');
    });
    $("#back-end-tab").click(function(){
        $("#back-end").css('display', 'flex');
        $("#back-end").show( 2000 );
        $("#front-end").hide();
        $(this).addClass('active');
        $("#front-end-tab").removeClass('active');
    });
});
