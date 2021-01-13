/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/
jQuery(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/
   function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
   }

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();
      var tosubmit = false;
      if(!isEmail(contactEmail)){
         $('#image-loader').fadeOut();
         $('#message-warning').html("Please enter a valid email.");
         $('#message-warning').fadeIn();
       //  alert("Please enter a valid email.");
         return false;
      } else{     
         $('#message-warning').hide();
      }
     tosubmit =  Validations(contactName,"Please enter name");
     if(!tosubmit) return false;
     tosubmit = (Validations(contactSubject,"Please enter subject") === true) ? true : false;
     if(!tosubmit) return false;
      tosubmit = (Validations(contactMessage,"Please enter message") === true) ? true : false;
      if(!tosubmit) return false;
      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;
      if(tosubmit){
         sendEmail(contactEmail,contactName,contactSubject,contactMessage);
      }
     
      return false;
   });

   function Validations(control,message) {
      if(control === "" || control == null){
         $('#image-loader').fadeOut();
         $('#message-warning').html(message);
         $('#message-warning').fadeIn();
       //  alert("Please enter a valid email.");
         return false;
      } else{     
         $('#message-warning').hide();
         return true;
      }
   }

   function sendEmail(from,contactingPerson,reason,message) { 
      // eslint-disable-next-line no-undef
      Email.send({ 
        SecureToken : "df98d6a3-f72b-41e3-a232-b75289bf22e2", 
        To: 'krishnakishore.tummala@gmail.com', 
        From: from, 
        Subject: reason = reason + '(from My Website)', 
        Body: Preparebody(contactingPerson,message), 
      }) 
        .then(function (message) { 
         if (message === 'OK') {
            $('#image-loader').fadeOut();
            $('#message-warning').hide();
            $('#contactForm').find("input[type=text],textarea").val("");
            $('#message-success').fadeIn();   
         }        
         else { // There was an error
            $('#image-loader').fadeOut();
            $('#message-warning').html(message);
            $('#message-warning').fadeIn();
         }
        }); 
    } 

    function Preparebody(contactingPerson,message){
    var body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
      '<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">' +
      '<head>' +
         '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
         '<title>Contact Details</title>'+
         '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>' +    
         '<style type="text/css">a[x-apple-data-detectors] {color: inherit !important;}</style> </head>' +
      '<body style="margin: 0; padding: 0;">' +
         '<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr>'+
         '<td style="padding: 20px 0 30px 0;">' +
      
      '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">'+
         '<tr><td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">'+
          '<tr><td style="color: #153643; font-family: Arial, sans-serif;"><h1 style="font-size: 24px; margin: 0;">Hi I am' +  contactingPerson + '</h1>' +
           '</td></tr><tr><td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">' +
            '<p style="margin: 0;">' + message + '</p></td> </tr> </table> </td></tr>'+
         '<tr><td bgcolor="#191919" style="padding: 30px 30px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">'+
         '<tr><td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;"><p style="margin: 0;">&reg; webruster 2025<br/></p> </td>'+
         '</tr></table></td></tr></table></td> </tr></table></body> </html>' ;
         return body;
    } 

});








