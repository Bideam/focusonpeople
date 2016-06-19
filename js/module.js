var divs=document.getElementById("wrap").getElementsByTagName("div");
var tabs=document.getElementById("head4").getElementsByTagName("li");
var uls=document.getElementById("row").getElementsByTagName("li");
var as=document.getElementById("sort-m").getElementsByTagName("a");
var xmlhttp,xmlhttpdata,kind,imghttp,inputtime,httpupdata,current;
var imgarr=new Array();
var img=new Image();
var main=document.getElementById("main");
var	mainLeft=document.getElementById("mainLeft");
var	mainRight=document.getElementById("mainRight");
window.onload=function () {
	var time=new Date();

	var days=document.getElementById("days");
	var day=time.getDay(),month=time.getMonth(),year=time.getFullYear(),date=time.getDate();
	switch (day){
		case 1:
			day="MONDAY";
			break;
		case 2:
			day="TUSEDAY";
			break;
		case 3:
			day="WEDNESDAY";
			break;
		case 4:
			day="THURSEDAY";
			break;
		case 5:
			day="FRIDAY";
			break;
		case 6:
			day="SATURDAY";
			break;
		case 0:
			day="SUNDAY";
			break;

	}
	switch(month){
		case 0:
			month="JANURY";
			break;
		case 1:
			month="FEBRUARY";
			break;
		case 2:
			month="MARCH";
			break;
		case 3:
			month="APIRL";
			break;
		case 4:
			month="MAY";
			break;
		case 5:
			month="JUNE";
			break;
		case 6:
			month="JULY";
			break;
		case 7:
			month="AUGUST";
			break;
		case 8:
			month="SEPTEMBER";
			break;
		case 9:
			month="OCTORBER";
			break;
		case 10:
			month="NOVEMBER";
			break;
		case 11:
			month="DECEMBER";
			break;
	}
	dates=day+","+date+","+month+","+year;
	days.innerHTML=dates;
	// body...
	var login=document.getElementsByClassName("sign")[0],
		signin=document.getElementsByClassName("sign")[1];
	login.addEventListener("click",function(){modifyText(login)},false);
	signin.addEventListener("click",function(){modifyText(signin)},false);
	for (var i = 0; i < uls.length; i++) {
		uls[i].onclick=function(){changeli(this);}
	}

	for(var i=0;i<tabs.length;i++){

		tabs[i].onclick=function(){change(this);}

	}
	for (var i = 0; i < as.length; i++) {
		as[i].onclick=function(){changea(this);}
	}
	
	main.style.height=(mainRight.offsetHeight>mainLeft.offsetHeight?mainRight.offsetHeight:mainLeft.offsetHeight)+"px";

	var div0=document.getElementById("div0"),
	project=document.getElementById("project"),
	comment=document.getElementById("comment");
	div0.offsetHeight=main.offsetHeight+project.offsetHeight+comment.offsetHeight;

	var picture=document.getElementById("picture");
	picture.addEventListener("click",function(){showimg()},false);
	var c_month=parseInt(time.getMonth())+1;
	var c_day=parseInt(time.getDate());
	if (c_month<10) {
		c_month="0"+c_month;

	}
	if (c_day<10) {
		c_day="0"+c_day;
	}
	current=time.getFullYear().toString()+c_month+c_day;
	console.log(current);
	
	essayRequest(20160303);
	showdatabase(1,0);
	
}
var showbox=document.createElement("div"),
		blackground=document.createElement("div"),
		shellimg=document.createElement("div");

function showimg(){
	shellimg.style.display="";
	shellimg.className="shellimg";
	shellimg.setAttribute("id","shellimg");
	blackground.className="black_overlay";
	showbox.className="white_content";
	showbox.setAttribute("id","shellbox");
	
	
	blackground.innerHTML="";
	showbox.innerHTML="";
	blackground.setAttribute("id","black_overlay");
	blackground.innerHTML+="<div id='clo'><span id='cha'><b></b></span></div>";
	blackground.innerHTML+="<div id='prev'><div class='line'></div><b id='nt'></b></div>";
	blackground.innerHTML+="<div id='next'><div class='line'></div><b id='pt'></b></div>";
	showbox.innerHTML+="<div id='imgleft'></div>";
	showbox.innerHTML+="<div id='imgright'></div>";

/*写入img*/

			
	img.id="playimg";
	var playimg=document.getElementById("playimg");
	img.src=imgarr[0];
	showbox.appendChild(img);
	shellimg.appendChild(blackground);
	shellimg.appendChild(showbox);
	

	document.body.appendChild(shellimg);
	showbox.style.top=blackground.offsetHeight/2-img.height/2+"px";
	showbox.style.left=blackground.offsetWidth/2-img.width/2+"px";
	
	var prev=document.getElementById("imgleft"),
		clo=document.getElementById("clo"),
		next=document.getElementById("imgright"),
		buttoleft=document.getElementById("prev"),
		buttoright=document.getElementById("next"),
		cout=document.getElementById("cout");
	prev.addEventListener("click",function(){prive()},false);
	buttoleft.addEventListener("click",function(){prive()},false);
	next.addEventListener("click",function(){nexttimg()},false);
	buttoright.addEventListener("click",function(){nexttimg()},false);
	

	clo.addEventListener("click",function(){closeshow()},false);
}
var i=0;
function prive(){
	
	i--
	if(i<0)
	{
		
		i=imgarr.length-1;
	}
	img.src=imgarr[i];
	showbox.style.top=blackground.offsetHeight/2-img.height/2+"px";
	showbox.style.left=blackground.offsetWidth/2-img.width/2+"px";
}

