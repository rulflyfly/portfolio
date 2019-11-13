$(".slider").slick({
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    adaptiveHeight: true
  });

  $('.prev').css('display', 'none');

  $('.next').on('click', () => {
      //$('.next').css('display', 'none');
      $('.card').css('opacity', '1');
      $('.card:first-of-type').addClass('slide-first');
      $('.card:nth-of-type(2)').addClass('slide-second');
  })


  $(window).scroll(function() {

    $('.on-slide').each(function(){

        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        }

    });

});

$('.on-slide').css('visibility', 'hidden');

