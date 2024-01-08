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



Colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

Colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

Mambo counter strike, a la cuenta de five
Le apagamo' lo' foco', like bussines life
Vivimo' holiDIE, nada que lamentar
Te miro coloca' a mi vida, restart
Todos quieren estar, uy

Los miro mientras juego Helix Jump (uy)
Me da hambre y yo como mianmian (ey)
Antes no teníamos pa' cenar
Ahora estoy arriba de donde están

Pantalla led, mi name por todas partes
Ninguno va a caer en la peli que te inventaste
Back in the days, intenté avivarte
Una pena que te vendas si se trata de pegarse

Es que estoy colocao'
En una esquina virao', estamo' ya agonizao'
Con el time atrasao'
Los buenos de mi lao', esos feka olvidao'

Le cerramo' to' el telón
(Pero ellos siguen con el show)

Colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

Colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

Con la mente anestesia' (mira, mira, mira)
Aunque me mate buscando, no voy a encontrar

Sabes, no es casualidad
Hacer luz de la fucking oscuridad
Poder salirse un rato de la realidad
Que los malos tiempos duren una eternidad

Sabes, no es casualidad
Yo te juro que en el party no elegí sonar
Yo te juro que a tu boy no le quise gustar
Yo te juro que la music me trajo hasta acá

Es que estoy colocao'
En una esquina virao', estamo' ya agonizao'
Con el time atrasao'
Los buenos de mi lao', esos feka olvidao'

Le cerramo' to' el telón
Pero ellos siguen con el show (uy)

Colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

Es que estoy colocao' como Drake
Fumo solo para quitar el stress
A ese baby ya le hice tres strike'
Todos quieren montarse en la de Naik'

`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)