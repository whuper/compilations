lastScrollY = 0;
function heartBeat(){
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}
//alert(diffY);
percent=.1*(diffY-lastScrollY);
if(percent>0)percent=Math.ceil(percent);
else percent=Math.floor(percent);
document.getElementById("leftDiv").style.top = parseInt(document.getElementById("leftDiv").style.top)+percent+"px";
document.getElementById("rightDiv").style.top = parseInt(document.getElementById("rightDiv").style.top)+percent+"px";
lastScrollY=lastScrollY+percent;
//alert(lastScrollY);
}
//�������ɾ���󣬶�������������Ļ���ƶ���
window.setInterval("heartBeat()",1);
//-->
//�رհ�ť
function close_left1(){
    left1.style.visibility='hidden';
}
function close_left2(){
    left2.style.visibility='hidden';
}
function close_right1(){
    right1.style.visibility='hidden';
}
function close_right2(){
    right2.style.visibility='hidden';
}
//��ʾ��ʽ
document.writeln("<style type=\"text\/css\">");
document.writeln("#leftDiv,#rightDiv{background-color:#fff;position:absolute;}");
document.writeln(".itemFloat{width:100px;height:auto;line-height:5px}");
document.writeln("<\/style>");
//����Ϊ��Ҫ����
document.writeln("<div id=\"leftDiv\" style=\"top:40px;display:none;left:5px\">");
//------�����鿪ʼ
//---L1
document.writeln("<div id=\"left1\" class=\"itemFloat\">");
document.writeln("<embed src=flash/100x300-left.swf width=100 height=300></embed>");
document.writeln("<br><a href=\"javascript:close_left1();\" title=\"�ر�����Ĺ��\">��<\/a><br><br><br><br>");
document.writeln("<\/div>");
//---L2
document.writeln("<div id=\"left2\" class=\"itemFloat\">");
document.writeln("<a target=_blank href=http://www.lanrentuku.com/><img border=0 src=images/100x100-left.gif></a>");
document.writeln("<br><a href=\"javascript:close_left2();\" title=\"�ر�����Ĺ��\">��<\/a>");
document.writeln("<\/div>");
//------���������
document.writeln("<\/div>");

//------�Ҳ���鿪ʼ
document.writeln("<div id=\"rightDiv\" style=\"top:140px;right:40px\">");



//---R1
document.writeln("<div id=\"right1\" class=\"itemFloat\" style=\"background-image:url(./images/kefubg.jpg);width:125px;height:300px;\">  ");
	document.writeln("<div style=\"padding:40px 5px 0 20px; \" > <br /> <p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=2757135131&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:2757135131:51 \" /></a> </p> <br />  <p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=1981015293&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:1981015293:51 \" /></a></p> <br /> <p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=860376677&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:860376677:51 \" /></a>  </p> <br /> <p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=2502075033&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:2502075033:51 \" /></a>  </p><br /> <p> <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=1073871078&site=qq&menu=yes\"><img src=\"http://wpa.qq.com/pa?p=2:1073871078:51 \" /></a>  </p> ");

//document.writeln("<embed src=flash/100x300-right.swf width=100 height=300></embed>");
//document.writeln("<br /><br /> <br /><a href=\"javascript:close_right1();\" title=\"�ر�����Ĺ��\">��<\/a><br><br><br><br>");
document.writeln("<\/div>");
//---R2  v
document.writeln("<div id=\"right2\" class=\"itemFloat\">");
//document.writeln("<a target=_blank href=#/><img border=0 src=images/100x100-right.gif> </a>");
//document.writeln("<br><a href=\"javascript:close_right2();\" title=\"�ر�\">��<\/a>");
	document.writeln("<\/div>");
//------�Ҳ�������


document.writeln("<\/div>");
