
$(function(){
    let num = 0; //1,2,3
    let pos=0; //0,-600,-1200,-1800
    let slides=$('.slides');
    let slide=slides.find('a');
    let slideleng=slide.length;
    slides.css('width',100*slideleng+'%')
    console.log(slideleng);

    slides.animate({'left':pos+'%'},3000);
    setInterval(function(){
        if(num < slideleng-1) {
            num++;
        }
        else {
            num = 0;
        }   
        pos=-100*num;
        slides.animate({'left':pos+'%'},1000)
    }, 3500)
})