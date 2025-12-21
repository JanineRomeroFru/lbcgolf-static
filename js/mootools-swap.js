window.addEvent('domready', function(){
	
	$('mobile-nav-toggle').addEvent('click', function(){
		$('mobile-nav-toggle').toggleClass('active');
		$('primaryNav').toggleClass('active');
	});
	
	var image1 = $('imageBg1');
	var fade1 = new Fx.Tween(image1, {duration: 'long'});
	var info1 = $('info1');
	var slide1 = new Fx.Tween(info1, {duration: 'long'});
	var logo1 = $('courseLogo1');
	var rollover1 = new Fx.Tween(logo1, {duration: '100'});
	
	var image2 = $('imageBg2');
	var fade2 = new Fx.Tween(image2, {duration: 'long'});
	var info2 = $('info2');
	var slide2 = new Fx.Tween(info2, {duration: 'long'});
	var logo2 = $('courseLogo2');
	var rollover2 = new Fx.Tween(logo2, {duration: '100'});
	
	
	var image3 = $('imageBg3');
	var fade3 = new Fx.Tween(image3, {duration: 'long'});
	var info3 = $('info3');
	var slide3 = new Fx.Tween(info3, {duration: 'long'});
	var logo3 = $('courseLogo3');
	var rollover3 = new Fx.Tween(logo3, {duration: '100'});
	
	
	var image4 = $('imageBg4');
	var fade4 = new Fx.Tween(image4, {duration: 'long'});
	var info4 = $('info4');
	var slide4 = new Fx.Tween(info4, {duration: 'long'});
	var logo4 = $('courseLogo4');
	var rollover4 = new Fx.Tween(logo4, {duration: '100'});
	
	
	var image5 = $('imageBg5');
	var fade5 = new Fx.Tween(image5, {duration: 'long'});
	var info5 = $('info5');
	var slide5 = new Fx.Tween(info5, {duration: 'long'});
	var logo5 = $('courseLogo5');
	var rollover5 = new Fx.Tween(logo5, {duration: '100'});
	

	slide2.set('bottom', '-50');
	slide3.set('bottom', '-50');
	slide4.set('bottom', '-50');
	slide5.set('bottom', '-50');
	
	slide1.set('bottom', '-50');
	slide1.start('bottom', '0');

	fade2.set('opacity', '0');
	fade3.set('opacity', '0');
	fade4.set('opacity', '0');
	fade5.set('opacity', '0');

	fade1.set('opacity', '0');
	fade1.start('opacity', '1');
	
	
//	$('courseLogo1').addEvent('mouseenter', function(e) {e.stop();rollover1.start('opacity', '.5');});
//	$('courseLogo1').addEvent('mouseleave', function(e) {e.stop();rollover1.start('opacity', '1');});
	$('courseLogo1').addEvent('click', function(e) {e.stop();
	slide2.start('bottom', '-50');
	slide3.start('bottom', '-50');
	slide4.start('bottom', '-50');
	slide5.start('bottom', '-50');
	slide1.start('bottom', '0');
	fade1.start('opacity', '1');
	fade2.start('opacity', '0');
	fade3.start('opacity', '0');
	fade4.start('opacity', '0');
	fade5.start('opacity', '0');
	});
	
//	$('courseLogo2').addEvent('mouseenter', function(e) {e.stop();rollover2.start('opacity', '.5');});
//	$('courseLogo2').addEvent('mouseleave', function(e) {e.stop();rollover2.start('opacity', '1');});
	$('courseLogo2').addEvent('click', function(e) {e.stop();
	slide1.start('bottom', '-50');
	slide3.start('bottom', '-50');
	slide4.start('bottom', '-50');
	slide5.start('bottom', '-50');
	slide2.start('bottom', '0');
	fade1.start('opacity', '0');
	fade2.start('opacity', '1');
	fade3.start('opacity', '0');
	fade4.start('opacity', '0');
	fade5.start('opacity', '0');
	});
	
//	$('courseLogo3').addEvent('mouseenter', function(e) {e.stop();rollover3.start('opacity', '.5');});
//	$('courseLogo3').addEvent('mouseleave', function(e) {e.stop();rollover3.start('opacity', '1');});
	$('courseLogo3').addEvent('click', function(e) {e.stop();
	slide1.start('bottom', '-50');
	slide2.start('bottom', '-50');
	slide4.start('bottom', '-50');
	slide5.start('bottom', '-50');
	slide3.start('bottom', '0');
	fade1.start('opacity', '0');
	fade2.start('opacity', '0');
	fade3.start('opacity', '1');
	fade4.start('opacity', '0');
	fade5.start('opacity', '0');
	});
	
//	$('courseLogo4').addEvent('mouseenter', function(e) {e.stop();rollover4.start('opacity', '.5');});
//	$('courseLogo4').addEvent('mouseleave', function(e) {e.stop();rollover4.start('opacity', '1');});
	$('courseLogo4').addEvent('click', function(e) {e.stop();
	slide1.start('bottom', '-50');
	slide2.start('bottom', '-50');
	slide3.start('bottom', '-50');
	slide5.start('bottom', '-50');
	slide4.start('bottom', '0');
	fade1.start('opacity', '0');
	fade2.start('opacity', '0');
	fade3.start('opacity', '0');
	fade4.start('opacity', '1');
	fade5.start('opacity', '0');
	});
	
//	$('courseLogo5').addEvent('mouseenter', function(e) {e.stop();rollover5.start('opacity', '.5');});
//	$('courseLogo5').addEvent('mouseleave', function(e) {e.stop();rollover5.start('opacity', '1');});
	$('courseLogo5').addEvent('click', function(e) {e.stop();
	slide1.start('bottom', '-50');
	slide2.start('bottom', '-50');
	slide3.start('bottom', '-50');
	slide4.start('bottom', '-50');
	slide5.start('bottom', '0');
	fade1.start('opacity', '0');
	fade2.start('opacity', '0');
	fade3.start('opacity', '0');
	fade4.start('opacity', '0');
	fade5.start('opacity', '1');
	});
	
//	$('courseLogo6').addEvent('mouseenter', function(e) {e.stop();rollover6.start('opacity', '.5');});
//	$('courseLogo6').addEvent('mouseleave', function(e) {e.stop();rollover6.start('opacity', '1');});
	$('courseLogo6').addEvent('click', function(e) {e.stop();
	slide1.start('bottom', '-50');
	slide2.start('bottom', '-50');
	slide3.start('bottom', '-50');
	slide4.start('bottom', '-50');
	slide5.start('bottom', '-50');
	fade1.start('opacity', '0');
	fade2.start('opacity', '0');
	fade3.start('opacity', '0');
	fade4.start('opacity', '0');
	fade5.start('opacity', '0');
	});


}); 
