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
Volvió de estudiar en Columbia
A la isla, sin nada que hacer
El año se le hizo largo
Estudió y cumplir su deber
En llamada a su amiga le dice que este verano es pa' beber
Solo quiere salir y de nadie depender

Hasta que me conoció
Ella no se lo esperaba
La vi entrando en la disco
Me devolvió la mirada
Sonrisita nerviosa
Entre besos, se enfadaba
Se le escapó un te quiero a la que no quería nada

Hasta que me conoció
Ella no se lo esperaba
La vi entrando en la disco
Me devolvió la mirada
Sonrisita nerviosa
Entre besos, se enfadaba
Se le escapó un te quiero a la que no quería nada

Bebé, los dos sabemos que es verano
Y que tal vez, cuando termine agosto, no nos volvemos a ver
Pero quiero tener algo pa' cuando no estés
Así que acumulemos recuerdos

Cada vez que el labio te muerdo
Me empujas y me pegas a la pared
Mirándonos fijamente, como en una última vez
Sé que estudia en la USA y me usa a su merced

Bebé, sé que le tienes
Mucho miedo al compromiso
Y yo también
Quieres olvidarme
Mmm, ódiame si eso te ayuda
Pero, ma, me entran dudas
Porque sé que solo tú
Te ríes mientras chingamos en el cuarto a poca luz
Nos echamos la última copa
Y dale, cuídese, salud
Y eso que sentimental nunca ha sido su actitud

Hasta que me conoció
Ella no se lo esperaba
La vi entrando en la disco
Me devolvió la mirada
Sonrisita nerviosa
Entre besos, se enfadaba
Se le escapó un te quiero a la que no quería nada

Estoy reviviendo to' lo que hicimos este verano
La playa de la mano, los besos sin te amo
Haciéndolo hasta tarde pa' levantarnos temprano
Cantabas mis temas mientras yo tocaba el piano

La isla se hizo pequeña cada vez que nos miramos
Escuchando reggaetón a 180 en cualquier tramo
Ella se va, pero espero que nada sea en vano
Nunca había tenido algo tan sano

Hasta que me conoció
Ella no se lo esperaba
La vi entrando en la disco
Me devolvió la mirada
Sonrisita nerviosa
Entre besos, se enfadaba
Se le escapó un te quiero a la que no quería nada

(Volvió de estudiar en Columbia)
(A la isla, sin nada que hacer)
(El año se le hizo largo)
(Estudió y cumplir su deber)
(En llamada, su amiga le dice que este verano es pa' beber)
(Solo quiere salir y de nadie depender)
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)