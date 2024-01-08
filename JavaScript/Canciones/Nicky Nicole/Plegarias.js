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
Te encontré plasmado
Culpable
Deteriorado
Nunca tan amable

Yo voy del infierno al Sol
Que vuelvo por ti, si no, no lo intento
Buscame, no diga adiós
Que solo por ti, yo le rezo

Yo voy del infierno al Sol
Que solo por ti, yo vuelvo
Buscame cuando haya amor
Que solo por ti, a Dios le rezo

Llorando en las iglesias
Rogándole a Dios
Que tenga paciencia
Que no se olvide de vos

¿Quién mató tu inocencia hoy?
Dime dónde está el asesino del cuento
Yo voy buscando el final
La historia de hoy, yo te la cuento

Si voy, calor infernal
Desencuentro fatal que ya no te veo
Si estás, empieza a gritar
Comienzo a pensar que ya no te siento

Ay, ay
Me duele muy dentro del corazón
Ay, ay
Enciendo y pretendo que actúe como yo

Yo voy del infierno al Sol
Que vuelvo por ti, si no, no lo intento
Buscame, no diga adiós
Que solo por ti, yo le rezo

Yo voy del infierno al Sol
Que solo por ti, yo vuelvo
Buscame cuando haya amor
Que solo por ti, a Dios le rezo

A Dios le rezo, caigo en los tiempos
Ya no me importa perderme muy dentro
Te tengo en mi mente todo el tiempo
Todo el tiempo, estallo por dentro

Y mi corazón se encuentra fatal
Que tú ya no me quiere'
Esta mierda me va a matar
Que voy por el mundo, vacía
Pensando en sanar esta herida hoy

Yo voy del infierno al Sol
Que vuelvo por ti, si no, no lo intento
Buscame, no diga adiós
Que solo por ti, yo le rezo

Yo voy del infierno al Sol
Que solo por ti, yo vuelvo
Buscame cuando haya amor
Que solo por ti, a Dios le rezo
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)