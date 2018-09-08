 $(".tabs:has([data-toggle=tab])")
.on("click","[data-toggle=tab]",function(){
  var $tar=$(this);
  if(!$tar.parent().is(".active")){
    $tar.parent().addClass("active")
      .siblings().removeClass("active");
    var id=$tar.attr("href");
    $(id).addClass("active")
      .siblings().removeClass("active");
  }
})