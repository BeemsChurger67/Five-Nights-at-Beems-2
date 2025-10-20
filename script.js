let staticSound = new Audio('assets/static.mp3');
let menuMusic = new Audio('assets/menuMusic.mp3');
let sixAM = new Audio('assets/6AM.mp3');
let doorSound = new Audio('assets/door.mp3');
let beemsLeave = new Audio('assets/beemsCatLeave.mp3');
let powerOutage = new Audio('assets/powerOutage.mp3');
let bellSound = new Audio('assets/bell.mp3');
let maskSound = new Audio('assets/maskSound.mp3');
let flashlightSound = new Audio('assets/flashlightSound.mp3');
let buzzSound = new Audio('assets/buzzSound.mp3');
let thankYouKindSir = new Audio('assets/thankyou.mp3');
let bubzeeeLocate = new Audio('assets/bubzeeLocate.wav');
let localGlitching = new Audio('assets/glitching.mp3');
let glitchSpawnSound = new Audio('assets/glitchSpawnSound.mp3');
let serbianRage = new Audio('assets/serbianRage.mp3');

let beemsDeath = new Audio('assets/meow.mp3');
let jollyBeemsDeath = new Audio('assets/jollyBeemsDeath.mp3');
let bryanDeathSound = new Audio('assets/bryanDeath.mp3');
let janeDeath = new Audio('assets/janeDeath.mp3');
let bubzeeeDeath = new Audio('assets/bubzeeeDeath.mp3');
let zennixDeath = new Audio('assets/zennixDeath.mp3');
let localDeath = new Audio('assets/localJumpscare.mp3');
let noahDeath = new Audio('assets/noahDeath.mp3');
let serbianDeath = new Audio('assets/serbianDeath.mp3');

let night1Line = new Audio('assets/night1Line.mp3');
let night2Line = new Audio('assets/night2Line.mp3');
let night3Line = new Audio('assets/night3Line.mp3');
let night4Line = new Audio('assets/night4Line.mp3');
let night5Line = new Audio('assets/night5Line.mp3');
let night6Line = new Audio('assets/night6Line.mp3');

let challenge1Theme = new Audio('assets/challenge1Theme.mp3');
challenge1Theme.volume = 0.5;

let office = new Image();
office.src = 'assets/office.png';
let leftDoorClosed = new Image();
leftDoorClosed.src = 'assets/leftDoorClosed.png';
let leftDoorOpened = new Image();
leftDoorOpened.src = 'assets/leftDoorOpened.png';
let rightDoorClosed = new Image();
rightDoorClosed.src = 'assets/rightDoorClosed.png';
let rightDoorOpened = new Image();
rightDoorOpened.src = 'assets/rightDoorOpened.png';
let maskImg = new Image();
maskImg.src = 'assets/mask.png';
let gifTest = new Image();
gifTest.src = 'assets/nightSelectorStatic.gif';
let fog1 = new Image();
fog1.src = 'assets/fog1.png';
let flashlightGlow = new Image();
flashlightGlow.src = 'assets/flashlightGlow.png';
let static1 = new Image();
static1.src = 'assets/static.jpg'
let static2 = new Image();
static2.src = 'assets/static.png'
let powerOutageDarkness = new Image();
powerOutageDarkness.src = 'assets/powerOutageDarkness.png'
let building = new Image();
building.src = 'assets/building.png'
let cam0 = new Image();
cam0.src = 'assets/cam0.png';
let cam1 = new Image();
cam1.src = 'assets/cam1.png';
let cam2 = new Image();
cam2.src = 'assets/cam2.png';
let cam3 = new Image();
cam3.src = 'assets/cam3.png';
let cam4 = new Image();
cam4.src = 'assets/cam4.png';
let cam5 = new Image();
cam5.src = 'assets/cam5.png';
let cam6 = new Image();
cam6.src = 'assets/cam6.png';
let customNightBg = new Image();
customNightBg.src = 'assets/customNightBg.jpg';
let beemsCharacter = new Image();
beemsCharacter.src = "assets/beemscat.png";
let jollyBeemsCharacter = new Image();
jollyBeemsCharacter.src = "assets/jollybeems.png";
let bryanCharacter = new Image();
bryanCharacter.src = "assets/bryanBehindWindow.png";
let bryanDeath = new Image();
bryanDeath.src = "assets/nerdcat.jpg";
let janeCharacter = new Image();
janeCharacter.src = "assets/janebreak.png";
let bubzeeeCharacter = new Image();
bubzeeeCharacter.src = "assets/baldzeee.png";
let bubzeeeWig = new Image();
bubzeeeWig.src = "assets/bubzeeeWig.png";
let zennixCharacter = new Image();
zennixCharacter.src = "assets/meowsicle.png";
let localCharacter = new Image();
localCharacter.src = "assets/yourLocalGamer.png";
let noahCharacter = new Image();
noahCharacter.src = "assets/darkbatman.jpg";
let glitchCharacter = new Image();
glitchCharacter.src = "assets/glitch.png";
let serbianCharacter = new Image();
serbianCharacter.src = "assets/serbian.png";
let windowSerbian = new Image();
windowSerbian.src = "assets/windowSerbian.png";
let FPS = 120;
let fpsDisplayInGame = 0;
let lastTime = performance.now();
let frameCount = 0;
let camImgs = [cam0,cam1,cam2,cam3,cam4,cam5,cam6];
let staticDelay = Math.random() * 600+100;
let staticLength = 60;
let windowSize = [window.innerWidth, window.innerHeight];
let inGame = false;
let inMenus = [false, false, false, false, false, false, false]; // night selector | credits | settings | custom night
let menuInterval = null;
let gameInterval = null;
let timePlayedInterval = null;
let mouse = {x: 0, y: 0};
let cnMouse = {x: 0, y: 0};
let inCamera = false;
let keys = {};
let singleTapKeys = {}
let singleTapS = false;
let speedhack = 1;
let mask = false;
let maskAnimationFrame = 0;
let power = 100;
let powerOutState = false;
let nightTimer = [0,270*FPS];
let powerConsumers = [false,false,false,false] // left door | right door | cams | flashlight
let winState = false;
let deathState = false;
let deathBy = "";
let deathAnimationTimer = 0;
let blackBgTransparency = [0,0];
let bellSoundAnimationFrame = [1,0]; // opacity | time
let titleTime = 0;
let cameraX = 0;
let cameraY = 0;
let loadInTimer = 60;
let cameraAnimationFrame = [0,0,false] // animationTime | animation | if played
let cam = 0;
let frameClick = false;
let click = false;
let night = 0;
let nightLineTimer = [7*FPS, false];
let lineSkipTimer = [15*FPS, false];
let nightLines = [night1Line, night2Line, night3Line, night4Line, night5Line, night6Line];
let whichCharacterReset = 0;
let deathFrame = false;
let nightVisuals = 0;
let customNight = false;
let night6Completed = false;
let night6Completed2 = false;
let firstCharacterTick = false;
let completedPreviousNight = 1;
let totalTimePlayed = 0;
let ingameTime = 0;
let deathCounter = 0;
let characters = []
let ingameCharacters = [];
let customNightImages = [
    beemsCharacter,
    jollyBeemsCharacter,
    bryanDeath,
    janeCharacter,
    bubzeeeCharacter,
    zennixCharacter,
    localCharacter,
    noahCharacter,
    glitchCharacter,
    serbianCharacter
]
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cnCanvas = document.getElementById('customNight');
const cnCtx = cnCanvas.getContext('2d');
const eachNightDifficulty = [
    [1.0, 1.0], // night 1
    [1.4, 1.4, 0.7, 0.7], // night 2
    [1.8, 1.8, 1.4, 1.4, 0.7, 0.7], // night 3 
    [2.2, 2.2, 1.8, 1.8, 1.4, 1.4, 0.7, 0.7], // night 4
    [2.6, 2.6, 2.2, 2.2, 1.8, 1.8, 1.4, 1.4, 0.7, 0.7], // night 5
    [5.0, 5.0, 2.6, 2.6, 2.2, 2.2, 1.8, 1.8, 1.4, 1.4], // night 6
]
let challenges = [
    [[3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],360, 175], // 10/25
    [[4.0, 4.0, 4.0, 4.0, 101, 4.0, 4.0, 4.0, 101, 4.0],600, 300], // beemathon
    [[2.0, 2.0, 2.0, 2.0, 0.9, 2.0, 0.9, 2.0, 0.9, 0.9],200, 100], // meows attack
    [[0.9, 0.9, 0.9, 5, 101, 11, 0.9, 0.9, 101, 0.9],120, 100] // camamask
];
let customNightClickSpeed = [120,20];
let customNightA = [0,0];
let customNightLength = 270;
let customNightPower = 100;
let effectChallengesActive = [false,false];
let customNightDifficulty = [0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.9];
let winTick = true;
let deathTick = false;
document.body.style.backgroundSize = `${windowSize[0]}px ${windowSize[1]}px`;
document.body.style.backgroundImage = "url('assets/mainMenuNormalStatic.gif')";
menuMusic.loop = true;
menuMusic.volume = 0;
doorSound.volume = 0.5;
staticSound.volume = 0.4;
let fpsInput = document.getElementById("fpsInput");
let fpsDisplay = document.getElementById("fpsDisplay");
fpsInput.value = 120;
fpsInput.addEventListener('input', (e) => {
    fpsDisplay.innerText = `FPS: ${fpsInput.value}`;
    FPS = fpsInput.value;
});
let previousAttemptTime = 0;
let toggleMusicInput = document.getElementById("toggleMusic");
let musicToggle = true;
toggleMusicInput.addEventListener('input', (e) => {
    musicToggle = toggleMusicInput.checked;
    if (!musicToggle) {
        menuMusic.volume = 0;
        challenge1Theme.volume = 0;
    } else {
        menuMusic.volume = 0.5;
        challenge1Theme.volume = 0.5;
    }
});
window.addEventListener('resize', function() {
    windowSize = [window.innerWidth, window.innerHeight];
    document.body.style.backgroundSize = `${windowSize[0]}px ${windowSize[1]}px`;
});
window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    singleTapKeys[e.code] = true;
    console.log(e.code);
})
window.addEventListener("mousedown", (e) => {
    frameClick = true;
    click = true
})
window.addEventListener("mouseup", (e) => {
    click = false;
    
})
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
})
canvas.addEventListener('mousemove', function(event) {
    if (inGame) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (event.clientX - rect.left) * (canvas.width / rect.width);
        mouse.y = (event.clientY - rect.top) * (canvas.height / rect.height);
    }
})
cnCanvas.addEventListener('mousemove', function(event) {
    const rect = cnCanvas.getBoundingClientRect();
    cnMouse.x = (event.clientX - rect.left) * (cnCanvas.width / rect.width);
    cnMouse.y = (event.clientY - rect.top) * (cnCanvas.height / rect.height);
})

