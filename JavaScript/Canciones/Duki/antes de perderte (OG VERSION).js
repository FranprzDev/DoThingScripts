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
This is the Big One

Y me acuerdo de esas madrugadas a ciento sesenta por la autopista
Y llegábamos al show, y rompíamos el club, no había más problemas a la vista
Y me acuerdo la cara que hacías para que me ría en medio de la entrevista
Y hacíamos el amor en lugares prohibidos anotándolos en una lista

Fuiste vos la primera que dijo que yo había nacido pa' ser artista
Y también que iba a ser un problema a futuro para los dos, siendo realista
De la pena y tristeza que tuve en mi vida te hiciste cronista
Eramo' una banda y ahora soy solista

Wake up in a new city
Entre tour y disco no me queda un minute
Te pienso cada vez que prendo un Phillie
Con el cora' roto, pero igual estoy chill
Mi reina egipcia, Nefertiti
No tengo tiempo pa' esa bichie
Subimos de level, Avicii, yea-yea

Lo nuestro no se acaba ni después de la muerte
Me bajé del avión, voy corriendo para verte
Tal vez tú no te fuiste y yo tengo la suerte
De hacer que me perdones antes de perderte

Un día prometimos que sería pa' siempre
La lealtad es algo que muchos no lo entienden
Tal vez tú no te fuiste y yo tengo la suerte
De hacer que me perdones antes de perderte

Esquivando las cámaras
Vacaciones en Niágara
Voy para Canadá, ah-ah
Bajándote canciones en formas de párrafas, ah

Por amar, por amar
Traje esta letra en mi nave espacial
¿Qué lo wa, qué lo wa?
Si él te lastima, lo voy a matar

Y sigo buscando el sentido
A las mentiras que nos dijimos
Extraño más los tiempos cuando éramo' amigos
Cuando te llevaba a to' lados conmigo

Y a-, y a-, y a veces lo pienso
Y no, y no, juro que no lo entiendo
Si yo, si yo di todo por esto
¿Por qué terminé como otro del resto?

Lo nuestro no se acaba ni después de la muerte
Me bajé del avión, voy corriendo para verte
Tal vez tú no te fuiste y yo tengo la suerte
De hacer que me perdones antes de perderte

Un día prometimos que sería pa' siempre
La lealtad es algo que muchos no lo entienden
Tal vez tú no te fuiste y yo tengo la suerte
De hacer que me perdones antes de perderte, yea

Un día sin ti es un año perdido
Si no me salvo de esta, lo mato a Cupido
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)