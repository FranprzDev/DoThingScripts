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
¡Duko!
This is de Big One, baby

Me puse mis mejores Jordan
Un nombre italiano escrito en la correa
Los diamantes brillan con la combi nueva
Y me sube la nota cuando la canción suena

Te estuve buscando, pero no te encontré
Necesito tu número, que alguien me lo dé
Es que quiero enseñarte un par de cosas que sé
Dame tu location pa' caer de una vez

(Everything Foreign, haha)

Más plata, más gasto
Más ropa, más pasto
Más marca, más trato'
Nuevo deal, contrato

Gano y lo reparto
En pedazo' exacto'
No se me hunde el barco
Trafico y no soy narco

Tengo a lo' míos hablando italiano
De lunes a viernes solo comen pasta
Tengo a mis hater' diciéndome basta
Modo Ginóbili, no erro canasta

Que se joda el sistema de casta
A esfuerzo se gana y a gusto se gasta
Estábamo' abajo y ahora estoy en alta
Si no se corren, el Duko lo' aplasta

Me voy a poner más borracho que nunca
Me fui pa' Givenchy y me gasté la funda
Le escribo unas barra' a mi abuela difunta
Ángeles me lloran mientras que me apuntan

Los estoy bloqueando, que cambien de ruta
El odio en su cara, mi cuerpo disfruta
Entro al estudio con calma absoluta
Los míos lo escuchan, dicen: Qué hijo 'e puta

En este funeral, voy negro como Venom
Con mi double cup, soy adicto al veneno
Soy 4x4, soy todoterreno
Me dicen la bestia, para esto soy bueno

Sé frontear, pero no exagero
Llegué a cien, vine desde cero
Dólares desde el extranjero
Hice que quieran ser rapero'

Más plata, más gasto
Más ropa, más pasto
Más marca, más trato'
Nuevo deal, contrato

Gano y lo reparto
En pedazo' exacto'
No se me hunde el barco
Trafico y no soy narco

Me voy pa' Miami y me queda cabrón
Me fui para España y me queda cabrón
Me voy para Italia y me queda cabrón, ah
Es que soy un cabrón

En esta liga, yo sería LeBron
Al equipo más chico, lo saqué campeón
Ya van cinco año', qué fresco que estoy
Hago que parezcan más viejo' que yo

Querían que quiebre, querían que enferme
Me puse más fuerte, me puse más jefe
Me puse pa'l cheque, me puse pa'l efe
Los diamante' VV' y las zapa' con refle'

Si me ven creído, es que soy argentino
Si ven mi ropero, parezco italiano
Cuenta' más alta' que montes andinos
Si tengo más fe que todo el Vaticano

Nos llevamo' todo, por eso venimo'
La ropa, los culo', los kilo' y los gramo'
Le di 360, la vuelta al destino
Subí y lo logramo'

Mi chica también usa Jordan
Y le gusta pasear en la alfombra
Y le gusta dejarlo' a las sombra'
Fuck that, los tuyo' a los mío', no los nombran

En las zapa' tengo un par de cobra'
Le canto a la Sandra como a Donda
Y espero que Kanye me responda
Y los míos esperan otra ronda

Fuck that, mi chaleco Moncler es aprueba de balas
Ballin' la liga, soy Dončić en Dallas
'Tamo bien, 'tamo trendy
Con un par de shows, compré un Bentley

Si me tiran, no me ofendí
Llego al hotel y no le gusta el humo
Pero lo transformamo' en humo friendly

Es el Duko, you know
Ya supiste, mami
Espero que hayan disfrutado Temporada de Reggaeton
Temporada de Diablos coming soon
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)