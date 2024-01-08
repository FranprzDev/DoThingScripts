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
(Rain)
(He wanted it comfortable, I wanted that pain)
(He wanted a bride, I was making my own name)
(Chasing that fame, he stayed the same)
(All of me changed like midnight)

My town was a wasteland
Full of cages, full of fences
Pageant queens and big pretenders
But for some, it was paradise

My boy was a montage
A slow-motion, love potion
Jumping off things in the ocean
I broke his heart 'cause he was nice
He was sunshine, I was midnight

(Rain)
(He wanted it comfortable, I wanted that pain)
(He wanted a bride, I was making my own name)
(Chasing that fame, he stayed the same)
(All of me changed like midnight)

It came like a postcard
Picture perfect shiny family
Holiday peppermint candy
But for him, it's every day

So I peered through a window
A deep portal, time travel
All the love we unravel
And the life I gave away
'Cause he was sunshine, I was midnight

Rain
He wanted it comfortable, I wanted that pain
He wanted a bride, I was making my own name
Chasing that fame, he stayed the same
All of me changed like midnight

(Rain)
(He wanted it comfortable, I wanted that pain)
(He wanted a bride, I was making my own name)
(Chasing that fame, he stayed the same)
(All of me changed like midnight)

I guess sometimes we all get
Just what we wanted, just what we wanted
And he never thinks of me
Except for when I'm on TV

I guess sometimes we all get
Some kind of haunted, some kind of haunted
And I never think of him
Except on midnights like this
(Midnights like this, midnights like this)
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)