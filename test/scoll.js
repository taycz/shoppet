$(document).ready(function(){
    if(window.pageYOffset>40) {
           
        $(".navs").css("background-color","azure");
       
        
    }
    else{
        $(".navs").css("background-color","#fff2f000");
    }
    $('body').bind('mousewheel', function(e){
        if(window.pageYOffset>40) {
           
            $(".navs").css("background-color","azure");
           
            
        }
        else{
            $(".navs").css("background-color","#fff2f000");
        }
    });
});

var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
new FlipDown(twoDaysFromNow, "shoppet1").start();
// Search
