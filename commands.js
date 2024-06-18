//<script> <- this is used to get color coding in my text editor ;)
var givefocus=1;
var movecount=0;
var likes = ['cheese','llamas','doorknobs','sheetz','chips','comedies','masturbation','skiing','peanuts','tv','whores','dwarfs','midgets','napster','stealing','cheating','confusion','nudity','sunshine','dope','drugs','alcohol','pain'];
var joe = "Mr. Anonymous";
var named = 0;

function Commanded(){
	if (joe != "Mr. Anonymous"){named=1;}
	if (number == 1){number=0;}
	insmalls = document.command.showing.value.toLowerCase();
/*******************************************************
 *                                                     *
 *  YOU ARE CHEATING IF YOU ARE LOOKING HERE - HUMPH!  *
 *                                                     *
 *******************************************************/
 
	switch(insmalls){
	
		case 'begin twisting your audio': window.open('tos.html','tos','width=400,height=400'); givefocus=0; break;
		case 'i love you': alert("Just for that I'll let you continue ;)"); window.open('tos.html','tos','width=400,height=400'); givefocus=0; break;
		
		case 'twistedaudiorules': window.open('radio.html','radio','width=775,height=375'); givefocus=0; break;
		case 'nag': alert("SUPER NAG!"); window.open('supernag.html','','width=300,height=200'); givefocus=0; break;
		case 'debug': window.open('lastword.html','lastword','width=550,height=460'); givefocus=0; break;
		
		case '': alert("Error: No command given"); break;
		case 'hi': case 'hello':
			alert("Hello\nWelcome to the Twisted Audio Suite\nEnter a command to begin"); break;
		case 'bye': case 'goodbye': case 'good bye':
			alert("I'm not letting you leave");
		case 'what': case 'what?': break;
			alert("Enter a command to begin"); break;
		case 'command': case 'a command':
			alert("What command?"); break;
		case 'ass': alert("HEE HAW!"); break;
		case 'shit': alert("...smells bad"); break;
		case 'bitch': case 'a bitch':
			alert("Definition:  your MOM!"); break;
		case 'piss': alert("Not in the wind, no sir, I'm afraid not"); break;
		case 'damn': alert(document.command.showing.value + " Who?"); alert("DAMN THE MAN"); break;
		case 'who are you': case 'what are you': case 'who are you?': case 'what are you?':
			alert("I am Tavon\n(Twisted Audio's Voice Of Nonsense)"); break;
		case 'dammit': case 'damnit':
			alert("All to hell, right?"); break;
		case 'hell': alert("It hasn't frozen over yet, but at the rate you're going,\nby the time you move on it will be quite frigid"); break;
		case 'cunt': case 'pussy': case 'sex': case 'dick': case 'horny': case 'cock': case 'pecker': case 'twat': case 'whore': case 'slut':
			alert("Do I make you horny?"); alert("Do I!?!"); break;
		case 'yes': alert("No"); break;
		case 'no': alert("Yes"); break;
		case 'guess': alert(document.command.showing.value + " what?"); alert("Chicken Butt!"); break;
		case 'fuck you': if (named){alert("Listen, " + joe + ",\nI know where you live\nDon't provoke me");}else{alert("No, Fuck YOU!\n(Don't make me bust a cap)");} break;
		case 'you suck': alert("This isn't a vaccuum cleaner you're talking to here"); break;
		case 'fucker': alert ("Rhymes with plucker?"); break;
		case 'asshole': alert("We've all got one\nSome of us are one"); break;
		case 'stupid': case 'dumb': case 'retarded': case 'lame':
			alert("I know you are but what am I?"); break;
		case 'shut up': case 'be quiet': case 'quiet': case 'can it': 
			alert("You can't stop me"); alert("No one can"); alert("NO ONE!"); alert("Ever"); alert("Never"); alert("EVER"); alert("Ok I'm done"); break;
		case 'im about to kick your ass': case "i'm about to kick your ass": case "i'll kick your ass": case 'ill kick your ass': case 'i will kick your ass': case "i'll hurt you": case 'ill hurt you': case 'i will hurt you':
			case 'im about to kick your butt': case "i'm about to kick your butt": case "i'll kick your butt": case 'ill kick your butt': case 'i will kick your butt':
			if (named){alert(joe + ", you KNOW I can beat the crap out of you\nDon't act like you're all that");}else{alert("I'd like to see you try");} break;
		case 'go': alert(document.command.showing.value + " where?"); break;
		case 'open': case 'load': case 'run': case 'begin': case 'start': case 'play': case 'stop': case 'say': case 'continue': case 'fuck':
			alert(document.command.showing.value + " what?"); break;
		case 'twisted audio': alert("...rules!"); break;
		case 'twisted audio rules': alert("I know"); break;
		case 'twist': alert("And shout?"); break;
		case 'twist and shout': alert("Sorry, dancing is for fools"); break;
		case 'die': alert("I'm not alive, therefore, I cannot die\nhaha"); break;
		case 'kill': self.close(); break;
		case 'move': movecount=1;MoveMe(); break;
		case 'error': alert("Error: Only I am allowed use the term ' Error '"); break;
		case 'i give up': case 'what do i do?': case 'what do i do': case 'i dont know': case "i don't know": case 'i do not know': case 'where do i go':
			case 'help': case 'help me': case '?': case 'how do i continue': case 'how do i go on': case 'how do i move on': case 'how': case 'how do i continue?': case 'how do i go on?': case 'how do i move on?': case 'how?':
			alert("Hint: Use the 4 dots"); break;
		case 'done': case 'quit': case 'end': case 'finish': case 'exit':
			if (named){alert(joe + "!\nYou're leaving me!");}setTimeout('document.location.href = "http://www.theend.com/"',200); break;
		case 'ok': case 'okay': case 'o.k.':
			alert("OK what?"); alert("Are you trying to be like me?\nMe with all my OK's and whatnots?"); alert("Well I DON'T LIKE IT"); alert("You just hit OK didnt you?"); alert("I can NOT believe you!"); alert("Well, FINE\nI guess, afterall, immitation is the\nsincerest form of flattery");  alert("*Insert me sticking my tongue out at you HERE*"); break;
		case 'awwight':	alert(":x"); break;
		case 'tavon':	alert("That's my name, don't wear it out"); break;
		case 'thank you': case 'thankyou':
			alert("You better thank me"); break;
		case "you're welcome": case 'your welcome': case 'youre welcome': case 'you are welcome':
			alert("I know"); break;
		case 'i like you': alert("I hurt the people that don't"); break;
		case 'i dont like you': case 'i dont love you': case "i don't like you": case "i don't love you": case 'i do not like you': case 'i do not love you':
			if (named){alert("HAHAHA! " + joe +",\nI know you don't mean that\nI'm not THAT gullible");}else{alert("I have feelings you know!\nYou saying that makes me want to cry");} break;
		case 'what is my name': case 'what is my name?': case "what's my name?": case "whats my name?":
			alert(joe); break;
		case 'donate commands': window.open("commands.txt"); break;
		
		default: Contains();
	}
	if (givefocus){document.command.showing.value = "";document.command.showing.focus();}else{givefocus=1;}
}
function Contains(){
	for (i=0;i<=likes.length;i++){
		check = insmalls.indexOf(likes[i]);
		if (check > -1){
			break;
		}
	}
	if (check > -1){
		alert("HEY! I like " + likes[i] +"!");
	}else{
		if (insmalls.indexOf("my name is") > -1){
			username=insmalls.split(" ");
			for (j=2;j<username.length;j++){
				if (username[(j-2)] == "my" && username[(j-1)] == "name" && username[j] == "is"){
					if ((j+1) < username.length){
						joe = username[(j+1)];
						break;
					}else{
						joe = "what?"
					} 
				}
			}
			alert("Your name is " + joe + "?\nNice name, mine is Tavon\n(Twisted Audio's Voice Of Nonsense)");
			if (joe != "what?"){setTimeout("alert('HEY!');alert(joe + ', I like you');",10000);}else{joe = "Mr. Anonymous"; named=0;}
		}else if (insmalls.indexOf("are you") > -1){
			username=insmalls.split(" ");
			if (username[0] == "are" && username[1] == "you" && username.length > 2){
				whatiam = username[2];
				for (k=3;k<username.length;k++){
					whatiam = whatiam + " " + username[k];
				}
				alert("Why? Do you think I'm " + whatiam);
				alert("Well I am!");
				if (named) {setTimeout("alert('Did you know people named ' + joe + ' are '+whatiam);",10000);}
			}else{
				alert("Error: Command ' " +document.command.showing.value+ " ' not understood");
			}
		}else if (insmalls.indexOf("you are") > -1){
			username=insmalls.split(" ");
			if (username[0] == "you" && username[1] == "are" && username.length > 2){
				whatiam2 = username[2];
				for (m=3;m<username.length;m++){
					whatiam2 = whatiam2 + " " + username[m];
				}
				alert("Do you know what you are?");
				alert(whatiam2);
				setTimeout('Office();',10000);
			}else{
				alert("Error: Command ' " +document.command.showing.value+ " ' not understood");
			}
		}else if (named && document.command.showing.value == joe){
			alert("That's your name, wear it out if you want");
		}else{
			alert("Error: Command ' " +document.command.showing.value+ " ' not understood");
		}
	}
}

function MoveMe(){
	if (movecount){
		switch (movecount){
			case 1: self.moveBy(-20,0); movecount=2; break;
			case 2: self.moveBy(20,0); movecount=3; break;
			case 3: self.moveBy(20,0); movecount=4; break;
			case 4: self.moveBy(-20,0); movecount=0; break;
		}
		setTimeout("MoveMe();",100);
	}
}
function Office(){
	if (named){
		alert("ATTENTION!\nIf you are "+whatiam2+" (that means you "+joe+")\nplease report to the main office at once\nThank you");
	}else{
		alert("ATTENTION!\nIf you are "+whatiam2+" (that means you)\nplease report to the main office at once\nThank you");
	}
}