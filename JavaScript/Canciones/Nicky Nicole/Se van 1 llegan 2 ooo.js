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
Si no hay más na' que hablar de mí
Si todo te lo di
Cuando me fui te vi venir
Te vi venir, te vi venir

Se va uno y llegan do', oh
Do', oh, do', oh
Yo sé lo que busca' y sé que se luzca solo (oh-oh—)
Solo (oh-oh—), solo

Y no hay más nada que hablar
Tú me fallaste a mí
El karma te hará pagar
No puedo salvarte de ti

Voy a dejarme, y si pasa, que pase (oh)
Yo manejo los tiempo', tú no va' a tumbarme (oh-oh)
Yo no voy a dejarme, sé lo poco que vale
Yo manejo los tiempo', pa

Se va uno y llegan do', oh (do-do-do—)
Do', oh (do-do-do—), do', oh (no, no, no, no)
Yo sé lo que busca' y sé que se luzca solo (oh-oh—)
Solo (oh-oh—), solo

Y no hay más nada que hablar (que hablar)
Tú me fallaste a mí
El karma te hará pagar
No puedo salvarte de ti

Si todo te lo di
Yo ya lo vi venir
Te vi venir-nir-nir-nir
Te vi venir

Dámelo, ey
Oh, oh-oh, oh-oh-oh
Oh-oh-oh, oh-oh-oh
Oh, oh-oh, oh-oh-oh
Oh-oh, oh-oh, oh
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)