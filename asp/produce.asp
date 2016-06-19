<%
cdays=request.querystring("cdays")
%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>作品</title>
<link rel="stylesheet" href="../css/font-awesome-4.5.0/css/font-awesome.min.css" type="text/css">
<link rel="stylesheet" href="../css/module.css" type="text/css">
<link rel="stylesheet" href="../css/plus.css" type="text/css">
<link rel="shortcut icon" href="../icon/未标题-1.png" type="image/x-icon">
<script language="javascript" src="../js/produce.js" defer="true">
</script>
</head>

<body >
<header >
	<nav name="top">
		<ul class="head1">
			<li class="fa fa-pied-piper-alt fa-2x"></li>
			<li id="dfm">Focus On People</li>
		</ul>
		<div style="display:none;"><ul class="head3">
        	<li class="" ><a class="sign fa fa-sign-out fa-2x">注册</a></li>
            <li class="" ><a class="sign fa fa-sign-in fa-2x">登录</a></li>
           
        </ul> </div>
 	</nav>   
</header>
<section >
	<p id="see"></p>
	<div id="shell">
       <ul id="sort" class="sort">
           
            
        </ul>
    </div>
	<div id="askday" style="display: none;"><%=cdays%></div>
</section>
<footer>
	<div class="con">
    	<ul id="footer">
        <li><a href="about/connect.html" target="_blank">联系方式</a></li>
        <li><a href="about/aboutweb.html" target="_blank">关于本站</a></li>
        <li><a href="about/thanks.html" target="_blank">特别鸣谢</a></li>
        	
        </ul>
        <p>Copyright @2016 DFM</p>
    </div>
    
</footer>

</body>
</html>
