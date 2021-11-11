$(function(){
    let num = 0; //1,2
    $('.slide a').eq(num).addClass('active');
    // animation:mv 10s linear infinite;
    /* @keyframes mv {
        0%{opacity:0;}
        5%{opacity:1; visibility: visible;}
        35%{opacity:1;}
        40%{opacity:0; visibility: hidden;}
        100%{opacity:0;}
    } */
    /* 
    .slide > div a:nth-child(1){animation-delay:0}
    .slide > div a:nth-child(2){animation-delay:3.5s}
    .slide > div a:nth-child(3){animation-delay:7s} 
    */ 
    setInterval(function(){     
        if(num < 2) {
            num++;
        }
        else {
            num = 0;
        }   
        // $('.slide a').removeClass('active');
        $('.slide a').eq(num).addClass('active').siblings().removeClass('active');
    }, 3500)
})

