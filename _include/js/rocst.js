$(document).ready(function(){

	var el = document.getElementsByClassName('service-column');

    var btns = document.getElementsByClassName('show-btn');
	var tl = new TimelineLite();
    
    tl.staggerFrom(el, 0.2, {
      opacity: 0, 
      top :"+=25px"
    }, 0.2);

    tl.staggerFrom(btns, 0.3, {
      opacity: 0, 
      left :"-=20px",
      ease :  Bounce.easeOut
    }, 0.2);

    tl.stop();

    var processTimeLine = new TimelineLite();
    processTimeLine.from($('#process-title'), 0.3,{opacity : 0});
    processTimeLine.from($('#process-steps'), 0.3, {
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

    /*Process Animation*/

    //DISCOVER
    var discover_process = new TimelineLite();
    discover_process.from(
        $('#process-icon-discover'), 0.3,
        {  width   : '20px', height  : '20px',top: '-10px',opacity : 0/*,
            ease: Elastic.easeOut.config( 1, 0.3),*/
        }
    );
    discover_process.from(
        $('#process-icon-discover').next('h1'), 0.3,
        { top : "-10px",  opacity : 0 }, 0.3
    );

    discover_process.from(
        $('#process-icon-discover').next('h1').next('p'), 0.3,
        { bottom : "-15px", opacity : 0, }, 0.3
    );
    discover_process.stop();
   

   //DEFINE
    var define_process = new TimelineLite();
    define_process.from(
        $('#process-icon-define'), 0.3,
        {  width   : '20px', height  : '20px',top: '-10px',opacity : 0/*,
            ease: Elastic.easeOut.config( 1, 0.3),*/
        }
    );
    define_process.from(
        $('#process-icon-define').next('h1'), 0.3,
        { top : "-10px",  opacity : 0 }, 0.3
    );

    define_process.from(
        $('#process-icon-define').next('h1').next('p'), 0.3,
        { bottom : "-15px", opacity : 0, }, 0.3
    );
    define_process.stop();


    //DESIGN
    var design_process = new TimelineLite();
    design_process.from(
        $('#process-icon-design'), 0.3,
        {  rotationY: "90",opacity : 0/*,
            ease: Elastic.easeOut.config( 1, 0.3),*/
        }
    );
    design_process.from(
        $('#process-icon-design').next('h1'), 0.3,
        { top : "-10px",  opacity : 0 }, 0.3
    );

    design_process.from(
        $('#process-icon-design').next('h1').next('p'), 0.3,
        { bottom : "-15px", opacity : 0, }, 0.3
    );
    design_process.stop();


    //DEVELOPMENT
    var development_process = new TimelineLite();
    development_process.from(
        $('#process-icon-development'), 0.3,
        {  
            width   : '20px', 
            height  : '20px', 
            rotationZ:"90", 
            top: '-10px',opacity : 0/*,
            ease: Elastic.easeOut.config( 1, 0.3),*/
        }
    );
    development_process.from(
        $('#process-icon-development').next('h1'), 0.3,
        { top : "-10px",  opacity : 0 }, 0.3
    );

    development_process.from(
        $('#process-icon-development').next('h1').next('p'), 0.3,
        { bottom : "-15px", opacity : 0, }, 0.3
    );
    development_process.stop();


    //DEPLOYMENT
    var deployment_process = new TimelineLite();
    deployment_process.from(
        $('#process-icon-deployment').next('h1'), 0.3,
        { top : "-10px",  opacity : 0 }
    );

    deployment_process.from(
        $('#process-icon-deployment').next('h1').next('p'), 0.3,
        { bottom : "-15px", opacity : 0, }, 0.5
    );
    deployment_process.from(
        $('#process-icon-deployment'), 0.5,
        {  width   : '20px', height  : '20px', top: '-100px', opacity : 0,
           ease: Bounce.easeOut,
        }
    );
    deployment_process.stop();



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

    //PLAY WITH WAYPOINTSs
    var waypoints = $('#services').waypoint({
        handler : function(direction){
                    console.log('DIRECTION ==> ' + direction);
                    if(direction == 'down'){
                        tl.play();
                    }else if(direction == 'up'){
                        tl.reverse(0.4);
                    }
                    
                },
        offset : '20%'
    }); 
    

    $('#process').waypoint(
        function(direction){
            if(direction == 'down'){
                processTimeLine.play();
            }else if(direction == 'up'){
                processTimeLine.reverse();
            }
            
        }
        , { offset : '50%'}
    ); 

    $("#process-icon-discover").waypoint({
        handler : function(direction){
            if(direction == 'down'){
                console.log('tHappy');
                discover_process.play()
            }else if(direction == 'up'){
                discover_process.reverse();
            }
        },
        offset : '52%'

    });

    $("#process-icon-define").waypoint({
        handler : function(direction){
            if(direction == 'down'){
                console.log('tHappy');
                define_process.play()
            }else if(direction == 'up'){
                define_process.reverse();
            }
        },
        offset : '52%'

    });

    $("#process-icon-design").waypoint({
        handler : function(direction){
            if(direction == 'down'){
                console.log('tHappy');
                design_process.play()
            }else if(direction == 'up'){
                design_process.reverse();
            }
        },
        offset : '52%'

    });

    $("#process-icon-development").waypoint({
        handler : function(direction){
            if(direction == 'down'){
                console.log('tHappy');
                development_process.play()
            }else if(direction == 'up'){
                development_process.reverse();
            }
        },
        offset : '52%'

    });

    $("#process-icon-deployment").waypoint({
        handler : function(direction){
            if(direction == 'down'){
                console.log('tHappy');
                deployment_process.play()
            }else if(direction == 'up'){
                deployment_process.reverse(0.1);
            }
        },
        offset : '52%'

    });



    $('#process-steps').waypoint({
        handler : function(direction){
            console.log(direction);
            if(direction == 'down'){
                console.log('tHappy');
                tHappy.play()
            }else if(direction == 'up'){
                tHappy.reverse(0.1);
            }
        }, 
        offset : '50%'
    });







});