//a variable to check if the next arrow was clicked a second time
let nextClicked = false;

// slick plugin configs

$(".slider").slick({
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    adaptiveHeight: true,
    dots:!0,
    graggable: false,
    swipe: false,
    swipeToSlide: false,
  });

  //no need for the prev arrow at first

  $('.prev').css('display', 'none');

  //if next arrow was clicked for the first time this function:
  // adds classes to the card divs according to the size of the viewport
  // makes card divs visible (their opacity was set to 0 because if it's innitially 1 you can see them slide while the page is loading)
  // 
  // if the next button was clicked for the second time I hide the next arrow
  // show the prev arrow
  // make the elements inside the contact div appear smoothly
  // I needed to change the opacity of the card divs to 0 again because if I don't
  // you can see them intensely scroll up while you're going to the contact div
  // because the height of the slide with the card divs and the slide with the contact div is different
  // and the slick always starts from the top of the next slide
  //
  // also here we need to said nextClicked back to false
  // so that this functionality could repeat itself once we change 
  // between cards and contcts
  //
  // also I desided there's no need to go back to the first slide with my name
  // so it's impossible unless you reload

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
      }
    } if (nextClicked) {
        $('.prev').css('display', 'block');
        $('.next').css('display', 'none');
        $('.contact h1').addClass('slide-contact');
        $('.icon').addClass('show-icon');
        $('.card').css('opacity', '0');
        nextClicked = false;
    }
  });

  // that's what's needed to be done once the prev arrow was clicked

  $('.prev').on('click', () => {
    $('.card').css('opacity', '1');
    $('.next').css('display', 'block');
    $('.next').css('animation-delay', '1s');
    $('.prev').css('display', 'none');
    $('.contact h1').removeClass('slide-contact');
    $('.icon').removeClass('show-icon');
    nextClicked = true;
    });

  // on small and medium viewport sizes I was the animation happen on scroll

  $(window).scroll(function() {

    $('.on-slide').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();

        if (viewportWidth() < 768) {
          if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        } 
        }
        if (viewportWidth() < 1024) {
           imagePos = $(this).offset().top - 100;
           if (imagePos < topOfWindow+400) {
            $(this).addClass("card-slide");
        } 
        }

    });

    // that's where the nextClicked is assined to true
    // once we've reached the bottom of the slide with cards
    // thanks to the scrolling function the class card-slide
    // will be assined to the 7th card only when the user is at the bottom of the page
    //on small and medium viewport sizes
    // 
    // IMPORTANT
    //
    // when I add or remove projects in the portfolio the last card will no longer be the 7th
    // so I will need to change this code a bit
    // maybe in the future I'll come up with a more flexible solution
    // so that I wouldn't need to change js if the number of project changes

    if ($('.card:nth-of-type(7)').hasClass('card-slide')) {
        nextClicked = true;
    }
});

// this is a part of the sliding machination 
// cards are needed to be hidden before we start scrolling

$('.on-slide').css('visibility', 'hidden');




// this is how I know what's the size of the viewport
// in this project I have a kind of meqia query but for JS :)

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
  )
};

