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
I stay out too late
Got nothing in my brain
That's what people say, hm, hm
That's what people say, hm, hm

I go on too many dates
But I can't make them stay
At least that's what people say, hm, hm
That's what people say, hm, hm

But I keep cruising
Can't stop, won't stop moving
It's like I got this music
In my mind, saying it's gonna be alright

'Cause the players gonna play (play, play, play, play)
And the haters gonna hate (hate, hate, hate, hate)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

Heartbreakers gonna break (break, break, break, break)
And the fakers gonna fake (fake, fake, fake, fake)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

I never miss a beat
I'm lightning on my feet
And that's what they don't see, hm, hm
That's what they don't see, hm, hm

I'm dancing on my own (dancing on my own)
I make the moves up as I go (moves up as I go)
And that's what they don't know, hm, hm
That's what they don't know, hm, hm

But I keep cruising
Can't stop, won't stop grooving
It's like I got this music
In my mind, saying it's gonna be alright

'Cause the players gonna play (play, play, play, play)
And the haters gonna hate (hate, hate, hate, hate)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

Heartbreakers gonna break (break, break, break, break)
And the fakers gonna fake (fake, fake, fake, fake)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off

Hey, hey, hey!
Just think while you've been getting down and out about the liars
And the dirty, dirty cheats of the world
You could've been getting down to this sick beat

My ex-man brought his new girlfriend
And she's like: Oh my God
But I'm just gonna shake
And to the fella over there with the hella good hair
Won't you come on over, baby?
We can shake, shake, shake
Yeah, oh!

'Cause the players gonna play (play, play, play, play)
And the haters gonna hate (hate, hate, hate, hate) (haters gonna hate)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

Heartbreakers gonna break (break, break, break, break)
And the fakers gonna fake (fake, fake, fake, fake)
Baby, I'm just gonna shake (shake, shake, shake, shake)
I shake it off, I shake it off

Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off

Shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off

Shake it off, I shake it off
I, I, I shake it off, I shake it off (you got to)
I, I, I shake it off, I shake it off
I, I, I shake it off, I shake it off
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)