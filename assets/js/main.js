// lets initiate
var isMobile = false;
var contact = null;
var side_menu = null;
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

// lets define functions
function timestamp() {  var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
function grecaptchaValidation(){ 
  if(grecaptcha.getResponse().length == 0){ 
      alert('Please click the reCAPTCHA checkbox');
      return false;
  }
  return true;
}

function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

function valignCenter(elems){
  $(elems).each(function() {
    var h = $(this).outerHeight()/2;
    $(this).css({"position":"absolute","top":"50%","margin-top":"-"+h+"px"});
  });
}

function supportsPlaceholder() {
  var input = document.createElement('input');
  return ('placeholder' in input);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

// image preloader
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        (new Image()).src = this;
    });
}

// side menu open logic
$('#side-menu').click(function(e) {
    e.preventDefault();
    if(side_menu == 'open') {
    } else {
      side_menu = 'open';
      $("html, body").scrollTop(0);
      $('body').addClass('sidebar-open');
      $('.header').removeClass('short');
      $(".sidebar").fadeIn(500);
      $('.header .menu.shade').css({width : '100%'});
      $('.header .menu.shade').css({height : '100%'});
      $('.header .menu.shade').css({opacity : 0.5});
      $('.header .bar').animate({height : $('.sidebar').height() + 50}, function() {
      }); 
    }
    if(contact == 'open') {
      $(".pop.quick-contact").hide();
      $('.body.shade').css({opacity : 0.0});
      $('.body.shade').hide();
      contact = 'close';
    } 
    return false;
});

// side menu close logic
$('[id="side-menu-close"]').click(function(e) {
    e.preventDefault();
    side_menu = null;
    $('body').removeClass('sidebar-open');
    $(".sidebar").fadeOut(200);
    $(".header .menu").fadeIn(0);
    $('.header .menu.shade').css({opacity : 0});
    // $(".sidebar .close").css({left : '0'});
    // $('.header .bar').animate({height : $('.sidebar').height() + 50});
    $('.header .bar').animate({height : '0'}, function() {
      $('.header .menu.shade').css({width : '0'});
      $('.header .menu.shade').css({height : '0'});
    }); 

    if(contact == 'open') { contact = "close"; } 

    return false;
});

// quick contact logic 
$('[id="quick-contact"]').click(function(e) {
    e.preventDefault();
    if(contact == 'open') {
    } else {
    	$('.header').addClass('short');
      $('.header').addClass('initial');
      $('.body.shade').show(20, function() {
        $('.body.shade').css({opacity : 0.5});
      })
      $( ".quick-contact" ).slideToggle(400, function() {
  		if (contact == null || contact == 'close') {
  			contact = 'open';
  		} else if (contact == 'open') {
  			contact = 'close';
  		}
  	});
 	    
      $('#side-menu-close').click();
      if(isMobile == true) {
        $("html, body").animate({ scrollTop: document.body.scrollHeight }, "fast");
      }
    }	
  	return false;
});

// quick contact close logic
$('[id="contact-close"]').click(function(e) {
	e.preventDefault()
  if(contact == 'open') {
    contact = 'close';
    $('.body.shade').css({opacity : 0.0});
    $(".quick-contact").slideToggle(400, function() {
    $('.header').removeClass('initial');
      $('.body.shade').hide();
      $('.pop.quick-contact .thank-you').hide();
      $('.pop.quick-contact .default').show();
    });
  }
	return false;
});

// toggle quick contact based on matching location hash
$(function() {
    if (location.hash === "#contact") {
        $('#quick-contact').click();
    }

    if (location.hash === "#contact/thank-you") {
        $('.pop.quick-contact .thank-you').show();
        $('.pop.quick-contact .default').hide();
        $('#quick-contact').click();
    }
});

$('[id="hp-left"]').click(function(e) {
    e.preventDefault();
 	hp_slider.slick('slickPrev');
  	return false;
});

$('[id="hp-right"]').click(function(e) {
    e.preventDefault();
 	hp_slider.slick('slickNext');
  	return false;
});

$('[id="slide-demand"]').click(function(e) {
    e.preventDefault();
 	hp_slider.slick('slickGoTo', 1);
  	return false;
});

$('[id="slide-supply"]').click(function(e) {
    e.preventDefault();
 	hp_slider.slick('slickGoTo', 2);
  	return false;
});

$('#get-started').click(function(e) {
    e.preventDefault();
    block = $("html, body").find( ".block" );
 	$("html, body").animate({ scrollTop: block.offset().top }, "slow");
  	return false;
});

$(window).on("load resize scroll",function(e){
  if($(window).scrollTop()<=0){
    $(".header").removeClass("short");
  }
  else{
    if(!$(".header").hasClass("short")){
      $(".header").addClass("short");
    }
  }
});

