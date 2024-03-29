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
[Neo Pistéa]
Eh
(Ehhh-ehh-eyy) (#ModoDiablo, eh-eh, ey)
(Tony) Yo, yo-yo

Te juro que lo vi corriendo, wacho, y quiero que corra de nuevo
El barrio lo sabe, lo vieron running tres cuadras del ghetto
Sigo esperando ese tiro, digo, me lo prometieron
Nadie sabía que corrías tan ligero
Y quiero money, dinero, para mamá el mundo entero
En el hood me las cogí a todas, debo cambiar de hemisferio
Grupo nuevo, ropa nueva, cosas nuevas, todo nuevo
Todo nuevo, nuevo, nuevo, yeh

[Duki]
En el West están vendiendo la de QUAVO
Ropa nueva, joya' nueva', grupo nuevo
Makin' money pa' mi mama por si muero
Y a mi puta díganle que sí la quiero

En el West están vendiendo la de QUAVO
Ropa nueva, joya' nueva', grupo nuevo
Makin' money pa' mi mama por si muero
Y a mi puta díganle que sí la quie-

[Duki, Neo Pistéa y Ysy A]
Si quiere brillar le presento a mi joyero
O a mi contador si hay problema' de dinero
Dicen que voa' ser rico, tantas fechas en enero
Que me sigue la AFIP por mis aumentos financiero' (fi'-fi'-fi')

En el West siempre me compro la de QUAVO
Me saludan to' los dealers cuando llego
Cuando salgo por el barrio soy el Diego (soy el -donna)
Me conocen, me la venden, me la llevo

De-De-Dealer nuevo, data nueva, nada bueno, oh, yeah (yeh-eh)
Ya no es YSY, Duki y Neo, es algo nuevo, oh, yeah (oh, yeh-eh)
Un shout-out pa' GTA que es cocinero
Tanta plata que ahora le queman lo' dedo'
Me mido por la actitud, no por el ego
Como esa blanca 'e tu crew, oh, yeah, que tiene miedo
Que a falta de virtud, oh, yeah, y poco huevo'
Terminaron en el club, oh, yeah, de telonero-ero-ero-ero', yeah
[Ysy A]
Se me acerca una fulana interesada (-sada, oh)
Con ganas de saber qué es el "#ModoDiablo" del que falan (fala', oh)
No hay trabajo, pero sobra pico y pala (pala, oh)
Sé que sus amigas van a dejarla volve' a mi cama
A la mía, a la del Rico, a la del Wana (fala-ah)
Quiere que le dé, voy a volver a correrme en su cara (fala, oh)
La dirección de la mansión censurada (oh, oh, fala)
Muchas putas quieren pipa pero nunca compran nada
¿Por qué? Loca, viniste a comer
Tomar desayuno y tocársela al rey (al re-ey)
Tomarte el asunto de ser, niñera, portera, y chofer (eh)
No me cocines lo mismo que ayer
Bañate tranquila, bañate, ¿okey?
La toalla azul tuya usala y volvé (oh)
Te trajo ropa nueva papi, no él
No gratis, voy flex, me rompo mi money en los pares del mes
'Toy fuckin' flotando y no e' culpa 'e Diaz Velez
Partimo' a otro negge, compramos de a cien
Si enano no activa y el nando está arriba nos vamo' hasta el West
Tu mano perdida, un crupier sin salida
Multipliqué el cien, tengo cien jaguares corriéndome el tren

[Neo Pistéa]
Te juro que lo vi corriendo, wacho, y quiero que corra de nuevo
El barrio lo sabe, lo vieron running tres cuadras del ghetto
Sigo esperando ese tiro, digo, me lo prometieron
Nadie sabía que corría' tan ligero

[Duki y Neo Pistéa]
En el West están vendiendo la de QUAVO
Ropa nueva, joya' nuevas, grupo nuevo
Makin' money pa' mi mama por si muero
Y a mi puta díganle que sí la quiero

En el West están vendiendo la de QUAVO
Ropa nueva, joya' nuevas, grupo nuevo
Makin' money pa' mi mama por si muero
Y a mi puta díganle que sí la quiero

Quiero money, dinero
Para mamá el mundo entero
En el hood me las cogí a todas, debo cambiar (dice)
Debo cambiar, debo cambiar, debo cambiar
(Nuevo, nuevo, nuevo, bebé)
#ModoDiablo, uh
Tony, Duki, YSY, YSY
Dream team
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)