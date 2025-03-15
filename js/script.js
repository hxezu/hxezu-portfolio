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

//con01 gsap 애니매이션
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger :'.con01',
            start:'0% 80%',
            end:'100% 100%',
            scrub : 1,
            markers:true
        }
    })
    .to('.wrap',{'backgroundColor':'#fff','color':'#000','ease':'none','duration' : '5'},0)
    .to('.svgAni path', {'stroke':'#000','ease' : 'none','duration' : '5'},0)
    .to('.scroll', {'opacity':'0','ease' : 'none','duration' : '5'},0)
    .fromTo('.videoWrap video',{'clip-path':'inset(60% 60% 60% 60% round 50%)'}
        ,{'clip-path':'inset(0% 0% 0% 0% round 0%)',ease:'none', duration:10},0)
})
