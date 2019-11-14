let nextClicked = false;

$(".slider").slick({
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    adaptiveHeight: true,
    dots:!0,
    graggable: false,
    swipe: false,
    swipeToSlide: false,
    
  });

  $('.prev').css('display', 'none');

  $('.next').on('click', () => {
      if (!nextClicked) {
      $('.card').css('opacity', '1');
      $('.card:first-of-type').addClass('slide-first');
      $('.card:nth-of-type(2)').addClass('slide-second');
    } if (nextClicked) {
        $('.prev').css('display', 'block');
        $('.next').css('display', 'none');
        $('.contact h1').addClass('slide-contact');
        $('.icon').addClass('show-icon');
        $('.card').css('opacity', '0');
        nextClicked = false;
    }
  })

  $('.prev').on('click', () => {
    $('.card').css('opacity', '1');
    $('.next').css('display', 'block');
    $('.prev').css('display', 'none');
    $('.contact h1').removeClass('slide-contact');
    $('.icon').removeClass('show-icon');
    nextClicked = true;
    })


  $(window).scroll(function() {

    $('.on-slide').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        }

    });
    if ($('.card:nth-of-type(7)').hasClass('card-slide')) {
        nextClicked = true;
    }
});

$('.on-slide').css('visibility', 'hidden');



