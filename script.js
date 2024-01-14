const memeImages = [
    'meme1.jpg', 
    'meme2.jpeg', 
    'meme3.png',
    'meme4.png', 
    'meme5.png', 
    'meme6.png',
    'meme7.png', 
    'meme8.png', 
    'meme9.png',
    'meme10.png', 
    'meme11.png', 
    'meme12.png',
    'meme13.png', 
    'meme14.png', 
    'meme15.png',
    'meme16.png', 
    'meme17.png', 
    'meme18.png',
    'meme19.png', 
    'meme20.png', 
    'meme21.png',
    'meme22.png', 
    'meme23.png', 
    'meme24.jpg',
    'meme25.jpg',
    'meme26.jpg',
    'meme27.jpg',
    'meme28.jpg',
    'meme29.jpg',
    'meme30.jpg',
    'meme31.jpg',
    'meme32.jpg'
];

const soundFiles = [
    'sound1.mp3',
    'sound2.mp3',
    'sound3.mp3',
    'sound4.mp3',
    'sound5.mp3',
    'sound6.mp3',
    'sound7.mp3',
    'sound8.mp3',
    'sound9.mp3'
]

function showMeme() {
    var memeImage = 'memes/' + memeImages[Math.floor(Math.random() * memeImages.length)];

    var audio = new Audio('sound/' + soundFiles[Math.floor(Math.random() * soundFiles.length)]);
    audio.play();

    var meme = document.getElementById("meme");
    meme.querySelector("img").src = memeImage;

    meme.style.display = "block";

    meme.classList.remove("meme-show");
    void meme.offsetWidth;

    meme.classList.add("meme-show");
}

function shakeElement() {
    var human = document.getElementById("human");
    human.classList.add("shake");
    setTimeout(function() { human.classList.remove("shake"); }, 1000);
}

document.getElementById("human").addEventListener("click", shakeElement);
