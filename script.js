/* =========================================================
   BIRTHDAY WEBSITE SCRIPT
========================================================= */


/* =========================================================
   SLIDES
========================================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    if (index < 0 || index >= slides.length) {
        return;
    }

    slides.forEach((slide, i) => {

        slide.classList.remove("active");
        slide.classList.remove("previous");

        if (i < index) {
            slide.classList.add("previous");
        }

    });

    slides[index].classList.add("active");

    currentSlide = index;

    window.scrollTo(0, 0);
}

function nextSlide() {

    if (currentSlide < slides.length - 1) {

        showSlide(currentSlide + 1);

    }

}


/* =========================================================
   PIN
========================================================= */

const correctPin = "0222";

let enteredPin = "";

function pressPin(number) {

    if (enteredPin.length >= 4) {
        return;
    }

    enteredPin += number;

    updatePinDisplay();

    document.getElementById("pinMessage").textContent = "";

    if (enteredPin.length === 4) {

        setTimeout(checkPin, 250);

    }

}

function updatePinDisplay() {

    const dots = document.querySelectorAll("#pinDisplay span");

    dots.forEach((dot, index) => {

        if (index < enteredPin.length) {
            dot.textContent = "♥";
        } else {
            dot.textContent = "_";
        }

    });

}

function clearPin() {

    enteredPin = "";

    updatePinDisplay();

    document.getElementById("pinMessage").textContent = "";

}

function checkPin() {

    if (enteredPin === correctPin) {

        document.getElementById("pinMessage").textContent =
            "Correcttt! Welcome Loosey 🤍";

        setTimeout(() => {

            showSlide(1);

        }, 700);

    } else {

        document.getElementById("pinMessage").textContent =
            "Thappu PIN da 😂 Try again!";

        enteredPin = "";

        updatePinDisplay();

    }

}


/* =========================================================
   COUNTDOWN
   Birthday: October 2
========================================================= */

let countdownFinished = false;

function getBirthdayDate() {

    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(
        year,
        9,
        2,
        0,
        0,
        0
    );

    /*
       If October 2 of this year is already over,
       use next year's October 2.
    */

    if (birthday.getTime() <= now.getTime()) {

        birthday = new Date(
            year + 1,
            9,
            2,
            0,
            0,
            0
        );

    }

    return birthday;

}

const birthdayDate = getBirthdayDate();

function updateCountdown() {

    const now = new Date();

    const difference =
        birthdayDate.getTime() - now.getTime();

    if (difference <= 0) {

        finishCountdown();

        return;

    }

    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

function finishCountdown() {

    if (countdownFinished) {
        return;
    }

    countdownFinished = true;

    document.querySelector(".countdown").classList.add("hidden");

    document.getElementById("birthdayBlast")
        .classList.remove("hidden");

    document.getElementById("countdownNext")
        .classList.remove("hidden");

    blastConfetti();

}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   BIRTHDAY BLAST
========================================================= */

function blastConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "🤍",
        "🎂",
        "🧸",
        "🎈",
        "✨",
        "💗"
    ];

    for (let i = 0; i < 45; i++) {

        const item = document.createElement("div");

        item.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = "50%";
        item.style.top = "50%";
        item.style.zIndex = "300";

        item.style.fontSize =
            (18 + Math.random() * 25) + "px";

        item.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 350;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        item.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(.3)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500 + Math.random() * 1000,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 2600);

    }

}


/* =========================================================
   CAKE
========================================================= */

let cakeDone = false;

function blowCandle() {

    if (cakeDone) {
        return;
    }

    cakeDone = true;

    const flame =
        document.getElementById("flame");

    const candle =
        document.getElementById("candle");

    const message =
        document.getElementById("cakeMessage");

    flame.textContent = "✨";

    candle.classList.add("bloom");

    message.textContent =
        "Candle bloom aayiduchuu! 🎂🤍 Wish panniko Loosey!";

    cakeConfetti();

}