let mobileInGame = false;
function resetCharacters() {
    characters = [ // spawnTimer | killTimer | difficulty | leaveTimer | other
        ["beems", Math.random() * 20*FPS + 10*FPS, 6*FPS, 1, 0.75*FPS,0], // animation
        ["jolly beems", Math.random() * 20*FPS + 6*FPS, 10*FPS, 1, 0.75*FPS,0], // animation
        ["bryan", Math.random() * 20*FPS + 10*FPS, 7*FPS, 1, 1*FPS,0], // animation
        ["jane", Math.random() * 20*FPS + 10*FPS, 2*FPS, 1, 0.5*FPS, 0], // glitchAnimation
        ["bubzeee", Math.random() * 20*FPS + 10*FPS, 10*FPS, 1, Math.round(Math.random() * 2 + 2),false], // wigCam | wigTaken
        ["zennix", 0, 0, 1, 999999*FPS],
        ["local", 0, 1.5*FPS, 1, 0, false], // active
        ["noah", Math.random() * 20*FPS + 10*FPS,8*FPS,1,0.25*FPS,401,false,0], // x | side | animation
        ["glitch", Math.random() * 20*FPS + 10*FPS,10*FPS,1,0, Math.round(Math.random()*2)], // cam
        ["serbian", Math.random() * 20*FPS + 10*FPS,8*FPS,1,0.75*FPS],
    ] // killtimers: beems 1.7 | jolly beems 2.8 | bryan 2.0 | jane 0.5 | bubzeee 10 | zennix ? | local 0.4 | noah 2.2 | glitch 10 | serbian 2.2
}
resetCharacters();
function nightSelectorOpen() {
    if (!inMenus[0]) {
        document.getElementById('nightSelector').classList.add('active');
        document.getElementById('nightSelector').classList.remove('close');
    } else {
        document.getElementById('nightSelector').classList.add('close');
        document.getElementById('nightSelector').classList.remove('active');
    }
    inMenus[0] = !inMenus[0];
}
function settingsOpen() {
    if (!inMenus[2]) {
        document.getElementById('settings').classList.add('active');
        document.getElementById('settings').classList.remove('close');
    } else {
        document.getElementById('settings').classList.add('close');
        document.getElementById('settings').classList.remove('active');
    }
    inMenus[2] = !inMenus[2];
}
function creditsOpen() {
    if (!inMenus[1]) {
        document.getElementById('credits').classList.add('active');
        document.getElementById('credits').classList.remove('close');
    } else {
        document.getElementById('credits').classList.add('close');
        document.getElementById('credits').classList.remove('active');
    }
    inMenus[1] = !inMenus[1];
}
function customNightOpen() {
    if (!inMenus[3]) {
        document.getElementById('customNight').classList.add('active');
        document.getElementById('customNight').classList.remove('close');
    } else {
        document.getElementById('customNight').classList.add('close');
        document.getElementById('customNight').classList.remove('active');
        document.getElementById('customNightChallenges').classList.add('close');
        document.getElementById('customNightChallenges').classList.remove('active');
    }
    inMenus[3] = !inMenus[3];
}
function showCustomNightChallenges() {
    if (!inMenus[4]) {
        document.getElementById('customNightChallenges').classList.add('active');
        document.getElementById('customNightChallenges').classList.remove('close');
    } else {
        document.getElementById('customNightChallenges').classList.add('close');
        document.getElementById('customNightChallenges').classList.remove('active');
    }
    inMenus[4] = !inMenus[4];
}
function thankYou() {
    if (!inMenus[5]) {
        document.getElementById('thankYous').classList.add('active');
        document.getElementById('thankYous').classList.remove('close');
    } else {
        document.getElementById('thankYous').classList.add('close');
        document.getElementById('thankYous').classList.remove('active');
    }
    inMenus[5] = !inMenus[5];
}
function updateMenu() {
    menuMusic.play();
    if(menuMusic.volume < 0.50 && musicToggle) {
        menuMusic.volume+= 0.01;
    }
    staticDelay--;
    if (staticDelay < 0) {
        staticLength--;
        staticSound.play();
        document.body.style.backgroundImage = "url('assets/mainMenuStatic.gif')";
        if (staticLength < 0) {
            staticDelay = Math.random() * 300+50;
            staticLength = 30;
            document.body.style.backgroundImage = "url('assets/mainMenuNormalStatic.gif')";
        }
    }
    if (click) {
        customNightClickSpeed[0]-= 0.02*FPS;
    } else {
        customNightClickSpeed[0] = 0.5*FPS;
    }

    cnCtx.clearRect(0, 0, cnCanvas.width, cnCanvas.height);
    cnCtx.font = "40px FnafFont";
    cnCtx.fillStyle = "white";
    cnCtx.fillText(`Previous Attempt: ${(nightTimer[0]/nightTimer[1]*6).toFixed(2)}AM`, 0, 950);

    cnCtx.fillStyle = "black";; // -1 all
    cnCtx.fillRect(1600,50,300,100);
    cnCtx.fillStyle = "white";
    cnCtx.font = "80px FnafFont";
    cnCtx.fillText("-1 All", 1615, 185);
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,50,300,100) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1600,50,300,100)) {
        for (let i = 0; i<characters.length; i++) {
            customNightDifficulty[i] -= 0.1;
            if (customNightDifficulty[i] < 0.9) {customNightDifficulty[i] = 0.9;}
        }
    }

    cnCtx.fillStyle = "black";; // +1 all
    cnCtx.fillRect(1600,200,300,100);
    cnCtx.fillStyle = "white";
    cnCtx.font = "80px FnafFont";
    cnCtx.fillText("+1 All", 1615, 335);
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,200,300,100) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1600,200,300,100)) {
        for (let i = 0; i<characters.length; i++) {
            if (customNightDifficulty[i] < 3.5) {
                customNightDifficulty[i] += 0.1
            }
        }
    }
    cnCtx.fillStyle = "black";; // start night
    cnCtx.fillRect(1600,950-150,300,100);
    cnCtx.fillStyle = "white";
    cnCtx.font = "90px FnafFont";
    cnCtx.fillText("Start", 1605, 1095-145);
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,800,300,100) && frameClick && inMenus[3]) {
        startCustomNight();
    }
    cnCtx.fillStyle = "black"; // close
    cnCtx.fillRect(1600,950,300,100);
    cnCtx.fillStyle = "white";
    cnCtx.font = "90px FnafFont";
    cnCtx.fillText("Back", 1625, 1095);
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,950,300,100) && frameClick && inMenus[3]) {
        customNightOpen();
    }
    cnCtx.fillStyle = "black";
    cnCtx.fillRect(1600,650,300,100); // night duration
    cnCtx.fillRect(1850,650,50,50); // up
    cnCtx.fillRect(1850,700,50,50); // down
    cnCtx.fillStyle = "white";
    cnCtx.font = "40px arial";
    cnCtx.fillText('▲', 1852,690);
    cnCtx.fillText('▼', 1852,740);
    cnCtx.font = "40px FnafFont";
    cnCtx.fillText("Duration", 1615, 720);
    cnCtx.fillText(`${customNightLength}s`, 1615, 770);
    if (collide(cnMouse.x,cnMouse.y,1,1,1850,650,50,50) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1850,650,50,50)) {customNightLength++;}
    if (collide(cnMouse.x,cnMouse.y,1,1,1850,700,50,50) && frameClick && inMenus[3] && customNightLength > 1 || customNightLength > 1 && customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1850,700,50,50)) {customNightLength--;}
    cnCtx.fillStyle = "black";
    cnCtx.fillRect(1600,500,300,100); // power
    cnCtx.font = "40px FnafFont";
    cnCtx.fillStyle = "white";
    cnCtx.fillText("Power", 1615, 415+150);
    cnCtx.fillText(`${customNightPower}%`, 1615, 470+150);
    cnCtx.font = "40px arial";
    cnCtx.fillText('▲', 1852,390+150);
    cnCtx.fillText('▼', 1852,440+150);
    if (collide(cnMouse.x,cnMouse.y,1,1,1850,500,50,50) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1850,500,50,50)) {customNightPower++;}
    if (collide(cnMouse.x,cnMouse.y,1,1,1850,550,50,50) && frameClick && inMenus[3] && customNightPower > 0 || customNightPower > 0 && customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,1850,550,50,50)) {customNightPower--;}

    cnCtx.font = "40px FnafFont";
    cnCtx.fillStyle = "black";
    cnCtx.fillRect(1600,350,300,100); // challenges
    cnCtx.fillStyle = "white";
    cnCtx.fillText("Challenges", 1620, 440);
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,350,300,100) && frameClick && inMenus[3]) {
        showCustomNightChallenges();
    }
    if (collide(cnMouse.x,cnMouse.y,1,1,1600,950,300,100) && frameClick && inMenus[3]) {
        customNightOpen();
    }
    cnCtx.fillStyle = "white";
    for (let i = 0; i<characters.length; i++) {
        if (i > 4) {
            customNightA[0] = 305*5;
            customNightA[1] = 460;
        } else {
            customNightA[0] = 0;
            customNightA[1] = 0;
        }
        cnCtx.fillStyle = "white";
        cnCtx.drawImage(customNightBg, 25 + i*305 - customNightA[0],25 + customNightA[1],300,300);
        cnCtx.drawImage(customNightImages[i], 75 + i*305 - customNightA[0],25 + customNightA[1],200,200);
        cnCtx.fillStyle = "black";
        cnCtx.font = "30px FnafFont";
        cnCtx.fillText(characters[i][0], 50 + i*305 - customNightA[0], 300 + customNightA[1]);
        if (customNightDifficulty[i] == 0.9) {
            cnCtx.fillStyle = "red";
            cnCtx.fillText("❌", 25 + i*305 - customNightA[0], 320  + customNightA[1]);
        } else {
            cnCtx.fillRect(300 + i*305 - customNightA[0],285 + customNightA[1],25,40);
            cnCtx.fillStyle = "white";
            cnCtx.font = "30px Arial";
            cnCtx.fillText("▼",298 + i*305 - customNightA[0],285 + customNightA[1]+30);
            if (collide(cnMouse.x,cnMouse.y,1,1,300 + i*305 - customNightA[0],285 + customNightA[1],25,40) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,300 + i*305 - customNightA[0],285 + customNightA[1],25,40)) {
                customNightDifficulty[i] -= 0.1;
                frameClick = false;
                if (customNightDifficulty[i] < 0.9) {customNightDifficulty[i] = 0.9;}
            }
            cnCtx.fillStyle = "green";
            cnCtx.font = "30px FnafFont";
            cnCtx.fillText((customNightDifficulty[i]*10-10).toFixed(0), 35 + i*305 - customNightA[0], 340 + customNightA[1]);
        }
        cnCtx.fillStyle = "green"; // ▲▼
        cnCtx.fillRect(300 + i*305 - customNightA[0],245 + customNightA[1],25,40);
        cnCtx.fillStyle = "white";
        cnCtx.font = "30px Arial";
        cnCtx.fillText("▲",298 + i*305 - customNightA[0],245 + customNightA[1]+30);
        if (collide(cnMouse.x,cnMouse.y,1,1,300 + i*305 - customNightA[0],245 + customNightA[1],25,40) && frameClick && inMenus[3] || customNightClickSpeed[0] < 0 && click && inMenus[3] && collide(cnMouse.x,cnMouse.y,1,1,300 + i*305 - customNightA[0],245 + customNightA[1],25,40)) {
            if (customNightDifficulty[i] < 3.5) {
                customNightDifficulty[i] += 0.1
            }
        }
    }
    if (night6Completed && !night6Completed2) {
        night6Completed2 = true;
        thankYou();
    }
    frameClick = false;
}
function nextNightUnlock(nightCompleted) {
    const n = Number(nightCompleted);
    if (!Number.isInteger(n)) return;

    if (n === 6) {
        night6Completed = true;
        const btn = document.getElementById("customNightButton");
        if (btn) btn.style.setProperty('display', 'block', 'important');
        saveProgress();
        return;
    }

    if (n === completedPreviousNight) {
        completedPreviousNight += 1;
        const el = document.getElementById(`night${completedPreviousNight}`);
        if (el) {
            el.style.setProperty('display', 'block', 'important');
            el.disabled = false;
        } else {
            console.warn('nextNightUnlock: element not found', `night${completedPreviousNight}`);
        }
        applyProgressToUI();
        saveProgress();
        console.log(`Unlocked night${completedPreviousNight}`);
    }
}
function selectNight(nightSelected) {
    mobileInGame = false;
    deathTick = true;
    winTick = true;
    menuMusic.volume = 0;
    document.getElementById('gameCanvas').style.display = 'block';
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('nightSelector').classList.add('close');
    document.getElementById('nightSelector').classList.remove('active');
    document.getElementById('credits').classList.add('close');
    document.getElementById('credits').classList.remove('active');
    inMenus[0] = false;
    inMenus[1] = false;
    firstCharacterTick = false;
    clearInterval(menuInterval);
    inGame = true;
    power = 100;
    nightTimer = [0,270*FPS];
    mask = false;
    maskAnimationEnabling = false;
    winState = false;
    blackBgTransparency[0] = 1;
    titleTime = 0;
    for (let i = 0; i<powerConsumers.length; i++) {
        powerConsumers[i] = false;
    }
    powerOutState = false;
    cam = 0;
    bellSoundAnimationFrame = [1,0,false];
    night = nightSelected;
    ingameCharacters.splice(0,ingameCharacters.length);
    deathFrame = false;
    nightVisuals = 0;
    if (night > 5) {
        for (let i = 0; i < 10; i++) {
            let char = [...characters[i]]; 
            ingameCharacters.push(char);
            ingameCharacters[i][3] = eachNightDifficulty[night-1][i]
        }
    } else {
        for (let i = 0; i < night * 2; i++) {
            let char = [...characters[i]]; 
            ingameCharacters.push(char);
            ingameCharacters[i][3] = eachNightDifficulty[night-1][i]
        }
    }
    console.log(ingameCharacters);
    deathBy = "";
    deathState = false;
    deathAnimationTimer = 0;
    nightLineTimer = [7*FPS, false];
    lineSkipTimer = [15*FPS, false];
    for (let key in singleTapKeys) {
        singleTapKeys[key] = false;
    }
    resetCharacters();
    customNight = false;
    gameInterval = setInterval(updateGame, 1000/FPS);
}
function isCustomNightMatchingChallenge(challengeId) {
    const challengeDiff = challenges[challengeId][0];
    for (let i = 0; i < customNightDifficulty.length; i++) {
        if (customNightDifficulty[i] !== challengeDiff[i]) {
            return false;
        }
    }
    if (customNightLength !== challenges[challengeId][1]) {return false;}
    if (customNightPower !== challenges[challengeId][2]) {return false;}
    return true;
}
function challengesSelect(challengeId) {
    for (let i = 0; i<characters.length; i++) {
        customNightDifficulty[i] = challenges[challengeId][0][i];
    }
    customNightLength = challenges[challengeId][1];
    customNightPower = challenges[challengeId][2];
}
let a = 0;
function startCustomNight() {
    mobileInGame = false;
    deathTick = true;
    winTick = true;
    customNight = true;
    menuMusic.volume = 0;
    document.getElementById('gameCanvas').style.display = 'block';
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('nightSelector').classList.add('close');
    document.getElementById('nightSelector').classList.remove('active');
    document.getElementById('credits').classList.add('close');
    document.getElementById('credits').classList.remove('active');
    inMenus[0] = false;
    inMenus[1] = false;
    clearInterval(menuInterval);
    firstCharacterTick = false;
    night = Infinity;
    inGame = true;
    power = customNightPower;
    nightTimer = [0,customNightLength*FPS];
    mask = false;
    maskAnimationEnabling = false;
    winState = false;
    blackBgTransparency[0] = 1;
    titleTime = 0;
    for (let i = 0; i<powerConsumers.length; i++) {
        powerConsumers[i] = false;
    }
    powerOutState = false;
    cam = 0;
    bellSoundAnimationFrame = [1,0,false];
    ingameCharacters.splice(0,ingameCharacters.length);
    deathFrame = false;
    nightVisuals = 0;
    resetCharacters();
    a = 0;
    for (let i = 0; i < characters.length; i++) {
        if (customNightDifficulty[i] == 0.9) {
            a += 1;
            continue;
        }
        ingameCharacters.push(characters[i]);
        ingameCharacters[i-a][3] = customNightDifficulty[i];
    }
    effectChallengesActive[0] = false;
    effectChallengesActive[1] = false;
    if (isCustomNightMatchingChallenge(0)) {
        effectChallengesActive[0] = true;
        challenge1Theme.play();
    }
    if (isCustomNightMatchingChallenge(1)) {
        effectChallengesActive[1] = true;
    }
    deathBy = "";
    deathState = false;
    deathAnimationTimer = 0;
    nightLineTimer = [7*FPS, false];
    lineSkipTimer = [15*FPS, false];
    for (let key in singleTapKeys) {
        singleTapKeys[key] = false;
    }
    
    gameInterval = setInterval(updateGame, 1000/FPS);
}
function collide(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 &&
           x1 + w1 > x2 &&
           y1 < y2 + h2 &&
           y1 + h1 > y2;
}
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
function drawCam(xPos, yPos, cId) {
    ctx.fillStyle = "black";
    ctx.fillRect(xPos-2,yPos-2,60,24);
    ctx.fillStyle = "white";
    if (cam === cId) {
        ctx.fillStyle = "green";
    }
    ctx.font = "20px FnafFont";
    ctx.fillText(`CAM${cId}`,xPos,yPos+30);
    if (collide(mouse.x,mouse.y,1,1,xPos-10,yPos-10,80,44) && frameClick) {
        cameraAnimationFrame[0] = 0;
        cameraAnimationFrame[1] = 0;
        cam = cId;
    }
}
function backMainMenu() {
    menuInterval = setInterval(updateMenu, 1000/FPS);
    clearInterval(gameInterval);
    document.getElementById('gameCanvas').style.display = 'none';
    document.getElementById('titleScreen').style.display = 'block';
}
function resetSounds() {
    for (let i = 0; i<nightLines.length; i++) {
        nightLines[i].currentTime = 0;
        nightLines[i].pause();
    }
    buzzSound.currentTime = 0; buzzSound.pause();
    staticSound.currentTime = 0; staticSound.pause();
    localGlitching.currentTime = 0; localGlitching.pause();
    powerOutage.currentTime = 0; powerOutage.pause();
    bellSound.currentTime = 0; bellSound.pause();
    bubzeeeLocate.currentTime = 0; bubzeeeLocate.pause();
    thankYouKindSir.currentTime = 0; thankYouKindSir.pause();
    glitchSpawnSound.currentTime = 0; glitchSpawnSound.pause();
    serbianRage.currentTime = 0; serbianRage.pause();
    challenge1Theme.currentTime = 0; challenge1Theme.pause();
}
function updateFPS() {
    let now = performance.now();
    frameCount++;

    if (now - lastTime >= 1000) { // 1 second has passed
        fpsDisplayInGame = frameCount;
        frameCount = 0;
        lastTime = now;
    }

    return fpsDisplayInGame;
}
function cheatsFunc() {
    for (let i = 0; i<7; i++) {
        nextNightUnlock(i);
    }
}
function resetProgress() {
    const data = {
        completedPreviousNight : 1,
        night6Completed : false,
        night6Completed2 : false,
        deathCounter,
        totalTimePlayed,
        ingameTime
    };
    try {
        localStorage.setItem('fnaf2_progress', JSON.stringify(data));
    } catch (e) {
        console.warn('saveProgress failed', e);
    }
    // update runtime state and UI immediately
    completedPreviousNight = 1;
    night6Completed = false;
    night6Completed2 = false;
    applyProgressToUI();
    location.reload();
}
function saveProgress() {
    const data = {
        completedPreviousNight,
        night6Completed,
        night6Completed2,
        deathCounter,
        totalTimePlayed,
        ingameTime
    };
    try {
        localStorage.setItem('fnaf2_progress', JSON.stringify(data));
    } catch (e) {
        console.warn('saveProgress failed', e);
    }
}
function applyProgressToUI() {
    // show/hide night buttons based on completedPreviousNight
    document.querySelectorAll('#nightSelector button').forEach(btn => {
        const n = parseInt(btn.id.replace('night',''), 10);
        if (!Number.isInteger(n)) return;
        if (n <= completedPreviousNight) {
            btn.style.setProperty('display', 'block', 'important');
            btn.disabled = false;
        } else {
            btn.style.setProperty('display', 'none', 'important');
            btn.disabled = true;
        }
    });
    const customBtn = document.getElementById('customNightButton');
    if (customBtn) {
        if (completedPreviousNight >= 6 || night6Completed) {
            customBtn.style.setProperty('display', 'block', 'important');
        } else {
            customBtn.style.setProperty('display', 'none', 'important');
        }
    }
}

