$(function(){
    $.ajax({
        url:"http://localhost:63342/mypro/html/header.html",
        type:"get",
        success:function(res){
            document.getElementById("header")
                .innerHTML=res;
        }
    }).then(res=>{
            $("#nav22").hide();
            var Classify = $("#nav21").children().children().first();
        console.log(Classify)
        Classify
            .mouseenter(function(){
                $("#nav22").show()})
            .mouseleave(function(){
                $("#nav22").hide()})

        });
})