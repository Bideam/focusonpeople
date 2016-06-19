<%@LANGUAGE="VBSCRIPT">
<%CODEPAGE="65001"%>
<%Response.CharSet="utf-8"
  Session.CodePage="65001"
  pageencoding="utf-8"%>

<%
tday=Request.querystring("tday")
tday=cInt(tday)
current=Request.querystring("current")

Dim conn
Set conn=Server.CreateObject("ADODB.Connection")
conn.open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.Mappath("../database/south2003.mdb")
Set rs=Server.CreateObject("ADODB.Recordset")
sql="SELECT * FROM CUSTOMERS WHERE Pcreateday='20160618'"

rs.open sql,conn,1

cuid=cInt(rs("ID"))
cooo=cuid
x=cuid mod tday
minx=1
if cuid > tday then
minx=cuid-x
else
minx=0
end if

rs.close
sql="SELECT * FROM CUSTOMERS WHERE ID > " &minx& " ORDER BY ID "
rs.open sql,conn,1
i=1
yefo=true	
do while yefo
	response.write("<li><div><div class='includpicture'><img src='"&rs("Ppicture")&"' onclick='ressayRequest("&rs("Pcreateday")&");'></div>")
	response.write("<div class='borl'>")
	response.write("<span class='thename'>"&rs("PName")&"</span>")
	response.write("<span class='thekind'>"&rs("Pkind")&"</span>")
	response.write("<span class='thecountry'>"&rs("Pnational")&"</span>") 
	response.write("<span class='theprofession'>"&rs("Poccupate")&"</span>")
	response.write("<div class='explain'><span id='jianjie'>")
	response.write("jianjie</span>")
	response.write("<p>"&rs("Pproduct")&"</p></div></div></div>")
	response.write("<div class='order'><span class='orders'>"&i&"</span></div>")
	id="getorder"&i
	func="gitups(1,"&rs("Pcreateday")&","&i&");"
	response.write("<div class='awesome'  onClick='"&func&"'><span class='fa fa-thumbs-o-up fa-2x cen'></span>")
	i=i+1
	response.write("<br><span id='"&id&"' class='count'>"&rs("Pcount")&"</span></div></li>")
	rs.movenext
	y=cInt(rs("ID"))
	
	if y <= cuid then
		yefo=true
	else
		yefo=false
	end if
loop
%>