function nexttimg(){
	i++
	
	if(i>imgarr.length-1){
		
		i=0;
	}

	img.src=imgarr[i];
	showbox.style.top=blackground.offsetHeight/2-img.height/2+"px";
	showbox.style.left=blackground.offsetWidth/2-img.width/2+"px";
}
function closeshow(){
	var shellimg=document.getElementById("shellimg");
	shellimg.style.display="none";
	document.body.removeChild(shellimg);
	showbox.removeChild(img);
	shellimg.removeChild(blackground);
	}
var getgit=false;
function gitup(req,gettimed,id){
	inputtime=gettimed?gettimed:inputtime;
	if (getgit) {
		var blue=document.getElementById('gitdown'),
			red=document.getElementById('gitup');
			blue.style.background='#eee';
			blue.style.color='#888';
			red.style.background='#eee';
			red.style.color='#888';
		return ;
	}
	else{
		var path="updata.asp?createday="+inputtime+"&req="+req;
		httpupdata=creatxml(httpupdata);
		httpupdata.onreadystatechange=function(){
			
			if (httpupdata.readyState==4 && httpupdata.status==200) {
				
				id="getorder"+id;
				var obj=document.getElementById(id);
				obj.innerHTML=httpupdata.responseText;
			}
		}
		httpupdata.open("GET",path,true);
		httpupdata.send(null);
	}
	getgit=true;
	
}
function gitups(req,gettimed,id){
	inputtime=gettimed?gettimed:inputtime;


		var path="updata.asp?createday="+inputtime+"&req="+req;
		httpupdata=creatxml(httpupdata);
		httpupdata.onreadystatechange=function(){
			
			if (httpupdata.readyState==4 && httpupdata.status==200) {
				
				id="getorder"+id;
				var obj=document.getElementById(id);
				obj.innerHTML=httpupdata.responseText;

			}
		}
		httpupdata.open("GET",path,true);
		httpupdata.send(null);
	
}
function modifyText(el) {
 	alert(el.firstChild.nodeValue);
}

function changea(obj){
	for (var i = 0; i < as.length; i++) {
		if (as[i]==obj) {
			as[i].className="a-light";
			showdatabase(1,i,kind);
		}
		else{
			as[i].className="a-night";
		}
	}
	
}

function changeli(obj){
	for (var i = 0; i < uls.length; i++) {
		if (uls[i]==obj) {
			uls[i].className="li-light";
			kind=uls[i].childNodes[1].nodeValue;
			if (kind == "全部") {
				kind="";
			}
			showdatabase(1,0,kind);
			
		}
		else{
			uls[i].className="";
		}
	}
}	
function change(obj){
	for(var i=0;i<tabs.length;i++)
	{
		if(tabs[i]==obj){
			tabs[i].className="li-h";
			document.getElementById("div"+i).className="";

			
		}
		else{
			tabs[i].className="";
			document.getElementById("div"+i).className="div-h";

		}

	}

}
function creatxml(one){
	 if(window.ActiveXObject)
    {
        one = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        one = new XMLHttpRequest();
    }
		
	return one;	
	};
