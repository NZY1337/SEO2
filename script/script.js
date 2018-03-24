$(document).ready(function(){
	$("#top").hide();
	$(function toTop() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			} else {
				$('#top').fadeOut();
			}
		});

		$('#top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});			
});



// function scroll Bar navigation with transition
window.onscroll = function() {scrollTop()};

function scrollTop() {
   var el = document.getElementById('sal'); 
   
    
   // add styles as much as you want    
   var addCss = {
       transform : 'scale(1.05)',
       backgroundColor: '#4caf50',
   }
   
   //method 2 it is not worthy in this case
   var removeClss = {
       transform : 'scale(1.0)',
       backgroundColor: 'transparent'
   }
   
   if (document.documentElement.scrollTop > 50) {
       for(var i in addCss){
           el.style[i] = addCss[i];
        }
     
    }  else {
        for(var i in removeClss) {
             el.style[i] = removeClss[i];
         }
    }
 
    if (screen.width <= 768) {
       el.style.backgroundColor = '#4caf50';
       el.style.transform = 'none';
    } 
 
    
/* shortcut method - worthing
   } else {
       el.style = 'none';
   }
*/

}





//menu function dropdown

  $( function() {
    $( ".el" ).mouseenter( function() {
      $( ".nav-item__dropdown" ).css({
        display: 'block'
      });   
    });
   
   $( ".el" ).mouseleave( function() {
      $( ".nav-item__dropdown" ).css({
        display: 'none'
      });   
    });
  
  });











