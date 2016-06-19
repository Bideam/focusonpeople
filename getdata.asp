<%@LANGUAGE="VBSCRIPT">
<%CODEPAGE="65001"%>
<%Response.CharSet="utf-8"
  Session.CodePage="65001"%>
<%
	response.expires=-1
	sql="SELECT * FROM CUSTOMERS WHERE Pkind="
	sql=sql & "'" & request.querystring("cdays") & "'"

	set conn=Server.CreateObject("ADODB.Connection")
	conn.Provider="Microsoft.Jet.OLEDB.4.0"
	conn.Open(Server.Mappath("database/south2003.mdb"))
	set rs=Server.CreateObject("ADODB.recordset")
	rs.Open sql,conn
	response.write("<table>")
	'do until rs.EOF
	''	for each x in rs.Fields
	''		response.write(x.name & ":" & x.value)
	''	next
	''	rs.MoveNext
	'loop
	do until rs.EOF
  	for each x in rs.Fields
    response.write("<tr><td><b>" & x.name & "</b></td>")
    response.write("<td>" & x.value & "</td></tr>")
 	next
  	rs.MoveNext
	loop
	response.write("</table")

	
%>
