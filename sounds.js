// Little bit of ctrl+c_ctrl+v code but works for now

// Individual select
box1 = document.getElementById('box1')
box2 = document.getElementById('box2')
box3 = document.getElementById('box3')
box4 = document.getElementById('box4')
box5 = document.getElementById('box5')
box6 = document.getElementById('box6')
box7 = document.getElementById('box7')
box8 = document.getElementById('box8')

stats_button = document.getElementById('statePageButton')

// Sounds for the buttons
let sound1 = new Howl({
    src: ['soundResources/Single-duck-quack.mp3',],
    volume: 0.5
});

let sound2 = new Howl({
    src: ['soundResources/8-bit-retro-success-victory.mp3'],
    volume: 0.2
});

let sound3 = new Howl({
    src: ['soundResources/Cow-moo-sound.mp3',],
    volume: 0.2
});

let sound4 = new Howl({
    src: ['soundResources/Ding-sound-effect.mp3'],
    volume: 1
});

let sound5 = new Howl({
    src: ['soundResources/Door-knock-sound-effect.mp3',],
    volume: 0.5
});

let sound6 = new Howl({
    src: ['soundResources/sci-fi-laser-gun-shot-sound-effect.mp3'],
    volume: 0.5
});

let sound7 = new Howl({
    src: ['soundResources/single-bell-two-strikes.mp3',],
    volume: 0.2
});

let sound8 = new Howl({
    src: ['soundResources/Tada-sound.mp3'],
    volume: 0.2
});

// Animation for the button presses
let box1Animatio = anime({
    targets: box1,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
});

var box2Animatio = anime({
    targets: box2,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box3Animatio = anime({
    targets: box3,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box4Animatio = anime({
    targets: box4,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box5Animatio = anime({
    targets: box5,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box6Animatio = anime({
    targets: box6,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box7Animatio = anime({
    targets: box7,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

var box8Animatio = anime({
    targets: box8,
    scale: [1, 0.9, 1],
    autoplay: false,
    duration: 500,
    easing: 'linear'
})

// Actions for the buttons
box1.addEventListener('click', function () {
    sound1.play()
    box1Animatio.play()
    plusOneForDuck()
})

box2.addEventListener('click', function () {
    sound2.play()
    box2Animatio.play()
    plusOneForSuccess()
})

box3.addEventListener('click', function () {
    sound3.play()
    box3Animatio.play()
    plusOneForCow()
})

box4.addEventListener('click', function () {
    sound4.play()
    box4Animatio.play()
    plusOneForDing()
})

box5.addEventListener('click', function () {
    sound5.play()
    box5Animatio.play()
    plusOneForKnock()
})

box6.addEventListener('click', function () {
    sound6.play()
    box6Animatio.play()
    plusOneForLazer()
})

box7.addEventListener('click', function () {
    sound7.play()
    box7Animatio.play()
    plusOneForBell()
})

box8.addEventListener('click', function () {
    sound8.play()
    box8Animatio.play()
    plusOneForTadaa()
})

function stats_button_over() {
    stats_button.style.backgroundColor = '#FF7F50'
    stats_button.style.color = '#e9e9f1'
}

function stats_button_out() {
    stats_button.style.backgroundColor = '#e9e9f1'
    stats_button.style.color = '#FF7F50'
}

function moveToStatsPage() {
    window.location = 'stats.html'
}

/*
mozSystem Boolean: Setting this flag to true allows making cross-site
connections without requiring the server to opt-in using CORS.
Requires setting mozAnon: true, i.e. this can't be combined with sending
cookies or other user credentials. This only works in privileged(reviewed) apps;
it does not work on arbitrary webpages loaded in Firefox

https://stackoverflow.com/questions/22363268/cross-origin-request-blocked
*/

let xhttp = new XMLHttpRequest({mozSystem: true});

function plusOneForDuck() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/duckSoundClicked", true);
    xhttp.send();
}

function plusOneForSuccess() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/successSoundClicked", true);
    xhttp.send();
}

function plusOneForCow() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/cowSoundClicked", true);
    xhttp.send();
}

function plusOneForDing() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/dingSoundClicked", true);
    xhttp.send();
}

function plusOneForKnock() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/knockSoundClicked", true);
    xhttp.send();
}

function plusOneForLazer() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/lazerSoundClicked", true);
    xhttp.send();
}

function plusOneForBell() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/bellSoundClicked", true);
    xhttp.send();
}

function plusOneForTadaa() {
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Sent a message to server to update db')
        }
    };
    xhttp.open("POST", "http://localhost:3000/tadaaSoundClicked", true);
    xhttp.send();
}