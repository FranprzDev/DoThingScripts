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
Yeah-yeah-yeah-yeah, yeah-yeah-yeah-yeah
Quevedo con el Linton, mai
La mente rozando el sky, yeah

Linton, suelta la trompeta que siempre que lo hace es un palo, eh
LPGC, you know
Esta vida, mami, es un regalo
La isla se robó el show

Yo que solamente puse mi mano
Y Diosito me entregó el don
Te juro que se siente muy cabrón
Que tus colеga' sean tu inspiración

Solo éramo' cuatro trabajando en esta mierda cuando eran tiempos de comienzo
Y to' está pasando muy rápido, me da vértigo cada ve' que lo pienso
Pero se me pasa cuando recuerdo todo el sacrificio y esfuerzo, yeah
O cuando ella me da un beso cada vez que me pongo tenso

El día que me junté con Sergi sabía de sobra que haríamo' historia
Grábamo' mil palos, reímo', lloramo'
Papi, y el resto es historia, yeah, yeah
Momentos que nunca se nos irán de la memoria
LI LB, mami, aka: Los favoritos de tu novia

Nunca me olvido de los que estuvieron en los tiempo' que estaba mal
De party con Rosito y Edu cuando la clika pisa la capital
Si un día muero, quiero que WOS y Saot hablen en mi documental
Confiaron en mí cuando no era nadie
Confiaron en mí cuando no había na'

Mami, ahora tenemo' de to'
Tenemo' pa' escoger
Ya ni intenten hablar con Félix, él tampoco va a coger

2021, sembrar
2022, recoger
2023, coronar
2024, desaparecer, yeah

Mami está tranquila, papi está tranquilo
¿Qué más quiero?
El dinero no me pone contento aunque ofrezcan siete cero'
La Porsche Cayenne color vino
Asientos de cuero
Pega'o en la isla, pega'o en España
Pega'o en el mundo entero

En el colegio mi hermana frontea de ser mi hermana, yeah
Mi otra hermana también frontea de ser mi hermana, yeah
Mi piba frontea, se saca fotos en mi cama, yeah
Y la mamá no frontea, pero podría hacerlo por ser mi mamá

Me río porque habla de mí y eso que ni me ven
Y yo escribiendo y fumando me vi en la cima sin querer
Y ahora solamente se ve la punta del iceberg
Papi, no hay uno más duro
Si es que lo hay, dime quién

Yeah-yeah, yeah-yeah-yeah
Quevedo con el Linton, mai
Yeah
LPGC, you know

Linton, suelta la trompeta que siempre que lo hace es un palo, eh
LPGC, you know
Esta vida, mami, es un regalo
La isla se robó el show

Yo que solamente puse mi mano
Y Diosito me entregó el don
Te juro que se siente muy cabrón
Que tus colega' sean tu inspiración

Solo éramo' cuatro trabajando en esta mierda cuando eran tiempos de comienzo
Y to' está pasando muy rápido, me da vértigo cada ve' que lo pienso
Pero se me pasa cuando recuerdo todo el sacrificio y esfuerzo, yeah
O cuando ella me da un beso cada vez que me pongo tenso
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)