var e = document.getElementsByTagName("title")[0].textContent.replace(" - Cbox", "").replace("New message! - ", "").replace("DevGamers_Chatbox", "AkuCbox");
document.title = `[🇻🇳] v2.6 Cbox Bug [`+e+`]`;
setInterval(function(){
document.getElementsByTagName("title")[0].innerHTML = `[🇻🇳] v2.6 Cbox Bug [`+e+`]`;
}, 5000);
$('#msgHead').css({
'font-size': '0%',
'opacity': '0'
});

document.body.appendChild(prfclick);
$('#btnUser').click(function(){
var user=getCookie("fixlag");
if(user == ""){
return;
}else{
if($('body.WithOverlay').children().find('#pgProfile').length === 1){
var pgp = document.getElementById('toggleprf');
if(pgp.innerHTML == ``){
pgp.innerHTML = `<style type="text/css">
#pgProfile{
height: 0%;
width: 0%;
bottom: 0;
left: 0;
position: fixed;
z-index: 9;
}
#pgProfile div {
position: fixed;
  bottom: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, 50%);
z-index: 9;
}
#pgProfile fieldset {
position: fixed;
  bottom: 25%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, 50%);
z-index: 9;
}
</style>`;
document.getElementById('prfclick').style.visibility = 'visible';
};
};
};
});

$('#btnSmilies').click(function(){
var user=getCookie("fixlag");
if(user == ""){
return;
}else{
if($('body.WithOverlay').children().find('.ovrSmilies').length === 1){
var pgp = document.getElementById('toggleprf');
if(pgp.innerHTML == ``){
pgp.innerHTML = `<style type="text/css">
.ovrSmilies{
height: 40%;
width: 100%;
bottom: 60px;
left: 0;
position: fixed;
overflow: scroll;
z-index: 9;
}
</style>`;
document.getElementById('prfclick').style.visibility = 'visible';
};
};
};
});

$('#prfclick').click(function(){
var ani = document.getElementById('toggleani');
cbx.debug.log("<b>BtnOthers</b> toggled.","<font color='lime'>BUG</font>");
document.getElementById('prfclick').style.visibility = 'hidden';
var pgp = document.getElementById('toggleprf');
pgp.innerHTML = ``;
ani.innerHTML = `<style type="text/css">
body, html {
animation: none;
}
.imgani {
animation: imgeffect 0.25s linear 1;
}
</style>`; 
$('body').addClass('imgani');
setTimeout(function(){
var ani = document.getElementById('toggleani');
ani.innerHTML = `<style type="text/css">
body, html {
animation: none;
}
.imgani {
animation: none;
}
</style>`; 
$('body').removeClass('imgani');
}, 540);
});

$('#overlay').click(function(){
var user=getCookie("fixlag");
if(user == ""){
return;
}else{
if($('body.WithOverlay').children().find('#pgProfile').length === 1){
}else{
var ani = document.getElementById('toggleani');
cbx.debug.log("<b>Image</b> toggled.","<font color='lime'>BUG</font>");
ani.innerHTML = `<style type="text/css">
body, html {
animation: none;
}
.imgani {
animation: imgeffect 0.25s linear 1;
}
</style>`; 
$('body').addClass('imgani');
setTimeout(function(){
var ani = document.getElementById('toggleani');
ani.innerHTML = `<style type="text/css">
body, html {
animation: none;
}
.imgani {
animation: none;
}
</style>`; 
$('body').removeClass('imgani');
}, 540);
}
}
});

$('body').on('input', 'textarea[name="pst"]', function() {
  $(this).val($(this).val()
.replace("[cl ", "[class=")
.replace("[/cl ", "[/class]")
.replace("[co ", "[color=")
.replace("[/co ", "[/color]")
.replace("[sc ", "[scroll]")
.replace("[/sc ", "[/scroll]")
.replace("[au ", "[audio]")
.replace("[/au ", "[/audio]")
.replace("[vi ", "[video]")
.replace("[/vi ", "[/video]")
.replace("[yt ", "[youtube]")
.replace("[/yt ", "[/youtube]")
.replace("[c: ", "[class::]")
.replace("[h ", "[hide]")
.replace("[/h ", "[/hide]")
);
});
function LstCmd(){

if($(".msg .body").last().is(':contains("[hide]")')&&$(".msg .body").last().is(':contains("[/hide]")')){
var hide = $(".msg .body").last().html()
.replace("[hide]", `<span id="hide" style="color: #3d3d3d; background: #3d3d3d;" onclick="this.style.color = 'white'; this.style.background = 'rgba(255,255,255,0.2)'">`)
.replace("[/hide]", `</span>`);
$(".msg .body").last().html(hide);
};

if($(".msg .body").last().is(':contains("[youtube]")')&&$(".msg .body").last().is(':contains("[/youtube]")')){
var yt = $(".msg .body").last().html()
.replace("[youtube]", `<iframe width="100%" height="260vh" src="https://www.youtube.com/embed/`)
.replace("[/youtube]", `?modestbranding=1&showinfo=0&rel=0&color=white" frameborder="0" allowfullscreen></iframe>`)
.replace("https://www.youtube.com/watch?v=", "")
.replace("https://m.youtube.com/watch?v=", "")
.replace("https://youtu.be/", "")
.replace("https://www.youtube.com/v/", "")
.replace("https://m.youtube.com/v/", "")
.replace(`/<a class="autoLink" href="`,"/")
.replace(`[/youtube" rel="noopener noreferrer" target="_blank">`, `?modestbranding=1&showinfo=0&rel=0&color=white" frameborder="0" allowfullscreen>`);

$(".msg .body").last().html(yt);
};

if($(".msg .body").last().is(':contains("[class:")')&&$(".msg .body").last().is(':contains("[/class]")')){
var com = $(".msg .body").last().html()
.replace("[class:", `<span class="bbClass cc_`)
.replace("[/class]", `</span>`)
.replace(":]", `">`)
.replace(",", ` cc_`);
$(".msg .body").last().html(com);
};

var new_text = $(".msg.Adm .body").last().html()
.replace("&lt;", "<")
.replace("&gt;", ">")
.replace("&quot;", '"')
.replace("&#39;", "'")
.replace("&#x2F;", "/");

$(".msg.Adm .body").last().html(new_text);

var others = $(".msg .body").last().html()
.replace("kick, pin", " kick, pi n, cmds")
.replace(`<div class="emote imgBox Defer" style="width: 100px" data-url="`,`<img class="emote imgBox Defer" style="width: 100px" src="`)
.replace(`<div style="padding-top: 100%"></div>`, ``);

$(".msg .body").last().html(others);
};
$('#btnSubmit').on('click', function(){
// Tối ưu hóa xử lý tin nhắn mới
var dcm2 = setInterval(LstCmd, 300);
setTimeout(function(){clearInterval(dcm2)}, 2500);
});

