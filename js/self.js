		    $(document).ready(function() {
		    	skrollr.init({
					forceHeight: false
				});
		    	$('body').scrollspy({target: '#selector'});
		    	$(".nav>li>a").click(function(){
			        var href = $(this).attr("href");
			        var pos = $(href).offset().top;
			        $("html,body").animate({scrollTop: pos}, 1000);
			        return false;
		    	});
		    	var navtop = $("#selector").offset().top;
		    	console.log(navtop);
		    	$(window).scroll(function() {
		    		if ($(window).scrollTop()>=navtop) {
		    			$("#selector").addClass('navbar-fixed-top');
		    		}else{
		    			$("#selector").removeClass('navbar-fixed-top');
		    		}
		    	});
		    	var abouttop = $(".about").offset().top;
		    	$(".morebtn").click(function() {
		    		$("html,body").animate({scrollTop:abouttop}, 1000);
		    	});
		    });
