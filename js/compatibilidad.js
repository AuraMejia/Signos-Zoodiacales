function onMyLoad() { /*Función del body en HTML*/
	ingresarSignos(); /*Crear variable*/
	ingresarSignos2();/*Crear variable*/
	
}
function ingresarSignos(){ /*Variable 1 de signos*/
	let signo1=["Aries", "Piscis", "Capricornio", "Tauro", "Escorpio", "Géminis", "Cáncer", "Leo","Acuario","Sagitario", "Libra", "Virgo"];
	for (var i in signo1){
		document.getElementById("seleccionSigno").innerHTML += "<option value='"+signo1[i]+"'>"+signo1[i]+"</option>";
	 
	}
}
function ingresarSignos2(){ /*Variable 2 de signos*/
	let signo2=["Aries", "Piscis", "Capricornio", "Tauro", "Escorpio", "Géminis", "Cáncer", "Leo","Acuario","Sagitario", "Libra", "Virgo"];
	for (var i in signo2){
		document.getElementById("seleccionSigno2").innerHTML += "<option value='"+signo2[i]+"'>"+signo2[i]+"</option>";
	 
	}
}
function compt(){ /*Función del botón que actúa conforme a la condición entre variables*/
	let a=document.getElementById("seleccionSigno").value /*Variable 1 de signos*/
	let b=document.getElementById("seleccionSigno2").value /*Variable 2 de signos*/

    if (a=="Capricornio" && b=="Aries") {
    	document.getElementById("caja").innerHTML =  "Es una combinación muy complicada y su grado de compatibilidad es bajo. Ambos signos deberán poner mucho de su parte para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diamétricamente opuestas"}
    if (a=="Aries" && b=="Piscis") {
    	document.getElementById("caja").innerHTML = "Su unión promete ser apasionada, nada aburrida y, sin duda, fuera de lo común. ... Aries disfruta del modo apasionado de amar de Piscis pero pronto se aburre de tanta intensidad emocional e intentará cambiar algunos rasgos que no le gustan nada del signo de los peces. Su vida sentimental estará llena de picos y valles."}
    if (a=="Piscis" && b=="Aries") {
    	document.getElementById("caja").innerHTML = "Su unión promete ser apasionada, nada aburrida y, sin duda, fuera de lo común. ... Aries disfruta del modo apasionado de amar de Piscis pero pronto se aburre de tanta intensidad emocional e intentará cambiar algunos rasgos que no le gustan nada del signo de los peces. Su vida sentimental estará llena de picos y valles."}	
    if (a=="Aries" && b=="Cáncer") {
    	document.getElementById("caja").innerHTML = " El Agua voluble y emocional de Cáncer y el Fuego cálido e imprevisible de Aries se funden en esta relación que necesita grandes dosis de paciencia por parte del ansioso Aries y de respetar la libertad del otro para el celoso “cangrejo”. Es cierto que Aries se siente en paz en los brazos del lunático Cáncer y entre ambos surge un cariño muy especial."}
    if (a=="Cáncer" && b=="Aries") {
    	document.getElementById("caja").innerHTML = " El Agua voluble y emocional de Cáncer y el Fuego cálido e imprevisible de Aries se funden en esta relación que necesita grandes dosis de paciencia por parte del ansioso Aries y de respetar la libertad del otro para el celoso “cangrejo”. Es cierto que Aries se siente en paz en los brazos del lunático Cáncer y entre ambos surge un cariño muy especial."}
    if (a=="Aries" && b=="Capricornio") {
    	document.getElementById("caja").innerHTML =  "Es una combinación muy complicada y su grado de compatibilidad es bajo. Ambos signos deberán poner mucho de su parte para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diamétricamente opuestas"}
    if (a=="Acuario" && b=="Aries") {
        document.getElementById("caja").innerHTML = "Cuando se conocen pueden vivir en unos días lo que otros tardarían años o no vivirían nunca. La intensidad está garantizada y sus metas suelen ser comunes, así como una visión del mundo abierta y cosmopolita. Por eso, el ambiente que crean suele ser muy especial y particular. Sin embargo, entre ellos tarde o temprano surgirán las diferencias."}
    if (a=="Aries" && b=="Acuario") {
        document.getElementById("caja").innerHTML = "Cuando se conocen pueden vivir en unos días lo que otros tardarían años o no vivirían nunca. La intensidad está garantizada y sus metas suelen ser comunes, así como una visión del mundo abierta y cosmopolita. Por eso, el ambiente que crean suele ser muy especial y particular. Sin embargo, entre ellos tarde o temprano surgirán las diferencias."}
    if (a=="Aries" && b=="Leo") {
        document.getElementById("caja").innerHTML ="Para que esta unión sea tranquila y duradera, es importante que cada uno no se meta en el terreno más personal del otro, ya que a los dos les gustará tener asegurada su parcela de protagonismo. Aries admirará el gran corazón de Leo y su lealtad; y Leo se rendirá ante la fuerza y el espíritu de Aries."}
    if (a=="Leo" && b=="Aries") {
        document.getElementById("caja").innerHTML ="Para que esta unión sea tranquila y duradera, es importante que cada uno no se meta en el terreno más personal del otro, ya que a los dos les gustará tener asegurada su parcela de protagonismo. Aries admirará el gran corazón de Leo y su lealtad; y Leo se rendirá ante la fuerza y el espíritu de Aries."}
    if (a=="Aries" && b=="Libra") {
        document.getElementById("caja").innerHTML ="Son dos almas que ponen toda su pasión en cada cosa que hacen. Disfrutan de la vida y saben bien cómo exprimirle todo su jugo. ... Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones."}
    if (a=="Libra" && b=="Aries") {
        document.getElementById("caja").innerHTML ="Son dos almas que ponen toda su pasión en cada cosa que hacen. Disfrutan de la vida y saben bien cómo exprimirle todo su jugo. ... Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones."}
    if (a=="Aries" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos muy diferentes; mientras que Aries es impulsivo y muy seguro de sí mismo, Escorpio es más introvertido y se mueve por instinto. ... Tanta pasión puede dejar a ambos signos sin aliento. Lo mejor. Admiración y respeto."}
	if (a=="Escorpio" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos muy diferentes; mientras que Aries es impulsivo y muy seguro de sí mismo, Escorpio es más introvertido y se mueve por instinto. ... Tanta pasión puede dejar a ambos signos sin aliento. Lo mejor. Admiración y respeto."}
	if (a=="Aries" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Aries es impaciente y le gustan las sorpresas mientras que Tauro se caracteriza por su estoicismo y temple. La relación promete ser estable si ambos están dispuestos a aprender, pues el equilibrio de la compensación es una de las principales lecciones a aprender por ambas partes."}
    if (a=="Tauro" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Aries es impaciente y le gustan las sorpresas mientras que Tauro se caracteriza por su estoicismo y temple. La relación promete ser estable si ambos están dispuestos a aprender, pues el equilibrio de la compensación es una de las principales lecciones a aprender por ambas partes."}
	if (a=="Aries" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Dos hijos de Marte juntos pueden provocar, con sólo una mirada, chispas y hasta fuegos artificiales, aunque también es fácil que predominen luchas de egos; lo suyo no son las medias tintas sino el todo o nada."}
    if (a=="Aries" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Ésta es, sin duda, una unión llena de aventura y complicidad. Ambos son joviales, buscadores, aventureros y espontáneos. Hacen una pareja estupenda, y nada se les pondrá por delante cuando tomen la decisión de viajar por el mundo, o de compartir la vida, juntos."}
    if (a=="Sagitario" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Ésta es, sin duda, una unión llena de aventura y complicidad. Ambos son joviales, buscadores, aventureros y espontáneos. Hacen una pareja estupenda, y nada se les pondrá por delante cuando tomen la decisión de viajar por el mundo, o de compartir la vida, juntos."}
    if (a=="Virgo" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Se trata, por tanto, de dos energías bastante antagónicas que chocarán desde el principio. ... Si logran equilibrar estos extremos, Aries deja de pensar en ser el primero en todo y Virgo no se obsesiona tanto con la perfección, pueden llegar a hacer un gran equipo."}
    if (a=="Aries" && b=="Virgo") {
		document.getElementById("caja").innetHTML ="Se trata, por tanto, de dos energías bastante antagónicas que chocarán desde el principio. ... Si logran equilibrar estos extremos, Aries deja de pensar en ser el primero en todo y Virgo no se obsesiona tanto con la perfección, pueden llegar a hacer un gran equipo."}
    if (a=="Aries" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Son dos almas que ponen toda su pasión en cada cosa que hacen. Disfrutan de la vida y saben bien cómo exprimirle todo su jugo. ... Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones."}
    if (a=="Libra" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Son dos almas que ponen toda su pasión en cada cosa que hacen. Disfrutan de la vida y saben bien cómo exprimirle todo su jugo. ... Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones."}
    if (a=="Géminis" && b=="Aries") {
		document.getElementById("caja").innerHTML ="Los dos se sienten muy a gusto nada más conocerse y al segundo se hacen amigos inseparables. La relación estará basada en grandes horas de conversación sobre todo tipo de temas, mucho sentido del humor y un parecido gusto por la diversión y las risas."}
	if (a=="Aries" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Los dos se sienten muy a gusto nada más conocerse y al segundo se hacen amigos inseparables. La relación estará basada en grandes horas de conversación sobre todo tipo de temas, mucho sentido del humor y un parecido gusto por la diversión y las risas."}
/*-----------*/
    if (a=="Virgo" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="En principio pueden llegar a ser excelentes amigos, pero si pasan de la amistad al amor de pareja, la convivencia puede ser algo más compleja, sobre todo, porque Virgo siempre querrá atar corto a un signo que siempre necesitará sus dosis de libertad para ser feliz."}
	if (a=="Géminis" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="En principio pueden llegar a ser excelentes amigos, pero si pasan de la amistad al amor de pareja, la convivencia puede ser algo más compleja, sobre todo, porque Virgo siempre querrá atar corto a un signo que siempre necesitará sus dosis de libertad para ser feliz."}
    if (a=="Capricornio" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Ambos se entienden a la perfección, son responsables, trabajadores y comparten la sana ambición de prosperar en la vida. Con el tiempo estarán más seguros de que su amor es verdadero y sentirán que están hechos el uno para el otro."}
    if (a=="Virgo" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Ambos se entienden a la perfección, son responsables, trabajadores y comparten la sana ambición de prosperar en la vida. Con el tiempo estarán más seguros de que su amor es verdadero y sentirán que están hechos el uno para el otro."}
    if (a=="Virgo" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Ambos son dos signos mutables y eso significa que van a intentar adaptarse. Sagitario deberá aprender a ser más cauto y realista y Virgo a ser más audaz y desprendido. También deberá respetar las excentricidades y ese excesivo entusiasmo que siempre demuestra el arquero."}
	if (a=="Sagitario" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Ambos son dos signos mutables y eso significa que van a intentar adaptarse. Sagitario deberá aprender a ser más cauto y realista y Virgo a ser más audaz y desprendido. También deberá respetar las excentricidades y ese excesivo entusiasmo que siempre demuestra el arquero."}
	if (a=="Tauro" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Tauro y Virgo pueden disfrutar de una vida con mucha armonía. ... Tanto Virgo como Tauro son prácticos; los dos son signos de Tierra y cuando se combina Tierra con Tierra se obtiene una base sólida, para una larga relación. Ambos signos se complementarán entre sí a muchos niveles: físicamente, emocionalmente y mentalmente."}	
	if (a=="Virgo" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Tauro y Virgo pueden disfrutar de una vida con mucha armonía. ... Tanto Virgo como Tauro son prácticos; los dos son signos de Tierra y cuando se combina Tierra con Tierra se obtiene una base sólida, para una larga relación. Ambos signos se complementarán entre sí a muchos niveles: físicamente, emocionalmente y mentalmente."}
	if (a=="Virgo" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Forman un buen equipo en todos los aspectos; por un lado los dos son trabajadores y responsables, y por otro, les une la fluidez en la comunicación y la afinidad en gustos. Además se sienten muy seguros el uno junto al otro."}
	if (a=="Escorpio" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Forman un buen equipo en todos los aspectos; por un lado los dos son trabajadores y responsables, y por otro, les une la fluidez en la comunicación y la afinidad en gustos. Además se sienten muy seguros el uno junto al otro."}
	if (a=="Libra" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Los dos son sumamente detallistas y atentos y podrían llegar a ser una pareja feliz si centran sus atenciones el uno en el otro. Esto es algo que a Virgo no le importará lo más mínimo, sin embargo el signo de la balanza no ve las cosas tan claras, le gusta dispersarse con otras personas y disfrutar del flirteo."}
	if (a=="Virgo" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Los dos son sumamente detallistas y atentos y podrían llegar a ser una pareja feliz si centran sus atenciones el uno en el otro. Esto es algo que a Virgo no le importará lo más mínimo, sin embargo el signo de la balanza no ve las cosas tan claras, le gusta dispersarse con otras personas y disfrutar del flirteo."}
    if (a=="Virgo" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles."}
	if (a=="Cáncer" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles."}
    if (a=="Leo" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Leo, que es puro fuego, y Virgo, que es totalmente tierra, es algo compleja y complicada. Demasiado diferentes para coincidir en gustos, ideas y costumbres. Leo puede cansarse de la ordenada pulcritud de Virgo y Virgo puede sentirse relegado ante el éxito social de Leo."}
	if (a=="Virgo" && b=="Leo") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Leo, que es puro fuego, y Virgo, que es totalmente tierra, es algo compleja y complicada. Demasiado diferentes para coincidir en gustos, ideas y costumbres. Leo puede cansarse de la ordenada pulcritud de Virgo y Virgo puede sentirse relegado ante el éxito social de Leo."}
	if (a=="Virgo" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos. ... Ambos signos son inconstantes y de humor variable. Piscis es un signo de agua y, por tanto, es sensible y extremadamente intuitivo. Los Virgo, en cambio, son signo de tierra y son racionales y menos emocionales."}
	if (a=="Piscis" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos. ... Ambos signos son inconstantes y de humor variable. Piscis es un signo de agua y, por tanto, es sensible y extremadamente intuitivo. Los Virgo, en cambio, son signo de tierra y son racionales y menos emocionales."}
    if (a=="Acuario" && b=="Virgo") {
		document.getElementById("caja").innerHTML ="Si Virgo se olvida de los convencionalismos sociales y se permite algún que otro divertido atrevimiento, la relación resultará emocionante y llena de estímulos para los dos, además, Acuario encontrará en Virgo la virtud de la previsión y la constancia."}
	if (a=="Virgo" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Si Virgo se olvida de los convencionalismos sociales y se permite algún que otro divertido atrevimiento, la relación resultará emocionante y llena de estímulos para los dos, además, Acuario encontrará en Virgo la virtud de la previsión y la constancia."}
/*---------*/
    if (a=="Sagitario" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Puede que al responsable Capricornio le cueste y le asuste un poco formalizar una relación con el liberal Sagitario, pero cuando lo haga su decisión será inamovible y beneficiará a los dos, pues, aunque distintos, se trata de dos signos que se complementan."}
	if (a=="Capricornio" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Puede que al responsable Capricornio le cueste y le asuste un poco formalizar una relación con el liberal Sagitario, pero cuando lo haga su decisión será inamovible y beneficiará a los dos, pues, aunque distintos, se trata de dos signos que se complementan."}
    if (a=="Sagitario" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Ambos son excelentes amigos y compañeros que descubren juntos que la energía y honestidad que tienen en común es un potente y poderoso estímulo para el cuerpo y el espíritu."}
    if (a=="Sagitario" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Se trata de una relación un tanto compleja, sobre todo para Tauro, que no ganará para sustos al ver cómo se tambalea su estabilidad al trote de Sagitario que siempre buscará salir de casa y experimentar mil aventuras."}
	if (a=="Tauro" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Se trata de una relación un tanto compleja, sobre todo para Tauro, que no ganará para sustos al ver cómo se tambalea su estabilidad al trote de Sagitario que siempre buscará salir de casa y experimentar mil aventuras."}
    if (a=="Sagitario" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Se trata de una forma de vivir el amor muy diferente, casi podríamos decir que opuesta; Escorpio necesita tener y retener a la persona amada, sentirla como suya y aspirar al amor eterno; para Sagitario, por el contrario, es vital no verse sujeto a nadie. Pero, los opuestos se atraen y al juntarse saltarán las chispas."}
	if (a=="Escorpio" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Se trata de una forma de vivir el amor muy diferente, casi podríamos decir que opuesta; Escorpio necesita tener y retener a la persona amada, sentirla como suya y aspirar al amor eterno; para Sagitario, por el contrario, es vital no verse sujeto a nadie. Pero, los opuestos se atraen y al juntarse saltarán las chispas."}
    if (a=="Sagitario" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Se apoyarán mutuamente y juntos serán capaces de afrontar todo tipo de contratiempos. Además, la insaciable curiosidad de Libra puede verse colmada viviendo junto al imprevisible signo del arquero quien, asimismo, se beneficiará de los oportunos consejos de su pareja."}
	if (a=="Libra" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Se apoyarán mutuamente y juntos serán capaces de afrontar todo tipo de contratiempos. Además, la insaciable curiosidad de Libra puede verse colmada viviendo junto al imprevisible signo del arquero quien, asimismo, se beneficiará de los oportunos consejos de su pareja."}
	if (a=="Cáncer" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Es una convivencia muy movida y llena de altibajos, sobre todo porque no comparten a la par los quehaceres de la vida, pues mientras Cáncer necesita echar raíces y sentirse emocionalmente seguro, Sagitario viaja ligero de equipaje y adora el riesgo."}
	if (a=="Sagitario" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Es una convivencia muy movida y llena de altibajos, sobre todo porque no comparten a la par los quehaceres de la vida, pues mientras Cáncer necesita echar raíces y sentirse emocionalmente seguro, Sagitario viaja ligero de equipaje y adora el riesgo."}
    if (a=="Sagitario" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Es una relación de grandes coincidencias: Coinciden en fuerza y temperamento, a la vez que en generosidad y nobleza, suficiente para que su unión además de apasionada y divertida, goce de sentido común y comprensión."}
	if (a=="Leo" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Es una relación de grandes coincidencias: Coinciden en fuerza y temperamento, a la vez que en generosidad y nobleza, suficiente para que su unión además de apasionada y divertida, goce de sentido común y comprensión."}
    if (a=="Géminis" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos libres como el viento que necesitan su propio espacio para ser felices y sentirse plenos. Además, los dos son muy inquietos y respetan profundamente la libertad de cada uno. Son también dos signos muy divertidos, seductores y muy sociables."}
	if (a=="Sagitario" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos libres como el viento que necesitan su propio espacio para ser felices y sentirse plenos. Además, los dos son muy inquietos y respetan profundamente la libertad de cada uno. Son también dos signos muy divertidos, seductores y muy sociables."}
    if (a=="Sagitario" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="El romanticismo y sensibilidad de Piscis quedarán cautivados por el idealismo y entusiasmo de Sagitario, quien a su vez se dejará seducir por las atenciones del pez, además serán dos buenos consejeros en sus respectivos trabajos y en la formalización de sus ideas."}
	if (a=="Piscis" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="El romanticismo y sensibilidad de Piscis quedarán cautivados por el idealismo y entusiasmo de Sagitario, quien a su vez se dejará seducir por las atenciones del pez, además serán dos buenos consejeros en sus respectivos trabajos y en la formalización de sus ideas."}
    if (a=="Acuario" && b=="Sagitario") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz. ... Las parejas Acuario y Sagitario suelen ser muy creativas, porque se unen los ideales de Acuario con el conocimiento de Sagitario."}
	if (a=="Sagitario" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz. ... Las parejas Acuario y Sagitario suelen ser muy creativas, porque se unen los ideales de Acuario con el conocimiento de Sagitario."}
    /*-------------*/
    if (a=="Libra" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Si bien Libra y Capricornio pueden enseñarse cosas sobre la vida, no es probable que tengan una buena relación a largo plazo. ... Un Capricornio es capaz de un gran amor, pero no siempre es capaz de expresarlo bien. Libra, por otro lado, es tan libre en sus declaraciones de amor como con el dinero."}
	if (a=="Capricornio" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Si bien Libra y Capricornio pueden enseñarse cosas sobre la vida, no es probable que tengan una buena relación a largo plazo. ... Un Capricornio es capaz de un gran amor, pero no siempre es capaz de expresarlo bien. Libra, por otro lado, es tan libre en sus declaraciones de amor como con el dinero."}
	if (a=="Libra" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Al principio todo entre ellos destila armonía, buen gusto, perfección, belleza y estética. ... Para que el fuego de este amor basado en la belleza y en los extremos no se apague, ambos deberán echarle mucha ilusión, generosidad y confianza."}	
    if (a=="Libra" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. ... Tanto Libra como Tauro están regidos por Venus, por lo que la atracción es inmediata"}
	if (a=="Tauro" && b=="Libra") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. ... Tanto Libra como Tauro están regidos por Venus, por lo que la atracción es inmediata"}
    if (a=="Libra" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Son características muy complementarias porque son opuestos. Generalmente los opuestos se atraen, pero en este caso lo importante es que se complementan. Escorpio ayuda a tomar decisiones a Libra, que es tarea difícil para él, que se lo piensa todo mucho."}
	if (a=="Escorpio" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Son características muy complementarias porque son opuestos. Generalmente los opuestos se atraen, pero en este caso lo importante es que se complementan. Escorpio ayuda a tomar decisiones a Libra, que es tarea difícil para él, que se lo piensa todo mucho."}
    if (a=="Libra" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte. ... No obstante, Cáncer deberá controlar su malhumor, porque los Libra tienen menos paciencia que otros signos."}
	if (a=="Cáncer" && b=="Libra") {
		document.getElementById("caja").innerHTML ="La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte. ... No obstante, Cáncer deberá controlar su malhumor, porque los Libra tienen menos paciencia que otros signos."}
	if (a=="Libra" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Son dos signos que derrochan energía y unas tremendas ganas de vivir y de disfrutar de la vida. ... Además Libra es capaz de caer rendido ante la sensualidad de Leo y éste feliz por todo el montón de halagos que puede prodigarle, por minuto, el encantador Libra."}
	if (a=="Leo" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Son dos signos que derrochan energía y unas tremendas ganas de vivir y de disfrutar de la vida. ... Además Libra es capaz de caer rendido ante la sensualidad de Leo y éste feliz por todo el montón de halagos que puede prodigarle, por minuto, el encantador Libra."}
    if (a=="Libra" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Presentan una excelente compatibilidad y forman una de las parejas más idílicas del Zodíaco, con ideas afines, buena comunicación, atracción sexual y una compenetración tan natural que parecerá que se conocen ya de toda la vida."}
	if (a=="Géminis" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Presentan una excelente compatibilidad y forman una de las parejas más idílicas del Zodíaco, con ideas afines, buena comunicación, atracción sexual y una compenetración tan natural que parecerá que se conocen ya de toda la vida."}
    if (a=="Libra" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Libra encuentra siempre a Piscis como un signo maravilloso y lleno de matices. ... Para ello muchas dosis de amor y cariñitos por parte de Libra y adoración y admiración constantes por parte de Piscis. Así ambos estarán felices y contentos y el equilibrio estará asegurado."}
	if (a=="Piscis" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Libra encuentra siempre a Piscis como un signo maravilloso y lleno de matices. ... Para ello muchas dosis de amor y cariñitos por parte de Libra y adoración y admiración constantes por parte de Piscis. Así ambos estarán felices y contentos y el equilibrio estará asegurado."}
	if (a=="Libra" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Son dos signos que sintonizan en cuerpo y alma. Tienen similares ideales y un entendimiento de la vida muy parecido. Acuario verá en Libra alguien con quien compartir sus ideales y, después, se animará a compartir también su vida sin miedo a perder su libertad."}
	if (a=="Acuario" && b=="Libra") {
		document.getElementById("caja").innerHTML ="Son dos signos que sintonizan en cuerpo y alma. Tienen similares ideales y un entendimiento de la vida muy parecido. Acuario verá en Libra alguien con quien compartir sus ideales y, después, se animará a compartir también su vida sin miedo a perder su libertad."}
    /*----------*/
    if (a=="Capricornio" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte. ... No obstante, Cáncer deberá controlar su malhumor, porque los Libra tienen menos paciencia que otros signos."}
	if (a=="Cáncer" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte. ... No obstante, Cáncer deberá controlar su malhumor, porque los Libra tienen menos paciencia que otros signos."}
    if (a=="Cáncer" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="La combinación entre dos Cáncer puede ser realmente buena, porque ambos se levantarán la moral, comprenderán los cambios de humor y cambios en el estado de ánimo mutuamente y con facilidad. Sin embargo, deberán evitar convertirse en un espejo de la debilidad del otro y ahogarse mutuamente en el sentimentalismo."}
    if (a=="Cáncer" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Es una unión excelente para convivir disfrutando de los pequeños y grandes placeres que ofrece la vida. ... Cáncer también sabrá cómo darle a Tauro esa devoción que tanto necesita mientras que Tauro otorgará dosis de paciencia para calmar los constantes cambio de ánimo del cangrejo."}
	if (a=="Tauro" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Es una unión excelente para convivir disfrutando de los pequeños y grandes placeres que ofrece la vida. ... Cáncer también sabrá cómo darle a Tauro esa devoción que tanto necesita mientras que Tauro otorgará dosis de paciencia para calmar los constantes cambio de ánimo del cangrejo."}
    if (a=="Cáncer" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Ambos son apasionados y les gusta vivir las emociones fuertes en la intimidad. ... Escorpio también deberá saber que la ternura y los mimos son fundamentales para Cáncer y éste deberá imprimir un cierto halo de misterio para tener siempre intrigado al inquieto escorpión."}
	if (a=="Escorpio" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Ambos son apasionados y les gusta vivir las emociones fuertes en la intimidad. ... Escorpio también deberá saber que la ternura y los mimos son fundamentales para Cáncer y éste deberá imprimir un cierto halo de misterio para tener siempre intrigado al inquieto escorpión."}
    if (a=="Cáncer" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad. Ambos signos necesitan cariño y mucha atención de su pareja."}
	if (a=="Leo" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad. Ambos signos necesitan cariño y mucha atención de su pareja."}
    if (a=="Géminis" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="En el lado positivo de la relación ambos son dos signos muy soñadores y con una tremenda imaginación que se complementa además de tener un humor brillante y mutable que no todo el mundo puede llegar a entender. Lo mejor. Lo que pueden aprender juntos el uno del otro."}
	if (a=="Cáncer" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="En el lado positivo de la relación ambos son dos signos muy soñadores y con una tremenda imaginación que se complementa además de tener un humor brillante y mutable que no todo el mundo puede llegar a entender. Lo mejor. Lo que pueden aprender juntos el uno del otro."}
    if (a=="Cáncer" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Sienten las mismas necesidades y se entienden de forma instintiva y en décimas de segundo. Está claro que es una de las relaciones más estables del planeta Zodíaco ya que ambos reúnen todo lo necesario para ser una pareja plenamente llena de sueños y emotividad a flor de piel."}
	if (a=="Piscis" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Sienten las mismas necesidades y se entienden de forma instintiva y en décimas de segundo. Está claro que es una de las relaciones más estables del planeta Zodíaco ya que ambos reúnen todo lo necesario para ser una pareja plenamente llena de sueños y emotividad a flor de piel."}
    if (a=="Cáncer" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Ese complemento perfecto se puede llegar a conseguir mediante el sentido del humor de ambos, la ternura y la sinceridad. ... El cangrejo deberá soltar lastre, dejar libre a Acuario y vencer así sus miedos. El resultado será una pareja absolutamente auténtica."}
	if (a=="Acuario" && b=="Cáncer") {
		document.getElementById("caja").innerHTML ="Ese complemento perfecto se puede llegar a conseguir mediante el sentido del humor de ambos, la ternura y la sinceridad. ... El cangrejo deberá soltar lastre, dejar libre a Acuario y vencer así sus miedos. El resultado será una pareja absolutamente auténtica."}
    /*----------*/
    if (a=="Leo" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Tendrán que hacer ambos un sacrificio importante para que esta relación sea lo más duradera posible, algo que conseguirán no tomándose la vida y el amor con tanta solemnidad y pomposidad. Lo mejor. Admiración, sensualidad, deleite, lealtad y estímulo de superación."}
	if (a=="Capricornio" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Tendrán que hacer ambos un sacrificio importante para que esta relación sea lo más duradera posible, algo que conseguirán no tomándose la vida y el amor con tanta solemnidad y pomposidad. Lo mejor. Admiración, sensualidad, deleite, lealtad y estímulo de superación."}
    if (a=="Leo" && b=="Leo") {
		document.getElementById("caja").innerHTML = "Entre ambos deben tener presente que se juntará demasiada fuerza de carácter en poco espacio, lo ideal sería unir esa fuerza para que mire en la misma dirección y así se podría producir una maravillosa relación llena de magia, pasión y aventura."}  
    if (a=="Leo" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse. Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro."}
	if (a=="Géminis" && b=="Leo") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse. Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro."}
    if (a=="Tauro" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Se atraen y son la pareja ideal para un apasionado romance sin mayores compromisos. ... Pero pronto llegarán los conflictos, principalmente porque Leo es un signo que desea tener el mando y Tauro no soporta que nadie le diga por dónde tiene que ir."}
	if (a=="Leo" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Se atraen y son la pareja ideal para un apasionado romance sin mayores compromisos. ... Pero pronto llegarán los conflictos, principalmente porque Leo es un signo que desea tener el mando y Tauro no soporta que nadie le diga por dónde tiene que ir."}
    if (a=="Leo" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="A ambos les encanta el dramatismo e impactar y eso les convierte en dos actores a punto de salir a escena. ... Al principio, puede que Escorpio ceda buscando tranquilidad, pero si Leo se envalentona, la convivencia se resentirá y acabará convirtiéndose en una batalla campal."}
	if (a=="Escorpio" && b=="Leo") {
		document.getElementById("caja").innerHTML ="A ambos les encanta el dramatismo e impactar y eso les convierte en dos actores a punto de salir a escena. ... Al principio, puede que Escorpio ceda buscando tranquilidad, pero si Leo se envalentona, la convivencia se resentirá y acabará convirtiéndose en una batalla campal."}
    if (a=="Leo" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Leo aportará seguridad al emocional Piscis, que se sentirá encantado en el reino dorado del Rey de la selva y este disfrutará de todo el manantial de atenciones que le brinda Piscis. Son sin duda un felino y un pez que se adorarán."}
	if (a=="Piscis" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Leo aportará seguridad al emocional Piscis, que se sentirá encantado en el reino dorado del Rey de la selva y este disfrutará de todo el manantial de atenciones que le brinda Piscis. Son sin duda un felino y un pez que se adorarán."}
    if (a=="Leo" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Ambos signos forman un mismo eje zodiacal, siendo cada uno el complemento natural del otro, pero para que esto se note en la convivencia, además de la atracción que les une, deberá existir también la mutua confianza y el deseo de compartir una vida con similares alicientes y deseos"}
	if (a=="Acuario" && b=="Leo") {
		document.getElementById("caja").innerHTML ="Ambos signos forman un mismo eje zodiacal, siendo cada uno el complemento natural del otro, pero para que esto se note en la convivencia, además de la atracción que les une, deberá existir también la mutua confianza y el deseo de compartir una vida con similares alicientes y deseos"}
    /*---------*/
    if (a=="Géminis" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Al signo Géminis le encanta la variedad y la conversación, y una pareja de dos disfrutará haciendo planes para realizar viajes, hacer cambios en la casa, organizar reuniones con amigos etc... Sin embargo, es aconsejable que intenten controlarse un poco para evitar, que su vida tenga muchísimos cambios y mucha acción a costa de estabilidad y sosiego."}
	if (a=="Géminis" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos muy distintos que compaginan muy bien en el terreno intelectual. Además, trabajando juntos forman un equipo envidiable, tanto, que se pasan horas y horas en la cama hablando de sus sueños y de la manera de materializarlos."}
	if (a=="Capricornio" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Se trata de dos signos muy distintos que compaginan muy bien en el terreno intelectual. Además, trabajando juntos forman un equipo envidiable, tanto, que se pasan horas y horas en la cama hablando de sus sueños y de la manera de materializarlos."}
    if (a=="Géminis" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="La compatibilidad de Géminis y Piscis es como la que poseen cerebro y corazón. ... Lo uno y lo otro hacen que vean y vivan la vida de formas muy distintas: Piscis se mueve más por impulsos e intuiciones; Géminis, sin embargo es terriblemente racional en comparación, basando sus decisiones en cosas más tangibles."}
	if (a=="Piscis" && b=="Géminis"){
		document.getElementById("caja").innerHTML ="La compatibilidad de Géminis y Piscis es como la que poseen cerebro y corazón. ... Lo uno y lo otro hacen que vean y vivan la vida de formas muy distintas: Piscis se mueve más por impulsos e intuiciones; Géminis, sin embargo es terriblemente racional en comparación, basando sus decisiones en cosas más tangibles."}
	if (a=="Géminis" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida. Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte."}
	if (a=="Acuario" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida. Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte."}
	if (a=="Géminis" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad básicas de ambos signos."}
	if (a=="Tauro" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad básicas de ambos signos."}
	if (a=="Géminis" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Si Géminis cede protagonismo y acepta al Escorpión, pueden ser una pareja especial. Son dos signos muy particulares y eso queda muy patente en cuanto se encuentran frente a frente. ... La rapidez mental de Géminis unida a la intensidad con que se entregará Escorpio, hará que formen una pareja muy sólida."}
	if (a=="Escorpio" && b=="Géminis") {
		document.getElementById("caja").innerHTML ="Si Géminis cede protagonismo y acepta al Escorpión, pueden ser una pareja especial. Son dos signos muy particulares y eso queda muy patente en cuanto se encuentran frente a frente. ... La rapidez mental de Géminis unida a la intensidad con que se entregará Escorpio, hará que formen una pareja muy sólida."}
    /*----------*/
    if (a=="Acuario" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Ya que no hay ningún signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular. Acuario es extrovertido, sociable y le encanta formar parte de un grupo."}
	if (a=="Acuario" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Es una relación con un grado de compatibilidad no muy alto, principalmente porque son dos almas muy distintas. ... La impulsividad de Piscis a la hora de demostrar su cariño, tanto en público como en privado, puede hacer que Acuario se sienta incómodo y se distancie."}
	if (a=="Piscis" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Es una relación con un grado de compatibilidad no muy alto, principalmente porque son dos almas muy distintas. ... La impulsividad de Piscis a la hora de demostrar su cariño, tanto en público como en privado, puede hacer que Acuario se sienta incómodo y se distancie."}
	if (a=="Acuario" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="La compatibilidad entre Capricornio y Acuario puede ser bastante alta. Los Acuarios son creativos, hábiles y tienen una gran capacidad de adaptación a los cambios de su entorno y de su vida en general y son capaces de comprender cada detalle de cada situación."}
	if (a=="Capricornio" && b=="Acuario") {
		document.getElementById("caja").innerHTML =	"La compatibilidad entre Capricornio y Acuario puede ser bastante alta. Los Acuarios son creativos, hábiles y tienen una gran capacidad de adaptación a los cambios de su entorno y de su vida en general y son capaces de comprender cada detalle de cada situación."}
	if (a=="Acuario" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Se trata de una combinación algo compleja pues la naturaleza cambiante y llena de reformas de Acuario choca con el sentimiento estático de la vida de Tauro. ... Tampoco combinan bien el gusto de Tauro por la comodidad y estabilidad material, frente al afán de Acuario por vivir cambios y nuevas experiencias."}
	if (a=="Tauro" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Se trata de una combinación algo compleja pues la naturaleza cambiante y llena de reformas de Acuario choca con el sentimiento estático de la vida de Tauro. ... Tampoco combinan bien el gusto de Tauro por la comodidad y estabilidad material, frente al afán de Acuario por vivir cambios y nuevas experiencias."}
	if (a=="Acuario" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="Ambos están predispuestos al flechazo. Escorpio ve en el signo del Aguador a una persona increíble, llena de matices, excitante y sugerente e incluso extravagante, algo que le seducirá y maravillará a la par. ... Y Escorpio no dar ni una muestra de celos a Acuario."}
	if (a=="Escorpio" && b=="Acuario") {
		document.getElementById("caja").innerHTML ="Ambos están predispuestos al flechazo. Escorpio ve en el signo del Aguador a una persona increíble, llena de matices, excitante y sugerente e incluso extravagante, algo que le seducirá y maravillará a la par. ... Y Escorpio no dar ni una muestra de celos a Acuario."}	
    /*---------*/
    if (a=="Piscis" && b=="Capricornio") {
		document.getElementById("caja").innerHTML ="Capricornio estará encantado con el amor y la ternura que Piscis desplegará hacia él. ... Mientras, Piscis encontrará estabilidad en sus emociones y también en las cuestiones más prácticas y domésticas. Pueden llegar a complementarse y a ser muy felices juntos."}
	if (a=="Capricornio" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Capricornio estará encantado con el amor y la ternura que Piscis desplegará hacia él. ... Mientras, Piscis encontrará estabilidad en sus emociones y también en las cuestiones más prácticas y domésticas. Pueden llegar a complementarse y a ser muy felices juntos."}
	if (a=="Piscis" && b=="Tauro") {
		document.getElementById("caja").innerHTML ="Le encanta su manera de enfocar la realidad, sus pies siempre en el suelo y Tauro se siente intrigado por un signo tan visceral y extraño. Relación fecunda y duradera, en la que Piscis disfrutará de una agradable estabilidad emocional y Tauro de la ternura y comprensión que anhela."}
	if (a=="Tauro" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Le encanta su manera de enfocar la realidad, sus pies siempre en el suelo y Tauro se siente intrigado por un signo tan visceral y extraño. Relación fecunda y duradera, en la que Piscis disfrutará de una agradable estabilidad emocional y Tauro de la ternura y comprensión que anhela."}
    if (a=="Escorpio" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="La atracción de Escorpio y Piscis es irresistible, una unión con todas las posibilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente."}
	if (a=="Piscis" && b=="Escorpio") {
		document.getElementById("caja").innerHTML ="La atracción de Escorpio y Piscis es irresistible, una unión con todas las posibilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente."}
    if (a=="Piscis" && b=="Piscis") {
		document.getElementById("caja").innerHTML ="Sin duda se sentirán atraídos el uno por el otro con la seguridad recíproca de haber encontrado el amor de su vida y, seguramente, será así por mucho tiempo, sobre todo si basan la relación en un amor tranquilo y complaciente que les ayuda a crecer."}
    /*----------*/
    if (a=="Capricornio" && b=="Capricornio"){
		document.getElementById("caja").innerHTML ="Se trata de una relación muy equilibrada de dos personas prácticas, cautelosas y reservadas con unos criterios y puntos de vista muy afines. Además, ambos comparten un sentido del humor muy particular que les hará sentir una entrañable complicidad en muchos aspectos de la vida; y de ahí al amor sólo hay un paso."}
	if (a=="Capricornio" && b=="Tauro"){
		document.getElementById("caja").innerHTML =	"Son dos almas compatibles que se respetan y se admiran mutuamente. Ambos ven la vida desde la perspectiva más práctica que existe y coinciden en muchos aspectos de la existencia."}
	if (a=="Tauro" && b=="Capricornio"){
		document.getElementById("caja").innerHTML =	"Son dos almas compatibles que se respetan y se admiran mutuamente. Ambos ven la vida desde la perspectiva más práctica que existe y coinciden en muchos aspectos de la existencia."}
	if (a=="Capricornio" && b=="Escorpio"){
		document.getElementById("caja").innerHTML ="Aunque es un signo de Agua y otro de Tierra, son dos signos que se compenetran bastante bien e incluso ambos pueden llegar a ser la pareja ideal que decide compartir su vida en lo bueno y en lo malo."}
	if (a=="Escorpio" && b=="Capricornio"){
		document.getElementById("caja").innerHTML ="Aunque es un signo de Agua y otro de Tierra, son dos signos que se compenetran bastante bien e incluso ambos pueden llegar a ser la pareja ideal que decide compartir su vida en lo bueno y en lo malo."}
   if (a=="Tauro" && b=="Tauro"){
		document.getElementById("caja").innerHTML ="La compatibilidad entre Tauro y Tauro es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relación."}
    if (a=="Tauro" && b=="Escorpio"){
		document.getElementById("caja").innerHTML ="Son dos signos opuestos que sienten una atracción física y psíquica al momento. La relación puede ser fecunda y apasionada pero para que Tauro pueda sentirse seguro del terreno que pisa y las emociones de Escorpio no se desborden, es fundamental que ambos respeten sus libertades básicas."}
	if (a=="Escorpio" && b=="Tauro"){
		document.getElementById("caja").innerHTML ="Son dos signos opuestos que sienten una atracción física y psíquica al momento. La relación puede ser fecunda y apasionada pero para que Tauro pueda sentirse seguro del terreno que pisa y las emociones de Escorpio no se desborden, es fundamental que ambos respeten sus libertades básicas."}
	if (a=="Escorpio" && b=="Escorpio"){
		document.getElementById("caja").innerHTML ="El suyo puede ser un amor épico, de novela, al que no le faltarán desatinos, tormentos, melodrama y una pasión sin freno que puede llevar a ambos a hacer todo tipo de locuras. La convivencia estará repleta de sobresaltos, rupturas pasajeras y ardientes reconciliaciones."}
	

}