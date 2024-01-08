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
Me queda bien cuando me mienten
Me queda bien ser el de siempre
Me queda bien to' lo que inventen, yeah
Me queda bien

Me queda bien cuando me mienten
Me queda bien ser el de siempre
Me queda bien to' lo que inventen
Me queda bien, yeah, yeah, yeah

Mami, dale, agarrame la' mano', sentir el calor que como tos' nos miran
Que si al menos vos estás a mi lado se me hace más fácil afronta' esa vida
Estos blancos ahora quieren matarnos porque no toleran vernos tan arriba
Yo fronteando, contando lo que vivo sin tener que poner contar mentiras, eh, yeh

Y ahora vivo en la mansión
A pocas cuadras de mi avenida
Casi que la veo desde el balcón
Mientras estoy quemando porquería

¿Que quién me creo que soy?
El mejor, al menos en estos días
Cada liga tiene su Jordan y es obvio que yo soy el de la mía

Yo no tengo seriedad, niño lombardo simpatía
Liga Italia, serie A, Niño Icardi, buena vida
¿Qué como me van a bajar? Si es que yo nací arriba
¿Qué como me van a bajar? Si soy dueño de la liga

Fuck your feelings, I'm a rockstar
Ya me siento como un rockstar
Cojo putas como un rockstar
Tomo pastillas como un rockstar

Fuck your feelings, I'm a rockstar
Ya me siento como un rockstar
Cojo putas como un rockstar
Tomo pastillas como un rockstar

Rockstar
Baby, I'm a rockstar
Baby, I'm a rockstar, yeh, yeh
Yo soy un rockstar, yeh
Yeh, yeh, yeh
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)