$(window).on("resize", function(e){
  waitForFinalEvent(function(){
    if(side_menu == 'open') {
      $('.header .bar').animate({height : $('.sidebar').height() + 50});
    }
  }, 500, "main-menu-resize");
});

// the function that finds the tallest element in the buzz items and match the others
function buzzResize() {
  $('.block.buzz').each(function() {
    var maxHeight = -1;
    $(this).find('.item .details').each(function() {
      $(this).css({'min-height' : 0});
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $(this).find('.item .details').each(function() {
      $(this).css({'min-height' : maxHeight});
    });
  });
};

// lets run it on script load
buzzResize();

// and lastly create a resize event for it!
$(window).on("resize",function(e){
 buzzResize();
});

/*! $(document).ready(function(){
  hp_slider = $('.homepage-slider').slick({
  	useTransform: false,
  	zIndex: 100,
  	arrows: false,
  	dots: false,
  	speed: 500
  });
});

$(window).on('resize orientationchange', function() {
  hp_slider.slick('resize');
}); */

$("ul#creative-gallery-items li a").css("min-height",$("ul#creative-gallery-items li a").width());

var $iso_creative_gallery = $("ul#creative-gallery-items").isotope({
  itemSelector: 'li',
  layoutMode: 'fitRows'
});


$("ul#creative-gallery-items li a").each( function(){
  var alt = $(this).find("img").attr("alt");
  var icon = $(this).find("img").attr("icon");
  var product = $(this).find("img").attr("product");
  $(this).append('<span class="o"><span class="c"><span class="i"><img id="thumb-icon" src="'+icon+'"></span><span class="t">'+alt+'</span><span class="p">'+product+'</span><span class="v">View Campaign</span></span></span>');
  valignCenter($("ul#creative-gallery-items li a .o .c"));
});

$iso_creative_gallery.imagesLoaded( function() {
  $("ul#creative-gallery-items li a").css("min-height","0");
  $iso_creative_gallery.isotope('layout');
  valignCenter($("ul#creative-gallery-items li a .o .c"));
});

$("#creative-gallery-filters a").click(function(){
  var isofilter = $(this).data("isofilter");
  $iso_creative_gallery.isotope({ filter: isofilter });
  $("#creative-gallery-filters a").removeClass("on");
  $(this).addClass("on");
  return false;
});


$.fn.classList = function() {return this[0].className.split(/\s+/);};

$("ul#creative-gallery-items li").each( function(){
  var classList = $(this).classList();
  for (var i = 0; i < classList.length; i++) {
      img = $(this).find("#thumb-icon");
        base = $(this).find("img").attr("icon") + '/';
        var isMobile;
        var isDisplay;
        var final = 'display-full.png';
      
      if (classList[i] === 'mobile') {
        isMobile = true;
      }

      if (classList[i] === 'display') {
        isDisplay = true
      }

      if (isMobile == true) {
        final = 'mobile-full.png';
        img.css('width','20%');
      }

      if (isDisplay == true) {
        final = 'display-full.png';
      }

      if (isMobile == true && isDisplay == true) {
        final = 'display-mobile-full.png';
          img.css('width','50%');
      }

      img.attr("src", base + final);
      valignCenter($("ul#creative-gallery-items li a .o .c"));
  }
});


$(window).resize(function(){
    valignCenter($("ul#creative-gallery-items li a .o .c"));
  });

$( function() {

  var $container = $('ul#creative-gallery-items');

  // bind filter button click
  var $filters = $('#filters').on( 'click', 'button', function() {
    var filterAttr = $( this ).attr('data-filter');
    // set filter in hash
    location.hash = 'filter=' + encodeURIComponent( filterAttr );
  });

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $container.isotope({
      itemSelector: '.element-item',
      filter: hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      $filters.find('.is-checked').removeClass('is-checked');
      $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
    }
  }

  $(window).on( 'hashchange', onHashchange );
  // trigger event handler to init Isotope
  onHashchange();
});

// lets preload all the device images
$("#creative-gallery-item .unit ul li").each( function(){
  var img = $(this).attr('img');
  preload([
      img
  ]);
});

$("#creative-gallery-item .demo-button span").click(function(){
  
  close_button = $('.creative-gallery-item .preview').attr('close');
  type = $(this).attr('type');

  if(type !== 'display' && isMobile == false) {
    $(".creative-gallery-item .preview .holder").empty();
    $(".creative-gallery-item .preview .holder").hide();
    $('.creative-gallery-item .preview .notMobile').show();
  
  } else {

    if(gallery.mobile.demo && isMobile == true) {
      html = '<img class="close" src="'+close_button+'" alt="Close" height="40" width="40"><iframe src="'+gallery.mobile.demo+'"></iframe>'
      $(".creative-gallery-item .preview .holder").empty();
      $(".creative-gallery-item .preview .holder").show();
      $(".creative-gallery-item .preview .holder").append(html);

      $(".creative-gallery-item .preview .close").click(function(){
      $('.creative-gallery-item .preview').fadeOut();
      return false;
    });
    }

    if(gallery.mobile.code && isMobile == true) {
      html = '<img class="close" src="'+close_button+'" alt="Close" height="40" width="40"><iframe src="'+gallery.mobile.code_url+'"></iframe>'
      $(".creative-gallery-item .preview .holder").empty();
      $(".creative-gallery-item .preview .holder").show();
      $(".creative-gallery-item .preview .holder").append(html);

      $(".creative-gallery-item .preview .close").click(function(){
      $('.creative-gallery-item .preview').fadeOut();
      return false;
    });
    }

    if(gallery.desktop.code == true && isMobile == false) {
      html = '<img class="close" src="'+close_button+'" alt="Close" height="40" width="40"><iframe src="'+gallery.desktop.code_url+'"></iframe>'
      $(".creative-gallery-item .preview .holder").empty();
      $(".creative-gallery-item .preview .holder").show();
      $(".creative-gallery-item .preview .holder").append(html);

      $(".creative-gallery-item .preview .close").click(function(){
      $('.creative-gallery-item .preview').fadeOut();
      return false;
    });
    }

  }

  $('.creative-gallery-item .preview').fadeIn();
  return false;
});

$(".creative-gallery-item .preview .close").click(function(){
  $('.creative-gallery-item .preview').fadeOut();
  return false;
});

// this handles the toggling between gallery item devices
$("#creative-gallery-item .unit ul li").click(function(){

var device = $(this).attr('class').split(" ")[0];
var active = $(this).attr('class').split(" ")[1];

if(active !== 'active') {
  var first = $('#creative-gallery-item .unit ul li').first().attr('class').split(" ")[0];
  var tag = $(this).attr('tag');
  var img = $(this).attr('img');

  $("#creative-gallery-item .unit ul li").removeClass('active');
  $(this).addClass('active');
  $("#creative-gallery-item .demo-button span").attr('type', device);
  $("#creative-gallery-item .stage .devices ul").empty();
  $('#creative-gallery-item .stage .devices ul').append('<li class="'+device+'"><img src="'+img+'" alt="" /><div id="demo"><iframe src="'+tag+'"></iframe></div></li>');

  window.demo = $("#creative-gallery-item .stage .devices ." + device).find('div');
  window.img = $("#creative-gallery-item .stage .devices ." + device).find('img');
  window.iframe = $("#creative-gallery-item .stage .devices ." + device).find('iframe');
  demo = window.demo;
  img = window.img;
  iframe = window.iframe;

  $(img).load(function() {
    $(demo).css({
      'width' : img.width() + 'px',
      'height' : img.height() + 'px',
      'left' : '50%',
      'visibility' : 'visible',
      'margin-left' : '-' + img.width() / 2 + 'px'
    });
  });

  $(iframe).ready(function() {
      $(iframe).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1}, 900);
    });

  $(window).resize(function(){
    demo = window.demo;
    img = window.img;
    $(demo).css({
      'width' : img.width() + 'px',
      'height' : img.height() + 'px',
      'left' : '50%',
      'margin-left' : '-' + img.width() / 2 + 'px'
    });
  });
}

if(typeof firstLoad !== 'undefined') {
  $('html, body').animate({
      scrollTop: $(window.img).offset().top - 100
  }, 500);
}
 else {
  firstLoad = true;

  $(function() {
      if (location.hash === "#demo") {
          $('#creative-gallery-item .demo-button span').click();
      }
    });
}

  return false;
});

$('#creative-gallery-item .unit ul li:first-child').click();

//$iso_creative_gallery.isotope({ filter: '.mobile' });

$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});

/***** automatic event tracking *****/
$("a").click(
  function(){
    var link_type = "";
    if ( $(this).parents("#home-impact ul.slides").length == 1 ) {
      link_type = "Homepage Slider Click";
    }
    else if($(this).hasClass("inline_cta")){
      link_type = "CTA Click";
    }
    else if(this.href.indexOf('.pdf')>0){
      link_type = "PDF Click";
    }
    else if(this.href.indexOf('mailto:')==0){
      link_type = "MailTo Click";
    }
    else if(this.href.indexOf(document.domain)<0
        && this.href.indexOf('.rhythmone.com')<0){ // if changing domain and not subdomain
      link_type = "External Link Click";
    }
    else{
      return; // don't track
    }

    dataLayer.push({'event':'GAevent', 'eventCategory':'Link Click', 'eventAction':link_type, 'eventLabel':$(this).attr('href')});
  }
);
