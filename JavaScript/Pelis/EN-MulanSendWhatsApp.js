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
MOLAN
Written by
Rita Hsiao
EIGHTH DRAFT
December 21, 1996
Rev. 5/9/97
Rev. 5/12/97
Rev. 6/4/97
Rev. 6/5/97
Rev. 6/6/97
Rev. 6/24/97
Rev. 7/24/97
This material is the sole property of Walt Disney Pictures
and is restricted for the use of Walt Disney Pictures and
personnel only. Distribution, disclosure, reproduction, or
sa.le of the material to unauthorized personnel is prohibited.
(
MOLAN
FADE IN:
EXT. THE GREAT WALL - NIGHT (SEQUENCE 1.0)
A MASSIVE, magnificent stone barrier snakes along the
mountain tops of China. A lone GUARD patrols it. All's
quiet, til ...
WHOOSH! A falcon swoops over him, knocking off his helmet.
It flies upward, RIPPING the Imperial flag from a pole; the
crescent moon shines. The guard follows as the bird drops
the flag. It flutters over the wall, revealing
A DARK, OMINOUS MAN in SHADOW, clinging to the side. He
GRABS the Guard before he can scream - LIFTING him into the
air as
HUNDREDS of grappling hooks clamp onto the wall.
IN THE GARRISON
Startled guards look up as the shadowy MAN enters their
sanctuary. As he RAISES his distinctive, curved sword ...
SMASH CUT TO:
INT. EMPEROR'S PALACE - NIGHT
Doors burst open. The EMPEROR, his aide CHI FU, and several
men quickly enter
A CAVERNOUS WAR ROOM - a huge model of China in its center.
EMPEROR
Your report, General.
The General steps through a section of 'The Great Wall.'
GENERAL
The Huns crossed our border here, Your
Majesty!
CHI FU
(shocked)
Impossible! No one can get through the
Great Wall.
The Emperor holds up his hand.
GENERAL
(solemnly)
Shan-Yu is leading them.
(CONTINUED)
*
SEQUENCE 1.0
MULAN EIGHTH DRAFT 12/21/96 p. 2.
CONTINUED:
Sharp intakes. This is no ordinary invader.
MEN
(murmuring)
Shan-Yu ...
The General strides across the model with his pointer.
GENERAL
He's already destroyed one village and is
expected to reach the Imperial City in a
matter of weeks.
( then)
We'll set up defenses around the city
immediately.
EMPEROR
No -- send the troops out to stop him.
GENERAL
But you will be left unprotected.
The Emperor slams the pointer.
EMPEROR
(sternly)
I'll not let him take the lives of any
more of my people.
The General nods respectfully.
EMPEROR
Chi Fu!
Chi Fu stands at attention.
CHI FU
Yes, Your Highness!
EMPEROR
Deliver conscription notices throughout
all the provinces, call up reserves and
as many new recruits as possible!
GENERAL
Forgive me, Your Majesty, but I believe
our present force will be sufficient to
stop him.
EMPEROR
I won't take any chances, General.
(then)
A single grain of rice can tip the
(MORE) (CONTINUED)
*
*
SEQUENCE 1.0
MULAN EIGHTH DRAFT 12/21/96 p. 3.
CONTINUED:
EMPEROR (cont'd)
scale ... one man may be the difference
between victory and defeat.
As he stare.s out at the pale crescent moon ...
DISSOLVE TO:
INT. MULAN'S BEDROOM - DAY (SEQUENCE 1.9A)
CLOSE ON a bowl of rice. A pair of chopsticks reach for a
mouthful. PAN UP to reveal MULAN, a high-spirited girl of 17
reading a scroll and copying notes onto her arm.
MULAN
(reading)
... Quiet and demure. . . graceful ...
. . . polite ...
( taking a bite)
... umph. . . deligate ...
(mouth full)
... refined ... poised ...
She dips her brush in ink and adds one last thing.
EXT. ROOF
MULAN
... always on time!
A ROOSTER CROWS
INT. MULAN' S BEDROOM
Mulan looks out the window and quickly gets up.
She rushes out into
INT. MAIN ROOM
Mulan looks around.
MULAN
MULAN
Little brother!
She runs in another direction, blowing on her arm.
MOLAN
Little brother! Lit--
She stops as she spots her dog lying on the ground.
(CONTINUED)
SEQUENCE 1. 9A
MULAN EIGHTH DRAFT 12/21/96 p. 4.
CONTINUED:
MULAN
Ahh, there you are!
On an adorable little, stupid dog.
MULAN
{playfully)
Who's the smartest doggie in the world?
C' mon, smart boy ...
The dog pants excitedly. Mulan picks up a bag of grain.
MULAN
Ready to do my chores?
Tying the bag to his tail and a chicken leg over his head,
she opens the door ..
As the dog chases the chicken leg into the yard, the grain
bag breaks, sending the chickens into a feeding frenzy.
Mulan watches -- it'll do -- and quickly starts to gather
teacups.
EX'l'. FA FAMILY TEMPLE
The hungry dog pursues the leg, running towards the TEMPLE.
INT.. FA FAMILY TEMPLE
FA ZHOU, Mulan's dignified father, kneels before the
ancestral stone beis and lights incense.
FA ZHOU
{praying)
Honorable Ancestors, please help Mulan
impress the matchmaker today.
The dog runs in; seconds later the chickens enter, pecking at
the spilled grain.
FA ZHOU
Please ... please help her.
EXT. FA FAMILY HOUSE
Mulan hurries to the temple, stopping to feed her dog.
INSIDE THE TEMPLE
Fa Zhou slowly rises from the floor with the help of his
car1e. He turns to see his beloved, tardy daughter.
{CONTINUED)
*
(
SEQUENCE 1. 9A
MULAN EIGHTH DRAFT 12/21/96 p. 5.
CONTINUED:
FA ZHOU
Mulan, shouldn't you be in the village?
MULAN
(sweetly; setting out the tea)
Well, first I have to meet someone
special for tea.
She smiles at him; Fa Zhou tries not to smile, but can't help
himself. She's got him.
FA ZHOU
Hrnmrn •••
ON ONE RED TEACUP among GREEN ONES. Mulan's hand reaches in.
MULAN
Ready?
Mulan spins the tray -- as it circles around, they each grab
a cup. Fa Zhou holds up the red one.
MULAN
How do you always do that?
Fa Zhou smiles and CHUCKLES, then stops the tray from
spinning.
FA ZHOU
As much as I enjoy this ... these games
must soon end.
(then; warmly)
The time has come for you to carry on the
family honor.
Mulan looks up at him -- she wants to please him.
MULAN
(small smile)
I won't let you down, Baba.
Full of hope, they sip their tea.
EXT. FRONT GATE - SHORTLY AFTER
Mulan comes charging out on KAHN, a magnificent black horse.
MULAN
Let's go, Kahn!
She waves at Fa Zhou before leaping over the wall.
(CONTINUED)
*
SEQUENCE 1.9A
MULAN EIGHTH DRAFT 12/21/96 p. 6.
CONTINUED:
MULAN
Wish me luck!
Fa Zhou shakes his head.
FA ZHOU
Where does she get it from.
EXT. VILLAGE ROAD - CONTINUOUS
CUT TO:
GRANDMOTHER FA, a tiny feisty woman, surveys a busy street
filled with carts and travellers. She holds up a cage
containing a CRICKE'r.
GRANDMOTHER FA
Okay, cricket, let's see how good you
are.
With her eyes closed, she steps into traffic. All around
her, vehicles SWERVE and COLLIDE to avoid her. Miracuously,
she makes it across. Opening her eyes, she looks at the
cricket gleefully.
GRANDMOTHER FA
Yep! You're a lucky one!
The cricket faints. FA LI, Mulan's mother, joins her.
FA LI
(worried)
Where's Mulan?
She points to a group of elegantly dressed girls.
FA LI
The other girls have been preparing all
morning!
GRANDMO'l'HER FA
There was an accident. She's probably
stuck in traffic.
SFX: THUNDERING HOOVES. A cloud of dust. Then, from within
the mayhem trots
MULAN
elegantly seated on Kahn, side saddle, holding a parasol.
She's oblivious to the leaves and brush entangled in her
hair.
( CON'rINUED)
*
*
*
(
SEQUENCE 1. 9A
MOLAN EIGHTH DRAFT 12/21/96 p. 7.
CONTINUED:
VILLAGERS
(GROANING; eyes rolling)
Mulan approaches her mother.
MULAN
(jumping off)
I'm here!
FA LI
You're filthy!
MULAN
But Mama, I had to--
FA LI
None of your excuses. You can't be late
for the Matchmaker. First impressions
are very important.
They lead her into ...
INT. BATH SHOP (SEQUENCE 1.9B)
The BATHER looks Mulan over, and prepares her for a bath.
Bather:
THIS IS WHAT YOU GIVE ME TO WORK WITH
WELL HONEY I'VE SEEN WORSE
WE'RE GOING TO TURN THIS SOW'S EAR
INTO A SILK PURSE
Mulan sits in the tub, shivering.
MULAN
It's freezing!
FA LI
It would've been warm if you were here on
time.
SPLASH! The Bather dumps water onto Mulan, then begins
scrubbing her hair.
Bather:
WE'LL HAVE YOU
WASHED AND DRIED
PRIMPED AND POLISHED TILL YOU GLOW WITH PRIDE
TRUST MY RECIPE FOR INSTANT BRIDE
YOU'LL BRING HONOR TO US ALL
As Fa Li starts to wash Mulan's arm, she sees the crib notes.
(CONTINUED)
*
*
SEQUENCE 1.9B
MULAN EIGHTH DRAFT 12/21/96 p. 8.
CONTINUED:
FA LI
Mulan, what's this?
MULAN
Uh, notes ... in case I forget something?
Grandma Fa slaps her head and hands the cricket to Fa Li.
GRANDMOTHER FA
Hold this.
(turning away)
We'll need more luck than I thought.
INT. HAIRDRESSER'S SHOP
CUT TO:
ON MULAN'S contorted face as TWO HAIRDRESSERS pull and style
her hair.
Hairdresser#l:
WAIT AND SEE
WHEN WE'RE THROUGH
Hairdresser#2:
BOYS WILL GLADLY GO TO WAR FOR YOU
Hairdresser#l:
WITH GOOD FORTUNE
Hairdresser#2:
AND A GREAT HAIR-DO
All 3: {Hairdresser#l &: #2 and Fa Li)
YOU'LL BRING HONOR TO US ALL
EXT . VILLAGE STREE'l'
Mulan leaves the Hairdresser's shop. As she heads for her
next stop, women smile at her.
All: {Group of approx. 15-20 women)
A GIRL CAN BRING HER FAMILY
GREAT HONOR IN ONE WAY
BY STRIKING A GOOD MATCH
AND THIS COULD BE THE DAY
IN'l'. DRESSMAKER' S SHOP
TWO DRESSMAKERS efficiently wrap Mulan in her gown.
Dressmaker #1:
Dressmaker #2:
Fa Li:
Dressmaker #1:
MEN WANT GIRLS WITH GOOD TASTE
CALM
OBEDIENT
WHO WORK FAST PACED
CUT TO:
( CON'l'INUED)
*
(
SEQUENCE 1 . 9 B
MULAN EIGHTH DRAFT 12/21/96 p. 9.
CONTINUED:
Fa Li: WITH GOOD BREEDING
Dressmaker #2:
extremely tight)
AND A TINY WAIST {she pulls sash
Mulan: gasp
All: (Dressmaker #1 &: #2 and
YOU'LL BRING HONOR TO US ALL
EXT. VILLAGE STREET
Fa Li)
Mulan and Fa Li continue to their next stop. Mulan watches
as TWO LITTLE BOYS play war and TWO LITTLE GIRLS play with
dolls.
All: (Group of approx. 15-20 women)
WE ALL MUST SERVE OUR EMPEROR
WHO GUARDS US FROM THE HUNS
A MAN BY BEARING ARMS
A GIRL BY BEARING SONS
They stop at the fan stall. Fa Li tries to teach Mulan how
to hold a fan gracefully, only it flies out of Mulan's hands.
Fa Li:
HERE'S WHAT MEN CAN'T RESIST
HOLD YOUR FAN AND GIVE YOUR WRIST A TWIST
An Unlucky Passerby: {OWW)
Fa Li: NEXT TIME TRY IT WITH A BIT LESS WRIST
YOU'LL BRING HONOR TO US ALL
EXT. VILLAGE MARKETPLACE
CUT TO:
Grandmother Fa inspects goods at a stall. She touches an old
stone statue. The head falls off. She quickly replaces it
with a little doll's head. From out of the shadows steps a
creepy MERCHANT.
MONKEY MERCHANT
Ahhh, Grandma Fa... In what might I
interest you? Tea, perfume ...
He looks around, furtively, then holds something up.
MONKEY MERCHANT
Rent the monkey?
The monkey stares at her with a blank smile. Grandmother Fa
picks up a jade necklace.
GRANDMOTHER FA
I want these. They look lucky.
The merchant puts the monkey in her face . •
{CONTINUED}
*
SEQUENCE 1 . 9B
MULAN EIGH'l'H DRAFT 12/21/96 p. 10.
CONTINUED:
MONKEY MERCHANT
The monkey is lucky.
Grandmother Fa holds up the necklace.
GRANDMOTHER FA
I want the necklace!
The merchant swings the monkey around his neck.
MONKEY MERCHANT
The monkey is a necklace!
GRANDMOTHER FA
(picking her teeth with her
knife)
How 'bout I make you into a necklace?
INT. MAKE-UP ARTIST'S SHOP
TWO MAKE-UP WOMEN paint Mulan's face.
Make-up Artist #1 &: #2 and Fa Li:
WHEN WE'RE THROUGH YOU CAN'T FAIL
(when we're through you can't fail)
(when we're through you can't fail)
LIKE A LOTUS BLOSSOM SOFT AND PALE
(like a lotus blossom soft and pale)
(like a lotus blossom soft and pale)
HOW COULD ANY FELLOW SAY "NO SALE"
(how could any fellow say •no sale")
(how could any fellow say "no sale")
YOU'LL BRING HONOR TO US ALL
(you'll bring honor to us all)
(you'll bring honor to us all)
CUT •ro:
She holds a mirror up. Mulan is the perfect porcelain
vision, like all the other girls, except ... she takes a tiny
piece of hair and curls it over her forehead. That's better.
Fa Li unwraps a cloth, revealing a beautiful hair comb.
Lovingly, she places it in Mulan's hair.
FA LI
There, you're ready.
Mulan and her mother share a warm smile as Grandmother Fa
enters, her arms full of various good luck charms.
GRANDMOTHER FA •
Not yet.
(CONTINUED)
(
SEQUENCE 1. 9B
MULAN EIGHTH DRAFT 12/21/96 p. 11.
CONTINUED:
She waddles over and stuffs an apple into Mulan's mouth.
GRANDMOTHER FA
An apple for serenity ...
(pinning)
A pendant for balance ...
She places the jade necklace around Mulan's neck.
Grandmother Fa:
BEADS OF JADE FOR BEAUTY
YOU MUST PROUDLY SHOW IT
NOW ADD A CRICKET JUST FOR LUCK
AND EVEN YOU CAN'T BLOW IT.
Grandma Fa ties the cricket to Mulan's waist.
EXT. VILLAGE PLACE
Fa Li and Grandmother Fa proudly watch as Mulan heads off to
meet the Matchmaker.
Mulan:
ANCESTORS
HEAR MY PLEA
HELP ME NOT TO MAKE A FOOL OF ME
AND TO NOT UPROOT MY FAM'LY TREE
KEEP MY FATHER STANDING TALL
Mulan joins a row of girls approaching the Matchmaker's room.
Young Girls: (4 + Mulan)
SCARIER THAN THE UNDERTAKER
WE ARE MEETING OUR MATCHMAKER
All: (Group of 40-50 women)
DESTINY
GUARD OUR GIRLS
AND OUR FUTURE AS IT FAST UNFURLS
PLEASE LOOK KINDLY ON THESE CULTURED PEARLS
EACH A PERFECT PORCELAIN DOLL
PLEASE BRING HONOR TO US
PLEASE BRING HONOR TO US
PLEASE BRING HONOR TO US
PLEASE BRING HONOR TO US
PLEASE BRING HONOR TO US ALL
The girls bow down with parasols, waiting ...
THE MATCHMAKER - ( SEQUENCE 1. 9C)
steps outside, looks at her notepad and calls out.
(CONTINUED)
CONTINUED:
MULAN EIGHTH DRAFT
MATCHMAKER
Fa Mulanl
Mulan eagerly looks up and waves.
MULAN
Present!
MATCHMAKER
(writing; displeased)
Speaking without permission ...
MULAN
Oops.
SEQUENCE 1 . 9C
12/21/96 p. 12.
Mulan steps inside as her mother and grandmother look after
her apprehensively.
GRANDMOTHER FA
( re : Matchmaker)
Who spit in her bean curd.
INT. MATCHMAKER' S ROOM
Mulan stands silently as the Matchmaker circles her,
inspecting.
MATCHMAKER
Too skinny ... hmmf. Not good for bearing
sons.
As she makes note, the cricket escapes and jumps onto the
Matchmaker's shoulder. Mulan grabs him; tosses him. He hops
back onto Mulan's shoulder, her head-- he won't leave. As the
Matchmaker turns to face Mulan, she pops the cricket into her
mouth.
MATCHMAKER
Recite the final admonition.
Mulan is caught.
MULAN
(mouth full)
Mrmnm .•• bmmm.
MATCHMAKER
Well?
A pause, then Mulan opens her fan and ...
(CONTINUED)
(
SEQUENCE 1. 9C
MULAN EIGHTH DRAFT 12/21/96 p. 13.
CONTINUED:
MULAN
(coughing; spitting)
Ptoo!
..... spits out the cricket. Now, to impress her.
MULAN
Fulfill your duties calmly and ...
Needing help, she pulls up her sleeve.
MULAN
( trying to read smeared arm)
... Respectfully. Reflect before you
snack-- act.
The Matchmaker circles her, listening.
MULAN
(quickly)
This shall bring you honor and glory.
She breathes a sigh of relief. Not so fast. The Matchmaker
snatches the fan away, looking it over.
MATCHMAKER
(suspiciously)
Hmmm ••.
Finding nothing, she grabs Mulan's arm and leads her off.
MATCHMAKER
This way!
She points to a table set with tea; her hand covered with
black ink from Mulan's arm.
MATCHMAKER
Now, pour the tea.
Mulan and the Matchmaker sit.
MATCHMAKER
To please your future in-laws, you must
demonstrate a sense of dignity ...
She rubs her fingers on her face, leaving an ink moustache.
Mulan stares, and accidentally pours tea onto the table.
MATCHMAKER
(eyes closed; grandly)
... and refinement.
(CONTINUED)
SEQUENCE 1 . 9C
MULAN EIGHTH DRAFT 12/21/96 p. 14.
CONTINUED:
Mulan sees the cricket relaxing in the tea cup. She panics.
MATCHMAKER
You must also be poised.
The Matchmaker takes the cup.
MULAN
Umm. . . pardon me.
MATCHMAKER
... and silent! !
Mulan's stuck. She watches as the cricket's antennae curl up
towards the Matchmaker's nose on each inhale.
MULAN
(trying to remain calm}
Ummm ... uh ... could I just--
(reaching for the cup)
... take that back-- for a moment ...
She tugs at the cup. SPLASH! The tea spills on the
Matchmaker as the cricket leaps down her dress.
MATCHMAKER
Why you clumsy ...
(noticing the cricket)
Whaa ... Ooh! Aaagh! Oooh!
CRASH! The Matchmaker knocks over and lands in the incense
burner.
MATCHMAKER
(running around)
Wah-ahhhh!
Mulan, trying to help, fans the Matchmaker's rear with her
fan.
WHOOMP! Her clothes catch fire.
MATCHMAKER
Whooagghh!
EXT. VILLAGE PLACE
Fa Li, Grandmother Fa and the villagers listen to hysterical
screams and crashing sounds.
Mulan bursts outside, holding the tea pot. The Matchmaker
follows, still on fire.
(CONTINUED)
SEQUENCE 1 . 9C
MOLAN EIGHTH DRAFT 12/21/96 p. 15.
CONTINUED:
MATCHMAKER
Put it out! Put it out! Put it ow--
SPLASH! Mulan throws tea in the Matchmaker's face, dousing
the flames.
The cricket hops out. Frightened, he jumps back into his
little cage.
The Matchmaker, steaming, turns to Mulan.
MATCHMAKER
You may look like a bride, but you will
never bring your family honor!
Fa Li and Grandma gather around Mulan consolingly. The
villagers bow their heads and start to turn away.
VILLAGERS
Her poor family ... what a shame ...
Mulan listens to the whispers.
CUT TO:
EXT. MULAN' S HOUSE - LATER ( SEQUENCE 3 . 9)
Mulan solemnly leads Kahn through the front gate. She sees
Fa Zhou smiling hopefully at her. She can't break his heart.
Ducking behind Kahn, she walks off as her father watches.
EXT. STABLE
Kahn drinks from a trough. Mulan stands beside him, looking
at her reflection in the water.
REFLECTION SONG
MULAN
LOOK AT ME
I WILL NEVER PASS FOR A PERFECT BRIDE
OR A PERFECT DAUGHTER
CAN IT BE
I'M NOT MEANT TO PLAY THIS PART
NOW I SEE
THAT IF I WERE TRULY
TO BE MYSELF
I WOULD BREAK MY FAM' LY' S HEART
Throughout, Mulan sees her image in the garden pond, in the
family temple ...
(CONTINUED)
SEQUENCE 3.9
MULAN EIGHTH DRAFT 12/21/96 p. 16.
CONTINUED:
MULAN
WHO IS THA'r GIRL I SEE
S'rARING STRAIGHT
BACK AT ME
WHY IS MY REFLECTION SOMEONE
I DON'T KNOW
SOMEHOW I CANNOT HIDE
WHO I AM
THOUGH I'VE TRIED
WHEN WILL MY REFLECTION SHOW
WHO I AM INSIDE
WHEN WILL MY REFLECTION SHOW
WHO I AM INSIDE
EXT. FA FAMILY GARDEN
Mulan sits quietly under a blossoming tree, trying to fight
back tears.
FA ZHOU O.S.
(clears his throat)
Mulan looks up, then hangs her head.
Fa Zhou sits beside her, taking in the beauty of the trees.
FA ZHOU
My my ... what beautiful blossoms we have
this year. But look ...
He points to an unopened blossom.
FA ZHOU
This one's late. But I'll bet that when
it blooms ...
He takes Mulan's haircomb from her hands and gently puts it
in her hair.
FA ZHOU
... It will be the most beautiful of all.
Mulan can't help but smile.
SFX: LARGE DRUMS IN 'rHE DISTANCE
Fa Zhou rises.
MULAN
( concerned)
What is it?
CUT TO:
*
*
(
SEQUENCE 4
MULAN EIGHTH DRAFT 12/21/96 p. 17.
EXT. VILLAGE - MOMENTS LATER (SEQUENCE 4)
A VILLAGER BANGS a huge drum as SOLDIERS ON HORSES gallop
into town.
INSIDE THE FA GATE
Fa Zhou and Fa Li peek into the street. Mulan tries to see.
FA LI
Mulan, stay inside.
Grandmother Fa motions towards the wall, "you' 11 get a better
view from there. "
Mulan quickly climbs it to see VILLAGERS gathered around the
soldiers.
CHI FU
Citizens! I bring
the Imperial City!
China!
a proclamation from
The Huns have invaded
Mulan reacts, shocked. The crowd gasps in horror as panic
ensues.
CROWD
What? The Huns!
Chi Fu reads the Emperor's decree.
CHI FU
By order of the Emperor, one man from
every family must serve in the Imperial
Army.
(calling)
The Hsiao family!
A middle-aged man steps forward to take his notice from a
SOLDIER.
CHI FU O.S.
The Yi family!
An OLD MAN steps forward, accompanied by his tall, healthy
SON.
SON
I will serve the Emperor in my father's
place.
The son respectfully takes the conscription notice as Chi Fu
reads the next name.
(CONTINUED)
SEQUENCE 4
MULAN EIGHTH DRAFT 12/21/96 p. 18.
CON'l'INUED:
CHI FU
The Fa family!
Nol
MULAN
(softly)
The crowd murmurs. Fa Zhou hands his cane to his wife.
Gathering his strength, he steadily walks forward.
FA ZHOU
I am ready to serve the Emperor.
As he prepares to take the notice from the soldier ...
Mulan RUNS OUT into the street.
MULAN
Father, you can't go!
FA ZHOU
Mulan ...
MULAN
(addressing Chi Fu directly)
Please, Sir, my father has already fought
bravely for the Emperor.
Chi Fu points at her.
CHI FU
Silence!
(to Fa Zhou)
You would do well to teach your daughter
to hold her tongue in a man's presence.
Fa Zhou looks ashamed.
FA ZHOU
Mulan, you dishonor me.
Mulan lowers her head. Grandmother Fa starts to lead Mulan
away.
CHI FU
(to Fa Zhou)
Report tomorrow to the Wu Zhong camp.
FA ZHOU
Yes, s.ir.
Fa Zhou walks proudly past Fa Li, refusing to take his cane.
(CONTINUED)
SEQUENCE 4
MULAN EIGHTH DRAFT 12/21/96 p. 19.
CONTINUED:
CHI FU O.S.
(calling more names)
The Chu family! The Wen family! The
Chan family!
As Mulan, Fa Li and Grandma Fa quietly follow him ...
INT. FA ZHOU'S BEDROOM - LATER THAT DAY (SEQUENCE 5)
CUT TO:
CLOSE ON a cabinet opening, revealing Fa Zhou's magnificent
armor and sword. Mulan stands in the hallway, holding a
candle. She watches as
Fa Zhou picks up his sword
through a series of moves.
SHOOTS through his leg.
and gracefully manuveurs it
He handles it well until PAIN
FA ZHOU
Aagh!
CLANG! The sword drops to the ground. Grabbing his leg, Fa
Zhou slowly stands against the wall, clutching his
conscription notice.
IN THE HALLWAY
Mulan presses against the wall, anguished. She's just seen
the fate of her father. She hurries away.
DISSOLVE TO:
INT. KITCHEN - LATER THAT NIGHT
Mulan, Fa Zhou, Fa Li and Grandma silently eat, ignoring the
fact that this could be their last night together.
Finally, Mulan is unable to contain herself.
MULAN
Why isn't anyone saying anything?
FA LI
Mulan ...
MULAN
(standing; to Fa Zhou)
You shouldn't have to go. There are
plenty of young men to fight for China!
(CONTINUED)
SEQUENCE 5
MULAN EIGHTH DRAFT 12/21/96 p. 20.
CONTINUED:
FA ZHOU
It is an honor to protect my country, and
my family.
MULAN
So you'll die for honor?
FA ZHOU
(voice rising)
I will die doing what's right!
MULAN
But if you--
FA ZHOU
I know my place!
(then)
It is time you learned yours.
Mulan, hurt, runs out of the room. A moment before Fa Zhou
slowly sits, and resumes eating.
OUT ON THE PORCH
Mulan leans against the post.
MULAN
(BREAKING DOWN)
DISSOLVE •ro:
EXT. GARDEN - LATER THA'r NIGHT - ( SEQUENCE 6 )
RAIN beats down on the Great Stone Dragon, a magnificent
statue. Mulan, lost in thought, sits at the base, staring at
her reflection in a puddle. A LIGHTNING FLASH streaks across
the sky; A CLAP OF THUNDER roars.
Mulan is shaken from her reverie. She looks across the
garden at her parents' bedroom window.
MULAN'S POV
Her parents silhouetted in the window.
console Fa Li, only she tears away from
Fa Zhou blows out a candle, sending the
MULAN
Fa Zhou tries to
him. A beat before
room into darkness.
takes this in as the rain spills down her face. She can't
just sit by ... She makes her decision.
SEQUENCE 6
MULAN EIGHTH DRAFT 12/21/96 p. 21.
INT. FA FAMILY TEMPLE
Mulan enters; she lights a stick of incense and places it in
a little dragon incense holder. The cricket watches as she
says a prayer to her ancestors, then hurries out. He follows
her.
INT. FA ZHOU'S BEDROOM
Hard rain, lightning, thunder. Mulan approaches her sleeping
parents and replaces the conscription notice on her father's
nightstand with her hair comb. She looks at him tenderly,
then leaves.
INT. FRONT ROOM
Mu1an removes her father's sword from its sheath and
stretches out her long hair; she pauses for a moment--
then SLASH! She CUTS her hair; it spills to the floor. She
ties it up, then goes to her father's closet, staring in awe
at his armor. She puts it on and holds his sword.
INT. STABLES
A shadow falls over Kahn. He looks up and WHINNIES in alarm.
KAHN'S POV
A warrior stands in the shadows. The figure moves forward,
revealing Mulan dressed in her father's armor. Kahn stamps
the ground. Mulan comforts him.
EXT. COURTYARD GATE
The Cricket watches as Mulan quietly walks Kahn out. She
turns and takes one last look at her house. Seconds later,
Mulan and Kahn BURST through the FRONT GATE.
Lightning and thunder. The wind SLAMS the gate shut behind
them. As they GALLOP into the night ... ;
SMASH CUT TO:
INT. FA FAMILY TEMPLE
CLOSE ON the frightening face of an ancestral guardian
statue.
SEQUENCE 6
MULAN EIGH'I'H DRAFT 12/21/96 p. 22.
INT. GRANDMOTHER FA'S BEDROOM
Grandmother Fa bolts up in her bed, her eyes wide with
terror. Another peal of THUNDER.
INT. FA ZHOU'S BEDROOM
Grandmother Fa bursts into the room.
GRANDMOTHER FA
Mulan is gone!
Fa Zhou sits up.
FA ZHOU
What?
He sees her haircomb on his nightstand, and slowly picks it
up.
FA ZHOU
It can't be ...
He runs to his closet-- his armor is gone.
LIGHTNING, ~'HUNDER.
EXT. COURTYARD
HARD RAIN. Fa Zhou runs into the courtyard still clutching
the hair comb.
FA ZHOU
(painful wailing)
MULAN!
He stumbles and falls, then sees something.
FA ZHOU
No ...
The front gate is BANGING open and shut. Fa Li rushes to her
husband's side.
FA LI
You must go after her -- she could be
killed!
FA ZHOU
(solemnly)
If I reveal her, she will be.
(CONTINUED)
SEQUENCE 6
MULAN EIGHTH DRAFT 12/21/96 p" 23"
CONTINUED:
A CLAP OF THUNDER. Grandmother Fa looks imploringly towards
the temple"
GRANDMOTHER FA
(pleading}
Ancestors, hear our prayer. Watch over
Mulan.
A FLASH OF LIGHTENING FILLS THE SKY.
INT" TEMPLE - CONTINUOUS - {SEQUENCE 7)
CUT TO:
The last wisps of incense burn out as the WIND GUSTS"
The Chinese characters on a great stone bei GLOW hot red.
Moments later, A GHOST materializes on top of the bei. This
is THE GHOST OF THE FIRST ANCESTOR.
He peers at the little dragon incense burner and speaks with
a deep, imposing voice that echoes through the temple.
FIRST ANCESTOR
Mushu. . . awaken !
Close on the dragon incense burner - trembling as his metal
body transforms into a live dragon, and CRASHES to the
ground. This is Mushu, a mini-sized dragon with a deep drive
to prove he's as good as any guardian. What he lacks in
magical powers, he makes up in charm. He rises out of the
incense smoke.
MUSffiJ
{powerfully}
I live!
(then}
So tell me what mortal needs my
protection, Great Ancestor. You just say
the word and I'm there!
FIRST ANCESTOR
Mushu ...
MUSHU
And lemme say something
foolish enough to threaten
vengeance will be mine!!!
anybody who's
our family,
He begins growling and stalking the room, monster-like"
FIRST ANCESTOR
Mushu!
(CONTINUED}
*
*
*
SEQUENCE 7
MULAN EIGHTH DRAFT 12/21/96 p. 24.
CONTINUED:
Mushu stops cold. He looks up to see the First Ancestor
pointing to a row of stone animals atop pedestals.
FIRST ANCESTOR
(to Mushu)
These are the family guardians.
(like a teacher)
They ... ?
MUSHU
(obviously)
protect the family.
FIRST ANCESTOR
And you, oh demoted one?
MUSHU
(put in his place)
I ... ring the gong.
FIRST ANCESTOR
That's right.
(parent to child)
Now wake up the ancestors.
MUSHU
(sighing)
One family reunion coming right up.
He leaps in front of the crowd of ancestral tablets.
MUSHU
(banging his gong)
Okay, people, people! Look alive! Let's
go, c'mon, get up! Let's move it! Rise
and shine! You're all way past the
beauty sleep thing! Trust me!
The room fills with THE GHOSTS OF THE FA ANCESTORS rising
from the tablets lining both sides of the temple.
ANCESTOR 2 (FEMALE)
I knew it! I knew it! That Mulan was a
troublemaker from the start.
ANCESTOR 3 (MALE)
Don't look at me - she gets it from your
side of the family.
ANCESTOR 5 (FEMALE)
She's just trying to help her father.
Ancestor 6 tallies on an abacus.
(CONTINUED)
SEQUENCE 7
MULAN EIGHTH DRAFT 12/21/96 p. 25.
CONTINUED:
ANCESTOR 6 (MALE)
But if she's discovered ...
(clicking the beads)
Fa Zhou will be forever shamed, dishonor
will come to the family, traditional
values will disintegrate ...
Ancestors 7 and 8 stand in an "American Gothic" pose.
ANCESTOR 7 (MALE)
Not to mention they'll lose the farm!
Mushu sits back, reading the paper.
ANCESTOR 2 (FEMALE)
My children never caused such trouble,
they all became acupuncturists.
ANCESTOR 3 (MALE)
Well, we can't all be acupuncturists.
ANCESTOR 8 (FEMALE)
No - Your great granddaughter had to be a
cross-dresser! !
An imposing male ancestor points to the row of stone animals.
ANCESTOR 9 (MALE)
Let a guardian bring her back!
An excited murmur sweeps through the room. Ancestor 3 grabs
Mushu and his gong and points to a stone animal.
ANCESTOR 3 (MALE)
Yes! Awaken the most cunning ...
ANCESTOR 6 (MALE)
(grabbing Mushu)
No! The swiftest ...
ANCESTOR 10 (FEMALE)
(grabbing Mushu)
No, send the wisest!
FIRST ANCESTOR
Silence!
The ancestors grow still.
FIRST ANCESTOR
We must send the most powerful of all!
(CONTINUED)
SEQUENCE 7
MULAN EIGHTH DRAFT 12/21/96 p. 26.
CONTINUED:
MUSHU O.S.
(laughing)
Okay, okay, I get the drift.
Mushu stands proudly on his pedestal.
MUSHU
I'll go!
The ancestors burst into derisive laughter.
MUSHU
You all don't think I can do it? Watch
this here.
He blows a tiny little flame from his mouth.
MUSHU
OWW! Jump back -- I'm pretty hot, huh?
FIRST ANCESTOR
(admonishing)
You had your chance to protect the Fa
family.
ANCESTOR 8 (FEMALE)
Your misguidance led Fa Deng to disaster.
FA DENG, an ancestor holding his head in his hands, glares at
Mushu.
FA DENG (MALE)
Yeah, thanks a lot.
MUSHU
(staring blankly)
And your point is ...
The First Ancestor appears beside Mushu, floating in mid-air.
FIRS'l' ANCES'rOR
The point is we will be sending a real
dragon to retrieve Mulan.
MUSHU
What-- what-- who you calling-- I'm a
real dragon!
FIRS'l' ANCESTOR
You are not worthy of this spot ... (leaning in; sneering)
and you never will be.
(MORE)
(CONTINUED)
*
I
SEQUENCE 7
MULAN EIGHTH DRAFT 12/21/96 p. 27.
CONTINUED:
FIRST ANCESTOR (cont'd)
(snarls)
Now awaken the Great Stone Dragon!
He throws Mushu out the door. A beat before Mushu pokes his
head back in.
MUSHU
(smiling)
So, you'll get back to me on the job
thing.
A GONG FLIES through the air, hitting Mushu in the face. The
First Ancestor rubs his temple and sighs.
EXT. COURTYARD
Mushu starts down to the Great Stone Dragon.
MUSHU
( frustrated)
Just one chance; is that too much to ask?
I mean, it's not like it'd kill you!
Mushu walks up to the enormous Stone Dragon perched on a
crumbling pedestal and starts BANGING his gong.
MUSHU
Yo, Rocky! Wake up! You've got to go
fetch Mulan!
(boy to dog)
C'mon, boy! Go get her! Go on!
Mushu throws his mallet over his shoulder and starts to climb
the Dragon.
MUSHU
(GROWLING)
No response. Mushu hits the Dragon's ear with his gong.
MUSHU
Hello. . . hellooo ! ! !
(off huge whack)
Hello!!!
The Dragon"s ear comes loose in his hand.
MUSHU
Uh-oh.
He tries to stick the ear back on, but it's hopeless. The
Great Stone Dragon CRUMBLES, taking Mushu down with it.
(CONTINUED)
SEQUENCE 7
MULAN EIGH'rH DRAFT 12/21/96 p. 28.
CONTINUED:
As the dust clears, Mushu COUGHS and peers at the Great Stone
Dragon's face, the only piece intact.
MUSHU
Uh, Stony ... Stony?
(panicking)
Oh man, they're gonna kill me.
FIRST ANCESTOR 0.8.
Great Stone Dragon!
Mushu freezes, then sees
The First Ancestor, at the window of the family temple.
FIRST ANCESTOR
Have you awakened?
A beat before the head of the Great Stone Dragon pops up from
the bushes. Mushu struggles to hold it steady. Then, he
lowers his voice and assumes a persona, a la the Great and
Powerful Oz. He waggles the stone face as he speaks.
MUSHU
(god-like)
I, ah, I ah, yes I just woke up! I am
the Great Stone Dragon. Good morning! I
will go forth and fetch Mulan! ... Did I
mention that I was the Great Stone
Dragon?
FIRST ANCESTOR
Go! The fate of the Fa family rests in
your claws!
MUSHU
(as the Great Stone Dragon)
Don' t even worry about it! I will not
lose face!
He loses his grasp on the face. It rolls down the hill,
Mushu still holding on.
MUSHU
(falling)
Ahhh oww, oh ohh owwww ...
SMASH! He lands beside the Great Stone Dragon's pedestal;
the head on top of him.
MUSHU
(in pain)
OWWW, my elbow. Ohh ...
(CONTINUED)
(
SEQUENCE 7
MULAN EIGHTH DRAFT 6/4/98 p. 29.
CONTINUED:
He kicks off the head and sits up dejectedly.
MUSHU
That's just great-- now what?! I'm
doomed! And all 'cause Miss Man decided
to take her little drag show on the road!
Cri-Kee, the cricket, tugs on Mushu, CHIRPING, "Why don't you
go get her?" Mushu looks down at him.
MUSHU
Whaddya mean, go get her? Are you crazy?
The Ancestors don't want me near her.
{then, picking up a piece of
Stony)
After this mess, I'd have to bring her
home with a medal to get back in there.
Mushu stares at the temple, thinks a beat, then smiles.
MUSHU {CONT'D)
That's it! I'll make Mulan a hero and
they'll have to give me my pedestal back!
Ooh, I am brilliant!
The CRICKET NODS and starts to take off as Mushu follows.
MUSHU (cont'd)
And what makes you think you're comin'?!
Mushu runs past him. Cri-Kee panics, watching Mushu exit
towards the gate. Cri-Kee CHIRPS, "I'm Lucky." Mushu keeps
running.
MUSHU
You're lucky? Ha! Do I look like a
sucker to you?
The cricket CHIRPS some more as he catches up to Mushu.
MUSHU ( CONT ' D)
What do you mean a loser?! How about I
pop one of your antennaes off and throw
it across the yard? Then who's a loser?
Me or you?
And as they take off down the road ...
CUT TO:
{CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
•
•
•
•
•
•
•
*
*
•
SEQUENCE 8.6
MULAN EIGHTH DRAFT 12/21/96 p. 30.
CONrINUED:
EXT. HUN CAMP - NIGHT (SEQUENCE 8.6)
The still night sky - a FALCON cuts across. Then, a shadowy
figure gallops by on a horse ... Shan-Yu.
SFX: THUNDERING HOOVES
as a swarm of Huns closely follow. They race through the
night, until
CLOSE ON SHAN-YU. Sensing something, he quickly motions his
army to be still. Reins pull, horses instantly quiet. He
signals, sending his ELITE SQUAD of five into the brush.
Seconds later, TWO CHINESE SOLDIERS are thrown at Shan-Yu's
feet.
ELITE HUN
Imperial scouts.
Shan-Yu jumps off his horse, carrying a torch. SLOWLY PAN up
to reveal his huge, threatening form for the first time. The
men gasp. He drops the torch in front of them and
approaches, the falcon alighting on his arm.
SHAN··YU
Nice work, gentlemen ... you found the hun
army.
The Huns CHUCKLE. Shan-Yu moves in closer, and starts to fix
SCOUT ONE'S scarf.
SHAN-YU
Wouldn't your superiors be proud.
IMPERIAL SCOU'r 2
{scared)
The Emperor will stop you.
SHAN-YU
(calmly}
Stop me? He invited me.
He grabs Scout 2, lifting him high into the air.
SHAN-YU
(voice rising}
By building his wall, he challenged my
strength. Well, I'm here to play his
game.
(quietly; in his face)
Who are you betting on?
(CONTINUED}
SEQUENCE 8.6
MOLAN EIGHTH DRAFT 12/21/96 p. 31.
CONTINUED:
The Scout sweats. Shan-Yu throws him to the ground.
SHAN-YU
Go! Tell your Emperor to send his
strongest armies!
Shan-Yu watches them run off.
SHAN-YU
I'm ready.
He thinks for a moment, then turns to the ARCHER HUN.
SHAN-YU
How many men does it take to deliver a
message?
The Archer lines up an arrow on his bow.
ARCHER
One.
As he pulls the arrow back ...
EXT. HILLTOP - DAY - (SEQUENCE 7.5)
CUT TO:
CLOSE-UP on Mulan's determined face as she holds her sword
before her.
MOLAN
Alright, you slimey Hun, prepare to meet
your ancestors!
(then)
Eeeyaah!
She thrusts her sword at Kahn-- he easily lifts a leg and
STOMPS on it. Mulan flips over, falling flat on her back.
Kahn WHINNIES, shaking his head.
MULAN
Maybe if I just lie here, the Huns'll
trip over me.
She gets up and looks forlornly at the army camp.
MULAN
It's going to take a miracle to get me
into the army.
Suddenly, from the forest comes Mushu's version of a Southern
Baptist minister.
(CONTINUED)
SEQUENCE 7.5
MULAN EIGHTH DRAFT 7/24/97 p. 32.
CONTINUED:
MUSHU O.S.
(powerful)
Did I hear someone ask for a "miracle!'?!"
Mulan looks up, shocked, to see a huge, horrific shadow on
the rocks. KAHN WHINNIES.
MUSHU
Lemme hear you say, "Owww ! "
MULAN
{ frightened)
Ahhh!
MUSHU
(as preacher)
That's close enough!
MULAN
(GASPS)
A ghost!
She quickly picks up her sword, holding it defensively as she
watches Mushu's giant shadow.
MUSHU
Get ready, Mulan - your serpentine
salvation is at hand! For I have been
sent by your ancestors to lead you ...
Mushu LAUGHS, then blows fire.
MUSHU (cont'd)
... through the hood of man and onto the
path of glory! So heed my words, 'cause
if the Army finds out you're a girl, the
penalty is death!
(to cricket)
C'mon, if you're gonna stay, you're gonna
work.
The cricket furiously fans the flames.
MULAN
(in awe)
Who are you?
MUSHU
Who am .I? Who am _I? I am the guardian
of lost souls! I'm the powerful, the
pleasurable, the indestructible -- Mushu!
Mushu makes his grand entrance from the bushes.
(CONTINUED)
*
*
*
*
SEQUENCE 7.5
MULAN EIGHTH DRAFT 7/24/97 p. 33.
CONTINUED:
MUSHU
Ha, I'm pretty hot, huh?
WHAM! Kahn stomps on him ... and keeps stomping. He stops,
eventually.
MUSHU
(a mess; to Mulan)
What, you've never seen a guardian
before?
MULAN
{polite; confused)
You're-- I just ... ahh, my ancestors sent
a little lizard to help me?
Mushu takes offense.
MUSHU
Hey, dragon, dragon-- not lizard. I
don't do that tongue thing.
Mushu HISSES in a poor attempt to be a lizard.
MULAN
But . . . you ' re . . . uh ...
MUSHU
(cutting her off)
Intimidating? Suave and dashing?
MULAN
Tiny?
MUSHU
Of course! I'm travel size for your
convenience! If I were my real size ...
{motioning to Khan)
Your cow here would die of fright. And
we need him to carry us!
Khan tries to bite Mushu's hand, but Mushu jerks it away in
time.
MUSHU ( CONT ' D)
Down, Bessie.
(then)
Yes, my powers are beyond your mortal
imagination! For instance, my eyes can
see straight through your armor.
He starts to look-- Mulan instinctively slaps his face.
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 7.5
MULAN EIGH'rH DR.AFT 7/24/97 p. 34.
CONTINUED:
MUSHU (cont'd)
Oww!
(then; indignant)
That's it! Dishonor, dishonor on your
whole family!
(to Cri-Kee)
Make note of this.
Cri-Kee pulls out a leaf and a twig and begins to take notes.
MUSHU (cont'd)
(placing a curse)
Dishonor on you, dishonor on the bug,
dishonor on your cow ...
Mulan, worried, grabs Mushu.
MULAN
Stop-- I'm sorry, I'm sorry!
(then; setting him down)
I'm just ... nervous. I've never done
this before. And I could certainly use
your help.
MUSHU (CONT'D)
'l'hen you' re gonna have to trust me. And
keep your hands to yourself. We clear on
that?
Mulan nods.
MUSHU ( CONT ' D)
Good, then let's move it out!
(to Cri-Kee)
Bug boy, get the bags!
(to Khan)
Bessie, giddyap!
CROSS DISSOLVE TO:
EXT. ARMY ENCAMPMENT - DAY - ( SEQUENCE 8)
Mulan self-consciously gets off her horse as a group of
recruits give her blank stares. She watches them with
apprehension, then removes her helmet.
Mushu and the cricket peer at her from inside.
MUSHU
Okay, this is it. Time to show 'em your
"man walk." Shoulders back, chest high,
feet apart, head up ... and strut!
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* •(
*
*
SEQUENCE 8
MULAN EIGHTH DRAFT 7/24/97 p. 35.
CONTINUED:
Mulan starts awkwardly walking through camp, observing the
troops itching, scratching and picking various body parts.
MUSHU
( in awe)
Beautiful, isn't it?
MULAN
They're disgusting.
MUSHU
No, they're men. And you're gonna have
to act just like them, so pay attention.
Mulan and Mushu approach a SOLDIER, displaying a dragon
tattooed on his chest to YAO, a short kid-like man always
spoiling for a fight. His friends LING, a tall, thin joker
and CHIEN PO, a large taciturn man, look on.
SOLDIER
(to Yao and Ling)
Look! This tattoo will protect me from
harm.
YAO
Hmmrn •••
WHAM! He punches him in the chest.
LING
(laughing)
Hope you can get your money back.
Mulan reacts.
MULAN
(eyes wide)
I don't think I can do this.
Yao notices Mulan.
YAO
What"re you looking at?
He spits in front of her.
MUSHU
Ooh, nice distance. Now slap his behind!
It means he did good.
Mulan tentatively slaps Yao's behind. Yao freezes, unable to
believe what just happened. Then ... he GRABS her.
(CONTINUED)
*
*
*
*
*
*
*
*
SEQUENCE 8
MULAN EIGHTH DRAFT 12/21/96 p. 36.
CONTINUED:
YAO
I'm gonna hit you so hard, it'll make
your ancestors dizzy!
CHIEN PO gently picks up Yao.
CHIEN PO
Yao ... relax and chant with me.
YAO
(angry)
Grrrr.
CHIEN PO
(calmly}
Nan-wu-ah-me-toe-fu-da ...
YAO
(angrily}
Nan-wu-ah-me-toe-fu-daaa ...
CHIEN PO
Feel better?
YAO
(not really}
Yeah.
Chien Po sets Yao down. Yao starts to walk off.
YAO
(to Mulan; over his shoulder}
Eh, you ain't worth my time, chicken boy.
Suddenly, Mushu pops out of Mulan's collar.
MUSHtJ
(yelling}
Chicken Boy?!? Say that to my face, ya
limp noodle!
Yao grabs Mulan.
YAO
Grrrrr!
He throws a punch; she ducks. Yao HITS Ling, dropping him to
the ground.
YAO
(sweetly}
Oh, sorry, Ling.
(CONTINUED}
(
SEQUENCE 8
MULAN EIGHTH DRAFT 12/21/96 p. 37.
CONTINUED:
Yao turns around and sees Mulan sneaking away.
YAO
Hey!
He grabs for her foot, but Ling tackles him into Chien Po.
LING
(fighting; to Yao)
You' re dead ...
Mid-punch, Ling looks up to see Mulan running away.
LING
Oh, there he goes!
Yao, Chien Po and Ling chase after Mulan. She runs into a
tent; they follow-- but come out without her.
Moments later, Mulan sneaks out of the tent to see
Yao, then Ling stop short before a long line of men waiting
for food. Chien Po runs up, but can't brake. Boom-- he
starts a domino effect, sending the last man into a giant
cauldron. As rice flies everywhere, the men turn and stare
at Mulan, fuming.
Chi Fu observes the mess, makes note, then enters ...
INT. ARMY TENT (SEQUENCE 8 INSERT)
The General goes over a map of China while SHANG, a young
officer, listens intently.
GENERAL
(pointing)
The Huns have struck here, here, and
here.
(then)
I will take the main troops up towards
the Tung-Shao pass, and stop Shan-Yu
before he destroys this village.
CHI FU
Excellent strategy, Sir.
(then)
I do love surprises.
(LAUGHS)
GENERAL
(to Shang)
You will stay and train the new recruits.
(motioning to Chi Fu)
(MORE)
(CONTINUED)
SEQUENCE 8
MULAN EIGH'rH DRAFT 12/21/96 p .. 38.
CONTINUED:
GENERAL (cont'd)
When Chi Fu believes you are ready, you
will join us ... Captain.
He hands Shang a beautiful sword .. Shang takes this in. He
wasn't expecting this.
SHANG
(taking sword; surprised)
Captain?
Chi Fu mouths the word, "Captain?"
CHI FU
This is an enormous responsibility,
General. Perhaps a soldier with more
experience--
GENERAL
(reciting)
Number One in his class, extensive
knowledge of training techniques, an
impressive military lineage -- I believe
Li Shang will do an excellent job.
SHANG
(excited)
Oh, I will! And I won't let you down;
this is, I mean--
(staring straight ahead)
Yes, Sir.
GENERAL
Very good, then.
He gathers his helmet.
GENERAL
(to Shang)
We'll toast China's victory at the
Imperial City.
He turns to Chi Fu.
GENERAL
I'll expect a full report in three weeks.
The General exits.
CHI FU
(to Shang; snide)
And I won't leave anything out.
He shoots an "I'll be watching you" look to Shang before
leaving.
(CONTINUED)
(
SEQUENCE 8
MULAN EIGHTH DRAFT 12/21/96 p" 39.
CONTINUED:
A moment before Shang reacts, thrilled with his new position"
SHANG
(impressively)
"Captain Li Shang""
(then; regally)
"Leader of China's finest troops"-- no,
"the greatest troops, of all time."
He likes the way that sounds, and proudly walks out of the
tent.
EXT. ARMY ENCAMPMENT
Shang stands beside
THE GENERAL AND CHI FU
who are observing a massive fight" Head slamming, teeth
flying" Shang, flustered, watches as a soldier keels over in
front of them.
CHI FU
Most impressive"
The General steps over the fallen soldier and climbs onto his
horse.
GENERAL
Good luck, Captain.
Shang watches as he rides off with his battalion of men.
SHANG
(under his breath)
Good luck, father"
Chi Fu turns to Shang and WHIPS out his brush and pad"
CHI FU
(smiling)
Day One" ..
Shang gathers himself and turns to his men.
SHANG
(yelling)
Soldiers!
The men immediately pull back, leaving Mulan alone on the
ground. They all point at her"
(CONTINUED)
SEQUENCE 8
MULAN EIGH'rH DRAFT 12/21/96 p. 40.
CONTINUED:
SOLDIERS
He started it!
Shang approaches Mulan.
SHANG
(to Mulan)
I don't need anyone causing trouble in my
camp.
MULAN
(nervously)
Sorry ...
(recovering; manly)
I mean sorry you had to see that, but you
know how it is when you get those manly
urges, and ya just gotta kill something,
(cleaning her ears)
Umph ... fix things ... cook outdoors ...
Shang grabs Mulan by the collar.
SHANG
What's your name?
MULAN
(nervously)
Uh .... I, uhh ...
Chi Fu appears beside Shang.
' CHI FU
Your commanding officer just asked you a
question!
Mulan is totally flurnoxed.
MULAN
(sweating)
I've got a name, heh ... and it's a boy's
name, too.
Mushu pops out behind her head and whispers in her ear.
MUSHU
(prompts her)
Ling! How 'bout Ling?
MULAN
(points to Ling)
His name is Ling.
(CONTINUED)
(
SEQUENCE 8
MULAN EIGHTH DRAFT 12/21/96 p. 41.
CONTINUED:
SHANG
I didn't ask for his name. I asked for
yours.
MUSHU
(thinking)
Try ... uhh ... Chu!
MULAN
(blurts out)
Ah-Chu!
SHANG
Ah-Chu?
MUSHU
Gesundheit!
(laughing)
I kill myself.
MULAN
Mushu!
SHANG
Mushu?
MULAN
No!
SHANG
Then what is it?
Ping.
up.
MUSHU
Ping was my best friend growing
MULAN
(to Shang)
It's Ping.
SHANG
Ping?
MUSHU
'Course Ping did steal rny--
(MUFFLED) ... girlfriend while I was molting.
Mulan keeps her hand over Mushu's mouth.
MULAN
(certain)
Yes. My name is Ping.
(CONTINUED)
SEQUENCE 8
MULAN EIGHTH DRAFT 12/21/96 p. 42.
CONTINUED:
Shang stares intently at Mulan as he holds out his hand.
SHANG
Let me see your conscription notice.
She nervously hands it to him.
CHI FU
(reading; shocked)
"Fa Zhou" ... the Fa Zhou'?
SHANG
I didn't know Fa Zhou had a son.
MULAN
(manly)
He doesn't talk about me much.
(hocking a loogie)
Hwaaaark ...
(spitting)
Ptooey ...
Only she can't get the saliva dangler to fall.
CHI FU
(whispering to Shang)
I can see why-- the boy's an absolute
lunatic.
Shang assumes his officious manner and turns to the troops.
SHANG
Thanks to your new friend Ping, you'll
spend tonight picking up every single
grain of rice. And tomorrow, the real
work begins!
Yao, Ling and Chien Po GLARE and GROWL at Mulan.
MUSHU
You know, we have to work on your people
skills.
EXT. ARMY CAMP - MORNING ( SEQUENCE 8 . 7 )
CUT TO:
A lone little tent stands outside the main group of tents.
IN'r. MULAN' S TEN'l'
MUSHU picks up the cricket, winding his wings like an alarm
clock. He sets the cricket down beside Mulan, who's asleep.
( CON'rINUED)
SSOUENCE 8.7
MULAN EIGHTH DRAFT 12/21/96 p. 43.
CONTINUED:
RRRINGGG ! ! ! !
MULAN' S POV -
Mushu smiles proudly in her face.
MUSHU
(yelling)
Alright, rise and shine, sleeping beauty!
Mulan slowly sits up as Mushu rips away her blanket and
rushes around the tent.
MUSHU
C 'mon, hup, hup, hup ! Get your clothes
on, get ready-- got breakfast for you ...
Mulan wipes her eyes.
MUSHU
(holding out a bowl)
Look-- you get porridge ...
ON THE PORRIDGE - two eggs and a piece of pork make a smiley
face.
MUSHU
... and it's happy to see you!
(noticing cricket in porridge)
Hey-- get outta there.
(flicking him away)
You"re gonna make people sick!
MOLAN
(dressing)
Am I late?
Mushu stuffs food into her mouth.
MUSHU
No time to talk. Now remember, it's your
first day of training, so listen to your
teacher, and no fighting -- play nice
with the other kids ... unless, of course,
one of the other kids want to fight, then
you have to kick the other kid's butt.
MOLAN
(eating)
But I don't want to kick the other kids'
butts.
(CONTINUED)
SEQUENCE 8.7
MULAN EIGHTH DRAFT 12/21/96 p. 44.
CONTINUED:
MUSHU
Don't talk with your mouth full. Now
let's see your war face ...
Mulan attempts a pathetic fierce look. Mushu raises a brow.
MUSHU
Oooh, I think my bunny slippers just ran
for cover ...
(grabbing her collar)
C'mon, scare me, girl!
Mulan GROWLS at him, annoyed. He smiles, satisfied.
MUSHU
That's my tough looking warrior! That's
what I'm talkin' about! Now get out
there and make me proud!
KAHN pokes his head into the tent and WHINNIES.
MUSHU
Whaddya mean the troops just left"?
MULAN
They what?
OUTSIDE THE TENT
Mulan hurries off as Mushu starts after her.
MUSHU
Wait! You forgot your sword!
Only she's gone. He sighs.
MUSHU
(wiping a fake tear; to the
cricket)
My little baby ... off to destroy people.
CUT TO:
EXT. TRAINING GROUNDS - MOMENTS LA'rER ( SEQUENCE 8 . 8 )
The soldiers are goofing off. Chi Fu tries to control them.
CHI FU
Order, people, order!
SOLDIER
I'd like a pan-fried noodle!
( CON'l'INUED)
(
SEQUENCE 8.8
MULAN EIGHTH DRAFT 12/21/96 p. 45.
CONTINUED:
CHIEN PO
Ooh-- sweet and pungent shrimp!
SOLDIER 2
Moo goo gai pan!
CHI FU
(furious)
That's not funny!
Ling sees Mulan heading towards them.
LING
(smirking; to men)
Looks like Rice Boy slept in this
morning.
She tries to join them, only they push her down the line.
Mulan comes to a stop beside Ling and Yao.
LING
(to Mulan; fake concern)
Ohh, your shoes are on the wrong feet.
You must be really tired.
YAO
How 'bout a little ...
(giving her a wedgie)
pick me up?
Mulan gasps as the men laugh at her underwear necklace.
SHANG O.S.
Soldiers!
The men stand at attention as Shang enters.
SHANG
You will assemble swiftly and silently
every morning.
He takes off his shirt-- he's hot. Mulan sneaks a peek.
SHANG
Anyone who acts otherwise, will answer to
me.
YAO
(whispering to Ling)
Ooh, tough guy.
(CONTINUED)
*
SEQUENCE 8.8
MOLAN EIGHTH DRAFT 12/21/96 p. 46.
CONTINUED:
SHANG
Yao.
Shang pulls out an arrow and draws his bow.
step back, leaving Yao front and vulnerable.
high into a pole behind him.
The row of men
Shang FIRES it
SHANG
•rhank you for volunteering.
(gesturing)
Retrieve the arrow.
Yao bows, then approaches the pole.
YAO
(mumbling)
Oh, I'll get that arrow, Pretty Boy--
and I'll do it with my shirt Qil.
Shang holds up his hand.
SHANG
One moment. You seem to be missing
something.
Shang opens a box and takes out an elaborately carved disc of
stone. He holds up Yao's wrist and ties the disc to it with
a colorful silk ribbon.
SHANG
(re: the disc)
This -- represents discipline.
(tying on another disc)
And this, represents strength.
Yao falls to the ground under the weight of the stones.
SHANG
You need both to reach the arrow.
Yao looks at the top of the pole, then aggressively begins
his climb. Grunting, sweating-- he starts to make it up, but
the weights are too much. He CRASHES to the ground.
Chien Po, Ling and Mulan attempt the same and fail. Mulan
slowly walks past Shang.
SHANG
We"ve got a long way to go.
Shang tosses long, wooden poles to the men as he begins
TRAINING. Throughout, the men try to sabotage Mulan.
(CONTINUED)
(
SEQUENCE 9.0
MULAN EIGHTH DRAFT 12/21/96 p. 47.
CONTINUED:
"I'LL MAKE A MAN OUT OF YOU" SONG - SEQUENCE 9.0
Shang:
LET'S GET DOWN TO BUSINESS -- TO DEFEAT THE HUNS
DID THEY SEND ME DAUGHTERS WHEN I ASKED FOR SONS
YOU'RE THE SADDEST BUNCH I'VE EVER MET
BUT YOU CAN BET BEFORE WE'RE THROUGH
MISTER I'LL MAKE A MAN OUT OF YOU
TRANQUIL AS A FOREST
BUT ON FIRE WITHIN
ONCE YOU FIND YOUR CENTER
YOU ARE SURE TO WIN
YOU'RE A SPINELESS, PALE, PATHETIC LOT
AND YOU HAVEN'T GOT A CLUE
SOMEHOW I'LL MAKE A MAN OUT OF YOU
A Soldier - I'M NEVER GONNA CATCH MY BREATH
Another Soldier- SAY GOODBYE TO THOSE WHO KNEW ME
Ling - BOY, WAS I A FOOL IN SCHOOL FOR CUTTING GYM
Mushu - THIS GUY'S GOT 'EM SCARED TO DEATH
Millan - HOPE HE DOESN'T SEE RIGHT THROUGH ME
Ling - NOW I REALLY WISH THAT I KNEW HOW TO SWIM
{BE A MAN)
WE MUST BE SWIFT AS THE COURSING RIVER
{BE A MAN)
WITH ALL THE FORCE OF A GREAT TYPHOON
{BE A MAN)
WITH ALL THE STRENGTH OF A RAGING FIRE
MYSTERIOUS AS THE DARK SIDE OF THE MOON
Mulan collapses, exhausted. Shang hands her Kahn's reins
through the following:
Shang:
TIME IS RACING TOWARD US TILL THE HUNS ARRIVE
HEED MY EVERY ORDER AND YOU MIGHT SURVIVE
YOU'RE UNSUITED FOR THE RAGE OF WAR
SO PACK UP GO HOME YOU'RE THROUGH
HOW COULD I MAKE A MAN OUT OF YOU
Mulan turns to leave when she spies the arrow atop the pole.
Determined, she starts to climb the pole. She falls, then
gets an idea. Tying the stone discs together, she uses them
to pull herself up the pole. The men come to watch, admire,
and be motivated by her.
{BE A MAN)
WE MUST BE SWIFT AS THE COURSING RIVER
{BE A MAN)
WITH ALL THE FORCE OF A GREAT TYPHOON
{BE A MAN)
(CONTINUED)
SEQUENCE 9.0
MULAN EIGH'l'H DRAFT 12/21/96 p. 48.
CONTINUED:
WI'l'H ALL THE STRENGTH OF A RAGING FIRE
MYSTERIOUS AS THE DARK SIDE OF THE MOON
(BE A MAN)
WE MUST BE SWIFT AS THE COURSING RIVER
(BE A MAN)
WITH ALL THE FORCE OF A GREAT TYPHOON
(BE A MAN)
WITH ALL THE STRENGTH OF A RAGING FIRE
MYSTERIOUS AS THE DARK SIDE OF 'l'HE MOON
The soldiers, in perfect unison, complete elegant, skilled
martial arts kicks and leaps into the air.
Mushu and the cricket relax on lounge chairs, satisfied.
DISSOLVE TO:
EXT. WOODS - NIGHT (SEQUENCE 7.3)
SHADOWS AND LIGHT illuminate Shan-Yu as he swiftly climbs a
tree. Reaching the apex, he HACKS off the top and waits ...
searching the sky.
Finally, he sees it -- the FALCON swoops past him, dropping
something into his hand.
He opens it, revealing a LITTLE DOLL. A beat before the
falcon alights on his shoulder.
Shan-Yu studies the doll, then brings it in close ... SNIFFING
it. His eyes go wide, and he quickly JUMPS down from tree to
tree -- landing in front of his MEN.
They see the doll in his hand.
BIG ELITE HUN
(LAUGHS)
The other elite Huns stare him silent. Shan-Yu TOSSES the
doll to him.
SHAN-YU
Look closer ... what do you see?
The Big Hun lifts the doll's arm.
BIG ELITE HUN
Black pine ...
(realizing)
... from the high mountains!
Shan-Yu reacts, "that's right." The Big Hun tosses the doll
to TWIN HUNS. One of them lifts a piece of hair from the
doll.
(CONTINUED)
(
SEQUENCE 7.3
MULAN EIGHTH DRAFT 12/21/96 p. 49.
CONTINUED:
TWIN HUN
White horsehair ... (concerned)
... Imperial stallions!
He tosses the doll to another Hun.
PREZ HUN
(sniffing)
Sulphur ... from cannons.
Shan-Yu takes the doll back.
SHAN-YU
This doll came from a village in a high
mountain pass ... where the Imperial army
is waiting for us.
ARCHER
We can avoid them easily.
Shan-Yu mounts his horse.
SHAN-YU
No, the quickest way to the Emperor is
through the Tung-Shao pass.
He looks at the doll.
SHAN-YU
Besides, the little girl will be missing
her doll ... we should return it to her.
And off their smiles .. .
DISSOLVE TO:
EXT. LAKE - NIGHT - (SEQUENCE 8.3)
PAN DOWN from a FULL MOON to a small, pristine lake nestled
in the midst of towering rocks and sweeping trees.
Mushu paces nervously in front of a large bush near the lake.
MUSHU
Oh no. This is not a good idea. What if
somebody sees you?
MULAN
Just because I look like a man doesn't
mean I have to smell like one!
(CONTINUED)
SEQUENCE 8.3
MULAN EIGHTH DRAFT 12/21/96 p. 50.
CONTINUED:
surfaces from the water, shoulder-high.
MULAN
(refreshed)
Ahhh ...
Mushu, his ears acting as blindfolds, holds out her clothes.
MUSHU
Alright, alright-- that's enough! Now
come on, get out before you get all pruny
and stuff.
MULAN
(relaxed)
Mushu, if you're so worried, go stand
watch.
Mushu walks back to the cricket, his eyes still covered.
MUSHU
(imitating Mulan)
Yeah yeah, "stand watch Mushu while I
blow our secret with my stupid girly
habits." Pffft. Hygiene.
Suddenly, from the hill comes the sound of running feet. 'rhe
cricket starts CHIRPING.
LING O.S.
Whaaa! ! !
YAO O.S.
Me first! Me first! Me first!
Mushu opens his eyes to see the Gang of Three running towards
the lake, shedding their clothes.
MUSHU
(panicked)
Aaaaah! We're doomed!
couple of things I know
notice!
He heads towards the lake.
LING O.S.
Hi-yaaahh ! ! !
There are a
they're bound to
Mulan panics and ducks into the water.
(CONTINUED)
SEQUENCE 8.3
MOLAN EIGHTH DRAFT 12/21/96 p. 51.
CONTINUED:
LING/YAO O.S.
Aii-yahyahyah! !
Ling, then Yao jump into the lake. Chien Po tests the water
with his big toe, then does a cannonball.
CHIEN PO
Whoo!!!
The Gang of Three splash about, having fun. Under cover of a
lily pad, Mulan makes her way towards a rock. Yao sees her.
YAO
(happily}
Hey, Ping!
Mulan freezes.
MULAN
(smiling; feigning surprise)
Oh hi, guys. I didn't know you were
here.
They look at each other, confused.
MULAN
I was, just, washing, so now I'm clean,
and I'm going to go. . . bye bye.
She ducks behind a rock. Ling backstrokes towards her, a
lotus lily pad strategically placed.
Mulan
Before
LING
Come back here!
(swimming to her)
I know we were jerks to you before, so ...
let's start over.
(holding out his hand; assuming
a persona}
Hi , I 'm Ling .
quickly shakes his hand.
MULAN
(nervously)
Heh.
she can get away, Chien Po appears beside her.
CHIEN PO
(smiling}
And I'm Chien Po.
(CONTINUED}
SEQUENCE 8.3
MULAN EIGHTH DRAFT 12/21/96 p. 52.
CONTINUED:
MULAN
(fake smile)
Hello, Chien Po ...
SPLOOSH -- A pair of naked legs climb onto a rock in front of
them.
YAO O.S.
And I ... am Yao!
Mulan turns around to see Yao. Horrified, she covers her
eyes.
YAO
King of the Rock!
(teasing)
And there's nothing you girls can do
about it!
LING
Oh yeah'? Well I think--
(pointing to her)
... the Ping and I can take you.
Mulan starts to swim off.
MULAN
I really don't want to take him anywhere.
LING
Ping -- we've been challenged. We have
to fight!
MULAN
No, we don't. We could just, close our
eyes ...
(miming swimming)
-- and swim around ...
Ling grabs her arm.
LING
C'mon, don't be such a gir--
(grabbing his butt)
OUCH! Something bit me!
CLOSE-UP of Mushu, making a disgusted face behind Ling.
MUSHU
Uggh, what a nasty flavor!
Ling turns and sees him.
(CON'rINUED)
SEQUENCE 8 . 3
MULAN EIGHTH DRAFT 12/21/96 p. 53.
CONTINUED:
LING
Snake!
(running towards the men)
Ahhhh!
Chien Po and Yao react, quickly hopping onto a rock.
CHIEN PO/YAO
Aaaah! Snake! Snake!!!
Mulan WHISTLES for Kahn. As the Gang of Three peer nervously
into the water, Mulan gets out of the lake using Kahn as a
shield. Mushu rides on Kahn's tail.
The Gang of Three remain huddled on the rock.
LING
(to Yao)
Some king of the rock.
Yao shoves Ling into the water.
Mulan starts putting on her clothes.
MULAN
Boy, that was close.
MUSHU
(brushing his teeth)
No, that was vile! You owe me big!
Squirting more toothpaste on his brush, he continues
SCRUBBING.
SOLDIERS O.S.
(yelling}
Yaaaaaaahhbh! ! ! !'
As the rest of the troop's naked legs stampede past them,
Mulan looks at Mushu.
MUSHU
Don't look at me. I ain't biting no more
butts.
And off his attitude ...
EXT. CHI FU'S TENT - MOMENTS LATER (SEQUENCE 8.4)
CUT TO:
Chi Fu smugly scolds Shang as Mulan, Mushu, Kahn and Cri-Kee
approach.
(CONTINUED)
SEQUENCE 8.4
MULAN EIGHTH DRAFT 5/9/97 p. 54.
CONTINUED:
CHI FU O.S.
You call yourself a Captain? 'l'hose boys
aren't ready to fight ...
INSIDE THE TENT
Chi Fu paces as Shang sits silently, trying to compose
himself.
SHANG
They completed their training.
CHI FU
They wouldn't last a day against the
Huns. Hmph. Once the General reads my
report, your men will never see battle.
OUTSIDE THE TENT
Mushu reacts, worried.
MUSHU
( to Cri-Kee)
Now how am I gonna make Mulan a hero if
she doesn't fight?
INSIDE THE TENT
Shang grabs Chi Fu by the collar, turning him to face him.
SHANG
You can't do that. You know--
CHI FU
(taking his hand off his
shoulder)
Be careful, Captain. The General may be
your father, but I am the Emperor's
counsel.
(smugly)
And by the way, I got that job on my own.
Chi Fu haughtily moves towards the entrance.
CHI FU
You're dismissed.
As Shang storms out of the tent ...
EXT. CHI FU'S TENT - CONTINUOUS
He passes Mulan.
( CON'l'INUED)
•
•
•
•
•
•
•
•
•
•
•
*
•
*
•
•
*
•
•
•
•
•
SEQUENCE 8 . 4
MULAN EIGHTH DRAFT 5/9/97 p. 55.
CONTINUED:
MULAN
(manly; awkward)
I, uh, didn't mean to over--
Shang gives her a harsh glance.
MULAN (cont'd)
(meekly)
--hear.
Shang continues to walk off. Mulan thinks a moment, then:
MULAN
(calling)
We may not see battle, Captain. But
we're ready. Thanks to you.
Shang takes that in for a second, then continues off. Mushu
looks up at Mulan, watching her stare after him.
MUSHU
(not liking it)
I saw that.
MULAN
Saw what?
Mushu mimes her gaze after Shang.
MUSHU
That. You like him, don't you.
MULAN
(defensively)
What? No ... I. .. uh ...
MUSHU (cont'd)
Uh-huh.
(then; disgusted)
Go get dressed, and focus!
Mulan walks off as Mushu turns to Cri-Kee.
MUSHU (cont'd)
C'mon, we"ve got work to do.
CUT TO:
*
*
*
*
*
*
*
*
*
*
*
*
*
*
•
•
*
•
*
•
•
•
*
•
•
•
•
•
•
•
•
•
*
SEQUENCE 8.4
MULAN EIGHTH DRAFT 5/9/97 p. 56.
EXT. CHI FU'S TENT - MOMENTS LATER
As Chi Fu exits with a bath brush, towel and soap, Mushu and
Cri-Kee sneak inside.
CUT TO:
INT. CHI FU'S TENT
CLOSE ON a picture of Chi Fu in a cheesy pose with the
Emperor. Pull back to reveal Mushu, staring at the picture
in disbelief and Cri-Kee writing on a piece of paper.
Cri-Kee CHRIPS, "I'm done!" and points proudly at the note.
MUSHU
(reading)
Okay, lemme see what you've got.
From General Li ... "Dear Son-- We're
waiting for the Huns at the pass. It
would mean a lot if you'd come back us
up. II
(nicely)
Hmm, that's great, except you forgot,
"and since we're out of potpourri,
perhaps you wouldn't mind bringing some
up."
(as Mushu)
Hello! This is the army! Make it sound
more urgent, please. You know what I'm
talking about?
Cri-Kee salutes and starts rewriting.
MUSHU
(looking over his shoulder;
excited)
That's better! Much better! Let's go.
Mushu grabs the notice and runs out.
AT THE WATER TROUGH
Kahn takes a leisurely drink; then stops, turning to see
Mushu on his back.
MUSHU
(smiling)
Kahnny, baby ... we need a ride!
Kahn spits a huge stream of water at him, knocking him to the
ground. A beat as Kahn LAUGHS, getting in a good SNORT.
( CON'l'INUED)
*
*
*
*
SEQUENCE 8.4
MULAN EIGHTH DRAFT 12/21/96 p. 57.
CONTINUED:
MUSHU O.S.
You liked that, didn't you.
And off Kahn's smile ...
CUT TO:
EXT. WOODS - A LITTLE LATER
Chi Fu, dressed in a towel, angrily heads back towards his
tent, holding a shoe.
CHI FU
(mumbling)
Insubordinate ruffians.
(yelling towards lake}
You men owe me a new pair of slippers.
And I do not squeal like a girl!
A panda appears, takes the slipper out of Chi Fu's hand and
nonchalantly chews it.
CHI FU
(SQUEALS LIKE A GIRL}
Riding on the panda is a soldier "puppet" constructed of real
armor, controlled by Mushu. Cri-Kee holds a megaphone to
Mushu' s mouth.
MUSHU
(lowering voice}
Urgent news from the General!
(off Chi Fu's shocked look}
What's the matter, haven't you ever seen
a black and white before?
The puppet shakily extends its arm which holds a scroll. Chi
Fu takes the note, looks at the panda, then back at the
puppet.
CHI FU
(suspiciously}
Who are you?
MUSHU
(indignant)
Excuse me?! I think the question is,
"who are you?" We're in a war, man!
There's no time for stupid questions! I
should have your hat for that-- snatch it
right off your head! But I'm feeling
gracious today, so carry on before I
report you!
(CONTINUED}
•
•
SEQUENCE 8.4
MOLAN EIGHTH DRAFT 5/9/97 p. 58.
CONTINUED:
Mushu rides off as Chi Fu reads the notice. In the
background, Mushu tries vainly to steer the panda as it
climbs up a tree. Chi Fu reacts to the note, then looks
back, only Mushu and the panda are gone.
INT. SHANG'S TENT - MOMENTS LATER
Shang starts to hang up his armor .. Chi Fu bursts into the
tent, holding up the notice.
CHI FU
Captain ... important news from the
General! We're requested at the front!
OUTSIDE THE TENT IN A TREE
Mushu looks to CRI-KEE and smiles.
MUSHU
(cocky}
Pack up, Cri-Kee, we're movin' on out!
EXT. ARMY ENCAMPMENT - THAT NIGHT ( SEQUENCE 9 . 6}
CUT TO:
Shang stands in front of his troops, who have gathered their
belongings and are awaiting their assignment.
SHANG
Men ... The General has located Shan-Yu
and the Huns, and our assistance is
requested.
ON CHIEN PO
solemnly taking in the news.
SHANG O.S.
We have a long distance to travel, so we
must move quickly.
PAN past LING, eagerly listening, and YAO, practically
drooling with excitement.
SHANG
Ping, we'll need your horse to pull the
lead munitions wagon.
MOLAN
Yes, Sir.
(CONTINUED}
*
*
*
*
*
*
*
*
*
*
*
MULAN EIGHTH DRAFT
SEQUENCE 9.6
12/21/96 p. 59.
CONTINUED:
SHANG
The rest of you -- load the cannons and
explosives. Now!
(turning to Chi Fu)
Did you get that?
Shang turns away as Chi Fu faces the men.
CHI FU
Alright, people. You heard him. Let's
move - move - move!
As the men break up, Mushu stands on Kahn's head, patting the
cricket on the back.
MUSHU
Now can I make things happen, or what?
How do I do it ...
The cricket gives him a look as
Mulan unties Kahn.
MULAN
(concerned)
We're really going to fight.
MUSHU
(smiling)
You bet your Baba's boxers we are!
Mushu slides down Kahn's nose.
MUSHU
I'm telling you-- we're going places,
Mulan.
ON CHIEN PO, elbowing Ling.
CHIEN PO
Oh boy, this is our chance to help save
China.
(then)
Maybe we'll gain honor.
YAO
(excited)
Maybe? Ha! We'll be rolling in it!
And off his broad smile ...
CUT TO:
*
*
SEQUENCE 9.5
MULAN EIGHTH DRAFT 12/21/96 p. 60.
EXT. COUNTRYSIDE - DAY - (SEQUENCE 9.5)
CLOSE ON a wagon wheel, uselessly spinning. SPLAT! Mud
flies as YAO falls face first into a giant puddle. Mulan and
Ling stop straining against the wagon.
YAO
(worn-out)
The Huns can have this part of China.
Chien Po comes in to help get the wagon out of the ditch.
LING
You just have to remember why we're doing
this, Yao.
YAO
So we can be overworked and underfed?
CHIEN PO
So our Emperor will be--
(pushing cart)
--ugh-- ever grateful?
LING
(shaking his head; smiling)
No no no.
(then)
The ladies love a war hero ...
Mulan looks at him.
LING
(authoritatively)
They see a man in uniform, and they lose
control!
The wagon slips.
LING
Whoa!
A beat before Shang appears beside them, helping to push the
wagon.
SHANG
Hut two three four! Hut two three four!
Ling sees some girls working in the fields.
(CONTINUED)
SEQUENCE 9 . 5
MULAN EIGHTH DRAFT 12/21/96 p. 61.
CONTINUED:
A GIRL WORTH FIGHTING FOR
(chanted)
SHANG: HUT TWO THREE FOUR
LING: I MISS MY LIFE BACK HOME IN SZECHUAN
WHEN I WANTED A GIRL IT WAS EASY TO KETCH ONE
SOLDIERS: WHEN WE CAN TALK ABOUT THE ARMY IN THE PAST
TENSE
WHEN WE'VE CLEANED OUR LAST LATRINE AND PITCHED OUR LAST
TENTS
They see TWO attractive GIRLS carrying buckets of water
alongside the road. The girls smile at Mulan; she gives them
a weak smile back ..
SOLDIERS: WE'LL GO AFTER WHAT WE MISSED THE MOST SINCE
WE WENT OFF TO WAR
WHAT DO WE WANT
A GIRL WORTH FIGHTING FOR
LING: (YOU CAN) SAY THAT AGAIN
ALL: A GIRL WORTH FIGHTING FOR
They each go into their fantasy scenarios ...
LING: I WANT A PORCELAIN CHINA DOLL WITH CHERRY
BLOSSOM LIPS
YAO: MY DREAM GIRL'S STURDY AS AN OX WITH CHILDBEARING
HIPS
CHIEN PO: MY FANTASY WILL COOK FOR ME, CAN THAT GIRL
STIR FRY
I'LL EAT ALL DAY AS I WATCH HER FRY ...
SPOKEN: (DREAMILY) BEEF, PORK, CHICKEN
ANIMALS: MMMMMMM
CHI FU: I'VE A GIRL BACK HOME WHOSE UNLIKE ANY OTHER
MCJLAN: YEAH, THE ONLY GIRL WHO'D LOVE HIM IS HIS MOTHER
ALL: BUT WHEN WE COME HOME IN VICTORY THEY'LL LINE UP
AT THE DOOR
LING: WHAT DO WE WANT
A GIRL WORTH FIGHTING FOR
CHIEN PO: I WANT HER GRACEFUL AS A SWAN WITH VERY TINY
FEET
MCJLAN: (NERVOUSLY TAKING HER TURN WITH MUSID:J DOING A
CHARADE TO HELP HER)
THE GIRL FOR ME HAS GOT - A LIMP AND TWO ENORMOUS -
HANDS
LING: MY MANLY WAYS AND TURN OF PHRASE ARE SURE TO
THRILL HER
ALL: HE THINKS HE'S SUCH A LADY KILLER
SPOKEN: WRONG! ! !
(CONTINUED)
SEQUENCE 9.5
MOLAN EIGHTH DRAFT 12/21/96 p. 62.
CONTINUED:
They head up a steep, cold incline.
ALL: IN THE MEANTIME WE GO BRAVELY OFF TO BATTLE
HEY, IS 'l'HAT OUR TEETH OR JUST OUR SWORDS THAT RATTLE
THERE'S A LOOMING THREAT WE'RE HEADING TOWARD THAT'S
BETTER TO IGNORE
THINK OF, INSTEAD
A GIRL WORTH FIGHTING FOR
(RUEFULLY TO SELF) WISH THAT I HAD
A GIRL WORTH FIGHTING FOR
(WHISTLE)
A GIRL WORTH FIGHTING
The men stop singing as they see
BLACK SMOKE curling up into the desolate sky.
EXT. BURNED OUT VILLAGE ( SEQUENCE 9 . 8)
CUT 'l'O:
The men slowly enter the smokey remains of a burned out
village. It's silent, except for THE HOLLOW CLANG OF A
BRONZE PRAYER BELL blown by the wind.
SHANG
(solemnly)
Search for survivors.
They make their way among the ruins. Shang enters a charred
home, narrowly escaping a falling beam. Yao and Ling look
into a wagon, then turn away sadly.
Mulan walks slowly through the village, then stops as she
sees a doll, laying on the ground. It is the same doll Shan--
Yu held. She picks it up and lowers her head, filled with
grief.
Shang dismounts his horse and approaches her.
SHANG
I don't understand ... My father should
have been here.
CHI FU O.S.
Captain!
Shang turns to see Chi Fu, standing on the bluff. Shang goes
to him; looks down to see
The mass destruction of the ARMY.
(CONTINUED)
SEQUENCE 9.8
MULAN EIGHTH DRAFT 12/21/96 p. 63.
CONTINUED:
SHANG, in shock. Chien Po comes up the hill, holding a
military helmet.
CHIEN PO
(saddened}
The General ...
Shang slowly takes his father's helmet ... and turns away.
As the rest of the troops gather along the bluff ...
Mulan sees Shang walk off and ceremoniously plant his sword.
He takes a moment, putting his father's helmet on top in
tribute. She goes to him.
MULAN
I'm sorry.
Shang gathers his composure, rises, and mounts his horse.
SHANG
(to the men}
The Huns are moving quickly.
He points towards the mountains.
SHANG
We'll make better time to the Imperial
City through the Tung-Shao pass.
CLOSE ON Shang.
SHANG
We're the only hope for the Emperor now.
(then)
Move out!
The men slowly follow, leaving Mulan alone. Before she joins
them, she lays the doll beside the General's helmet. As the
WIND HOWLS ...
EXT. TUNG-SHAO PASS - DAY ( SEQUENCE 9 . 9)
Mulan and the troops, weary and cold, march towards a
mountain pass.
BAM! A ROCKET EXPLODES from the munitions wagon.
The troops stop and look up. Mulan turns and sees
CUT TO:
(CONTINUED}
SEQUENCE 9.8
MULAN EIGHTH DRAFT 12/21/96 p. 64.
CONTINUED:
MUSHU AND THE CRICKET
sitting in the wagon. Mushu points a finger at the cricket.
Mulan gives Mushu a look as Shang rides over to her.
THUNK!
SHANG
What happened!?!
MULAN
Uh ...
SHANG
(angrily)
You just blew any chance of surprisingAN ARROW flies into Shang's armor, knocking him off his
horse.
From the mountain crest, A HAIL OF FLAMING ARROWS FIRE
towards them.
The men and Mulan look up in surprise.
Shang pulls the arrow out of his armor.
SHANG
Get out of range!
The soldiers start to run as
HUNS, up in the mountains, launch HUNDREDS of arrows.
Several HIT the munitions wagon, setting'it on fire.
SHANG
(pointing)
Save the cannons!
The soldiers retrieve the cannons, heading for the rocks.
Mular1 starts to grab a cannon when
THUNK THUNK THUNK!
a fresh onslaught of flaming arrows hit.
Attached to the wagon, KAHN rears, WHINNIES.
Mulan cuts him free and rides off just as
BOOM! The wagon EXPLODES.
(CONTINUED)
(
SEQUENCE 9.9
MULAN EIGHTH DRAFT 12/21/96 p. 65.
CONTINUED:
Mulan and Kahn are knocked to the ground. A beat before Mushu
drops out of the sky in front of them.
MUSHU
Oh sure, save the horse.
Mulan grabs him and heads towards the troops, positioned
behind the rocks.
ON SHANG
directing the men.
SHANG
Fire!
CLOSE ON a fuse being lit. BOOM! Mulan fires.
The troops continue firing, dislodging Huns from their sniper
positions.
A row of cannons are grabbed -- revealing Chi Fu, cowering
behind them.
CHI FU
(Auhhh)
The next line of men quickly position their cannons.
THE HUNS
launch another onslaught of arrows as the troops duck.
SHANG
Fire!
THE TROOPS set off their cannons.
BOOM!
FLYING.
The mountain rocks from the explosion, sending Huns
Shang raises his hand.
SHANG
Hold the last cannon!
It's quiet as they look up towards the empty mountain.
Mulan remains silent, watching, transfixed as the last wisps
of smoke clear from the mountain slope. Then, A LONE
HORSEMAN appears ... followed by a massive line of Huns
stretching out along the horizon.
The faces of the men drop. They're doomed.
(CONTINUED)
SEQUENCE 9.9
MULAN EIGHTH DRAFT 12/21/96 p. 66.
CONTINUED:
CHI FU
Ohhh ...
Shang turns to his men.
SHANG
Prepare for battle.
(then)
If we die, we die with honor.
UP ON THE MOUNTAIN TOP
Shan-Yu lets out a barbaric war cry and CHARGES down the
slope.
SHAN-YU
Heeeiiahhh ! ! !
The entire group of Huns GALLOP towards them, swords raised.
Shang turns to Yao.
SHANG
Yao-- aim the cannon at Shan-Yu!
As Yao sets his sights ...
MULAN
draws her sword and looks down at her blade; the mountain
reflecting in it. She looks up at the mountain, then down to
the approaching Huns.
SHIINK! She sheathes her sword.
Mulan pushes Yao aside and GRABS the cannon.
YAO
Hey!
She runs towards the Huns.
SHANG
Ping! Come back! ... Ping!
KAHN WHINNIES as the troops react, "what is he doing?! "
Mushu pops out of Mulan's collar.
MUSHU
Don't worry, I've got you covered ...
(unsure) -- with whatever it is you're doing.
(CONTINUED)
(
SEQUENCE 9.9
MULAN EIGHTH DRAFT 12/21/96 p. 67.
CONTINUED:
GASPING, he sees
THE HUNS
charging straight towards them.
MUSHU
Yep, I'm right behind you.
He quickly ducks into her helmet.
SHANG runs after Mulan.
SHANG
Stop!
Mulan plants the cannon and aims at
SHAN-YU
galloping closer, the look of death on his face.
MUSHU
(panicked}
Alright, you might want to light that
thing right about now ... quickly,
quickly!
Mulan starts to light the flint when
BAM! The falcon KNOCKS it out of her hands and sends Mushu
flying back into the snow. Mulan grabs Mushu and PULLS on
his tail.
WHOOSH! A flame SHOOTS out of his mouth and LIGHTS the fuse.
MUSHU
(coughing}
As the falcon flies off, Mulan sees
SHAN-YU, his sword drawn, right upon her.
Mulan holds up the cannon to block his blow -- he KNOCKS it
behind him.
ZIP PAN to the LIT FUSE, ready to go off any second.
Shan-Yu SLASHES his sword at Mulan.
MULAN
Auggh!
(CONTINUED}
SEQUENCE 9.9
MULAN EIGHTH DRAFT 12/21/96 p. 68.
CONTINUED:
YAO, LING AND CHIEN PO
stand on a ridge, watching the confrontation ..
YAO
C'mon, we gotta help!
They head down as
MULAN
barely escapes the blade of Shan-Yu's sword. She DIVES under
his horse, grabs the cannon and points it at Shan-Yu.
The rocket FIRES. Mushu hangs on to it as it flies high
above Shan-Yu's head.
MUSHU
You missed! How could you miss! He was
three feet in front of you!
( SEQUENCE 10)
WHAM! The rocket lodges into an overhanging mountain top.
MUSHU emerges from the smoking hole.
MUSHU
(COUGHING)
THE MOUNTAIN
suddenly explodes and crumbles ... causing a huge AVALANCHE.
SHAN-YU
looks back at the thundering mountain side in shock.
MULAN
smiles, relieved her plan worked. Shang looks at her in
surprise. She drops the cannon and grabs his hand as
THE AVALANCHE
spills towards them.
THE HUN HORDE
panics and flees.
(CONTINUED)
I
(
SEQUENCE 10
MULAN EIGHTH DRAFT 12/21/96 p. 69.
CONTINUED:
YAO, LING AND CHIEN PO
continue charging towards the Huns.
YAO/LING/CHIEN PO
Yaahhhhh ! ! !
They stop, watching the avalanche bury the enemy. They start
running in the opposite direction.
YAO/LING/CHIEN PO
Agggghhh ! ! !
KAHN
reacts and charges straight towards the avalanche.
SHAN-YU AND HIS ELITE SQUAD
gallop for safety, but it's no use. The avalanche overtakes
and BURIES them.
SHAN-YU
Auggghh!
MULAN AND SHANG
try to outrun the snowy force, but it's relentless.
KAHN
gallops towards them.
MULAN
sees him, jumps on, then holds her hand out to Shang.
SHANG
reaches for it, only they"re ripped apart by a giant sheet of
whiteness.
UP IN THE ROCK SHELTER
YAO, LING AND CHIEN PO
barely have time to jump behind the rocks as
THE AVALANCHE
thunders over the troops, safely ensconced.
(CONTINUED)
SEQUENCE 10
MULAN EIGHTH DRAFT 12/21/96 p. 70.
CONTINUED:
ON THE MOUNTAIN SLOPE
MUSHU rides down on a shield, searching.
MUSHU
Mulan!
He sees some hair sticking out of the snow.
MUSHU
Mulan"?
He pulls the head up, revealing the scary face of a Hun.
HUN
(angrily)
Arrrr!
MUSHU
(pushing his head back down)
Nope.
He sees something else.
MUSHU
Mulan!
He pulls up the cricket.
MUSHU
Man, you are one luckY bug.
THE AVALANCHE
continues its course, SWEEPING Mulan and Kahn away.
MULAN
(GASPS)
They finally gain some solid footing. Then, Mulan turns and
sees a body sliding down the slope.
MULAN
Shang!
She rides up to him, LIFTS him onto the horse.
THE TOP OF A RIDGE
Ling stands on Chien Po's shoulder, Yao beside them.
CHIEN PO
Do you see them?
(CONTINUED)
CONTINUED:
MULAN EIGHTH DRAFT
LING
(pointing)
Yes!
(then; to Yao)
Go ahead!!
SEQUENCE 10
12/21/96 p. 71.
Yao aims and fires an arrow with a rope attached.
YAO
Perfect!
(reaching for the rope)
Now I'll pull them to safe ...
The rope slips out of his hands.
YAO
... ty.
M(JLAN and KAHN forge up the mountain; SHANG unconscious.
MUSHU AND THE CRICKET
see them; head over. Mushu holds up Shan-Yu's sword.
MUSHU
Hey, look what I found!
Mulan grabs him.
MULAN
Mushu, I need a rope!
WHACK! Yao's rope flies down beside them. Mulan grabs it.
MULAN
Thanks!
She tosses Mushu behind her; he barely holds on to Kahn's
tail as they continue to slip down the mountain.
Then he sees where they're heading-- the EDGE OF THE CLIFF.
MUSHU
We're gonna die we"re gonna die! No way
can we survive this. Death is coming!
MULAN ties one end of the rope to Kahn's
up the other end, attached to the arrow.
arrow to shoot ... they're sliding closer
saddle, then picks
She readies the
to the edge ...
THEY GO OVER!
upwards.
As they start to fall, Mulan SHOOTS the arrow
(CONTINUED)
*
*
SEQUENCE 10
MULAN EIGHTH DRAFT 6/6/97 p. 72.
CONTINUED:
ON THE ROCKY LEDGE ABOVE THE CLIFF
The soldiers gather around Yao, trying to comfort him.
YAO
(crying)
I let them slip through my fingers!
WHAP! The rope and arrow land in his hands. He grabs it,
and is yanked towards the edge of the rock.
THE TROOPS
YAO
Ahhh! Ahhh!
grab onto Yao, but the momentum pulls them forward.
SOLDIERS
(panicked; pulling)
Uhh ! Aughh ! Whoa. . . Pull!
Chien Po calmly approaches, picks them up in one huge group
hug, and starts PULLING them back.
DOWN OVER THE PRECIPICE
Mulan, Mushu, Kahn and Shang begin their ascent.
MUSHU
(to Mulan; re: Shang}
You know, if we dump the stiff, we'll get
up much faster.
He pops back into her saddlebag.
THE TROOPS
finally pull them to safety. They encircle Mulan and Shang,
exhausted but victorious.
LING
Alright, let's give them some air!
YAO O.S.
Who wants to see my blister ...
As they back off, Shang looks up at Mulan.
SHANG
Ping ... you are the craziest man I've
ever met ... and for that I owe you my
life.
{MORE}
(CONTINUED)
*
*
*
*
(
SEQUENCE 15
MULAN EIGHTH DRAFT
SHANG (cont'd)
6/6/97 p. 73.
CONTINUED:
(then)
From now on, you have my trust.
Off Mulan' s smile ...
CUT TO:
EXT. CAMPSITE - LATER (SEQUENCE 15)
Chi Fu watches with disgust as
THE SOLDIERS hoist MULAN on their shoulders.
LING
Let's hear it for Ping--
Chien Po throws her backwards-- the soldiers catch her.
LING
The bravest of us all!
CLOSE ON MULAN - wide-eyed as they toss her into the air.
SOLDIERS/GANG OF THREE
(CHEERING)
Mulan smiles. As they toss her again ...
YAO
(to Mulan)
You're king of the mountain!
MULAN
(grabbing her side)
Uggh!
She lands in their arms, but before they can toss her
again ...
MULAN
Guys, guys-- enough!
(getting down)
I •ve, uh, been tossed around too much
today.
YAO
(disappointed)
Ohhh ...
(then; brightening)
Okay, my turn! My turn!
Mulan holds her side, heading off in pain. She looks at her
hand-- it's covered with blood.
(CONTINUED)
*
*
*
SEQUENCE 15
MULAN EIGHTH DRAFT 12/21/96 p. 74.
CONTINUED:
Shang approaches.
SHANG
(smiling)
Ping
Mulan stops.
MULAN
Sir?
SHANG
I was thinking, when we reach the
Imperial City, I'd like you to present
Shan-Yu's sword to the Emperor.
He holds it out to her.
MULAN
(surprised)
Me, Sir?
SHANG
China should know what you've done.
(then; quietly)
Because of you, no more lives will be
taken.
A beat as Mulan takes this in. She wishes she could say
something to him, but he retains a quiet dignity.
MULAN
I'd be honored, Captain.
Shang gives her a small, heartfelt smile, then leaves.
Mulan smiles as MUSHU approaches, ecstatic.
MUSHU
Did I hear that right? You-- the sword--
the Big Guy?
Mulan nods.
MUSHU
(euphoric)
I knew we could do it! All you had to do
was trust me!
MULAN
(smiling)
We did it.
(CONTINUED)
CONTINUED:
MULAN EIGHTH DRAFT
MUSHU
That's right!
(lightly punching her)
You're the man!
(then)
Well ... sort of.
SEQUENCE 15
12/21/96 p. 75.
Mushu starts to dance victoriously as Mulan grabs her side.
MUSHU
Hey, Mulan, help me pick my victory pose--
(posing)
Whatcha think?
MULAN
Augggh ...
Mushu looks up at her.
MUSHU
Mulan?
AT THE CAMPFIRE
Shang and the men laugh, looking at Shan-Yu's sword.
KAHN WHINNIES.
Shang turns to see Mulan, doubled over in the snow. He
hurries to her.
SHANG
Ping! What's wrong?
He stops as he sees BLOOD on her side.
SHANG
(calling to the men)
He's wounded! Get help!
Mulan looks groggily at Shang - her vision blurring.
SHANG
Ping! Hold on. . . hold on ...
Close on his mouth as it goes out of focus.
DISSOLVE TO:
EXT. MEDIC'S TENT - LATER
Yao, Ling, and Chien Po sit in front of the tent as Shang
paces, awaiting the Medic's diagnosis.
(CONTINUED)
SEQUENCE 15
MULAN EIGHTH DRAFT 12/21/96 p. 76.
CONTINUED:
Mushu and the cricket pace in a circle off to the side.
Finally, the Medic exits the tent. He solemnly approaches
Shang and tells him something.
Shang steps back, in shock, then enters the tent. The Gang
of Three look at each other apprehensively.
INT. TENT
Mulan lies on a cot. She looks up to see
SHANG
slowly moving towards her.
Mulan gives him a soft, groggy smile. Then freezes as she
sees how angry he looks.
She reflexively touches her chest-- and looks down to see
bandages wrapped around her torso. She's been discovered.
She covers herself.
MULAN
I can explain--
CHI FU bursts into the room. He looks at Mulan in horror.
CHI FU
So it's true!
Shang starts to leave.
MULAN
Shang!
EX'r. TENT
The rest of the troops have gathered. They watch in shock as
Chi Fu exits the tent holding Mulan.
CHI FU
(to Mulan)
I knew there was something wrong with
you!
(to troops)
A woman! Treacherous swine.
He throws her to the ground as the men gape in utter
disbelief.
(CONTINUED)
CONTINUED:
MULAN EIGHTH DRAFT
MULAN
(to Shang)
My name is Mulan.
CHI FU
(to the troops)
High treason!
MULAN
(to Shang)
I did it to save my father.
CHI FU
Ultimate dishonor!
MULAN
SEQUENCE 15
6/5/97 p. 77.
It was the only way. Please believe me--
Chi Fu gets in Shang's face.
CHI FU
Carry out the penalty ...
(questioning)
Captain ... ?
Shang sees Mulan, laying on the ground, defenseless.
The Gang of Three move to protect her, but Chi Fu cuts them
off.
CHI FU
You know the law!
Mulan looks up to see
SHANG
standing above her, his sword drawn.
MULAN
awaits her punishment, staring at him through moist eyes.
Then drops her head.
Shang throws his sword in the snow, and turns away from her.
SHANG
Move out!
CHI FU
(interjecting)
But you can't j~st--
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 15
MULAN EIGHTH DRAFT 6/5/97 p. 78.
CONTINUED:
SHANG
(quietly; threatening)
I said move out ..
EXT. CAMPSITE - LATER
DISSOLVE TO:
The soldiers solemnly leave camp, avoiding eye contact with
Mulan. Shang rides up, Kahn beside him. He doesn't look at
her.
SHANG
A life for a life.
(turning)
My debt is repaid.
He gives her Kahn's reins. Mulan looks up at him, pained.
SHANG O.S.
Hiyaa!
And as she watches him ride off ...
DISSOLVE TO:
EXT. ROCK SHELTER - LATER THAT AFTERNOON - (SEQUENCE 17.5)
CLOSE ON A FIRE. Pull back to reveal the cricket tossing
twigs into the flame. Mulan huddles beside it as Kahn covers
her with a blanket. The cricket crawls in next to Mulan.
Off to the side, Mushu breaks a roasting stick from a tree.
MUSHU
(depressed)
I was this close. . . 'rhis close to
impressing the Ancestors ... getting the
top shelf, an entourage ... all my fine
work, pfft!
Mushu spears a dumpling and goes to roast it beside Mulan.
Hi.
MUSHU
(softly)
MULAN
I should never have left home.
He checks his dumpling.
( CON'l'INUED)
•
•
•
•
SEQUENCE 17.5
MULAN EIGHTH DRAFT 7/11/97 p. 79.
CONTINUED:
MUSHU
(making the best of it)
Hey, c'mon, you went to save your
father's life. Who knew you'd end up
shaming him, disgracing your ancestors,
and losing all your friends?
(then; voice breaking)
You've just gotta learn to let these
things go ...
He lets out a small SOB.
MULAN
Maybe I didn't go for my father ... Maybe
what I really wanted was to prove I could
do things right ... so when I looked in
the mirror--
(picking up her helmet)
I'd see someone worthwhile.
She looks at her reflection in the helmet.
MULAN
But I was wrong. . . I see nothing.
She blinks back tears as she lets the helmet roll from her
hands. Mushu, touched by her sadness, picks it up and spits
on it.
MUSHU
(wiping vigorously)
Well, that's just 'cause this needs a
little spit, that's all. Let me shine
this up for you; here, look at you, you
look so pretty ...
He shows her the helmet -- only she doesn't look.
Mushu stares at his reflection in Mulan's helmet. Then ...
MUSHU
Look, the truth is, we're both frauds.
The Ancestors never sent me, they don't
even like me. You risked your life to
help people you love. I risked your life
to help myself. At least you had good
intentions.
CRI-KEE
(CHIRP CHIRP)
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
SEQUENCE 17.5
MULAN EIGHTH DRAFT 6/5/97 p. 80.
CONTINUED:
MUSHU
Whaddya mean, you're not lucky? So all
this time I've been draggin' around a
DUD?!
(turning to Kahn; sarcastically
suspicious)
What• re you ... a sheep'?
MULAN
I guess we go home now. I'll have to
face my father sooner or later.
Mushu looks up, then approaches her.
MUSHU
Don't worry, 'kay'? We started this
together and that's how we'll finish it.
I promise.
He hugs her.
As Shan-Yu's FALCON FLIES over the dejected trio ...
DISSOLVE TO:
EXT. SNOWFIELD - DUSK (SEQUENCE 16)
A vast expanse of whiteness. A shadow floats across it.
It's the FALCON, searching through the debris for something,
or someone ....
ICE SMASHING as
SHAN-YU'S ARM
thrusts through the snow.
THE FALCON
screeches and dives.
SHAN-YU
climbs out of his grave and surveys the damage around him --
all his men are lost.
SHAN-YU
(HOWLING)
A large shield, embedded in a snowbank, suddenly falls. From
the other side, a Hun emerges, walks. As he passes a cart
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 16
MULAN EIGHTH DRAFT 6/5/97 p. 81.
CONTINUED:
ANOTHER HON bursts from within. The wheel of the cart rolls
down a ravine, revealing TWO MORE HUNS, climbing out.
Their eyes-- icy, as one spits out his tooth and another
grabs the sword from a frozen gloved hand. They approach
SHAN-YU
who sees that his elite squad is alive. Perfect.. He turns
and heads towards the distant lights of the Imperial City
with his men and a smile.
ON THE MOUNTAINTOP
Mulan and Mushu watch them in fear. Mushu's jaw is dropped.
MUSHU
Wow. Quick defrost.
Mulan runs back to Kahn, picking up the sword Shang left
behind. She rushes to Kahn.
MULAN
C'mon, we have to warn them!
MUSHU
No we don ' t ...
But she's already on Kahn.
MUSHU
Did you see those Huns? They POPPED
outta the snow! Like daisies!
(running after her}
Why do ya always have to be so stubborn!
And how stupid am I for following you!
CUT TO:
EXT. THE IMPERIAL CITY - EARLY EVENING (SEQUENCE 19)
Beautiful kites fly in the air. Pan down to reveal a large
CROWD OF PEOPLE lining the streets of the Imperial City.
GUARD
(shouting}
Make way for the heroes of China!
CROWD
(ad-lib}
Hooray! Hail the saviors of China!
(CONTINUED}
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 19
MULAN EIGH'l'H DRAFT 6/6/97 p,. 82 ..
CONTINUED:
Mulan peers through the crowd as SHANG rides by on his horse.
Chien Po, Ling, Yao and the rest of the men march solemnly
behind him.
MULAN
Shang!
Shang and the Gang of Three stop, and turn in surprise.
SHANG
Mulan'?
MULAN
The Huns are alive!
(motioning)
They're in the city!
SHANG
What?
(then; dismissive)
You don't belong here, Mulan. Go home.
M"'LJLAN
Shang, I saw them in the mountains. You
have to believe me!
SHANG
Why should I?
MULAN
Why else would I come back?
(then)
You said you'd trust Ping. . . why is Mulan
any different?
He remains silent.
MULAN
If you won"t believe me, then take this!
You'll need it.
Mulan tosses Shang his sword. He catches it.
MULAN
HeeYaaa!
Mulan gallops away, into the crowd.
HUGE DRUMS SOUND.
FROM THE FIREWORKS TOWER
Thunderous fireworks are set off.
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* {
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 19
MULAN EIGHTH DRAFT 6/6/97 p. 83.
CONTINUED:
ON THE PLATFORM
THE EMPEROR appears in his magnificent robes.
ON MULAN
making her way through the crowd, frantically searching for
the Huns. She jumps off Khan.
MUSHU
Hey, where are you going?
MULAN
To find someone who'll listen.
As Mulan rushes through the crowd ...
SHANG
makes his way up the stairs towards the Emperor, Shan-Yu's
sword in his hand. A PAPER DRAGON follows him closely.
ON THE DAIS
THE DRUMS STOP and a LOUD GONG RESOUNDS.
THE EMPEROR
stands at the front of the platform and addresses the vast,
silent crowd.
EMPEROR
My children, Heaven smiles down upon the
Middle Kingdom! China will sleep safely
tonight. Thanks to our brave warriors,
the Huns have been vanquished!
THE CROWD CHEERS O.S.
Mulan approaches a MAN and his family.
MULAN
Sir, the Emperor's in danger!
The man pushes Mulan's hand away and turns his back on her.
MULAN
But the Huns are here!
She pleads with another man in the crowd.
MULAN
Please, you have to help!
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
•
*
•
*
*
*
*
*
*
•
•
•
SEQUENCE 19
MULAN EIGHTH DRAFT 6/6/97 p. 84.
CONTINUED:
The second man ignores her. Mulan turns to Mushu.
MULAN
They won't listen!
MUSHU
That's 'cause you're a girl now.
ON THE DAIS
Shang steps forward holding Shan-Yu's sword. He kneels and
holds the sword high in the air.
SHANG
Your Majesty, I present to you the sword
of Shan-Yu.
He offers the sword to the Emperor.
THE EMPEROR
I know what this means to you, Captain
Li.
(then)
Your father would have been very proud ..
As Shang begins to hand him the sword ...
THE FALCON
suddenly SWOOPS DOWN, FLYING OFF with the sword. He
RELEASES it above the palace.
A STATUE ON THE ROOFTOP
reaches its hand up and CATCHES the sword -- it's Shan-Yu!
Shan-Yu stands and raises the sword above his head.
ON THE S'l'REET
Mulan, Mushu and the crowd stare in horror.
SHANG AND THE EMPEROR
look up toward the roof.
Behind Shang, the HUNS SLASH through the Chinese paper
dragon. They quickly overtake Shang, leaving him on the
dais.
The Elite Huns rush the Emperor and carry him inside the
palace.
(CONTINUED)
*
*
*
*
*
*
*
*
*
(
SEQUENCE 19
MULAN EIGHTH DRAFT 6/6/97 p. 85.
CONTINUED:
Shang pulls himself up amongst the tattered paper dragon and
sees the Emperor's hat.
SHANG
No!
ON THE LOWER DAIS
Ling, Chien Po and Yao run to help Shang.
YAO
C'mon!
AT THE PALACE DOOR
Shang arrives just as the enormous wooden door SLAMS SHUT and
LOCKS.
ZIP PAN up to see Shan-Yu laughing derisively.
CUT TO:
THE PALACE DOOR
Shang, Ling, Chien Po, Yao and the other soldiers tip over a
giant foo dog and use it as a battering ram.
ON THE STEPS OF THE DAIS
Mulan and Mushu watch the troop's vain attempt to knock down
the door.
MUSHU
(re: stone dog)
I think I know that dog ...
MOLAN
They'll never get in that way.
She starts to think, staring at a man. Then ...
MOLAN
Hey guys, I've got an idea!
Chien Po, Ling and Yao look at one another, then run after
Mulan.
Shang stubbornly watches them.
CUT TO:
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
•
•
*
•
*
*
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p .. 86.
EXT.. IMPERIAL PALACE - DAY ( SEQUENCE 2 0)
CLOSE ON a face with stubble, being painted with lip paint ..
CLOSE ON bracelets being slipped onto hairy forearms ..
MEDIUM SHOT of Ling's torso as he places apples in his tunic
for breasts. He adjusts them ..
CLOSE ON a wig being placed on Chien Po's bald head.
Mulan, beautiful in a simple dress, opens a drape to reveal:
Ling, Yao and Chien Po in drag.
Together they walk toward the edge of the palace and remove
their sashes ..
Each one throws their sash around the bottom of a pillar,
then look to
MULAN. She feels a tap on her shoulder. She turns to see
SHANG. He removes his cape and wraps it around a pillar,
ready to follow her lead ..
As the five soldiers use their sashes to climb the pillars
the way Mulan climbed the pole during training ...
INT. IMPERIAL PALACE TOWER
The twin Elite Huns drag the Emperor to the end of the tower
in view of the crowd. SHAN-YU suddenly appears, hanging
upside down from the alcove. He SMILES at the Emperor, then
quickly lands in front of him.
SHAN-YU
(to his men)
Guard the door.
They move off as Shan-Yu sizes up The Emperor, who stoically
stares forward.
SHAN-YU
How disappointing. These people fear
you?!
EMPEROR
They respect me.
SHAN-YU
Fools.
( then)
Now bow down and I'll make this quick.
(CONTINUED)
*
*
•
*
*
•
*
*
•
*
*
*
•
*
*
•
•
*
*
*
*
*
*
*
*
*
•
*
*
*
*
*
* I * .
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 87.
CONTINUED:
Shan-Yu draws his sword and points it at the Emperor.
ON A PARALLEL PARAPET
Mulan, Chien Po, Ling and Yao run to their positions.
MULAN
We're almost there. Any questions?
YAO
(running)
Does this dress make me look fat?
CHIEN PO
Yao, we have more important things to
worry about.
YAO
Easy for you to say. Your outfit is very
flattering, perfect for day or night.
INSIDE THE PARAPET
The Elite Huns close the door.
AROUND THE CORNER
MULAN peeks at the Huns.
LING
(whispering)
Are these disguises really necessary?
MULAN
(whispering)
Trust me. We're as good as invisible.
Mulan holds her fan in front of her face and heads towards
the Huns; the others follow.
OUTSIDE THE TOWER DOOR
The Elite Huns hear GIGGLES.
The Hun Archer draws his sword but the Biggest Hun stops him
as the four women approach.
BIGGEST HUN
Concubines.
TWIN HUN
Ugly concubines.
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 88.
CON'l'INUED:
The men in drag demurely stop in front of the Huns, batting
their eyes. The Biggest Hun flirts back as one of the Twin
Huns elbows him in disgust. Mulan, Yao, Ling and Chien Po
turn their backs to the Huns and quickly reach into their
tunics, pulling out watermelons and apples.
WATCHING FROM ABOVE
The falcon sees Shang hiding behind a pillar. He begins to
CALL when he's muffled from behind by
MUSHU. He SMILES at the bird.
MUSHU
Ooh-eee! I caught me a turkey!
IN THE PALACE HALLWAY
The Gang of Three turn around with fruit in hand.
the Huns offguard, CHIEN PO breaks the watermelons
of the Elite Huns' heads, knocking them out.
Catching
over each
LING jams an apple in the Swordsman Hun's mouth. 'rhen KICKS
him in the mid-section and CRACKS his back with his head.
YAO dodges a punch from The Biggest Hun and HITS him in the
stomach. Picking him up, Yao FLIPS him over his shoulder.
CRUNCH.
The Archer Hun aims an
ground and KICKS him.
the face with the ball
arrow at MULAN. She falls to the
She springs up and SMASHES the Hun in
of her hand.
MULAN
Shang, go!
Shang runs towards the tower door.
IMPERIAL PALACE TOWER
SHAN-YU faces the Emperor.
SHAN-YU
Your walls have fallen and so shall you.
Bow to me.
The Emperor remains absolutely still.
EMPEROR
No matter how the wind howls, a mountain
cannot bow to it.
(CONTINUED)
*
*
*
*
•
*
*
*
*
*
*
•
•
*
*
•
*
•
*
*
•
•
*
*
•
•
•
*
•
*
•
•
*
.,
•
CONTINUED:
MULAN EIGHTH DRAFT
SHAN-YU
Then you will kneel ...
Shan-Yu raises his sword.
SHAN-YU
. . . in pieces.
SEQUENCE 20
6/6/97 p. 89.
As Shan-Yu begins his fatal blow-- Shang blocks his sword
with a CLANG. He rolls and donkey kicks Shan-Yu, sending the
Hun against the pillar.
Shang THRUSTS his sword at him, but Shan-Yu catches the blade
and PULLS Shang off of the tower.
Shang GRABS the pillar, swings around and KICKS Shan-Yu, then
pins him.
Mulan, Yao, Ling and Chien Po run into the room. Mulan
throws her sash over a banner hanging from a pillar.
MULAN
Chien Po, get the Emperor!
Chien Po picks up the Emperor.
CHIEN PO
Excuse me, your Majesty.
Chien Po takes the Emperor to the edge of the tower. He uses
the sash and banner as a zip line, SLIDING with the Emperor
down to safety.
No!!
SHAN-YU
(realizing}
Ling and Yao quickly follow down the line.
Shan-Yu kicks Shang off of him.
FROM THE ZIP LINE
Yao zooms down, calling back to Mulan.
YAO
C'mon!
BACK IN THE TOWER
Shan-Yu delivers a devastating blow to Shang, sending him
FLYING out into the hall. He turns towards Mulan.
(CONTINUED}
•
*
*
•
•
•
*
*
*
*
*
*
•
•
•
•
*
*
•
•
*
•
*
*
*
*
*
*
*
*
*
•
*
•
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 90.
CONTINUED:
She looks down to see Shan-Yu's sword-- a few feet away.
As Shan-Yu heads to the zip line, Mulan dives for the sword
and cuts the zip line.
Shan-Yu forcefully shoves Mulan aside, grabs his sword and
looks over the edge, searching for the Emperor.
OUTSIDE
the zip line falls to the ground. The Emperor, lost in the
sea of thousands.
BACK IN THE TOWER
Shan-Yu's anger turns to rage.
SHAN-YU
GrrowwlllaaaAAUUGHHH!! !
Mulan steadies herself against the pillar.
SHAN-YU
(shouting}
Let your people hide you! They'll fall
by my blade 'til I find you!
From behind, he's hit with Mulan's slipper.
MULAN
Haven't enough lives been lost'?
Mulan puts her hair up to look as she did when she first
encountered Shan-Yu in the mountains. His face falls in
recognition.
SHAN-YU
... 'l'he soldier from the mountains.
Mulan tu=s and runs down the palace hallway.
SHAN-YU
(in frustration}
Arrrgh!
He grabs his sword and chases Mulan.
INSIDE THE PALACE HALLWAY
Mulan runs into Shang.
MULAN
Shang!
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
* * I.
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 91.
CONTINUED:
Shang sees and hears Shan-Yu cutting a destructive path down
the hallway.
MULAN
We've got to get out of here.
SHANG
I have to stop Shan-Yu.
Shang starts to head back, Mulan grabs him.
MULAN
Shang! He'll kill you-- (then)
She flattens him with a PUNCH.
MULAN
Sorry. But I'll stop him my way.
As Mulan continues down the hallway, she runs into Mushu,
riding the plucked falcon.
Mulan grabs Mushu by the neck.
MULAN
Mushu ...
MUSHU
(Choke)
MULAN
I need your help.
Shan-Yu pursues Mulan, destroying everything in his path as
he slashes wildly at Mulan. He cuts through a pillar that
crashes through a wall, providing an escape route for Mulan.
She crawls out onto the pillar and sees ...
THE FIREWORKS TOWER
MULAN
(to Mushu)
Do you feel lucky?
Cri-Kee vigorously nods his head "yes."
As Shan-Yu gets closer, Mulan whispers to Mushu.
MUSHU
Are you nuts?!? That's suicide!
MULAN
Just do it!
(CONTINUED)
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
•
*
•
•
•
•
•
•
•
•
•
•
•
•
•
•
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 92.
CONTINUED:
Mulan throws Mushu into the air. He LANDS on a large KITE
and FLIES towards ...
INSIDE THE FIREWORKS TOWER
Mushu gets the attention of the fireworks attendant.
MUSHU
Citizens, I need fire power.
FIREWORKS ATTENDANT I
Aaaagh!
FIREWORKS ATTENDANT II
Who are you'?!
Mushu uses the kite as GIANT WINGS.
MUSHU
(like Batman)
Your worst nightmare.
Frightened, the fireworks attendants jump out of the tower.
IN THE STREET
The crowd looks up.
PERSON IN STREET#l
On the roof ...
PERSON IN STREET#2
Look!
ON THE ROOF
MULAN crawls out onto the roof. She eyes the fireworks tower
ahead of her.
Shan-Yu SMASHES through the roof, JUMPING in front of her.
She's trapped. She searches for a
fan. She pulls it out, opens it.
Shan-Yu approach.
weapon but only finds a
Fearfully, she watches
SHAN-YU
(smiling)
It looks like you're out of ideas.
SHAN-YU stabs his sword through the fan.
SLOW-MOTION as it rips through the painted pieces of silk.
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 6/6/97 p. 93.
CONTINUED:
MULAN SNAPS the fan shut on the blade, TORQUES it from his
hand and CATCHES the sword.
MULAN
Not quite.
(calling)
Ready Mushu?
AT THE OTHER END OF THE ROOF - Mushu rips off the kite wings,
exposing a rocket strapped to his back.
MUSHU
Ready, Baby!
Mushu lights a stick and hands it to Cri-Kee.
MUSHU
Light me!
Shan-Yu LUNGES at Mulan. She avoids the blow and uses the
sword as a vault to deliver a kick to Shan-Yu's chin. She
falls to the roof and sweeps her feet, knocking Shan-Yu's
legs out from under him.
CRI-KEE lights the rocket fuse. It SPEEDS off toward
SHAN-YU and MULAN. Mulan plants the sword in Shan-Yu's
tunic, sticking him to the roof.
Mulan uses the sword to launch herself into the air, KICKING
Shan-Yu on the way ...
She SOMERSAULTS over the rocket, snatching Mushu off mid-air.
They land safely as
THE ROCKET
SMASHES into Shan-Yu--
SHAN··YU
(AGGGHH!)
and carries him off the roof towards
THE FIREWORKS TOWER
Mulan runs with all her might.
MULAN
Get off the roof, get off the roof, get
off the roof!
(CONTINUED)
*
*
*
*
*
*
*
*
SEQUENCE 20
MULAN EIGHTH DRAFT 12/21/96 p. 94.
CONTINUED:
CLOSE ON SHAN-YU, horrified, as he SLAMS into
THE FIREWORKS TOWER, setting off the world's HUGEST
EXPLOSION! ! .!
Fireworks shoot off amidst a towering giant fireball.
SHANG
staggers up as the palace BLOWS UP behind him.
Mulan FLIES through the air and lands on Shang, taking him
down the stairs.
MUSHU and CRI-KEE drop from the sky .. Mushu looks at the black
smoke streaming from the right wing of the Imperial Palace,
completely decimated.
MUSHU
(whistling; to Cri-Kee)
Now that's what I call a Mongolian
barbecue.
ON THE DAIS
Mulan lies over Shang as millions of fireworks light the sky
around them.
Shang smiles as Yao, Ling and Chien-Po come up the stairs to
join them.
CHI FU (SEQUENCE 21)
emerges from the smoke, his hat smouldering.
CHI FU
(ranting)
Where is she? Now she's done it! What a
mess!
He tries to reach Mulan, only the men stand protectively
around her.
CHI FU
Stand aside! That creature's not worth
protecting.
SHANG
She's a hero!
CHI FU
She's a woman! She'll never be worth
anything!
(CONTINUED)
SEQUENCE 20
MOLAN EIGHTH DRAFT 12/21/96 p. 95.
CONTINUED:
Shang grabs him.
SHANG
Listen, you pompous
EMPEROR O.S ..
(quietly; measured)
That ..... is enough!
The men and Mulan turn to see
THE EMPEROR
solemnly approaching.
SHANG
Your Majesty, I can explain--
The Emperor holds up his hand and waves them aside .. They
part, revealing Mulan .. She nervously bows her head ..
EMPEROR
I"ve heard a great deal about you, Fa
Mulan.
(sternly)
You stole your father's armor, ran away
from home. .. . impersonated a soldier .....
deceived your commanding officer ...
dishonored the chinese army ...... destroyed
my palace. . . AND ... !
Mulan lowers her eyes, shaking in fear ..
EMPEROR
... you have saved us all.
Mulan looks up at the Emperor. He smiles, then does the
unthinkable ... he BOWS to her.
Chi Fu, in shock, can only do the same.
Shang, Yao, Chien-Po and Ling bow as well.
In fact, Mulan watches in shock as the ENTIRE PLAZA begins to
bow and CHEER.
IN THE PLAZA
Kahn lowers his head; Mushu and the cricket sit on his
saddle.
(CONTINUED)
SEQUENCE 21
MULAN EIGHTH DRAFT 12/21/96 p. 96.
CONTINUED:
MUSHU
(crying)
I've done such a good job.
'rhe cricket WHACKS him.
MUSHU
Ow!
(then; to cricket)
What?!
ON 'l'HE DAIS
THE EMPEROR motions ....
EMPEROR
Chi Fu!
Chi Fu steps forward.
CHI FU
Your Excellency.
EMPEROR
See to it that this woman is made a
member of my council.
Chi Fu can hardly contain his shock.
CHI FU
(STIFLING AN OUTBURST)
what?! Ah, there are no
open.
EMPEROR
Very well ...
(turning to Mulan)
You can have his job.
CHI FU
Wha--? ! "? My·--?!?
A member-- uh ...
council positions
Chi Fu faints and falls down the stairs, his ink spilling
everywhere.
MULAN
With all due respect, Your Excellency, I
think I've been away from home long
enough.
EMPEROR
(reaching around his neck)
'l'hen ...
(MORE)
(CONTINUED)
MULAN EIGHTH DRAFT
SEQUENCE 21
12/21/96 p. 97.
CONTINUED:
EMPEROR (cont'd)
(giving her his pendant)
take this. So your family will know
what you have done for me.
Mulan gratefully accepts his gift.
EMPEROR
And this ...
(handing her Shan-Yu's sword)
So the world will know what you have done
for China.
Mulan holds it reverantly, then throws her arms around the
Emperor. The Emperor reacts, pleasantly surprised.
YAO
(whispering; to Ling)
Is she allowed to do that?
Mulan turns to the Gang of Three and hugs each of them. Ling
sneaks to the end of the line, receiving another hug.
YAO
(to Ling; upset)
Hey, you got two!
As they start to fight, Chien Po grabs Yao.
CHIEN PO
Yao, relax and chant with me.
YAO
(GROWLING)
Mulan turns to Shang -- they awkwardly regard each other.
Mulan looks at him in anticipation.
SHANG
... Um ... you' re a--
(shaking her hand)
-- you fight good.
MULAN
(trying to hide her
disappointment)
Oh. Thank you.
Shang doesn't know what else to say. Mulan turns and mounts
Khan.
MULAN
Khan, let's go home.
As they ride off to the CHEERS of the crowd ...
(CONTINUED)
*
*
*
*
*
*
SEQUENCE 21
MULAN EIGHTH DRAFT 12/21/96 p. 98.
CONTINUED:
ON THE DAIS
Shang watches Mulan, regretfully. The Emperor appears beside
him ..
EMPEROR
(clearing his throat)
The flower that blooms in adversity is
the most rare and beautiful of all.
SHANG
Your Majesty?
EMPEROR
(explaining)
You don't meet a girl like that every
dynasty.
And off Shang's thoughtfulness ...
DISSOLVE TO:
EXT. MULAN'S HOUSE - DAY (SEQUENCE 22)
Mulan stands at the gate to see her father, sitting under a
cherry blossom tree. A slight breeze blows a blossom into Fa
Zhou's lap. He looks at it tenderly as Mulan approaches,
carrying Shan-Yu's sword. Fa Zhou looks up and sees her.
FA ZHOU
Mulan ...
Before he can rise, Mulan kneels before him.
MULAN
Ba-ba ...
She presents the sword to him and bows.
MULAN
I brought you the sword of Shan-Yu.
(taking off the crest)
And the crest of the Emperor.
( then)
They're gifts ... to honor the Fa family.
Fa Zhou solemnly takes it ... and puts it aside. He pulls
Mulan to him, gathering her in a heartfelt embrace.
FA ZHOU
The greatest gift and honor, is having
you for a daughter ... I've missed you so.
(CONTINUED)
(
SEQUENCE 22
MULAN EIGHTH DRAFT 6/24/97 p. 99.
CONTINUED:
MULAN
I've missed you, too, Ba-ba.
As they hug ...
EXT. FA FAMILY COURTYARD - DAY - CONTINUOUS
Fa Li and Grandmother Fa happily watch the reunion.
GRANDMA
Great. She brings home a sword. It
would've been nice if she brought home a
m--
SHANG O.S.
Pardon me. I'm Captain Li Shang.
Shang approaches them.
SHANG
Does Fa Mulan live here?
Fa Li and Grandmother Fa stare at him silently for a moment,
then point in unison towards the garden.
As he steps past them ...
EXT. FA FAMILY GARDEN - CONTINUOUS
Shang enters the garden and walks up to Fa Zhou.
SHANG
(bowing)
Honorable Fa Zhou, I--
Shang stops as he sees
MULAN approaching.
SHANG (cont'd)
(to Mulan)
I know I'm breaking tradition by coming
here like this. . . but. . . I was hoping ...
Mulan smiles at him.
MULAN
Yes.
SHANG
Yes?
As Mulan and Shang smile ...
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
•
*
*
•
•
•
•
•
*
•
•
•
•
•
•
•
•
•
SEQUENCE 22
MUT...AN EIGHTH DRAFT 6/24/97 p. 100.
CONTINUED:
GRANDMA O.S.
Don't just stand there-- invite him to
dinner!
EXT. FA FAMILY 'rEMPLE - CONTINUOUS
AT THE WINDOW
CUT 'l'O:
Mushu and the First Ancestor watch Mulan, Shang and Fa Zhou
walk towards the moon gate.
MUSHU
(cocky; coaxing)
Well. .. c 'mon ... who did a good job"? Who
did a good job?
FIRST ANCESTOR
(begrudgingly)
Oh all right!
(under his breath)
You can be a guardian again.
MUSHU
... Whaaaat?
FIRST ANCESTOR
(giving up)
You can be a ... guardian again.
MUSHU
Waaahhh! ! !
( then)
Hit it, Cri-Kee.
Cri-Kee rings the gong and wakes up the other guardians.
Mushu hops back onto his spot.
MUSHU (cont'd)
Guard the fort, 'cause I am BACK!
The GUARDIANS CHEER and begin to celebrate.
GUARDIANS
(CHEERING)
Mushu looks through the window and catches Mulan's eye and
smiles.
As the temple begins to rock, Mushu swings by on a rope,
right into ... The Great Stone Dragon. Badly put together.
(CONTINUED)
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
•
•
•
•
•
•
•
•
* ( * .
SEQUENCE 22
MULAN EIGHT!i DRAFT 6/24/97 p. 101.
CONTINUED:
MUSHU
Stony! Good to see you! You're looking
great, buddy! Mosaic.
As the Great Stone Dragon GROWLS, FADE OUT over ...
MUSHU (cont'd)
Easy, boy. It wasn't me who did this---
it was the CRICKET! You can't trust
those bugs ... !
And off Mushu' s LAUGH and the cricket's CHIRP ...
THE END
•
•
•
•
•
•
•
•
•
..
SEQUENCE 22
MULAN EIGHTH DRAFT 6/24/97 p. 101.
CONTINUED:
MUSHU
Stony! Good to see you! You're looking
great. buddy! Mosaic.
As the Great Stone Dragon GROWLS, FADE 0U'l' over ...
MUSHU (cont' d)
Easy, boy. It wasn't me who did this--
it was the CRICKET! You can' t trust
those bugs ... !
And off Mushu's LAUGH and the cricket's CHIRP ...
THE END
`).then(e => console.log(`Código finalizado, se enviaron ${e} mensajes`)).catch(console.error)