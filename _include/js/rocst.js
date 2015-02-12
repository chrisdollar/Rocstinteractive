$(document).ready(function(){

	var el = document.getElementsByClassName('service-column');

    var btns = document.getElementsByClassName('show-btn');
	var tl = new TimelineLite();

    tl.staggerFrom(el, 0.2, {
      opacity: 0, 
      top :"+=25px"
    }, 0.5);

    tl.staggerFrom(btns, 0.3, {
      opacity: 0, 
      left :"-=20px",
      ease :  Bounce.easeOut
    }, 0.2);

    tl.stop();

    var processTimeLine = new TimelineLite();
    processTimeLine.from($('#process-steps'), 0.2, {
        opacity : 0,
        top : '-=100px'

    });
    processTimeLine.stop();
    

    var tHappy = new TimelineLite();
    tHappy.to($('#team-happy'), 0.3, {
        opacity : 1,
        width   : '30px',
        height  : '32px'
    });
    tHappy.stop();
   

    $('.show-btn').click(function(e){
    	var explicit = $(this).parent().next() ;
        TweenLite.to($(this), 0.2, {rotation:-45});

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
            TweenLite.to($(this), 0.2, {rotation:0});
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
    	

    });


    var waypoints = $('#services').waypoint(
        function(direction){
            if(direction == 'down'){
                tl.play();
            }else if(direction == 'up'){
                tl.resume();
            }
            
        }
        , { offset : '20%'}); 
    

    $('#process').waypoint(
        function(direction){
            if(direction == 'down'){
                processTimeLine.play();
            }else if(direction == 'up'){
                processTimeLine.reverse();
            }
            
        }
        , { offset : '20%'}
    ); 

    $('#process-steps').waypoint({
        handler : function(direction){
            console.log(direction);
            if(direction == 'down'){
                console.log('tHappy');
                tHappy.play()
            }else if(direction == 'up'){
                tHappy.reverse();
            }
        }, 
        offset : '50%'
    });




});