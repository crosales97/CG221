$(document).ready(function(){
    $("#h1").hover(function(){
        $("#h1").fadeTo(3000, 0.04);
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(2000);
        $("#div3").fadeToggle(3000);
    });
});


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#square").click(function(){
        var div = $('#square');
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
