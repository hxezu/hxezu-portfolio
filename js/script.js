$(function(){
    Splitting();
});

//header 영역 스크롤 방향 이벤트
$(function(){
    var prevScrollTop = 0;

    document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop ){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
})

//visual 스크롤 이벤트
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})

//svg path 길이 구하기
$(function(){
    $('.svgAni').find('#svgAni04').each(function(i, path){
        var length = path.getTotalLength();
        //alert(length)
    })
})