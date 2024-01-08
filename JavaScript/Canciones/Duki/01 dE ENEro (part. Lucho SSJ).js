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
That's no player, that's me

Uh
Salí el 1 de enero a la calle, gritando: Es mi año
Contando lana, cuidando el rebaño
Mi ojo derecho detecta el engaño

Uh
Querían ser mi espejo, pero se lo' empaño
Me hace más fuerte to' el que me hace daño
Estoy en la cima y no se me hace extraño

Uh, uh, uh
Mis barras, de piedra, parecen zafiros
Los míos hacen music, los tuyos hacen ruido
Yo soy Molina, el beat de Zecca es el pase de lío

Ah
Los mando a clase con frases del tío
No tienen chances mientras esté vivo
No tienen chances mientras esté

En el top, voy por el number one
Y la cara se le pone white
Ese que dice que me odia
Hace unos meses era fan

Fuiste al enemigo y volviste conmigo
Cuenta te diste, no eras bienvenido
Eso que yo te creía un amigo
Un puñal por la espalda, nunca me lo olvido

Canto en show' hasta de vacaciones
Tantos vuelos que hacemo' ciclone'
Otro tema que vale millone'
Son niveles y son posiciones

Acá todos cumplimos funciones
Pero yo soy el boss, no presionen
En la vida tenemos opciones
Yo elegí no dar explicaciones

De enero a enero, de noche, de día
Haciendo movida'yo ya no los veo
Con 5K encima, parado en la esquina
Es que desde hace tiempo que solo me muevo

Joseo pa' mí y pa' to' el clan
No me olvido de los que no están
Comprando de marcas que cuestan
Ahora coroné la vuelta

Y yo me callo
Buscan respuesta en los números
Me fui acostumbrando
Porque tengo paga ingresando de muy menor
Y eso es así desde que puse el tune en on

Desde el día cero que lo hago por mí
Llevo atra' el peso de mi family
Y de toda la gente que confía en mí
Solo es por eso que parto los beats
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)