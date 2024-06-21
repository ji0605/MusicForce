$(function (){

    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct > 0) {
            $('.header').addClass('on')
        }else {
            $('.header').removeClass('on')
        }
    });

    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        useTransform: false
    });

    $('.main_product_slide').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    $('.main_product .arrows .prev').on('click' , function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .next').on('click' , function () {
        $('.main_product_slide').slick('slickNext')
    });


    $('.left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slide'
    });
    $('.right_slide').slick({
        arrows: false,
        slidesToShow:5,
        asNavFor: '.left_slide'


    });

    $('.sub_content .arrows .prev').on('click', function(){
        $('.left_slide').slick('slickPrev')
    });
    $('.sub_content .arrows .next').on('click', function(){
        $('.left_slide').slick('slickNext')
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/1St4tRWLVr8',
        containment: '.movie',
        showControls: false,
        playOnlyIfVisible: true,
    });

    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    // })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);



})