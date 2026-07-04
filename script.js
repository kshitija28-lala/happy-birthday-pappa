// Hide loader after 2.5 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.pointerEvents = "none";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 1000);

    }, 2500);
});

// Smooth scroll
document.getElementById("journeyBtn").addEventListener("click", () => {
    document.getElementById("memory").scrollIntoView({
        behavior: "smooth"
    });
});

// Popup
const popup = document.getElementById("popup");
const body = document.getElementById("popupBody");

let currentImages = [];
let currentIndex = 0;

function showImage() {
    body.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>

        <img id="galleryImg" src="${currentImages[currentIndex]}"
        style="width:100%;max-height:450px;object-fit:contain;border-radius:15px;">

        <br><br>

        <div style="display:flex;justify-content:space-between;">

        <button onclick="previousImage()">⬅ Previous</button>

        <button onclick="nextImage()">Next ➡</button>

        </div>
    `;
}

function openPopup(type){

    if(type=="old"){
        currentImages=[
        "Assets/images/pappa1.jpeg",
        "Assets/images/pappa2.jpeg",
        "Assets/images/pappa3.jpeg",
        "Assets/images/pappa4.jpeg",
        "Assets/images/pappa6.jpeg",
        "Assets/images/pappa7.jpeg",
        "Assets/images/pappa8.jpeg",
        "Assets/images/pappa9.jpeg",
        "Assets/images/pappa10.jpeg",
        "Assets/images/pappa11.jpeg",
        ];
    }

    if(type=="love"){
        currentImages=[
        "Assets/images/mummy10.jpeg",
        "Assets/images/mummy11.jpeg",
        "Assets/images/mummy4.jpeg",
        "Assets/images/mummy5.jpeg",
        "Assets/images/mummy6.jpeg",
        "Assets/images/mummy8.jpeg",
        "Assets/images/mummy7.jpeg",
        "Assets/images/mummy2.jpeg",
        "Assets/images/mummy1.jpeg",
        ];
    }

    if(type=="family"){
        currentImages=[
        "Assets/images/fam2.jpeg",
        "Assets/images/fam1.jpeg",
        "Assets/images/fam7.jpeg",
        "Assets/images/fam3.jpeg",
        "Assets/images/fam4.jpeg",
        "Assets/images/fam6.jpeg",
        "Assets/images/fam5.jpeg",
        ];
    }

    if(type=="friends"){
        currentImages=[
        "Assets/images/frnds2.jpeg",
        "Assets/images/frnds1.jpeg",
        "Assets/images/frnds3.jpeg",
        "Assets/images/frnds4.jpeg",
        "Assets/images/frnds5.jpeg",
        "Assets/images/frnds6.jpeg",
        ];
    }

    if(type=="letter"){
        popup.style.display="flex";

        body.innerHTML=`

        <h2>💌 Dear Pappa</h2>

        <p style="line-height:2;font-size:18px">

        Some people spend their whole lives looking for an idol.<br><br>

        I never had to.

        Because mine has always been beside me.<br><br>

        Thank you for every sacrifice.

        Thank you for every lesson.

        Thank you for supporting me whenever mummy said no.

        Thank you for every smile and joke.

        Thank you for believing in me.<br><br>

        Happy Birthday Pappa ❤️<br><br>

        <b>With Love,<br>Chiku ❤️</b>

        </p>

        `;

        let i = 0;

        const typing = setInterval(() => {

            document.getElementById("typingText").innerHTML += text.charAt(i);

            i++;

            if (i >= text.length) clearInterval(typing);

        }, 35);

        return;
    }

    if(type=="gift"){

        popup.style.display="flex";

        body.innerHTML=`

        <div id="giftBox" style="text-align:center;cursor:pointer;">

        <h1 style="font-size:90px;">🎁</h1>

        <h2>Click the Gift</h2>

        </div>

        `;

        document.getElementById("giftBox").onclick=()=>{

        body.innerHTML=`

        <h1 style="font-size:90px;">❤️</h1>

        <h2>

        The greatest gift

        our family ever received

        was YOU.

        </h2>

        `;

        };

        return;

    }

    currentIndex=0;

    popup.style.display="flex";

    body.innerHTML=`

<span class="close" onclick="closePopup()">&times;</span>

<img id="galleryImg"
src="${currentImages[currentIndex]}"
style="width:100%;max-height:500px;object-fit:contain;border-radius:20px;">

<br><br>

<h3 style="text-align:center">

${currentIndex+1} / ${currentImages.length}

</h3>

<br>

<div style="display:flex;justify-content:space-between">

<button onclick="previousImage()">

⬅ Previous

</button>

<button onclick="nextImage()">

Next ➡

</button>

</div>

`;

}

function nextImage(){

currentIndex++;

if(currentIndex>=currentImages.length)

currentIndex=0;

body.innerHTML=`

<span class="close" onclick="closePopup()">&times;</span>

<img id="galleryImg"
src="${currentImages[currentIndex]}"
style="width:100%;max-height:500px;object-fit:contain;border-radius:20px;">

<br><br>

<h3 style="text-align:center">

${currentIndex+1} / ${currentImages.length}

</h3>

<br>

<div style="display:flex;justify-content:space-between">

<button onclick="previousImage()">

⬅ Previous

</button>

<button onclick="nextImage()">

Next ➡

</button>

</div>

`;

}

function previousImage(){

currentIndex--;

if(currentIndex<0)

currentIndex=currentImages.length-1;

body.innerHTML=`

<span class="close" onclick="closePopup()">&times;</span>

<img id="galleryImg"
src="${currentImages[currentIndex]}"
style="width:100%;max-height:500px;object-fit:contain;border-radius:20px;">

<br><br>

<h3 style="text-align:center">

${currentIndex+1} / ${currentImages.length}

</h3>

<br>

<div style="display:flex;justify-content:space-between">

<button onclick="previousImage()">

⬅ Previous

</button>

<button onclick="nextImage()">

Next ➡

</button>

</div>

`;

}

function closePopup(){

popup.style.display="none";

}

// Cake
document.getElementById("cakeBtn").addEventListener("click", () => {

    for (let i = 0; i < 6; i++) {

        setTimeout(() => {

            confetti({
                particleCount: 200,
                spread: 150,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });

        }, i * 400);

    }

});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

});

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 4000);

}

setInterval(createHeart, 1200);

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card => observer.observe(card));

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

const ids=["line1","line2","line3","line4","line5"];

const finalObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

ids.forEach((id,index)=>{

setTimeout(()=>{

document.getElementById(id).classList.add("show");

},index*900);

});

}

});

});

finalObserver.observe(document.getElementById("final"));

const intro=document.getElementById("intro");
const introText=document.getElementById("introText");

const lines=[

"Every family has a hero...",

"And so we have ours...",

"The only Gentleman of our family...",

"And my laughing partner...",

"My Dear Pappa ❤️"

];

let line=0;

function typeIntro(){

let text=lines[line];

let i=0;

introText.innerHTML="";

const typing=setInterval(()=>{

introText.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

setTimeout(()=>{

line++;

if(line<lines.length){

typeIntro();

}else{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

},1000);

}

},1200);

}

},80);

}

window.onload=()=>{

setTimeout(typeIntro,800);

};