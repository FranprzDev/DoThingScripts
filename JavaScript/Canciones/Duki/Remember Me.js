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
KHEA, Duki
(Eh-eh-eh-eh, eh-eh-eh-eh)
Mami, disfruta de esta melody (melody)
Vas a escucharla por la radio and remember me (remember me)
Con un porro en la mano y con mi Hennessy (Hennessy)
Nunca le doy el gusto a mis enemies (yah, yah, yah, yah)
Mami, disfruta de esta melody (melody)
Vas a escucharla por la radio and remember me (remember me)
Con un porro en la mano y con mi Hennessy (Hennessy)
Nunca le doy el gusto a mis enemie'
Y salió el sol en Miami Beach
Ella no puede sacarme 'e su memory (memory)
Y me dejó y ahora no puedo dormir
Ya sabe que vendí el wedding ring
Y pasó un auto con mi song en la avenue (en la avenue)
Ya no la extraño, ahora hay una new (hay una new)
¿Qué están hablando? Si los dejé a todo' en mute (a todo' en mute)
Solo dicen: "El Duko es un hijo 'e pu-"
Y no hay alguien que te quiera
Como lo hacía yo, aunque fue a mi manera
Es que ya le di la vuelta (di la-, di la vuelta)
Si estoy en la mía, a mí nadie me frena (rra, rra, rra)
A la salida del club
Ella se vino conmigo porque soy su starboy
Ya no queda más dolor
Y ahora 'tamo en las buena'
Pero en las mala' fuimo' unos warrior'
Mami, disfruta de esta melody
Vas a escucharla por la radio and remember me
Con un porro en la mano y con mi Hennessy
Nunca le doy el gusto a mis enemies (yeah)
Ya saben que yo voy a morirme rico (rico)
La plata es energía y yo la multiplico (un melón y pico)
En una canción, ¿cómo te lo explico? (Prr, prr, prr)
Una visión, decisión por mi mismo
Y ahora me paso soñando sonando long life (Sike!)
Desde el 2017 rompo to' los lives, yeah, ah
'Toy con más colores que una butterfly, yeah
Mami, estoy pisteando como en Mario Kart, yeah, ah
Sigo pensando en ella que me ama pero estoy mejor lonely
Tiré la casa por la ventana, lo siento, lo hago por mí
Capaz que la cruzo en un futuro con la vida más chill
Sabe que vendí el wedding ring
Mami, disfruta de esta melody (melody)
Vas a escucharla por la radio and remember me (remember me)
Con un porro en la mano y con mi Hennessy (Hennessy)
Nunca le doy el gusto a mis enemies
Mami, disfruta de esta melody
Vas a escucharla por la radio and remember me (me)
Con un porro en la mano y con mi Hennessy (Hennessy)
Nunca le doy el gusto a mis enemies
¡Bizarrap!
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)