function ProCmd(){
//VIP
//$('.msg[data-uid="ID_HERE"] .body').each(function(y){
//
//});
$('.msg .body').each(function(y){
if($('.msg.Server .body').is(':contains("[hide]")')&&$(this).is(':contains("[/hide]")')){
return;
}else if($(this).is(':contains("[hide]")')&&$(this).is(':contains("[/hide]")')){
var hide = $(this).html().replace("[hide]", `<span id="hide" style="color: #3d3d3d; background: #3d3d3d;" onclick="this.style.color = 'white'; this.style.background = 'rgba(255,255,255,0.2)'">`)
.replace("[/hide]", `</span>`);

$(this).html(hide);
};
});

$('.msg .body').each(function(w){
if($('.msg.Server .body').is(':contains("[youtube]")')&&$(this).is(':contains("[/youtube]")')){
return;
}else if($(this).is(':contains("[youtube]")')&&$(this).is(':contains("[/youtube]")')){
var yt = $(this).html()
.replace("[youtube]", `<iframe width="100%" height="260vh" src="https://www.youtube.com/embed/`)
.replace("[/youtube]", `?modestbranding=1&showinfo=0&rel=0&color=white" frameborder="0" allowfullscreen></iframe>`)
.replace("https://www.youtube.com/watch?v=", "")
.replace("https://m.youtube.com/watch?v=", "")
.replace("https://youtu.be/", "")
.replace("https://www.youtube.com/v/", "")
.replace("https://m.youtube.com/v/", "")
.replace(`/<a class="autoLink" href="`,"/")
.replace(`[/youtube" rel="noopener noreferrer" target="_blank">`, `?modestbranding=1&showinfo=0&rel=0&color=white" frameborder="0" allowfullscreen>`);

$(this).html(yt);
};
});

$('.msg .body').each(function(z){
if($('.msg.Server .body').is(':contains("[class:")')&&$(this).is(':contains("[/class]")')){
return;
}else if($(this).is(':contains("[class:")')&&$(this).is(':contains("[/class]")')){
var com = $(this).html()
.replace("[class:", `<span class="bbClass cc_`)
.replace("[/class]", `</span>`)
.replace(":]", `">`)
.replace(",", ` cc_`);
$(this).html(com);
};
});

$('.msg.Adm .body').each(function(x){
var new_text = $(this).html()
.replace("&lt;", "<")
.replace("&gt;", ">")
.replace("&quot;", '"')
.replace("&#39;", "'")
.replace("&#x2F;", "/");

$(this).html(new_text);
  });

$('.msg .body').each(function(v){
var others = $(this).html()
.replace("kick, pin", " kick, pi n, cmds")
.replace(`<div class="emote imgBox Defer" style="width: 100px" data-url="`,`<img class="emote imgBox Defer" style="width: 100px" src="`)
.replace(`<div style="padding-top: 100%"></div>`, ``);

$(this).html(others);
  });
};
var dcm = setInterval(ProCmd, 0);
setTimeout(function(){clearInterval(dcm)}, 2600);

cbx.newMessageAsync = function() {
  if (cbx.newMessageTmr) {
    return cbx.newMessageAgain = true, false;
  }
  audioPlay("volAll");
  titleflash();

// Tối ưu hóa xử lý tin nhắn mới
var dcm2 = setInterval(LstCmd, 300);
setTimeout(function(){clearInterval(dcm2)}, 2500);

  cbx.newMessageTmr = window.setTimeout(function() {
    /** @type {null} */
    cbx.newMessageTmr = null;
    if (cbx.newMessageAgain) {
      /** @type {boolean} */
      cbx.newMessageAgain = false;
      cbx.newMessageAsync();
    }
  }, 1E3);
}; 

