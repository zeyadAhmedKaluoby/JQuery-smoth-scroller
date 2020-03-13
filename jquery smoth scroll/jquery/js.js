/***scrooool function hide/show */
/*$(function(){
    $(window).scroll(function(){
       var scroll= $(this).scrollTop();
       if(scroll>100)
       {
           $('.nav').show();
       }
       else
       {
           $('.nav').hide();
       }
    });*/
/*
    $('.home .ul-list .list-item a').click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('val')).offset().top},1500);

        });*/

        $(function(){
        $('.nav .list-item a').click(function(e){
            e.preventDefault();
            $('html , body').animate({scrollTop : $( '#' + $(this).data('val')).offset().top - 80},1500);
        });
        /*
        $('.nav .list-item a').on("click",function(){

            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        });
        */

        //$('body').css("paddingTop", $('.nav').height());
            
        //sync links of navbar
        $(window).scroll(function(){
            $('.block').each(function(){
                  if($(window).scrollTop() >= $(this).offset().top-85)
                  { 
                      var blockID= $(this).attr('id');
                      console.log(blockID);
                     $('.nav .list-item a[data-val='+ blockID +']').addClass('active').parent().siblings().find('a').removeClass('active');
                  }
              })
          });


          $(window).scroll(function(){
                  if($(window).scrollTop() >= 500)
                  { 
                      if($('.scrollToTop').is(':hidden')){

                     $('.scrollToTop').fadeIn(400);
                      }
                  }
                  else
                  {
                    $('.scrollToTop').fadeOut(400);

                  }
              })
          
          $('.scrollToTop').on("click",function(){
            $('html , body').animate({scrollTop : $( '#home').offset().top - 85},1500);
          });
        
          $(window).on("scroll",function(){
              if($(window).scrollTop()>$('.about').offset().top-300 && $('.about').hasClass('hidden'))
              {
                $('.about').removeClass('hidden');
              }
          });

          $(window).on("scroll",function(){
            if($(window).scrollTop()>$('.test').offset().top-300 && $('.hidden').hasClass('hidden'))
            {
              $('.test').removeClass('hidden');
            }
        })


       
    });

      
 