function loadProgress() {
    try {
        const raw = localStorage.getItem('fnaf2_progress');
        if (!raw) return;
        const data = JSON.parse(raw);
        if (typeof data.completedPreviousNight === 'number') completedPreviousNight = data.completedPreviousNight;
        night6Completed = !!data.night6Completed;
        night6Completed2 = !!data.night6Completed2;
        // restore deaths and time
        if (typeof data.deathCounter === 'number') deathCounter = data.deathCounter;
        if (typeof data.totalTimePlayed === 'number') totalTimePlayed = data.totalTimePlayed;
        if (typeof data.ingameTime === 'number') ingameTime = data.ingameTime;
        applyProgressToUI();
        const deathEl = document.getElementById('deathCounterDiv');
        if (deathEl) deathEl.innerText = `Deaths: ${deathCounter}`;
    } catch (e) {
        console.warn('loadProgress failed', e);
    }
}
function updateGame() { // ENTIRE INGAME |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (effectChallengesActive[0]) {ctx.filter = 'grayscale(200%) contrast(500%) saturate(200%)';}
    if (effectChallengesActive[1]) {ctx.filter = 'sepia(1) hue-rotate(-50deg) contrast(500%) saturate(500%)';}
    if (!winState && !deathState) {
        if (power > 0) {
            if (singleTapKeys["KeyA"]) {
                powerConsumers[0] = !powerConsumers[0];
                doorSound.pause(); 
                doorSound.currentTime = 0;
                doorSound.play();  
            }
            if (singleTapKeys["KeyD"]) {
                powerConsumers[1] = !powerConsumers[1];
                doorSound.pause(); 
                doorSound.currentTime = 0;
                doorSound.play();
            }
            if (singleTapKeys["KeyS"]) {
                cameraAnimationFrame[0] = 0;
                powerConsumers[2] = !powerConsumers[2];
                mask = false;
                singleTapS = true;
            }
            if (singleTapKeys["KeyF"]) {
                powerConsumers[3] = !powerConsumers[3];
                flashlightSound.pause();
                flashlightSound.currentTime = 0;
                flashlightSound.play();
            }
        }
        if (!powerConsumers[2]) {
            if (singleTapKeys["Space"]) {
                mask = !mask;
                maskSound.pause()
                maskSound.currentTime = 0;
                maskSound.play()
            }
        }
        if (mask) {
            if (maskAnimationFrame < 1*FPS) {
                maskAnimationFrame+= 1000/FPS;
            } else {
                maskAnimationFrame = 1*FPS
            }
        } else {
            if (maskAnimationFrame > 0) {
                maskAnimationFrame-= 1000/FPS;
            }
        }
        for (let i = 0; i<powerConsumers.length; i++) {
            if (powerConsumers[i] == true) {
                power -= 0.72/FPS;
            }
        }
        if (powerConsumers[3]) {
            power += 0.36/FPS;
        }
        if (power <= 0 && !powerOutState) {
            powerOutage.play();
            powerOutState = true;
            power = 0;
            for (let i = 0; i<powerConsumers.length; i++) {
                powerConsumers[i] = false;
            }
        }
        cameraX = mouse.x
        cameraY = mouse.y
        nightTimer[0]++;
    }
    ctx.drawImage(office, -cameraX/3,0, 2560, 1080);
    ctx.drawImage(powerConsumers[0] ? leftDoorClosed : leftDoorOpened, -cameraX/3 + 390, 180, 296, 902);
    ctx.drawImage(powerConsumers[1] ? rightDoorClosed : rightDoorOpened, -cameraX/3 + 1864, 180, 296, 902);
    if (powerConsumers[2]) {
        power += 0.36/FPS;
        cameraAnimationFrame[0]+= 120/FPS;
        cameraAnimationFrame[1]++;
        if (cameraAnimationFrame[1] === 2400/FPS) {
            cameraAnimationFrame[1] = 0;
        }
        if (effectChallengesActive[0] || effectChallengesActive[1]) {
            cameraAnimationFrame[0]+=26;
        }
        if (cameraAnimationFrame[0] < 25) {
            staticSound.play();
            ctx.drawImage(cameraAnimationFrame[1] > 10 ? static1 : static2, 0,0,canvas.width,canvas.height);
        } else {
            ctx.drawImage(camImgs[cam],0,0,canvas.width,canvas.height);
            ctx.drawImage(building,1380,700,172*3,186*2);
            drawCam(1495,1015,0);
            drawCam(1840,1015,1);
            drawCam(1495,900,2);
            drawCam(1495,710,3);
            drawCam(1778,875,4);
            drawCam(1388,780,5);
            drawCam(1660,755,6);
        }
    }
    if (!deathState && !winState) {
        if (!firstCharacterTick) {
            for (let a = 0; a<ingameCharacters.length; a++) {
                for (let b = 0; b<characters.length; b++) {
                    if (ingameCharacters[a][0] == characters[b][0]) {
                        ingameCharacters[a] = characters[b];
                    }
                }
            }
        }
        firstCharacterTick = true;
        for (let i = 0; i<ingameCharacters.length; i++) {
            if (ingameCharacters[i][0] == "beems") {
                ingameCharacters[i][1] -= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (ingameCharacters[i][5] < 0.99) {ingameCharacters[i][5] += 0.01;}
                    if (!powerConsumers[2] && !powerConsumers[0]) {
                        ctx.globalAlpha = ingameCharacters[i][5];
                        ctx.drawImage(beemsCharacter,-cameraX/3 + 430, 488, 200, 400);
                        ctx.globalAlpha = 1;
                    }
                    if (powerConsumers[0]) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2] += 120/FPS * ingameCharacters[i][3];
                    }
                    if (ingameCharacters[i][4] < 0) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 0.5*FPS;
                        ingameCharacters[i][5] = 0;
                        beemsLeave.pause();
                        beemsLeave.currentTime = 0;
                        beemsLeave.play();
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0];
                    }
                } else {
                    if (powerConsumers[2] && cam == 6 && cameraAnimationFrame[0] > 25) {ctx.drawImage(beemsCharacter,canvas.width/2-100-150, canvas.height/2-350, 200, 400)}
                }
            }
            if (ingameCharacters[i][0] == "jolly beems") {
                ingameCharacters[i][1] -= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (ingameCharacters[i][5] < 0.99) {ingameCharacters[i][5] += 0.01;}
                    if (!powerConsumers[2] && !powerConsumers[1]) {
                        ctx.globalAlpha = ingameCharacters[i][5];
                        ctx.drawImage(jollyBeemsCharacter,-cameraX/3 + 1920, 488, 200, 400);
                        ctx.globalAlpha = 1;
                    }
                    if (powerConsumers[1]) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2]+= 120/FPS * ingameCharacters[i][3];
                    }
                    if (ingameCharacters[i][4] < 0) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 0.5*FPS;
                        ingameCharacters[i][5] = 0;
                        beemsLeave.pause(); 
                        beemsLeave.currentTime = 0;
                        beemsLeave.play();
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0];
                    }
                } else {
                    if (powerConsumers[2] && cam == 6 && cameraAnimationFrame[0] > 25) {ctx.drawImage(jollyBeemsCharacter,canvas.width/2-100+150, canvas.height/2-350, 200, 400)}
                }
            }
            if (ingameCharacters[i][0] == "bryan") {
                ingameCharacters[i][1] -= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (ingameCharacters[i][5] < 0.99) {ingameCharacters[i][5] += 0.01;}
                    if (!powerConsumers[2]) {
                        ctx.globalAlpha = ingameCharacters[i][5];
                        ctx.drawImage(bryanCharacter,-cameraX/3 + 1330, 457, 135, 270);
                        ctx.globalAlpha = 1;
                    }
                    if (powerConsumers[3] && distance(-cameraX/3 + 1330+67, 477+135, mouse.x, mouse.y) < 200) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2] += 120/FPS * ingameCharacters[i][3];
                    }
                    if (ingameCharacters[i][4] < 0) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 1*FPS;
                        beemsLeave.pause();
                        beemsLeave.currentTime = 0;
                        beemsLeave.play();
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "jane") {
                ingameCharacters[i][1] -= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ((ingameCharacters[i][3] / 5)+1);
                    if (!powerConsumers[2]) {
                        ctx.globalAlpha = Math.random();
                        ctx.drawImage(janeCharacter,-cameraX/3 + 2560/2-250/2, 500, 250, 350)
                        ctx.globalAlpha = 1;
                    }
                    buzzSound.play();
                    if (mask) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2] += 120/FPS * ingameCharacters[i][3];
                    }
                    if (mask && ingameCharacters[i][4] < 0) {
                        ctx.globalAlpha = 1;
                        buzzSound.currentTime = 0;
                        buzzSound.pause();
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 1*FPS;
                        beemsLeave.pause();
                        beemsLeave.currentTime = 0;
                        beemsLeave.play();
                        
                    }
                    if(ingameCharacters[i][2] < 0) {
                        ctx.globalAlpha = 1;
                        buzzSound.currentTime = 0;
                        buzzSound.pause();
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "bubzeee") {
                ingameCharacters[i][1] -= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1;
                    bubzeeeLocate.play();
                    if (!powerConsumers[2]) {ctx.drawImage(bubzeeeCharacter,-cameraX/3 + 800, 530, 300, 400)}
                    if (powerConsumers[2] && cam == ingameCharacters[i][4] && cameraAnimationFrame[0] > 25) {
                        ctx.drawImage(bubzeeeWig,canvas.width/2-250, canvas.height/2-250, 500, 500);
                        if (collide(mouse.x,mouse.y,1,1,canvas.width/2-250, canvas.height/2-250, 500, 500) && frameClick) {
                            ingameCharacters[i][5] = true;
                        }
                    }
                    if (ingameCharacters[i][5]) {
                        bubzeeeLocate.pause();
                        bubzeeeLocate.currentTime = 0;
                        thankYouKindSir.play();
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = Math.round(Math.random() * 2 + 2)
                        ingameCharacters[i][5] = false;
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "zennix") {
                ingameCharacters[i][2] += 20/FPS * ingameCharacters[i][3];
                if (powerConsumers[2] && cam == 5 && cameraAnimationFrame[0] > 25) {
                    ctx.drawImage(zennixCharacter, canvas.width / 2 - 100 - ingameCharacters[i][2]/2,canvas.height / 2 - 250 - ingameCharacters[i][2]/2+125, 250+ingameCharacters[i][2],250+ingameCharacters[i][2]);
                    if (powerConsumers[3] && ingameCharacters[i][2] > 0) {
                        ingameCharacters[i][2] -= ingameCharacters[i][3]*360/FPS;
                    }
                }
                if(ingameCharacters[i][2] > 875) {
                    deathState = true;
                    deathBy = ingameCharacters[i][0];
                }
            }
            if (ingameCharacters[i][0] == "local") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    if (singleTapS && !powerConsumers[2]) {
                        if (Math.random() * 10 > 8 / ingameCharacters[i][3]) {
                            ingameCharacters[i][4] = true;
                        }
                    }
                    if (ingameCharacters[i][4]) {
                        ctx.globalAlpha = Math.random() * 0.5 + 0.5;
                        ctx.drawImage(localCharacter,-cameraX/3 + canvas.width/2+400, canvas.height/2+130, 300, 400);
                        ctx.globalAlpha = 1;
                        ingameCharacters[i][2]-= 1 * ((ingameCharacters[i][3]/5)+1);
                        localGlitching.play();
                    }
                    if (mask) {
                        localGlitching.currentTime = 0;
                        localGlitching.pause();
                        ingameCharacters[i][2] = 1.5*FPS;
                        ingameCharacters[i][4] = false;
                    }
                    if (powerConsumers[2] && ingameCharacters[i][4]) {
                        ingameCharacters[i][2] = -1;
                    }
                    if(ingameCharacters[i][2] < 0) {
                        localGlitching.currentTime = 0;
                        localGlitching.pause();
                        deathState = true;
                        deathBy = ingameCharacters[i][0];
                    }
                }
            }
            if (ingameCharacters[i][0] == "noah") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (ingameCharacters[i][7] < 0.99) {ingameCharacters[i][7] += 0.01;}
                    if (!powerConsumers[2]) {
                        ctx.globalAlpha = ingameCharacters[i][7];
                        ctx.drawImage(noahCharacter,-cameraX/3 + ingameCharacters[i][5], 600, 200, 400);
                        ctx.globalAlpha = 1;
                    }
                    if (ingameCharacters[i][5] > 2200) {ingameCharacters[i][6] = true}
                    if (ingameCharacters[i][5] < 400) {ingameCharacters[i][6] = false}
                    if (ingameCharacters[i][6]) {ingameCharacters[i][5] -= 18*120/FPS} else {ingameCharacters[i][5] += 18*120/FPS}
                    if (powerConsumers[3] && distance(-cameraX/3 + ingameCharacters[i][5]+100, 600+200, mouse.x, mouse.y) < 300) {
                        ingameCharacters[i][4]--;
                    }
                    if (ingameCharacters[i][4] < 0) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 0.25*FPS;
                        ingameCharacters[i][5] = 300;
                        ingameCharacters[i][6] = false;
                        ingameCharacters[i][7] = 0;
                        beemsLeave.pause(); 
                        beemsLeave.currentTime = 0;
                        beemsLeave.play();
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0];
                    }
                }
            }
            if (ingameCharacters[i][0] == "glitch") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0 && ingameCharacters[i][1] > -0.5 * ingameCharacters[i][3]) {
                    glitchSpawnSound.play();
                }
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2] -= 1;
                    if (ingameCharacters[i][5] >= 2) {
                        if (powerConsumers[2] && cam == 6 && cameraAnimationFrame[0] > 25) {
                            ctx.drawImage(glitchCharacter,canvas.width / 2,canvas.height / 2+200,250,250);
                            if (collide(mouse.x,mouse.y,1,1,canvas.width / 2,canvas.height / 2+200,250,250) && frameClick) {
                                ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                                ingameCharacters[i][2] = 10*FPS;
                                ingameCharacters[i][5] = Math.round(Math.random()*3);
                            }
                        }

                    } else {
                        if (powerConsumers[2] && cam == ingameCharacters[i][5] && cameraAnimationFrame[0] > 25) {
                            ctx.drawImage(glitchCharacter,canvas.width / 2,canvas.height / 2,250,250);
                            if (collide(mouse.x,mouse.y,1,1,canvas.width / 2,canvas.height / 2,250,250) && frameClick) {
                                ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                                ingameCharacters[i][2] = 10*FPS;
                                ingameCharacters[i][5] = Math.round(Math.random()*3);   
                            }
                        }
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "serbian") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] > 0) {
                    if (!powerConsumers[2]) {ctx.drawImage(windowSerbian,-cameraX/3 + canvas.width/2+500, 527, 135, 200)};
                } else {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (powerConsumers[1]) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2]+= 1 * ingameCharacters[i][3];
                        if (ingameCharacters[i][4] < 0) {
                            ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                            ingameCharacters[i][2] = 7*FPS;
                            ingameCharacters[i][4] = 0.75*FPS;
                            serbianRage.play();
                        }
                    }
                }
                if(ingameCharacters[i][2] < 0) {
                    deathState = true;
                    deathBy = ingameCharacters[i][0];
                }
            }
        }
    }
    if (!powerConsumers[2]) {
        ctx.drawImage(fog1,0, 0, canvas.width, canvas.height);
    }
    if (powerConsumers[3]) {ctx.drawImage(flashlightGlow,cameraX-250,cameraY-250,500,500);}
    ctx.drawImage(maskImg,0,-1080 + maskAnimationFrame*(1080/FPS),1920,1080);
    if (power <= 0) {
        ctx.drawImage(powerOutageDarkness,0,0,canvas.width,canvas.height);
    }
    if (!winState && !deathState) {
        blackBgTransparency[1]++;
        if (blackBgTransparency[1] > 3) {
            if (blackBgTransparency[0] > 0.01) {
                blackBgTransparency[0] -= 1.5/FPS;
            }
            blackBgTransparency[1] = 0
        }
        if (blackBgTransparency[0] < 0.01 && bellSoundAnimationFrame[0] > 0.01) {
            if (bellSoundAnimationFrame[2] == false) {
                bellSound.play();
                bellSoundAnimationFrame[2] = true;
            }
            bellSoundAnimationFrame[1]++;
            if (bellSoundAnimationFrame[1] > 7) {
                if (bellSoundAnimationFrame[1])
                bellSoundAnimationFrame[0] -= 0.01;
                bellSoundAnimationFrame[1] = 0;
            }
            ctx.fillStyle = "white"
            ctx.globalAlpha = bellSoundAnimationFrame[0];
            ctx.font = "bold 150px FnafFont"
            if (night == 7) {
                ctx.fillText(`Beemathon`, canvas.width/3.5, 300);
            } else {
                ctx.fillText(`Night ${night}`, canvas.width/2.8, 300);
            }
            ctx.globalAlpha = 1.0;
        }
        if (blackBgTransparency[0] > 0) {
            ctx.fillStyle = "black"; 
            ctx.globalAlpha = blackBgTransparency[0];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        }
    }
    if (!customNight) {
        nightLineTimer[0]--;
        if (nightLineTimer[0] < 0 && !nightLineTimer[1]) {
            nightLineTimer[1] = true;
            if (!lineSkipTimer[1]) {
                nightLines[night-1].play();
            }
        }
    }
    if (lineSkipTimer[0] > 0) {
        ctx.fillStyle = "black"
        ctx.fillRect(30,12,180,30)
        ctx.fillStyle = "white";
        ctx.font = "bold 30px FnafFont";
        ctx.fillText("SKIP CALL", 30, 60);
        if (collide(mouse.x,mouse.y,1,1,30,12,180,30) && frameClick) {
            lineSkipTimer = 0;
            for (let i = 0; i<nightLines.length; i++) {
                nightLines[i].currentTime = 0;
                nightLines[i].pause();
            }
            nightLineTimer[1] = true;
        }
        lineSkipTimer[0]--;
    }
    ctx.fillStyle = "white";
    ctx.font = "bold 75px FnafFont";
    updateFPS();
    ctx.fillText(`Power: ${power.toFixed(1)}%`, 30, 1000);
    ctx.fillText(`FPS: ${(fpsDisplayInGame/1.05).toFixed(0)}`, 30, 925);
    if (effectChallengesActive[0] || effectChallengesActive[1]) {
        ctx.fillText(`${(nightTimer[0]/nightTimer[1]*6).toFixed(2)}AM`, 30, 1100);
    } else {
        ctx.fillText(`${Math.round((nightTimer[0]/nightTimer[1]*6)-0.5)}AM`, 30, 1100);
    }
    frameClick = false;
    if (nightTimer[0] >= nightTimer[1]) {
        winState = true;
        resetSounds();
        sixAM.play();
        if (blackBgTransparency[0] < 1) {
            blackBgTransparency[1]++;
            if (blackBgTransparency[1] >= 0.1*FPS) {
                blackBgTransparency[0]+=0.01;
                blackBgTransparency[1] = 0;
            }
        }
        if (winTick) {
            if (night == 6) {
                night6Completed = true;
            }
            nextNightUnlock(night);
            console.log(`Night ${night} completed.`);
            winTick = false;
        }
        ctx.fillStyle = "black";
        ctx.globalAlpha = blackBgTransparency[0];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
        ctx.font = "bold 150px FnafFont"
        ctx.fillStyle = "white";
        ctx.fillText('6AM', canvas.width/2-200, canvas.height/1.5);
        titleTime++;
        if (titleTime >= 8*FPS) {
            menuInterval = setInterval(updateMenu, 1000/FPS);
            clearInterval(gameInterval);
            document.getElementById('gameCanvas').style.display = 'none';
            document.getElementById('titleScreen').style.display = 'block';
        }
    }
    ctx.filter = 'none';
    if (deathState) {
        if (deathTick) {
            deathCounter++;
            document.getElementById('deathCounterDiv').innerHTML = `Deaths: ${deathCounter}`;
            previousAttemptTime = ingameTime;
            saveProgress();
            deathTick = false;
            inGame = false;
        }
        if(deathBy == "beems") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.2*FPS) { 
                backMainMenu();
            } else {
                beemsDeath.play();
                ctx.drawImage(beemsCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "jolly beems") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.2*FPS) { 
                backMainMenu();
            } else {
                jollyBeemsDeath.play();
                ctx.drawImage(jollyBeemsCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "bryan") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.6*FPS) { 
                backMainMenu();
            } else {
                ctx.drawImage(bryanDeath,0,0,canvas.width,canvas.height);
                resetSounds();
                bryanDeathSound.play();
            }
        }
        if(deathBy == "jane") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 0.7*FPS) { 
                backMainMenu();
            } else {
                janeDeath.play();
                ctx.drawImage(janeCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "bubzeee") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.5*FPS) {
                backMainMenu();
            } else {
                bubzeeeDeath.play();
                ctx.drawImage(bubzeeeCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "zennix") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1*FPS) { 
                backMainMenu();
            } else {
                ctx.drawImage(zennixCharacter,0,0,canvas.width,canvas.height);
                zennixDeath.play();
                resetSounds();
            }
        }
        if(deathBy == "noah") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 0.7*FPS) { 
                backMainMenu();
            } else {
                ctx.drawImage(noahCharacter,0,0,canvas.width,canvas.height);
                noahDeath.play();
                resetSounds();
            }
        }
        if(deathBy == "local") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.8*FPS) {
                backMainMenu();
            } else {
                if (!deathFrame) {
                    localDeath.play();
                    deathFrame = true;
                }
                ctx.drawImage(localCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "glitch") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1.5*FPS) { 
                backMainMenu();
            } else {
                ctx.drawImage(glitchCharacter,0,0,canvas.width,canvas.height);
                resetSounds();
            }
        }
        if(deathBy == "serbian") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 1*FPS) { 
                backMainMenu();
            } else {
                ctx.drawImage(serbianCharacter,0,0,canvas.width,canvas.height);
                serbianDeath.play();
                resetSounds();
            }
        }
    }
    for (let key in singleTapKeys) {
        singleTapKeys[key] = false;
    }
    singleTapS = false;
}
function updateLoad() {
    loadInTimer--;
    if (loadInTimer < 0) {
        loadProgress();
        menuInterval = setInterval(updateMenu, 1000/60);
        clearInterval(loadInterval);
    }
}
let loadInterval = setInterval(updateLoad, 1000/FPS);
function formatTime(totalSeconds) {
    const secs = Math.max(0, Math.floor(totalSeconds));
    const s = secs % 60;
    const m = Math.floor(secs / 60) % 60;
    const h = Math.floor(secs / 3600);
    if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    return `${m}:${String(s).padStart(2,'0')}`;
}
function playedTimeUpdate() {
    totalTimePlayed += 1 / 60;
    if (inGame) {ingameTime += 1 / 60;}
    document.getElementById('timePlayedDiv').innerHTML = `Total Time: ${formatTime(totalTimePlayed)}`;
    document.getElementById('ingameTimePlayedDiv').innerHTML = `Ingame Time: ${formatTime(ingameTime)}`;
}
timePlayedInterval = setInterval(playedTimeUpdate, 1000 / 60);

setInterval(() => {
    saveProgress();
}, 10000);