setInterval(function(){
let $parents = $('.msg');
$parents.each(
    function(){
      var $el = $(this);
      if($el.find('.atname').length !=0){
if(document.getElementById('clearmbg').checked == true){
	$el.css('background', 'rgba(0, 0, 0, 0)');
}else{
         $el.css('background', 'rgba(54, 44, 4, 0.6)');
      }
}
    }
);
}, 500);
$('html, body').css({'background-size':'cover', 'background-repeat':'no-repeat', 'background-position':'center'});
var dsbtn = getCookie("disable");
var cdb = "";
if(dsbtn == "yes"){
var btn = document.getElementById('disablebtn');
var dbtn = document.getElementById('dbtoggle');
dbtn.checked = true;
cdb = " - DisableBtn is ON";
btn.innerHTML = `<style type="text/css">
#helptab, #newfeed, #setting {
visibility: hidden;
}
</style>`;
setTimeout(function(){
add_priv_post("[SERVER]", `<br>
&bull; Bạn đã bật <b>DisableBtn</b>, các nút Tính năng đã ẩn đi nhưng vẫn sẽ hiển thị nếu bạn nhập bằng lệnh: <b>//menu</b>, <b>//music</b>, <b>//setting</b>.<br>
&bull; Để bật lại các nút, gõ <b>//disablebtn</b>.<br>
&bull; Liên kết nhanh: <a href="JavaScript:ShowMenu()">Menu</a> | <a href="JavaScript:ShowFeed()">Music</a> | <a href="JavaScript:ShowSetting()">Setting</a>.
`);
}, 2000);
};

var clmbg = getCookie("clearmsg");
if(clmbg == "yes"){
var msg = document.getElementById('togglemsbg');
var clearmbg = document.getElementById('clearmbg');
clearmbg.checked = true;
msg.innerHTML = `<style type="text/css">
.msg {
background: rgba(0,0,0,0);
}
.msg.Server {
background: rgba(0,0,0,0);
} 
</style>`;
};

var clfrm = getCookie("clearform");
if(clfrm == "yes"){
var clearform = document.getElementById('clearform');
var form = document.getElementById('toggleform');
clearform.checked = true;
form.innerHTML = `<style type="text/css">
form#frmMain {
background: rgba(0,0,0,0);
}
textarea, input {
background: rgba(0,0,0,0.1);
}
</style>`;
};

var msbg=getCookie("background");
if(msbg == "one"){
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/f2/95/8a/f2958a889d9a74c01d645dbc0d8bedbd.gif)';
document.getElementById('one').checked = true;
}else if(msbg == "two"){
document.body.style.backgroundImage = 'url(https://66.media.tumblr.com/43ff1ae84968ffd84606207e9995a78e/tumblr_py4mvbGe6h1tgo74ho1_1280.gif)';
document.getElementById('two').checked = true;
}else if(msbg == "three"){
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/29/28/4d/29284dff468d1fc9a068a0babfb52657.gif)';
document.getElementById('three').checked = true;
}else if(msbg == "four"){
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/29/ff/1b/29ff1ba984f39cbcf3d7a36cd6f1a016.gif)';
document.getElementById('four').checked = true;
}else if(msbg == "five"){
document.body.style.backgroundImage = 'url(https://i0.wp.com/gifupnow.com/wp-content/uploads/2018/07/pixelart-8bit-art-animation-pixelanimation-yakitori-scooter-house-japan.gif)';
document.getElementById('five').checked = true;
}else if(msbg == "six"){
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/7b/30/6d/7b306db62abf390135c653d38fcbdd12.gif)';
document.getElementById('six').checked = true;
}else if(msbg == "seven"){
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Pixel-aesthetic-GIFs-Get-the-best-GIF-on-GIPHY.gif)';
document.getElementById('seven').checked = true;
}else{
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};

var user=getCookie("fixlag");
var cfl = "";
if(user == ""){
var toggle = document.getElementById('fltoggle');
var mode = document.getElementById('flmode');
toggle.checked = true;
cfl = " - Fix Lag Mode is ON";
mode.innerHTML = `
<style type="text/css">
html, body, body.WithOverlay, .usr, .msg, .msg.Sent, .msg.Deleted, form#frmMain, #sts, #mnu, #nfd, body.WithOverlay > #messages, body.WithOverlay > #users, #msgHead, #turnoff, .pic {
animation: none;
transition: none;
}
</style>
`;
}

cbx.debug.log("<b>MENU</b> btn loaded.","<font color='lime'>BUG</font>");
cbx.debug.log("<b>MUSIC</b> btn loaded.","<font color='lime'>BUG</font>");
cbx.debug.log("<b>SETTING</b> btn loaded.","<font color='lime'>BUG</font>");
cbx.debug.log("Commands loaded.","<font color='lime'>BUG</font>");

