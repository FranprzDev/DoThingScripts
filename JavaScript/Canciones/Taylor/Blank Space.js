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
Once upon a time, the planets and the fates
And all the stars aligned
You and I ended up in the same room
At the same time

And the touch of a hand lit the fuse
Of a chain reaction of countermoves
To assess the equation of you
Checkmate, I couldn't lose

What if I told you none of it was accidental?
And the first night that you saw me, nothing was gonna stop me?
I laid the groundwork and then, just like clockwork
The dominoes cascaded in a line

What if I told you I'm a mastermind?
And now you're mine
It was all by design
'Cause I'm a mastermind

You see, all the wisest women had to do it this way
'Cause we were born to be the pawn in every lover's game

If you fail to plan, you plan to fail
Strategy sets the scene for the tale
I'm the wind in our free-flowing sails
And the liquor in our cocktails

What if I told you none of it was accidental
And the first night that you saw me, I knew I wanted your body?
I laid the groundwork and then, just like clockwork
The dominoes cascaded in a line

What if I told you I'm a mastermind?
And now you're mine
It was all my design
'Cause I'm a mastermind

No one wanted to play with me as a little kid
So I've been scheming like a criminal ever since
To make them love me and make it seem effortless
This is the first time I felt the need to confess
And I swear, I'm only cryptic and Machiavellian
'Cause I care

So I told you none of it was accidental
And the first night that you saw me, nothing was gonna stop me
I laid the groundwork and then, saw a wide smirk
On your face, you knew the entire time

You knew that I'm a mastermind
And now you're mine
Yeah, all you did was smile
'Cause I'm a mastermind
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)