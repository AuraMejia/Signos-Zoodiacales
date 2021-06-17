function onMyLoad() { /*Función */
	infoDia(); /*Crear función*/
	infoMes(); /*Crear función*/
}
function infoDia(){ /*Función de día*/
	var dia=[1, 2, 3, 4, 5, 6,7, 8,9,10, 11, 12, 13, 14, 15, 16, 17, 18,19,20, 21, 22, 23, 24, 25, 26, 27, 28,29, 30, 31];
	for (var i in dia){ /*varaible conforme al contador de i*/
		document.getElementById("seleccionDia").innerHTML += "<option value='"+dia[i]+"'>"+dia[i]+"</option>";
	 
	}
}
function infoMes(){ /*Función de mes*/
	let mes=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"];
	for (var i in mes){ /*varaible conforma al contador i*/
		document.getElementById("seleccionMes").innerHTML += "<option value='"+mes[i]+"'>"+mes[i]+"</option>"; /*La variable avanza conforme al incremento del contador*/
	 
	}
}
function lupa(){ /*función con botón en html de img de lupa*/
	var dia1=document.getElementById("seleccionDia").value
	let mes1=document.getElementById("seleccionMes").value

if (dia1<=19 && mes1=="Enero") {
    	document.getElementById("caja").innerHTML ="Eres Capricornio. "}
if (dia1>=20 && mes1=="Enero") {
    	document.getElementById("caja").innerHTML ="Eres Acuario."}
if (dia1<=18 && mes1=="Febrero") {
    	document.getElementById("caja").innerHTML ="Eres Acuario."}
if (dia1>=19 && mes1=="Febrero") {
    	document.getElementById("caja").innerHTML ="Eres Piscis."}
if (dia1<=20 && mes1=="Marzo") {
    	document.getElementById("caja").innerHTML ="Eres Piscis. "}   	
if (dia1>=21 && mes1=="Marzo") { 
		document.getElementById("caja").innerHTML ="Eres Aries."}
if (dia1<=19 && mes1=="Abril"){ 
		document.getElementById("caja").innerHTML ="Eres Aries."}
if (dia1>=20 && mes1=="Abril") { 
		document.getElementById("caja").innerHTML ="Eres tauro. "}
if (dia1<=21 && mes1=="Mayo") { 
		document.getElementById("caja").innerHTML ="Eres tauro."}   
if (dia1>=21 && mes1=="Mayo") { 
		document.getElementById("caja").innerHTML ="Eres Géminis."}
if (dia1<=20 && mes1=="Junio") { 
		document.getElementById("caja").innerHTML ="Eres Géminis."}
if (dia1>=21 && mes1=="Junio") { 
		document.getElementById("caja").innerHTML ="Su signo es cáncer."}
if (dia1<=22 && mes1=="Julio") { 
		document.getElementById("caja").innerHTML ="Su signo es cáncer."}
if (dia1>=23 && mes1=="Julio") { 
		document.getElementById("caja").innerHTML ="Eres Leo"}		
if (dia1<=22 && mes1=="Agosto") { 
		document.getElementById("caja").innerHTML ="Eres Leo."}
if (dia1>=23 && mes1=="Agosto") { 
    	document.getElementById("caja").innerHTML ="Su signo zoodiacal es Virgo. "}
if (dia1<=22 && mes1=="Septiembre") {
    	document.getElementById("caja").innerHTML ="Su signo zoodiacal es Virgo."}
if (dia1>=23 && mes1=="Septiembre") {	
    	document.getElementById("caja").innerHTML ="Eres libra. "}
if (dia1<=22 && mes1=="Octubre") {	
    	document.getElementById("caja").innerHTML ="Eres libra. "}
if (dia1>=23 && mes1=="Octubre") {
    	document.getElementById("caja").innerHTML = "Eres Escorpio."} 	
if (dia1<=21 && mes1=="Noviembre") {
    	document.getElementById("caja").innerHTML ="Eres Escorpio."} 
if (d2>=22 && m2=="Noviembre") {
    	document.getElementById("caja").innerHTML ="Eres sagitario."}
if (d2<=21 && m2=="Diciembre") {
    	document.getElementById("caja").innerHTML ="Eres sagitario."}
if (d2>=22 && m2=="Diciembre") {
    	document.getElementById("caja").innerHTML ="Eres Capricornio."}



    }