

 <%
Dim conn
createday=Request.querystring("createday")
Set conn=Server.CreateObject("ADODB.Connection")
conn.open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.Mappath("../database/south2003.mdb")
git=Request.querystring("req")
git=cInt(git)
if git = 1 then
conn.Execute "UPDATE CUSTOMERS SET Pcount=Pcount+1 WHERE Pcreateday=" & "'" & createday &"'"
else
conn.Execute "UPDATE CUSTOMERS SET Pcount=Pcount-1 WHERE Pcreateday=" & "'" & createday &"'"
end if
Set rs=Server.CreateObject("ADODB.Recordset")
sql="SELECT * FROM CUSTOMERS WHERE Pcreateday="&"'"& createday &"'"
rs.open sql,conn,1
response.write(rs("Pcount"))

%>
