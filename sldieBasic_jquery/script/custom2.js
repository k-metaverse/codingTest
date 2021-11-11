$(function(){
    let num = 0; //1,2,3
    let pos=0; //0,-600,-1200,-1800
    $('.slide > div').animate({'top':pos+'%'},300);
    // animation:mv 10s linear infinite;
    /* @keyframes mv {
        0%{top:0;}
        30%{top:0;}
        35%{top:-100%;}
        65%{top:-100%;}
        70%{top:-200%;}
        97%{top:-200%;}
        100%{top:0;}  
    } */   
    setInterval(function(){
        
        if(num < 2) {
            num++;
        }
        else {
            num = 0;
        }   
        pos=-100*num;
        $('.slide > div').animate({'top':pos+'%'},300)
    }, 3500)
})
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