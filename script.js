const btn = document.querySelector('#btn');
let home = document.querySelector('#home');
let message = document.querySelector('#message');

// header
let happy = document.querySelector('#happy');
let monthsary = document.querySelector('#monthsary');
let paragraph = document.querySelector('#paragraph');

// adjust pContainer
let adjust = document.querySelector('#adjust');

btn.onclick = () => {
    home.classList.remove('active');
    message.classList.add('active');

    happy.textContent = "first";
    monthsary.textContent = "monthly letter"
    paragraph.textContent = "yiiie HAHAHAHA may letter na sya xD di ko na tinangka yung sulat kamay kasi mas maganda font dito eh HAHAHA charot next time yun gagawin ko para naman makita mo mala calibri ko na sulat XD. Ayun na ngaaa happy monthsaryyy <3 demmm hahaha. I love you kahit dati pa naman di nagbago tingin ko sayo pati nararamdaman ko. Still ikaw parin tinitibok neto nu araw araw habang mas nakikilala kita mas napapamahal ako sayo. Mas napapalapit yung loob ko kasi nakikita ko yung tunay na ugali mo. Di ka naman mahirap mahalin eh, sa ugaling pinapakita mo sakin kung maeexperience man ng iba yan mahuhulog din sila sayoo ~ ewan ko ba kahit di pa naman tayo noon sobrang komportable na ng loob ko sayo. May something kasi sayo na gustong gusto ko eh. Yung ibang katangian na gusto ko sa babae kahit di man lahat nasa sayo na eh <3 Napakabait mooo, napakamaalagain mo, sweet mo, ganda mo sexy mo alam mo naman yan hahaha sana kahit na matagal na tayo di parin magbago yang mga nagustuhan ko sayo at kung magbago man sana for the betterment of our relationship. Swerte ko na nga sayo eh kasi kahit na wala man ako ng manly na katawan, height, mukha still pinili mo parin ako <3 kahit na di man ako mahilig sa sports, di man ako magaling kumanta, at sa iba pang bagay na magaling ka pinili mo parin ako. Di ko talaga lubos akalain na ako yung mapipili mo kasi nga yun may nauna iniisip ko kung yun na ba pipiliin mo kasi nga diba yung nangyari sayo rati pero pinili mo parin ako :< nahuli lang ako ng dating hina kasi net char hahaha dee thank youu! sa mga simpleng bagay na ginagawa mo naaappreciate ko lahat yan kahit na di mo sinasabi nafefeel ko naman yan. Pano pa kaya tong pinakilala mo na ko wooh HAHAHAHA saya talaga seryoso. Kung tutuusin napakalaking effort na nun eh. Pinaghandaan nyo ko, nilaanan nyo ko ng oras, pagkain, at kung ano ano pa para lang mafeel ko na welcome ako sa family nyooo, sweet :< ayun sana sa mga problemang dadaan man satin walang susuko, kahit na mahirap. Mas paglalaanan ko ng oras yung makasama ka para makabuo tayo ng solid na foundation para kung sakali man na may dumating problema satin di tayo ganun kaagad nagigiba. Mahal na mahal kita babyyy! Happy Monthsary uliiit <3";
    btn.style.visibility = "hidden";
    adjust.style.height = "250px";
}

message.onclick = () => {
    home.classList.remove('active');
    message.classList.add('active');

    happy.textContent = "first";
    monthsary.textContent = "monthly letter"
    paragraph.textContent = "yiiie HAHAHAHA may letter na sya xD di ko na tinangka yung sulat kamay kasi mas maganda font dito eh HAHAHA charot next time yun gagawin ko para naman makita mo mala calibri ko na sulat XD. Ayun na ngaaa happy monthsaryyy <3 demmm hahaha. I love you kahit dati pa naman di nagbago tingin ko sayo pati nararamdaman ko. Still ikaw parin tinitibok neto nu araw araw habang mas nakikilala kita mas napapamahal ako sayo. Mas napapalapit yung loob ko kasi nakikita ko yung tunay na ugali mo. Di ka naman mahirap mahalin eh, sa ugaling pinapakita mo sakin kung maeexperience man ng iba yan mahuhulog din sila sayoo ~ ewan ko ba kahit di pa naman tayo noon sobrang komportable na ng loob ko sayo. May something kasi sayo na gustong gusto ko eh. Yung ibang katangian na gusto ko sa babae kahit di man lahat nasa sayo na eh <3 Napakabait mooo, napakamaalagain mo, sweet mo, ganda mo sexy mo alam mo naman yan hahaha sana kahit na matagal na tayo di parin magbago yang mga nagustuhan ko sayo at kung magbago man sana for the betterment of our relationship. Swerte ko na nga sayo eh kasi kahit na wala man ako ng manly na katawan, height, mukha still pinili mo parin ako <3 kahit na di man ako mahilig sa sports, di man ako magaling kumanta, at sa iba pang bagay na magaling ka pinili mo parin ako. Di ko talaga lubos akalain na ako yung mapipili mo kasi nga yun may nauna iniisip ko kung yun na ba pipiliin mo kasi nga diba yung nangyari sayo rati pero pinili mo parin ako :< nahuli lang ako ng dating hina kasi net char hahaha dee thank youu! sa mga simpleng bagay na ginagawa mo naaappreciate ko lahat yan kahit na di mo sinasabi nafefeel ko naman yan. Pano pa kaya tong pinakilala mo na ko wooh HAHAHAHA saya talaga seryoso. Kung tutuusin napakalaking effort na nun eh. Pinaghandaan nyo ko, nilaanan nyo ko ng oras, pagkain, at kung ano ano pa para lang mafeel ko na welcome ako sa family nyooo, sweet :< ayun sana sa mga problemang dadaan man satin walang susuko, kahit na mahirap. Mas paglalaanan ko ng oras yung makasama ka para makabuo tayo ng solid na foundation para kung sakali man na may dumating problema satin di tayo ganun kaagad nagigiba. Mahal na mahal kita babyyy! Happy Monthsary uliiit <3";
    btn.style.visibility = "hidden";
    adjust.style.height = "250px";
}

home.onclick = () => {
    home.classList.add('active');
    message.classList.remove('active');

    happy.textContent = "happy";
    monthsary.textContent = "monthsary"
    paragraph.textContent = "Hi babyyy demmm hahaha sawakas nagawan din kita ng website. La ko maisip kaya eto nalang ginawa ko haha. Happy monthsary!"
    btn.style.visibility = "visible";
    adjust.style.height = "140px";
}