function setCookie(cname,cvalue,exdays) {

  var d = new Date();

  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {

  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var toggle = document.getElementById('fltoggle');
function checkCookie() {
  var user=getCookie("fixlag");
  if (toggle.checked == false) {
    document.cookie = "fixlag=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
var mode = document.getElementById('flmode');
mode.innerHTML = `
<style type="text/css">
html, body, body.WithOverlay, .usr, .msg, .msg.Sent, .msg.Deleted, form#frmMain, #sts, #mnu, #nfd, body.WithOverlay > #messages, body.WithOverlay > #users, #msgHead, #turnoff, .pic {
animation: none;
transition: none;
}
</style>
`;
  } else {
     user = "enabled";
var mode = document.getElementById('flmode');
mode.innerHTML = ``;
     setCookie("fixlag", user, 30);
  }
};

function checkCookie2() {

  var user=getCookie("disable");
  if (user != "") {
    document.cookie = "disable=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } else {
     user = "yes";

     setCookie("disable", user, 30);
  }
};
cbx.$frm.pst.onkeyup = function(event){
if(cbx.$frm.pst.value.toLowerCase().startsWith("/")){
check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11();
}else{
if(!cbx.$frm.pst.value.toLowerCase().startsWith("/")){
cbx.$frm.pst.value = `​`+cbx.$frm.pst.value;
};
};
if(event.keyCode === 13) {
// Tối ưu hóa xử lý tin nhắn mới
var rls = setInterval(LstCmd, 300);
setTimeout(function(){clearInterval(rls)}, 2500);
};
if(cbx.$frm.pst.value == "​"){
cbx.$frm.pst.value = "​";
};
};

function SBug(){
cbx.$frm.pst.onkeyup = function(event){
if(cbx.$frm.pst.value.toLowerCase().startsWith("/")){
check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11();
}else{
if(!cbx.$frm.pst.value.toLowerCase().startsWith("/")){
cbx.$frm.pst.value = `​`+cbx.$frm.pst.value;
};
};
if(event.keyCode === 13) {
// Tối ưu hóa xử lý tin nhắn mới
var rls = setInterval(LstCmd, 300);
setTimeout(function(){clearInterval(rls)}, 2500);
};
if(cbx.$frm.pst.value == "​"){
cbx.$frm.pst.value = "";
};
}; 
};

function check_val(){
 var trigger=new Array("//cmd");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//cmds</b> command sent.","<font color='lime'>BUG</font>");
add_priv_post("[COMMANDS]", `
<h3>&bull; Instant Bug Commands :</h3>
<b>//cmds</b>, 
<b>//menu</b>, 
<b>//music</b>, 
<b>//setting</b>, 
<b>//boxcode</b>, 
<b>//classes</b>, 
<b>//discord</b>, 
<b>//setup</b>, 
<b>//fixlag</b>, 
<b>//updates</b>,
<b>//disablebtn</b>
..
<hr>
<h3>&bull; Boxcode Bug Commands :</h3>
<b>[ hide]<font style="color: rgba(255,255,255,0.4)">Contents</font>[/hide]</b>,<br>
<b>[ youtube]<font style="color: rgba(255,255,255,0.4)">YouTube URL or ID(?v=...)</font>[/youtube]</b>,<br>
<sup>*</sup><b>[ class<font color="lime">:</font><font style="color: rgba(255,255,255,0.4)">cauvong<font color="white">,</font>neon</font><font color="lime">:</font>]<font style="color: rgba(255,255,255,0.4)">Some text...</font>[/class]</b>,<br>
..
<br>
<b style=" color: rgba(255,255,255,0.8)">*Note: <font color="white">[class]</font> Phiên bản Boxcode Bug có thể sử dụng nhiều lớp bằng cách nhập nhiều lệnh chồng nhau. Nhưng mỗi một lệnh đều có giới hạn sử dụng 2 classes trong cùng một lệnh. Chi tiết cứ hỏi Aku.</b> 
<hr>
<h3>&bull; AutoCorrect Commands :</h3>
"[cl " => "[class=", 
"[/cl " => "[/class]", <br>
"[co " => "[color=", 
"[/co " => "[/color]", <br>
"[sc " => "[scroll]", 
"[/sc " => "[/scroll]", <br>
"[au " => "[audio]", 
"[/au " => "[/audio]", <br>
"[vi " => "[video]", 
"[/vi " => "[/video]", <br>
"[yt " => "[ youtube]", 
"[/yt " => "[ /youtube]", <br>
"[c: " => "[class::], <br>
"[h " => "[hide], 
"[/h " => "[/hide] <br>
..<br>
<b style=" color: rgba(255,255,255,0.8)">*Note: Press Space after typed for AutoCorrect.</b>
`);
statusBar.set('[BUG] sent commands.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
}
};
 };
};

