//ajax("http://localhost:63342/mypro/html/header.html")
//    .then(res=>{
//        document.getElementById("header").innerHTML=res;
//    });
//
//ajax("http://localhost:63342/mypro/html/footer.html")
//    .then(res=>{
//        document.getElementById("footer").innerHTML=res;
//    });

var shangp = document.querySelectorAll(".group_suit_ul>li>a");

for(var shangp1 of shangp){
shangp1.onclick=function(e){
    e.preventDefault();
    var sp = this;
    var id=//sp.href;//获得要显示的div的id: "#content1"
        sp.getAttribute("href");
    var div=document.querySelector(id);
    var divs=div.parentNode.children;
    for(var d of divs){ //清除所有兄弟div的
        d.style.display="none";
    }
    div.style.display="block";
        }
}
var yd=document.querySelector(".body_l div:first-child >.yidong1");
var dangban = yd.nextElementSibling;
var fangkuai = yd.previousElementSibling;
var datu = yd.nextElementSibling;
datu.style.backgroundImage= `url(../img/index/bigimgbm.jpg)`

yd.onmouseover=function(){

    dangban.style.display="block"
    fangkuai.style.display="block"


}
yd.onmouseout=function(){

    dangban.style.display="none"
    fangkuai.style.display="none"

}
yd.onmousemove=function(e){
   var  {offsetX,offsetY}=e
    var top = offsetY-100;
    var left =offsetX-100;
    top=top<0?0:top>155?155:top;
    left=left<0?0:left>150?150:left;
    fangkuai.style.top=`${top}px`
    fangkuai.style.left=`${left}px`
       datu .style.backgroundPosition=`${-2*left}px ${-2*top}px`;
    //console.log(top,left)

}
var zuojiantou=document.querySelector(".body_l_m .jiantou1")
var youjiantou=document.querySelector(".body_l_m .jiantou2")
var li=zuojiantou.parentNode.nextElementSibling.firstElementChild
var moved=0
var jiantoulength=((li.childNodes.length)-1)/2;
if(jiantoulength<=4){
    zuojiantou.className+=" disabled"
    youjiantou.className+=" disabled"
    youjiantou.className=youjiantou.className.replace("jiantou_r","background2")
}
zuojiantou.onclick=function(){
    var btn=this;
    var ul= btn.parentNode.nextElementSibling.firstElementChild

    if(this.className.indexOf("disabled")==-1){
        moved--
        ul.style.left=`${-moved*72}px`;}
    console.log(moved)
    if(moved==0){
        btn.className+=" disabled";
       btn.className=btn.className.replace("jiantou_l","background1")

    }
    if(moved<jiantoulength-4){
        youjiantou.className=youjiantou.className.replace("disabled","")
        youjiantou.className=youjiantou.className.replace("background2","jiantou_r")

    }
}
youjiantou.onclick=function(){
    var btn=this;
    var ul= btn.parentNode.previousElementSibling.firstElementChild
    if(this.className.indexOf("disabled")==-1){
        moved++
        ul.style.left=`${-moved*72}px`;}
    if(jiantoulength - moved==4){
        btn.className+=" disabled"
        btn.className=btn.className.replace("jiantou_r","background2")
    }
    console.log(moved)
    if(moved>0){
        zuojiantou.className=zuojiantou.className.replace("disabled","")
        zuojiantou.className=zuojiantou.className.replace("background1","jiantou_l")
    }
}
console.log(zuojiantou.parentNode.nextElementSibling.firstElementChild)