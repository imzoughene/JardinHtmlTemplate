$( document ).ready(function() {
    var div_x = $("#div-x")
    var div_y = $("#div-y")
    
    var p1_x  = $("#p1-x")
    var p2_y  = $("#p2-y")
    var img1_x  = $("#img-1-x")
    var img2_y  = $("#img-2-y")
   
    div_x.hover(
        function(){
            p1_x.css('color', '#5abf28');
            p2_y.css('color', '#636363');
            img1_x.attr("src","img/circle-green.jpg");
            img2_y.attr("src","img/circle-gray.png");
        }
    );

    div_y.hover(
        function(){
            p2_y.css('color', '#5abf28');
            p1_x.css('color', '#636363');
            img2_y.attr("src","img/circle-green.jpg");
            img1_x.attr("src","img/circle-gray.png");
        }
    );


    $(".hover-me").hover(
        function(){
          $(this).find(".img-v-q-1").show()
        }
    );

    $( ".hover-me" ).mouseleave(function() {
        $(this).find(".img-v-q-1").hide()
    });
});