function essayRequest(askName){
	inputtime=askName;
	xmlhttp=creatxml(xmlhttp);
	xmlhttp.onreadystatechange=function(){
			console.log(xmlhttp.readyState);
			console.log(xmlhttp.status);
			if(xmlhttp.readyState ==4 && xmlhttp.status==200){
				var json=xmlhttp.responseText;
				var result = eval("(" + json + ")");
				var e_essay=document.getElementById("e_essay"),
				e_title=document.getElementById("e_title"),
				p_Image=document.getElementById("image"),
				list_w=document.getElementById("list_w"),
				list_m=document.getElementById("list_m"),
				peoplename=document.getElementById("peoplename"),
				list_p=document.getElementById("list_p"),
				maxlength;
				list_p.innerHTML="";
				list_w.innerHTML="";
				list_m.innerHTML="";
				e_essay.innerHTML=result._body;
				
				if (result._vedio.length-8>0){
					maxlength=8;
				}
				else{
					maxlength=result._vedio.length;
				}
				
				for (var i = 0; i <maxlength; i++) {
					var list_li=document.createElement("li");
					list_li.innerHTML='<a href="'+result._vedio[i][1]+'">'+result._vedio[i][0]+'</a>';
					list_m.appendChild(list_li);
					
					}
				e_title.innerHTML=result._title;
				p_Image.src=result._picture;
				peoplename.innerHTML=result._peoplename;
				mainLeft.style.height=(e_title.offsetHeight+e_essay.offsetHeight)+"px";
			
				main.style.height=(mainRight.offsetHeight>mainLeft.offsetHeight?mainRight.offsetHeight:mainLeft.offsetHeight)+50+"px";
				maxlength=result._work.length;
				for(var i=0;i<maxlength;i++)
				{
					var list_li=document.createElement("li");
					list_li.innerHTML=result._work[i];
					list_p.appendChild(list_li);
				}
				imgarr.splice(0,imgarr.length);
				for (var i = 0; i < result._image.length; i++) {
					imgarr.push(result._image[i]);
					
				}
				var morepr=document.getElementById("morepr");
				
				if (result._product.length<8) {
					morepr.href="javascript:;";
					morepr.addEventListener('click',function(){alert("没有更多信息");});
					
				}
				else{
					morepr.href="asp/produce.asp?cdays="+askName;
				}
				maxlength=result._product.length-8?8:result._product.length;
				for (var i = 0; i < maxlength; i++) {
					var list_li=document.createElement("li");
					list_li.innerHTML='<a href="'+result._product[i][1]+'">'+result._product[i][0]+'</a>';
					list_w.appendChild(list_li);
				}

				


				}

				
				
				
			}
	xmlhttp.open("GET","database/"+askName+"/json.txt",true);
	xmlhttp.send(null);
	
	

	};
function showdatabase(reqdata,reqsort,reqkind){
	var path;
	if (reqsort==undefined) {
		if (reqkind==undefined) {
			path="source.asp?pageka="+reqdata;
		}
		else{
			path="source.asp?pageka="+reqdata+"&kind="+reqkind;
		}
	 
	}
	else{
		if (reqkind==undefined) {
			path="source.asp?pageka="+reqdata+"&sort="+reqsort;}
		else{
			path="source.asp?pageka="+reqdata+"&sort="+reqsort+"&kind="+reqkind;
		}
		
	}
	
	xmlhttpdata=creatxml(xmlhttpdata);
	xmlhttpdata.onreadystatechange=function(){
		if (xmlhttpdata.readyState==4 && xmlhttpdata.status==200) {
			var json=xmlhttpdata.responseText;
			var rightbox=document.getElementById("shell");
			rightbox.innerHTML=json;
			getrecordcount();

		}
	}
	xmlhttpdata.open("GET",path,true);
	xmlhttpdata.send(null);

};

function getrecordcount(){
	var recordcount=document.getElementById("recordcount"),
	search_r=document.getElementById("search_r"),
	r_count;
	r_count=recordcount.firstChild.nodeValue;
	search_r.innerHTML="查找结果已找到"+r_count+"人";

};
var getsorthttp;
function getsort(record){
	var path="getsort.asp?tday="+record+"&current="+current;
	getsorthttp=creatxml(getsorthttp);
	getsorthttp.onreadystatechange=function(){
		if (getsorthttp.readyState==4 && getsorthttp.status==200) {
			var ul=document.getElementById("includesort");
			var result=getsorthttp.responseText;
			ul.innerHTML=result;
			for (var i=0;i<document.getElementsByClassName("borl").length;i++){
				var span1=document.getElementsByClassName("borl")[i];
				span1.firstChild.innerHTML="姓名："+span1.firstChild.innerHTML;
				span1.childNodes[1].innerHTML="分类："+span1.childNodes[1].innerHTML;
				span1.childNodes[2].innerHTML="国籍："+span1.childNodes[2].innerHTML;
				span1.childNodes[3].innerHTML="职业："+span1.childNodes[3].innerHTML;
				var span2=document.getElementsByClassName("explain")[i];
				span2.firstChild.innerHTML="简介";
				
				if (span2.childNodes[1].innerHTML.length>90) {
					span2.childNodes[1].innerHTML=span2.childNodes[1].innerHTML.substr(0,95)+"...";
					
				}
			}
		}

	}

	getsorthttp.open("get",path,true);
	getsorthttp.send(null);
}
function ressayRequest(req){
	change(tabs[0]);
	essayRequest(req);
}