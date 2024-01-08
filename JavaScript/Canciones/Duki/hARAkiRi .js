async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No hay una conversación abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
(Yesen, 你想吃什麼?)

Me destapé otro Moët
Mi perra viste de Chanel
'Tamo fresco, estamo' bien
Mucho' billete' de cien

Ahora que estamo' en subida
Tenemo' otra perspectiva
Voy con el Duko y todo' miran
Las gata' nos aman, los gato' no' tiran

Me destapé otro Moët
Fumo y grabo en la suite del hotel
Me quieren dar y no me pueden ver
Yo era top five, ahora top tre'

Ahora que estamos en subida
Todo' nos quieren еn su vida
Voy con C.R.O. y nos miran (Duko, you know)

Fumando queso, cheesy
Ellos ratone', Mickеy
Están infecta'o de hepatiti'
Escucho sus tema' y me agarra otiti'

Mi vida una curva, drifting
Estoy como nuevo, liftin'
Antes de salir, el fitting
Te cruzo en la calle en fifteen

Muero en un escenario
En un harakiri vestido de AMIRI
Su futuro es negro, el color de mi iri'
Si estoy con C.R.O. en el estudio, los tema' se montan más grande' que un remix

Andá y advertile', avisale', decile'
Que estoy en la mía juntando los mile'
Los giles que tiren, que opinen, que miren
Que por estos lado' los pibe' la viven

Mis olas de flow te dejan veinte metro'
Debajo del mar, hablando con delfine'
Hago que se retiren y vuelvan tantas vece' a la music
Que les tienen que dar un Guinness

Los tengo enganchao', drug dealer
Esta peli no la ve' en el cine
Lo que hace en un año, lo hago un finde
Mi hermano trajo misile'

Estábamos abajo, ahora estamos en la cima
Ropa de diseñador hecha a mi medida
Estoy con mi hermano, jugando en las grandes ligas
Mezclan el dinero si aterrizo en Argentina

La money me tiene despierto
Gano dinero y lo invierto
Negociador experto
Si no es de dinero, no entiendo

Follow, okey (yeah)
Brilla mi chain (yeah)
Otro champagne (yeah)
¿Dónde está mi Moët?

Voy a beber otro Moët
Voy a compra' un Mercede' Benz
Voy a gastar otro de cien
Voy a fumar en Calvin Klein

Voy a pasarme el puto juego
No me molesta estar primero
Voy a comprar un bolso nuevo
Solo para guardar dinero

Me destapé otro Moët
Mi perra viste de Chanel
'Tamo fresco, estamo' bien
Mucho' billete' de cien

Ahora que estamo' en subida
Tenemo' otra perspectiva
Voy con el Duko y todo' miran
Las gata' nos aman, los gato' no' tiran

Me destapé otro Moët
Fumo y grabo en la suite del hotel
Me quieren dar y no me pueden ver
Yo era top five, ahora top tre'

Ahora que estamos en subida
Todo' nos quieren en su vida
Voy con C.R.O. y nos miran

Fumando queso, cheesy
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)