function cakeConfetti() {

    const emojis = [
        "🎂",
        "✨",
        "🤍",
        "🎉",
        "🌸"
    ];

    for (let i = 0; i < 20; i++) {

        const item = document.createElement("div");

        item.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = "50%";
        item.style.top = "50%";
        item.style.zIndex = "200";

        const x =
            (Math.random() - .5) * 500;

        const y =
            (Math.random() - .5) * 400;

        item.animate(
            [
                {
                    transform: "translate(-50%, -50%)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 1400);

    }

}


/* =========================================================
   PHOTO GALLERY
========================================================= */

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];

let photoIndex = 0;

function updatePhoto() {

    const image =
        document.getElementById("galleryImage");

    const counter =
        document.getElementById("photoCounter");

    image.style.opacity = "0";

    setTimeout(() => {

        image.src = photos[photoIndex];

        image.onload = () => {
            image.style.opacity = "1";
        };

        counter.textContent =
            `${photoIndex + 1} / ${photos.length}`;

    }, 150);

}

function nextPhoto() {

    photoIndex++;

    if (photoIndex >= photos.length) {
        photoIndex = 0;
    }

    updatePhoto();

}

function previousPhoto() {

    photoIndex--;

    if (photoIndex < 0) {
        photoIndex = photos.length - 1;
    }

    updatePhoto();

}


/* =========================================================
   FULL PHOTO
========================================================= */

function openPhoto() {

    const modal =
        document.getElementById("photoModal");

    const fullPhoto =
        document.getElementById("fullPhoto");

    fullPhoto.src = photos[photoIndex];

    modal.classList.add("show");

}

function closePhoto() {

    document
        .getElementById("photoModal")
        .classList.remove("show");

}

document
    .getElementById("fullPhoto")
    .addEventListener("click", function(event) {

        event.stopPropagation();

    });


/* =========================================================
   LETTER
========================================================= */

function openLetter() {

    document.getElementById("letterAnswer").textContent =
        "Okayyy... then open it slowly 🤍💌";

    setTimeout(() => {

        nextSlide();

    }, 900);

}

function notYet() {

    document.getElementById("letterAnswer").textContent =
        "Ayyooo 😂 seri seri... but you HAVE to open it! 🤍";

}


/* =========================================================
   BALLOON GAME
========================================================= */

let balloonsPopped = 0;

function popBalloon(balloon, message) {

    if (balloon.classList.contains("popped")) {
        return;
    }

    balloon.classList.add("popped");

    balloonsPopped++;

    const messageBox =
        document.getElementById("balloonMessage");

    messageBox.textContent =
        message + " 🤍";

    setTimeout(() => {

        balloon.style.visibility = "hidden";

    }, 350);

    if (balloonsPopped === 5) {

        setTimeout(() => {

            messageBox.textContent =
                "All memories popped! 😂🤍 You survived!";

        }, 500);

    }

}


/* =========================================================
   SONG
========================================================= */

const audio =
    document.getElementById("birthdayAudio");

let songPlaying = false;

function toggleSong() {

    if (!audio) {
        return;
    }

    if (songPlaying) {

        audio.pause();

        songPlaying = false;

        document.getElementById("playIcon")
            .textContent = "▶";

        document.getElementById("playText")
            .textContent = "Play Song";

        document.getElementById("songMessage")
            .textContent = "Paused 🤍";

        stopMusicAnimation();

    } else {

        /*
           IMPORTANT:
           audio.mp3 must be in the same folder as index.html.
        */

        const playPromise = audio.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {

                    songPlaying = true;

                    document.getElementById("playIcon")
                        .textContent = "❚❚";

                    document.getElementById("playText")
                        .textContent = "Pause Song";

                    document.getElementById("songMessage")
                        .textContent =
                        "Playing for you da thangamey 🤍🎧";

                    startMusicAnimation();

                })
                .catch((error) => {

                    console.error(
                        "Song play failed:",
                        error
                    );

                    songPlaying = false;

                    document.getElementById("songMessage")
                        .textContent =
                        "audio.mp3 file check pannuu 🤍";

                });

        }

    }

}

audio.addEventListener("ended", function() {

    songPlaying = false;

    document.getElementById("playIcon")
        .textContent = "▶";

    document.getElementById("playText")
        .textContent = "Play Song";

    stopMusicAnimation();

});


/* =========================================================
   MUSIC HEARTS
========================================================= */

let musicInterval = null;

function startMusicAnimation() {

    if (musicInterval) {
        return;
    }

    musicInterval = setInterval(() => {

        const heart =
            document.createElement("span");

        heart.textContent =
            Math.random() > .5 ? "🤍" : "🎵";

        heart.style.position = "fixed";

        heart.style.left =
            (45 + Math.random() * 10) + "%";

        heart.style.bottom = "35%";

        heart.style.fontSize =
            (15 + Math.random() * 15) + "px";

        heart.style.zIndex = "50";

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 0
                },
                {
                    transform: "translateY(-150px)",
                    opacity: 1
                },
                {
                    transform: "translateY(-250px)",
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1900);

    }, 350);

}

function stopMusicAnimation() {

    if (musicInterval) {

        clearInterval(musicInterval);

        musicInterval = null;

    }

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHeart() {

    const heart =
        document.createElement("span");

    heart.className = "heart";

    const hearts = [
        "🤍",
        "🤍",
        "♡",
        "✨",
        "🌸"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (13 + Math.random() * 18) + "px";

    const duration =
        5 + Math.random() * 7;

    heart.style.animationDuration =
        duration + "s";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}

setInterval(createHeart, 500);


/* =========================================================
   TOUCH / SWIPE PHOTO SUPPORT
========================================================= */

let touchStartX = 0;

const photoFrame =
    document.querySelector(".photo-frame");

if (photoFrame) {

    photoFrame.addEventListener(
        "touchstart",
        function(event) {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );

    photoFrame.addEventListener(
        "touchend",
        function(event) {

            const touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchEndX - touchStartX;

            if (Math.abs(difference) < 40) {
                return;
            }

            if (difference < 0) {

                nextPhoto();

            } else {

                previousPhoto();

            }

        },
        { passive: true }
    );

}


/* =========================================================
   KEYBOARD PIN SUPPORT
========================================================= */

document.addEventListener("keydown", function(event) {

    /*
       PIN keyboard works only while
       PIN slide is active.
    */

    if (currentSlide !== 0) {
        return;
    }

    if (/^[0-9]$/.test(event.key)) {

        pressPin(event.key);

    }

    if (event.key === "Backspace") {

        enteredPin =
            enteredPin.slice(0, -1);

        updatePinDisplay();

    }

    if (event.key === "Enter") {

        checkPin();

    }

});


/* =========================================================
   ESC CLOSE PHOTO
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

    }

});


/* =========================================================
   START
========================================================= */

showSlide(0);