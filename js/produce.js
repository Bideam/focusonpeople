var xmlhttp;

(function(){
	
	var askday=document.getElementById("askday");
	var asktime=askday.childNodes[0].nodeValue;
	alert(asktime);	
	startRequest(asktime);

})();

function creatxmlhttpRequest(){
	if (window.ActiveXObject) {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
}
function startRequest(asktime){
	creatxmlhttpRequest();
	try
	{
		xmlhttp.onreadystatechange=havechange;
		xmlhttp.open("get","../database/"+asktime+"/try.txt",true);
		xmlhttp.send(null);
	}
	catch(exception)
	{
		alert("exception");
	}

}

function havechange(){
	if (xmlhttp.readyState==4) {
		if (xmlhttp.status==200) {
			var wor=document.getElementById('see');
			var res=xmlhttp.responseText;
			var result=eval("("+res+")");
			for (var i = 0; i < result.length; i++) {
				var cover=document.createElement('div'),
				authority=document.createElement('div'),
				shell=document.createElement('div'),
				introduce=document.createElement('div'),
				li=document.createElement('li'),
				hr=document.createElement('hr')
				sort=document.getElementById('sort');
				var arr=new Array();
				for (key in result[i])
				{
					arr.push(key);
				}
				shell.className="common readbook";
				cover.className="cover";
				authority.className="authority";
				introduce.className="introduce";
				cover.setAttribute("id","cover"+i);
				authority.setAttribute("id","authority"+i);
				introduce.setAttribute("id","introduce"+i);
				cover.innerHTML+='<img style=" width:100px; height:145px;" src="../'+result[i]['src']+'">';
				for (var j = 0; j < arr.length-1; j++) {
					if (j==arr.length-2) {
						console.log(arr[j]);
					}else{
						authority.innerHTML+='<span class="wordfont">'+arr[j]+result[i][arr[j]]+'</span><br>';
					}
				}
				authority.appendChild(hr);
				introduce.innerHTML+='<span class="wordfont only">[简介]</span><br>';
				introduce.innerHTML+='<p class="wordfont pra">'+result[i]['synopsis']+'</p>';
				authority.appendChild(introduce);
				sort.appendChild(li);
				li.appendChild(shell);
				shell.appendChild(cover);
				shell.appendChild(authority);
				
			}
		}
	}

}