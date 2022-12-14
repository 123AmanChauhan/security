$(document).ready(function(){
    $(".wrap1 .icon-but").click(function(){
        $(".wrap2 .o").toggle(500)
    })
})

$(document).ready(()=>{
    $(window).scroll(function(){
        if($(this).scrollTop()>=10){
            $(".top").fadeIn()
        }
        else{
            $(".top").fadeOut()
        }
    })
    $(".top").click(function(){
        $("body,html").animate({
            "scrollTop":"0px"
        })
    })
})


