(function(){
	var days=document.getElementById('days');

	var time=new Date();
	var day=time.getDay(),month=time.getMonth(),year=time.getFullYear(),date=time.getDate();

	var theday=["SUNDAY","MONDAY","TUSEDAY","WEDNESDAY","THURSEDAY","FRIDAY","SATURDAY"];
	var themonth=["JANURY","FEBRUARY","MARCH","APIRL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTORBER","NOVEMBER","DECEMBER"];
	var dates=theday[day]+","+date+","+themonth[month]+","+year;
	days.innerHTML=dates;

}())