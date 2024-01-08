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
Gang, damn, shkere, uoh!
Bunny, bunny, damn, damn
Bullet, bullet, prra, prra!

Me ahogo en la porquería porque hace tiempo tengo el corazón roto
Pero bueno que cosa mía, tengo esta manía que me tiene muy loco
Tamos' en la florería y tengo una María que es una flor de loto
Cuidao' que pega como cotto
Cuidao' que pega como cotto

Tengo las manos vacías
Si hay una alcancía, digan dónde que la exploto
Fuck la policía, me sigue la CIA
Si me está escuchando: Hello moto
Quiere medicina, larry se la busca
Dígame cuanto que se la anoto
Cuidao' que pega como cotto
Cuidao' que pega como cotto

Mi music pega como cotto, como molly poderosa
Endemoniado estoy que floto, como si tomo es la rosa
Tus gangsters a control remoto, hablan mucho y hacen poco
Para mí no son gran cosa, si me tiran no los no-no-noto

Siempre cara para foto, nunca sé bien lo que pasa
Estoy tumbado que me pesa, la locura no se pasa
La ansiedad tanto me estresa, que desde ahora vivo en casa
Con GTA como piloto, cuidao' que pega como cotto

Soy de los pibes del fondo, de los adicto' al quilombo
Mejor no ronquen con mi combo, que son todos locos y no me opongo
No me nombres, no los nombro, con mis hombres a los hombros
Se van al sobre, yo no sobro
De pobre a rico como rondó

Ya me conocen como el monstruo
Mi flow no encaja con mi rostro
O soy Jesús o soy apóstol
O soy del bronx o soy de boston
La semillita no es de arroz, toy
Vos dale fuego que esto es popcorn
Moños dorados, puro porno
No estoy drogado, estoy al horno

Y lo que dicen de mí no me importa na' (nada)
Y lo que dicen de mí me tiene sin cuidao', ao ah ah ah ao

Me ahogo en la porquería porque hace tiempo tengo el corazón roto
Pero bueno que cosa mía, tengo esta manía que me tiene muy loco
Tamos' en la florería y tengo una María que es una flor de loto
Cuidao' que pega como cotto (cotto)
Cuidao' que pega como cotto (cotto)

Tengo las manos vacías
Si hay una alcancía, digan dónde que la exploto
Fuck la policía, me sigue la cia
Si me está escuchando: Hello moto
Quiere medicina, larry se la busca
Dígame cuanto que se la anoto
Cuidao' que pega como cotto
Cuidao' que pega como cotto

Pide la escena yo que la facture
Que esté pegao', el que más facture
¿Pa' que criticar? Mejor man maduren
La mente en ganar como yaya touré
No existe ser que esté mal no cure
Quise cambiar, pero má' no pude
Están preocupao' por mi auto-tune
Y yo por la pena de tantos lunes

Mama solo pide que yo no fume
No sirve de nada que en vano jure
Hacer cosas que tiempo atrás no pude
Duki dispara aunque Mauro dude

Soy el niño, el año, morocho achinado
Llevo el doble caño, flow polarizado
¿Qué onda con tu clicka? ¿Tienen abogado?
Llámalo a burlando que yo estoy burlao'
Coroné botellas con el primer pago
En el segundo zapas, en el tercero gramos
Con el cuarto el kilo, ven de lo que hablamos
Con un poco es estilo, acá to' lo logramos

Los tengo afuera con el perro atado
Esperando a que calle pa' meter un bocao'
Y no es que no la escucho por ser malcriado
Es que acá todos mienten y soy desconfiado
Que me mame el bicho, estoy malandrizado
El bando es Venezuela está para mi lado
Con estudios pagos y no estoy becado
No llevo una cruz, pero vivo cruzado (prra, prra!)

Me ahogo en la porquería porque hace tiempo tengo el corazón roto
Pero bueno que cosa mía, tengo esta manía que me tiene muy loco
Tamos' en la florería y tengo una María que es una flor de loto
Cuidao' que pega como cotto, cuidao' que pega como cotto

Tengo las manos vacías
Si hay una alcancía, digan dónde que la exploto
Fuck la policía, me sigue la cia
Si me está escuchando hello moto
Quiere medicina, Larry se la busca
Dígame cuanto que se la anoto
Cuidao' que pega como cotto
Cuidao' que pega como cotto
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)