let nextClicked = false;
let click = false;

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
        $('.card').each(function(){
          if (viewportWidth() >= 1024) {
            $(this).addClass("card-slide");
          }
        });
      $('.card').css('opacity', '1');
      if (viewportWidth() < 1024) {
        $('.card:first-of-type').addClass('slide-first');
        $('.card:nth-of-type(2)').addClass('slide-second');
        click = true;
      }
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
    $('.next').css('animation-delay', '1s');
    $('.prev').css('display', 'none');
    $('.contact h1').removeClass('slide-contact');
    $('.icon').removeClass('show-icon');
    nextClicked = true;
    })


  $(window).scroll(function() {

    $('.on-slide').each(function(){

        if (viewportWidth() < 768) {
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();

          if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        } 

        }

        if (viewportWidth() < 1024) {
          var imagePos = $(this).offset().top - 100;

          var topOfWindow = $(window).scrollTop();

          if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        } 
        }

    });

    if ($('.card:nth-of-type(7)').hasClass('card-slide')) {
        nextClicked = true;
    }
});

$('.on-slide').css('visibility', 'hidden');





function viewportWidth () {
  if (window.innerWidth) return window.innerWidth;
  var
  doc = document,
  html = doc && doc.documentElement,
  body = doc && (doc.body || doc.getElementsByTagName("body")[0]),
  getWidth = function (elm) {
    if (!elm) return 0;
    var setOverflow = function (style, value) {
      var oldValue = style.overflow;
      style.overflow = value;
      return oldValue || "";
    }, style = elm.style, oldValue = setOverflow(style, "hidden"), width = elm.clientWidth || 0;
    setOverflow(style, oldValue);
    return width;
  };
  return Math.max(
    getWidth(html),
    getWidth(body)
  );
}

