<%@LANGUAGE="VBSCRIPT">
<%CODEPAGE="65001"%>
<%Response.CharSet="utf-8"
  Session.CodePage="65001"%>

<%
Dim conn
pageka=Request.querystring("pageka")
kind=Request.querystring("kind")

sort=Request.querystring("sort")
Set conn=Server.CreateObject("ADODB.Connection")
conn.open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.Mappath("database/south2003.mdb")
'sql="SELECT * FROM CUSTOMERS WHERE Pkind="&"'"&kind&"'"

if kind<>"" then
	if sort<>"" then
		SELECT case sort
			case 0
			sql="SELECT * FROM CUSTOMERS WHERE Pkind="&"'"&kind&"'"&" ORDER BY ID "
			case 1
			sql="SELECT * FROM CUSTOMERS WHERE Pkind="&"'"&kind&"'"&" ORDER BY PCREATEDAY DESC"
			case else
			sql="SELECT * FROM CUSTOMERS WHERE Pkind="&"'"&kind&"'"&" ORDER BY PCOUNT DESC"
		end SELECT
	else
	sql="SELECT * FROM CUSTOMERS WHERE Pkind="&"'"&kind&"'"&" ORDER BY ID "
	end if
else
	if sort<>"" then
	SELECT case sort
		case 0
		sql="SELECT * FROM CUSTOMERS ORDER BY ID "
		case 1
		sql="SELECT * FROM CUSTOMERS ORDER BY PCREATEDAY DESC"
		case else
		sql="SELECT * FROM CUSTOMERS ORDER BY PCOUNT DESC"
	end SELECT
	else
		sql="SELECT * FROM CUSTOMERS ORDER BY ID "
	end if
end if
Set rs=Server.CreateObject("ADODB.Recordset")
rs.open sql,conn,1
rs.pagesize=9
Pages=rs.pagesize
rCount=rs.recordcount
pageka=cInt(pageka)

rs.AbsolutePage=pageka
response.write("<ul id='media_content' class='media-content' >")	
do while not rs.eof and Pages>0
response.write("<li class='media-list1'>")
response.write("<div class='media-tranduce'>")
response.write("<div class='media-img'><img src='"&rs("Ppicture")&"'></div>")
response.write("<div  class='backlight pos-b'>")
response.write("<span class='fa fa-calendar-check-o check-time'>"& rs("Pcreateday") &"</span> ")
response.write("<h3>"& rs("PName") &"</h3> ")
response.write("<p>"& rs("Pproduct")&"</p>")
response.write("<a>"& rs("Pkind")& "</a>")
response.write("</div>")
response.write(" <a class='media-over-link' href='#top' onClick='essayRequest("&rs("Pcreateday")&");'>"&rs("PName")&"</a>")
response.write("</div></li>")
Pages=Pages-1
rs.movenext
loop
response.write("</ul>")
response.write("<div id='page'>")
if kind="" then
	if rs.AbsolutePage > 1 then
	response.write("<a href='javascript:;' onClick='showdatabase("&rs.AbsolutePage-1&","&sort&")'>prev</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase(1,"&sort&")'>prev</a>")
	end if
else
	if rs.AbsolutePage > 1 then
	response.write("<a href='javascript:;' onClick='showdatabase("&rs.AbsolutePage-1&","&sort&","&kind&")'>prev</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase(1,"&sort&","&kind&")'>prev</a>")
	end if
end if
i=1
pCounted=rs.PageCount
do while i<=pCounted
if kind ="" then
	if i = pageka then
	response.write("<a href='javascript:;' class='page-o' onClick='showdatabase("&i&","&sort&")'>"&i&"</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase("&i&","&sort&")'>"&i&"</a>")
	end if
else
	if i = pageka then
	response.write("<a href='javascript:;' class='page-o' onClick='showdatabase("&i&","&sort&","&kind&")'>"&i&"</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase("&i&","&sort&","&kind&")'>"&i&"</a>")
	end if
end if
i=i+1

loop
if kind = "" then
	if pageka < rs.PageCount then
	response.write("<a href='javascript:;' onClick='showdatabase("&pageka+1&","&sort&")'>next</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase("&pCounted&","&sort&")'>next</a>")
	end if
else
	if pageka < rs.PageCount then
	response.write("<a href='javascript:;' onClick='showdatabase("&pageka+1&","&sort&","&kind&")'>next</a>")
	else
	response.write("<a href='javascript:;' onClick='showdatabase("&pCounted&","&sort&","&kind&")'>next</a>")
	end if
end if
response.write("</div>")
response.write("<div id='recordcount' style='display:none;'>"&rCount&"</div>")
%>