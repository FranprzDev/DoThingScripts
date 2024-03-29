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
Ey, yeah, ah-oouooh
She don't give a fo, oh
She don't give a fo, oh-oh
Sabe que la quiero, pero she don't give a fo
Quizás es el miedo, pero she don't give a fo
Quiere a alguien con futuro, sin tanto cambio de humor
O eso es lo que creo, pero she don't give a fo

She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo

Soy un yonki loco por su coca
Aprovechá mis horas que son pocas
Cuando pasemo' esa puerta, mi loca
Te vas a hacer la que na' de esto te importa
Y termino de nuevo con otra
Ya ni quiero sacarle la ropa
Dejé de darle beso' en la boca
Quiero la reina, no un cuatro de copas
'Toy caliente, y estoy frío
No se llena este vacío
Girl, quereme just a little bit
Mi heroína en este lío

'Toy caliente, y estoy frío
No se llena este vacío
Girl, quereme
Mi heroína en este lío

Y si te digo que esta pena que siento
Sólo me la pueden sacar tus besos
Y si te digo que puedo morirme feliz
Mientras sea culpa de tu sexo
Y si te digo que el resto nos mira
Como si estuvieran odiando lo nuestro
Y veo tu cara que no te importa nada
Como si hubiera nacido pa' esto

Ella es una diabla
Me ve, me besa, después no me habla
Noche de sexo, días sin palabras
Ando perdido por culpa 'e esa diabla

Ella es una diabla
Me ve, me besa, después no me habla
Noche de sexo, días sin palabras
Ando perdido por culpa 'e esa diabla

Sabe que la quiero, pero she don't give a fo
Quizás es el miedo, pero she don't give a fo
Quiere a alguien con futuro y sin tanto cambio de humor
O eso es lo que creo, pero she don't give a fo

She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo
She don't give a fo, baby, she don't give a fo

No hagas que vaya a buscarte
Y te diga to' lo que siento
Baby, no quiero frenarte
Ya no me alcanza el tiempo
Ya no es lo mismo que ante'
Ahora mato por tu cuerpo
Ahora mato por tu cuerpo
Baby, juro que no miento

Y si quieres dímelo
Diabla, sólo dímelo
Sé que sobran ganas
Pero siempre hay algo que mata lo de lo' do'

Y si quieres dímelo
Diabla, sólo dímelo
Sé que sobran ganas
Pero siempre hay algo que mata lo de lo' do'

She don't give a fo
She don't give a fo-fo
She don't give a fo-fo
She don't give a fo

She don't give a fo-fo
She don't give a fo-fo
She don't give a fo-fo
She don't give a fo
Oh-oh, oooh, oh
She don't give a fo-oh-oh
She don't give a fo-oh-oh
Oooh, oh-oh-oh
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)