function check_val2(){
 var trigger=new Array("//menu");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//menu</b> command sent.","<font color='lime'>BUG</font>");
ShowMenu();
statusBar.set('[BUG] Menu command.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val3(){
 var trigger=new Array("//mus");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//music</b> command sent.","<font color='lime'>BUG</font>");
ShowFeed();
statusBar.set('[BUG] Music command.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val4(){
 var trigger=new Array("//sett");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//setting</b> command sent.","<font color='lime'>BUG</font>");
ShowSetting();
statusBar.set('[BUG] Setting command.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val5(){
 var trigger=new Array("//boxc");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//boxcode</b> command sent.","<font color='lime'>BUG</font>");
add_priv_post("[BOXCODE]", `<b style="font-size: 110%">Click to use:</b><br>
<b onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [b]Bold[/b]'">Bold</b>&emsp;
<i onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [i]Italic[/i]'">Italic</i>&emsp;
<u onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [u]Underline[/u]'">Underline</u>&emsp;
<strike onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [s]Strike[/s]'">Strike</strike>&emsp;
<q onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [q]Quoted[/q]'">Quoted</q>&emsp;
<sub onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [sub]Subscript[/sub]'">Subscript</sub>&emsp;
<sup onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [sup]Superscript[/sup]'">Superscript</sup>&emsp;
<font style="font-size: 120%" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [big]Big[/big]'">Big</font>&emsp;
<font style="font-size: 86%" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [small]Small[/small]'">Small</font>&emsp;
<code onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [code]Code[/code]'">Code</code>&emsp;
<font onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [center]Center[/center]'">Center</font>&emsp;
<font onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [scroll]Scroll[/scroll]'">Scroll</font>&emsp;
<font class="cc_cauvong2" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [color=]Color[/color]'">Color</font>&emsp;
<font onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=]Class[/class]'">Class</font>
`);
statusBar.set('[BUG] sent Boxcode commands.');
if(error>0){
return cbx.$frm.pst.onkeyup= function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val6(){
 var trigger=new Array("//clas");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//class</b> command sent.","<font color='lime'>BUG</font>");
add_priv_post("[CLASSES]", `<b style="font-size: 110%">Click to use:</b><br>
<font class="cc_retro" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=retro]Retro[/class]'">Retro</font>&emsp;
<font class="cc_ghost" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=ghost]Ghost[/class]'">Ghost</font>&emsp;
<font class="cc_blink" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=blink]Blink[/class]'">Blink</font>&emsp;
<font class="cc_floating" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=floating]Floating[/class]'">Floating</font>&emsp;
<font class="cc_cauvong" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=cauvong]Cauvong[/class]'">Cauvong</font>&emsp;
<font class="cc_cauvong2" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=cauvong2]Cauvong2[/class]'">Cauvong2</font>&emsp;
<font class="cc_cauvong3" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=cauvong3]Cauvong3[/class]'">Cauvong3</font>&emsp;
<font class="cc_neon" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=neon]Neon[/class]'">Neon</font>&emsp;
<font class="cc_neon2" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=neon2]Neon2[/class]'">Neon2</font>&emsp;
<font class="cc_flux" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=flux]Flux[/class]'">Flux</font>&emsp;
<font class="cc_flip" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=flip]Flip[/class]'">Flip</font>&emsp;
<font class="cc_flip2" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=flip2]Flip2[/class]'">Flip2</font>&emsp;
<font class="cc_glitch" onclick="cbx.$frm.pst.value=cbx.$frm.pst.value+' [class=glitch]Glitch[/class]'">Glitch</font>&emsp;
`);
statusBar.set('[BUG] sent Class commands.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val7(){
 var trigger=new Array("//disc");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//discord</b> command sent.","<font color='lime'>BUG</font>");
window.open("https://discord.gg/pwRSbt4kcp", "_blank");
statusBar.set('[BUG] directed Discord link.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val8(){
 var trigger=new Array("//setu");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//setup</b> command sent.","<font color='lime'>BUG</font>");
add_priv_post("[SETUP]", `
<b style="font-size: 120%">Setup Bug:</b><br>
1. Tạo hoặc sở hữu một Cbox cho bản thân và có thể truy cập Control Panel.<br>
2. Mở <a href="https://cbox.ws/admin" target="_blank">Control Panel</a> và truy cập vào <b>Options -> Filtering</b> trên góp phải(hoặc vào <a href="https://cbox.ws/admin?filtering" target="_blank">đường dẫn này</a>).<br>
3. Sao chép phần mã bên dưới:
<br><br><code>
!  :[scroll]bug[/scroll]<br>
!behavior=:language=<br>
!marquee:script<br>
!100%:https://devgamers.6te.net/bugbyaku.js<br>
!alternate:javascript<br>
!width=:src=
</code><br><br>
Ấn save lại và mở Cbox kiểm tra(tham khảo qua ảnh <a href="https://cbox.im/i/wwkQz.png" target="_blank">tại đây</a>).<br>
&bull;<b>Lưu ý:</b> Thực hiện đúng theo các bước thì 90% sẽ thành công, không gặp vấn đề nghiêm trọng gì. Nếu thử lại nhiều lần nhưng vẫn không được, xem lại hướng dẫn hoặc thực hiện Bug trong Cbox mới.<br>
Mã nguồn Bug đã được mã hóa, không được ăn cắp sáng tạo cá nhân nhưng bạn vẫn sẽ được phép gắn Bug vào Cbox của mình. Nếu muốn xem mã nguồn để tìm hiểu thêm về Bug,... Hãy trò chuyện trực tiếp cho tôi để được phản hồi nhanh chóng.<br>
Vì Bug sẽ được cập nhật liên tục nên đôi lúc sẽ phát sinh ra một số vấn đề, nếu không thích ứng với Bug bạn có thể xóa đoạn mã Bug trong phần Filtering đi hoặc liên hệ tôi nếu muốn có một phiên bản Bug tùy chỉnh theo yêu cầu.
`);
statusBar.set('[BUG] Setup command.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val9(){
 var trigger=new Array("//fix");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//fixlag</b> command sent.","<font color='lime'>BUG</font>");
statusBar.set('[BUG] Fixlag command.');
checkCookie();location.reload();
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val10(){
 var trigger=new Array("//upd");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//updates</b> command sent.","<font color='lime'>BUG</font>");
add_priv_post("[SYSTEM]", `<b style="font-size: 120%">Updates Log :</b><br>
<code>--------
<br>
&gt;<b style="color: yellow">[v2.6]</b> Fix some error and lag, add new features about Animation/Transition effects. Changed to FixLag is default mode of the Cbox.<br>
&ensp;<b style="color: orange">[v2.5]</b> Un-publish version, no details. Extended sharing updates..<br>
&ensp;<b style="color: orange">[v2.4]</b> Fix some error and feature, Add new Boxcode Bug: <b>[class::]</b>..<br>
&ensp;<b style="color: orange">[v2.3]</b> Change some Options in Setting, Removed Cbox Class Options. Add new <b>DisableBtn</b> feature and <b>//disablebtn</b> command.<br>
&ensp;<b style="color: orange">[v2.2]</b> Change some features, Add new Class: <b>glitch class</b>.<br>
&ensp;<b style="color: orange">[v2.1]</b> Fix some error and Cmds display. Add 2 new Commands: [hide] and [youtube].<br>
&ensp;<b style="color: orange">[v2.0]</b> Fix some error and add more new feature, bug supply, cmd shortcuts and new VIP Role.<br>
&ensp;<b style="color: orange">[v1.9]</b> Fix some error and setting. Update saving something when you turned on before in Setting. Improve experiences.<br>
&ensp;<b style="color: orange">[v1.8]</b> Fix some error and cmds. Add New Feature: Fix Lag Mode.<br>
&ensp;<b style="color: orange">[v1.7]</b> Fix some error and some feature. Add new feature: Cbox Bug Commands.<br>
&ensp;<b style="color: orange">[v1.6]</b> Security update: obfucasted the code. Add some new feature.<br>
&ensp;<b style="color: orange">[v1.5]</b> Fix some error and add some new features about Image View.<br>
&ensp;<b style="color: orange">[v1.4]</b> Update some special buttons and the Setting button nearly be done.<br>
&ensp;<b style="color: orange">[v1.3]</b> Create the CSS custom theme to make Cbox more modern and beautiful.<br>
&ensp;<b style="color: orange">[v1.2]</b> Try to Linking with JavaScript and done about CSS Bug linking.<br>
&ensp;<b style="color: orange">[v1.1]</b> Linking with CSS Bug by an old method. The first change of Cbox Bug.<br>
&ensp;<b style="color: orange">[v1.0]</b> The first Cbox Bug version has been developed.
<br>
--------</code>
`);
statusBar.set('[BUG] sent updates log.');
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 };
};

function check_val11(){
 var trigger=new Array("//disable");
 var check_text=cbx.$frm.pst.value;
 var error=0;
 for(var i=0;i<trigger.length;i++)
 {
  var val=trigger[i];
  if(check_text.toLowerCase().startsWith(trigger))
  {
   error=error+1;
  }
 }
if(error>0){
cbx.$frm.pst.onkeyup = function(event) {
  // Number 13 is the "Enter" key on the keyboard

  if (event.keyCode === 13) {
cbx.debug.log("<b>//disablebtn</b> command sent.","<font color='lime'>BUG</font>");
statusBar.set('[BUG] DisableBtn command.');
checkCookie2();location.reload();
if(error>0){
return cbx.$frm.pst.onkeyup = function(){var error=0;SBug();check_val();check_val2();check_val3();check_val4();check_val5();check_val6();check_val7();check_val8();check_val9();check_val10();check_val11()};
};
  }
};
 }
};

statusBar.error("Loading...");
setTimeout(function(){
statusBar.warn("Connecting..");
}, 750);
var wcms = document.getElementById('wctoggle');
function WelcomeMsg() {
if(wcms.checked == true){
var num = "yes";
setCookie("wcmsg", num, 30);
}else{
document.cookie = "wcmsg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
};
setTimeout(function(){
statusBar.set("v2.6 Cbox Bug By Aku"+cfl+cdb);
var ckwc = getCookie("wcmsg");
if(ckwc == ""){
wcms.checked = true;
add_priv_post("[SERVER]", `
<b class="cc_retro" style="font-size: 150%">Welcome !</b><br>
&bull; Cbox này được Bug bởi Aku122, chúc bạn có những phút giây thư giãn tại đây nhé.<br>
&bull; Nếu có yêu cầu gì hãy nhắn tin trực tiếp với mình để được trả lời sớm nhé.<br>
&bull; Các tính năng Bug đỉnh kao và xjn xò đầy thú vị chờ đón các bạn trải nghiệm, nếu có lỗi hãy gửi báo cáo lỗi và góp ý qua cho mình :')<br>
&bull; Để tắt thông báo này, hãy vào mục <a href="JavaScript:ShowSetting()">Setting</a> và tắt <code>Welcome Message</code> để không hiển thị lại thông báo này.<br>
<code style="color:lime">Version 2.6 - //updates</code>
`);
};
}, 1660);

setTimeout(function(){
if(!cbx.gsUser.get("nme")){
statusBar.set("Welcome, user");
}else{
statusBar.set("Welcome, "+cbx.gsUser.get("nme"));
};
}, 3400);
document.getElementById('barDefault').appendChild(cont);
document.getElementById('cont').appendChild(helptab);
document.body.appendChild(mnu);
document.body.appendChild(turnoff);
function ShowMenu() {
cbx.debug.log("<b>ShowMenu</b> toggled.","<font color='lime'>BUG</font>");

var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
if(menu.style.visibility === 'hidden'){
menu.style.visibility = 'visible';
menu.style.transform = 'translateX(0%)';
menu.style.backgroundColor = 'rgba(0,0,0,0.8)';
menu.style.opacity = '1';
menu.scrollTop = 0;
helptab.style.animation = 'blinker 1s ease infinite';

feed.style.visibility = 'hidden';
feed.style.transform = 'translateY(-100%)';
feed.style.backgroundColor = 'rgba(0,0,0,0)';
feed.style.opacity = '0';
newfeed.style.animation = 'none';

sett.style.visibility = 'hidden';
sett.style.transform = 'translateX(100%)';
sett.style.backgroundColor = 'rgba(0,0,0,0)';
sett.style.opacity = '0'; 
setting.style.animation = 'none';

document.getElementById('turnoff').style.visibility = 'visible';
document.getElementById('turnoff').style.opacity = '1';
}else{
menu.style.visibility = 'hidden';
menu.style.transform = 'translateX(-100%)';
menu.style.backgroundColor = 'rgba(0,0,0,0)';
menu.style.opacity = '0';
helptab.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0';
};
};
function CloseMenu() {
var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
menu.style.visibility = 'hidden';
menu.style.transform = 'translateX(-100%)';
menu.style.backgroundColor = 'rgba(0,0,0,0)';
menu.style.opacity = '0';
helptab.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0'; 
};
function CloseFeed() {
var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
feed.style.visibility = 'hidden';
feed.style.transform = 'translateY(-100%)';
feed.style.backgroundColor = 'rgba(0,0,0,0)';
feed.style.opacity = '0';
newfeed.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0';
};
function CloseSetting() {
var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
sett.style.visibility = 'hidden';
sett.style.transform = 'translateX(100%)';
sett.style.backgroundColor = 'rgba(0,0,0,0)';
sett.style.opacity = '0';
setting.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0'; 
};
document.getElementById('cont').appendChild(newfeed);
document.body.appendChild(nfd);
function ShowFeed() {
cbx.debug.log("<b>ShowFeed</b> toggled.","<font color='lime'>BUG</font>");

var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
if(feed.style.visibility === 'hidden'){
feed.style.visibility = 'visible';
feed.style.transform = 'translateY(0%)';
feed.style.backgroundColor = 'rgba(0,0,0,0.8)';
feed.style.opacity = '1';
feed.scrollTop = 0;
newfeed.style.animation = 'blinker 1s ease infinite';

menu.style.visibility = 'hidden';
menu.style.transform = 'translateX(-100%)';
menu.style.backgroundColor = 'rgba(0,0,0,0)';
menu.style.opacity = '0';
helptab.style.animation = 'none';

sett.style.visibility = 'hidden';
sett.style.transform = 'translateX(100%)';
sett.style.backgroundColor = 'rgba(0,0,0,0)';
sett.style.opacity = '0'; 
setting.style.animation = 'none';

document.getElementById('turnoff').style.visibility = 'visible';
document.getElementById('turnoff').style.opacity = '1';
}else{
feed.style.visibility = 'hidden';
feed.style.transform = 'translateY(-100%)';
feed.style.backgroundColor = 'rgba(0,0,0,0)';
feed.style.opacity = '0';
newfeed.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0';
};
};
document.getElementById('cont').appendChild(setting);
document.body.appendChild(sts);
function ShowSetting() {
cbx.debug.log("<b>ShowFeed</b> toggled.","<font color='lime'>BUG</font>");

var menu = document.getElementById('mnu');
var feed = document.getElementById('nfd');
var sett = document.getElementById('sts');
if(sett.style.visibility === 'hidden'){
sett.style.visibility = 'visible';
sett.style.transform = 'translateY(0%)';
sett.style.backgroundColor = 'rgba(0,0,0,0.8)';
sett.style.opacity = '1';
sett.scrollTop = 0;
setting.style.animation = 'blinker 1s ease infinite';

menu.style.visibility = 'hidden';
menu.style.transform = 'translateX(-100%)';
menu.style.backgroundColor = 'rgba(0,0,0,0)';
menu.style.opacity = '0';
helptab.style.animation = 'none';

feed.style.visibility = 'hidden';
feed.style.transform = 'translateX(100%)';
feed.style.backgroundColor = 'rgba(0,0,0,0)';
feed.style.opacity = '0'; 
newfeed.style.animation = 'none';

document.getElementById('turnoff').style.visibility = 'visible';
document.getElementById('turnoff').style.opacity = '1';
}else{
sett.style.visibility = 'hidden';
sett.style.transform = 'translateY(-100%)';
sett.style.backgroundColor = 'rgba(0,0,0,0)';
sett.style.opacity = '0';
setting.style.animation = 'none';
document.getElementById('turnoff').style.visibility = 'hidden';
document.getElementById('turnoff').style.opacity = '0';
};
};

var msg = document.getElementById('togglemsbg');
var clearmbg = document.getElementById('clearmbg');

function OnClear() {
if(clearmbg.checked == false){
cbx.debug.log("<b>ClearMsgBg</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "yes";
setCookie("clearmsg", num, 30);
msg.innerHTML = `<style type="text/css">
.msg {
background: rgba(0,0,0,0);
}
.msg.Server {
background: rgba(0,0,0,0);
</style>`;
}else{
document.cookie = "clearmsg=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
cbx.debug.log("<b>ClearMsgBg</b> toggled. OFF","<font color='lime'>BUG</font>");

msg.innerHTML = ``;
};
};

var clearform = document.getElementById('clearform');
var form = document.getElementById('toggleform');

function OnClear2() {
if(clearform.checked == false){
cbx.debug.log("<b>ClearForm</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "yes";
setCookie("clearform", num, 30);
form.innerHTML = `<style type="text/css">
form#frmMain {
background: rgba(0,0,0,0);
}
textarea, input {
background: rgba(0,0,0,0.1);
}
</style>`;
}else{
document.cookie = "clearform=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
cbx.debug.log("<b>ClearForm</b> toggled. OFF","<font color='lime'>BUG</font>");

form.innerHTML = ``;
};
};

var btn = document.getElementById('disablebtn');
var dbtn = document.getElementById('dbtoggle');

function DisableBtn() {
if(dbtn.checked == false){
cbx.debug.log("<b>Disabled</b> toggled. ON","<font color='lime'>BUG</font>");
var btn = document.getElementById('disablebtn');
btn.innerHTML = `<style type="text/css">
#helptab, #newfeed, #setting {
visibility: hidden;
}
</style>`;
setTimeout(function(){
add_priv_post("[SERVER]", `<br>
&bull; Bạn đã bật <b>DisableBtn</b>, các nút Tính năng đã ẩn đi nhưng vẫn sẽ hiển thị nếu bạn nhập bằng lệnh: <b>//menu</b>, <b>//music</b>, <b>//setting</b>.<br>
&bull; Để bật lại các nút, gõ <b>//disablebtn</b>.<br>
&bull; Liên kết nhanh: <a href="JavaScript:ShowMenu()">Menu</a> | <a href="JavaScript:ShowFeed()">Music</a> | <a href="JavaScript:ShowSetting()">Setting</a>.
`);
}, 2000);
var num = "yes";
setCookie("disable", num, 30);
}else{
var btn = document.getElementById('disablebtn');
btn.innerHTML = `<style type="text/css">
#helptab, #newfeed, #setting {
visibility: visible;
}
</style>`;
document.cookie = "disable=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
cbx.debug.log("<b>Disabled</b> toggled. OFF","<font color='lime'>BUG</font>");
};
};
//Background
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');

function OnOne() {
if(one.checked == false){
cbx.debug.log("<b>BackgroundImg#01</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "one";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/f2/95/8a/f2958a889d9a74c01d645dbc0d8bedbd.gif)';

one.checked = false;
two.checked = false;
three.checked = false;
four.checked = false;
five.checked = false;
six.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};

function OnTwo() {
if(two.checked == false){
cbx.debug.log("<b>BackgroundImg#02</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "two";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://66.media.tumblr.com/43ff1ae84968ffd84606207e9995a78e/tumblr_py4mvbGe6h1tgo74ho1_1280.gif)';

one.checked = false;
three.checked = false;
four.checked = false;
five.checked = false;
six.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};

function OnThree() {
if(three.checked == false){
cbx.debug.log("<b>BackgroundImg#03</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "three";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/29/28/4d/29284dff468d1fc9a068a0babfb52657.gif)';

one.checked = false;
two.checked = false;
four.checked = false;
five.checked = false;
six.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};

function OnFour() {
if(four.checked == false){
cbx.debug.log("<b>BackgroundImg#04</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "four";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/29/ff/1b/29ff1ba984f39cbcf3d7a36cd6f1a016.gif)';

one.checked = false;
two.checked = false;
three.checked = false;
five.checked = false;
six.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};

function OnFive() {
if(five.checked == false){
cbx.debug.log("<b>BackgroundImg#05</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "five";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://i0.wp.com/gifupnow.com/wp-content/uploads/2018/07/pixelart-8bit-art-animation-pixelanimation-yakitori-scooter-house-japan)';

one.checked = false;
two.checked = false;
three.checked = false;
four.checked = false;
six.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};

function OnSix() {
if(six.checked == false){
cbx.debug.log("<b>BackgroundImg#06</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "six";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/7b/30/6d/7b306db62abf390135c653d38fcbdd12.gif)';

one.checked = false;
two.checked = false;
three.checked = false;
four.checked = false;
five.checked = false;
seven.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};function OnSeven() {
if(seven.checked == false){
cbx.debug.log("<b>BackgroundImg#07</b> toggled. ON","<font color='lime'>BUG</font>");

var num = "seven";
setCookie("background", num, 30);
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Pixel-aesthetic-GIFs-Get-the-best-GIF-on-GIPHY.gif)';

one.checked = false;
two.checked = false;
three.checked = false;
four.checked = false;
five.checked = false;
six.checked = false;
}else{
document.cookie = "background=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.body.style.backgroundImage = 'url(https://cutewallpaper.org/21/pixel-wallpaper-gif/Aesthetic-Pixel-Art-Gif-Hd-Wallpapers-and-backgrounds-.gif)';
};
};