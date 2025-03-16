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


$(function(){

    //con01 gsap 애니매이션
    gsap.timeline({
        scrollTrigger:{
            trigger :'.con01',
            start:'0% 80%',
            end:'100% 100%',
            scrub : 1,
            //markers:true
        }
    })
    .to('.wrap',{'backgroundColor':'#fff','color':'#000','ease':'none','duration' : '5'},0)
    .to('.svgAni path', {'stroke':'#000','ease' : 'none','duration' : '5'},0)
    .to('.scroll', {'opacity':'0','ease' : 'none','duration' : '5'},0)
    .fromTo('.videoWrap video',{'clip-path':'inset(60% 60% 60% 60% round 50%)'}
        ,{'clip-path':'inset(0% 0% 0% 0% round 0%)',ease:'none', duration:10},0)


    //con02 title 텍스트 애니매이션
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con02',
            start : '0%, 100%',
            end: '0% 20%',
            scrub:1,
            //markers: true
        }
    })
    .fromTo('.con02 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
    .fromTo('.con02 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5},0)

    //con02 애니메이션
    gsap.timeline({
        scrollTrigger:{
            trigger:'.workList',
            start:'0% 100%',
            end: '0% 100%',
            scrub:1,            //되감기가 될수 있도록
            //markers:true
        }
    })
    //worklist 나타나면 배경색 검정
    .to('.wrap', {backgroundColor:"#000", color:"#fff", ease:'none', duration:5},0)
    //title 배경에 고정
    .to('.con02 .title', {position:'fixed', ease:'none', left:'0', top:'0', width:'100%', duration:5},0)
    //worklist 에 margin-top 을 적용해서 부드럽게 올라오도록
    .fromTo('.workList', {margin:'0 auto'}, {margin:'100vh auto 0', position:'relative', zIndex:'10', duration:1},0)

    //con02 가 끝날 때
    gsap.timeline({
        scrollTrigger:{
            trigger:'.workList',
            start:'100% 50%',
            end: '100% 0%',
            scrub:1,         
            //markers:true
        }
    })
    .to('.con02 .title .a', {x:'-100%', ease:'none', duration:5},0)
    .to('.con02 .title .b', {x:'100%', ease:'none', duration:5},0)
})

//simplyscroll
$(function(){
    $(".con03 .list").simplyScroll({
        speed : 4,
        pauseOnHover : false,
        pauseOnTouch : false
    })
})