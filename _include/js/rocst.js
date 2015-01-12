$(document).ready(function(){

	var el = document.getElementsByClassName('service-column');
	var tl = new TimelineLite();
    tl.staggerFrom(el, 0.8, {
      opacity: 0, 
      top :"+=25px"
    }, 0.5).delay(1);

    tl.resume();
    tl.play();

   

    $('.show-btn').click(function(e){
    	var explicit = $(this).parent().next() ;

        if( !$(this).hasClass('clicked') ){
            var dt = new TimelineLite();
           
            dt.to(explicit, 0.4,{
                display : 'block',
                opacity : 1,
                height  : 120,
                ease:Circ.easeOut
            });
            dt.play();
            $(this).addClass('clicked');
             $(this).attr('data-timeline', 'hbvh');
            console.log("play");
        }else{
            console.log('reverse');
            var dt = new TimelineLite();
            dt.to(explicit, 0.4,{
                display : 'none',
                opacity : 0,
                height  : 0,
                ease:Circ.easeIn
            });
            dt.play();
            $(this).removeClass('clicked');
        }
    	

    })


});