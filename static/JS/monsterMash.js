$(function()
{
    let headclick = 0;
        eyeclick = 0;
        noseclick =0;
        mouthclick =0;

        /*audio.playbackRate=2;
        audio.play();*/
  

        lightning_one();
        lightning_two();
        lightning_three();


        $('#head').on('contextmenu', function(e){
            e.preventDefault();
            if (headclick > 0 ){
                $(this).animate({left: '+=367px'}, 500);
                headclick -= 1;
            }
            return false;
        });


        $('#eyes').on('contextmenu', function(e){
            e.preventDefault();
            if (eyeclick > 0 ){
                $(this).animate({left: '+=367px'}, 500);
                eyeclick -= 1;
            }
            return false;
        });

        $('#nose').on('contextmenu', function(e){
            e.preventDefault();
            if (noseclick > 0 ){
                $(this).animate({left: '+=367px'}, 500);
                noseclick -= 1;
            }
            return false;
        });

        $('#mouth').on('contextmenu', function(e){
            e.preventDefault();
            if (mouthclick > 0 ){
                $(this).animate({left: '+=367px'}, 500);
                mouthclick -= 1;
            }
            return false;
        });

        $('#mouth').on('click', function(){
            if (mouthclick < 9){
                $(this).animate({left: '-=367px'}, 500);
                mouthclick += 1;
            }else if (mouthclick === 9){
                $(this).animate({ left: '0px'}, 500);
                mouthclick =0;
            }
        });

        $('#nose').on('click', function(){
            if (noseclick < 9){
                $(this).animate({left: '-=367px'}, 500);
                noseclick += 1;
            }else if (noseclick === 9){
                $(this).animate({ left: '0px'}, 500);
                noseclick =0;
            }
        });

        $('#eyes').on('click', function(){
            if (eyeclick < 9){
                $(this).animate({left: '-=367px'}, 500);
                eyeclick += 1;
            }else if (eyeclick === 9){
                $(this).animate({ left: '0px'}, 500);
                eyeclick =0;
            }
        });



        $('#head').on('click', function(){
            if (headclick < 9){
                $(this).animate({left: '-=367px'}, 500);
                headclick += 1;
            }else if (headclick === 9){
                $(this).animate({ left: '0px'}, 500);
                headclick =0;
            }
        });

        function lightning_one(){
            $('#lightning1').fadeIn(250).fadeOut(550);
            setTimeout('lightning_one()', 4000);
            
            
        };

        function lightning_two(){
            $('#lightning2').fadeIn(250).fadeOut(550);
            setTimeout('lightning_two()', 4000);
        };

        function lightning_three(){
            $('#lightning3').fadeIn(250).fadeOut(550);
            setTimeout('lightning_three()', 4000);
        };

        
});