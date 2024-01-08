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
We could leave the Christmas lights up till January
This is our place, we make the rules
And there's a dazzling haze, a mysterious way about you, dear
Have I known you 20 seconds or 20 years?

Can I go where you go?
Can we always be this close, forever and ever?
And ah, take me out, and take me home
You're my, my, my, my
Lover

We could let our friends crash in the living room
This is our place, we make the call
And I'm highly suspicious that everyone who sees you wants you
I've loved you three summers now, honey, but I want 'em all

Can I go where you go?
Can we always be this close, forever and ever?
And ah, take me out, and take me home (forever and ever)
You're my, my, my, my
Lover

Ladies and gentlemen, will you, please, stand?
With every guitar string scar on my hand
I take this magnetic force of a man to be my lover
My heart's been borrowed and yours has been blue
All's well that ends well to end up with you
Swear to be overdramatic and true to my lover
And you'll save all your dirtiest jokes for me
And at every table, I'll save you a seat, lover

Can I go where you go?
Can we always be this close, forever and ever?
And ah, take me out, and take me home (forever and ever)
You're my, my, my, my
Oh, you're my, my, my, my
Darling, you're my, my, my, my
Lover
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)