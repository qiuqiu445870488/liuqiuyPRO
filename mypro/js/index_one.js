
window.onscroll=function(){
    var scrollTop=document.body.scrollTop
        ||document.documentElement.scrollTop
    if(scrollTop>=500)
        left_banner.style.display="block";
    else
        left_banner.style.display="none";
}
//a1.onclick=function(e){
//    e.preventDefault();
//    window.scrollTo(0,0);
//}
