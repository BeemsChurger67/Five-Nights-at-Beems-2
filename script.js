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
let beemsCharacter = new Image();
beemsCharacter.src = "assets/beemscat.png"
let jollyBeemsCharacter = new Image();
jollyBeemsCharacter.src = "assets/jollybeems.png"
let bryanCharacter = new Image();
bryanCharacter.src = "assets/bryanBehindWindow.png"
let bryanDeath = new Image();
bryanDeath.src = "assets/nerdcat.jpg"
let janeCharacter = new Image();
janeCharacter.src = "assets/janebreak.png"
let bubzeeeCharacter = new Image();
bubzeeeCharacter.src = "assets/bubzeee.png"
let bubzeeeWig = new Image();
bubzeeeWig.src = "assets/bubzeeeWig.png"
let camImgs = [cam0,cam1,cam2,cam3,cam4,cam5,cam6];
let staticDelay = Math.random() * 600+100;
let staticLength = 60;
let windowSize = [window.innerWidth, window.innerHeight];
let inGame = false;
let inMenus = [false, false];
let menuInterval = null;
let gameInterval = null;
let mouse = {x: 0, y: 0};
let inCamera = false;
let keys = {};
let singleTapKeys = {}
let speedhack = 1;
let mask = false;
let maskAnimationFrame = 0;
let power = 100;
let powerOutState = false;
let nightTimer = [0,60*240];
let powerConsume = []
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
let cameraAnimationFrame = [0,0,false] // animationTime | animation | if played
let cam = 0;
let frameClick = false;
let night = 0;
let FPS = 120;
let whichCharacterReset = 0;
let characters = [ // 44 opacity
    ["beems", Math.random() * 20*FPS + 10*FPS, 10*FPS, 1, 0.5*FPS],
    ["jolly beems", Math.random() * 10*FPS + 20*FPS, 10*FPS, 1, 0.5*FPS],
    ["bryan", Math.random() * 20*FPS + 10*FPS, 10*FPS, 1, 1*FPS],
    ["jane", Math.random() * 20*FPS + 20*FPS, 2*FPS, 1, 0.5*FPS],
    ["bubzeee", Math.random() * 20*FPS + 10*FPS, 10*FPS, 1, Math.round(Math.random() * 3 + 3),false], // wigCam | wigTaken
    ["zennix", Math.random() * 120*FPS + 50*FPS, ,10*FPS, 1*FPS]
] // character | spawnTimer | killTimer | difficulty | leaveTimer | extra 1 | extra 2...
let ingameCharacters = [];
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const eachNightDifficulty = [
    [1.0, 1.0],
    [1.4, 1.4, 1.0, 1.0],
    [1.8, 1.8, 1.4, 1.4, 1.0, 1.0],
    [2.2, 2.2, 1.8, 1.8, 1.4, 1.4],
    [3, 3, 2.5, 2.5, 2.25, 2.25],
]
document.body.style.backgroundSize = `${windowSize[0]}px ${windowSize[1]}px`;
document.body.style.backgroundImage = "url('assets/mainMenuNormalStatic.gif')";
menuMusic.loop = true;
menuMusic.volume = 0;
doorSound.volume = 0.5;
staticSound.volume = 0.4;

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
})
window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
})
document.getElementById('speedhackSlider').addEventListener('input', () => {
    speedhack = document.getElementById('speedhackSlider').value;
    document.getElementById('speedhackDisplay').innerText = Math.round(speedhack)/10 + "x";
})
canvas.addEventListener('mousemove', function(event) {
    if (inGame) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (event.clientX - rect.left) * (canvas.width / rect.width);
        mouse.y = (event.clientY - rect.top) * (canvas.height / rect.height);
    }
    //console.log(mouse);
})
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

function updateMenu() {
    menuMusic.play();
    if(menuMusic.volume < 0.50) {
        menuMusic.volume+= 0.01;
    }
    staticDelay--;
    if (staticDelay < 0) {
        staticLength--;
        staticSound.play();
        document.body.style.backgroundImage = "url('assets/mainMenuStatic.gif')";
        if (staticLength < 0) {
            staticDelay = Math.random() * 600+100;
            staticLength = 60;
            document.body.style.backgroundImage = "url('assets/mainMenuNormalStatic.gif')";
        }
    }
}

function selectNight(nightSelected) {
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
    inGame = true;
    power = 100;
    nightTimer = [0,7*FPS];
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
    for (let i = 0; i < night * 2; i++) {
        let char = [...characters[i]]; 
        ingameCharacters.push(char);
        ingameCharacters[i][3] = eachNightDifficulty[night-1][i]
    }
    console.log(ingameCharacters);
    deathBy = "";
    deathState = false;
    deathAnimationTimer = 0;
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
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
            if (maskAnimationFrame < 15) {
                maskAnimationFrame++;
            }
        } else {
            if (maskAnimationFrame > 0) {
                maskAnimationFrame--;
            }
        }
        for (let i = 0; i<powerConsumers.length; i++) {
            if (powerConsumers[i] == true) {
                power -= 0.006;
            }
        }
        if (powerConsumers[3]) {
            power += 0.003;
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
        power += 0.003;
        cameraAnimationFrame[0]++;
        cameraAnimationFrame[1]++;
        if (cameraAnimationFrame[1] === 20) {
            cameraAnimationFrame[1] = 0;
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
        for (let i = 0; i<ingameCharacters.length; i++) {
            if (ingameCharacters[i][0] == "beems") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (!powerConsumers[2] || !powerConsumers[0]) {ctx.drawImage(beemsCharacter,-cameraX/3 + 430, 488, 200, 400)}
                    if (powerConsumers[0]) {
                        ingameCharacters[i][4]--;
                    }
                    if (ingameCharacters[i][4] < 0) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
                        ingameCharacters[i][4] = 0.5*FPS;
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
            if (ingameCharacters[i][0] == "jolly beems") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (!powerConsumers[2]) {ctx.drawImage(jollyBeemsCharacter,-cameraX/3 + 1920, 488, 200, 400)}
                    if (powerConsumers[1]) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
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
            if (ingameCharacters[i][0] == "bryan") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (!powerConsumers[2]) {ctx.drawImage(bryanCharacter,-cameraX/3 + screen.width/2-135/2, 527, 135, 200)}
                    if (powerConsumers[3] && distance(-cameraX/3 + screen.width/2-135/2, 527, mouse.x, mouse.y) < 200) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2] += 1 * ingameCharacters[i][3];
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
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ((ingameCharacters[i][3] / 5)+1);
                    if (!powerConsumers[2]) {ctx.drawImage(janeCharacter,-cameraX/3 + screen.width/2-275/2, 550, 250, 350)}
                    buzzSound.play();
                    if (mask) {
                        ingameCharacters[i][4]--;
                        ingameCharacters[i][2]+= 1 * ingameCharacters[i][3];
                    }
                    if (mask && ingameCharacters[i][4] < 0) {
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
                        buzzSound.currentTime = 0;
                        buzzSound.pause();
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "bubzeee") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ((ingameCharacters[i][3] / 5)+1);
                    bubzeeeLocate.play();
                    if (!powerConsumers[2]) {ctx.drawImage(bubzeeeCharacter,-cameraX/3 + 800, 488, 300, 400)}
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
                        ingameCharacters[i][4] = Math.round(Math.random() * 3 + 3);
                        ingameCharacters[i][5] = false;
                    }
                    if(ingameCharacters[i][2] < 0) {
                        deathState = true;
                        deathBy = ingameCharacters[i][0]
                    }
                }
            }
            if (ingameCharacters[i][0] == "beems") {
                ingameCharacters[i][1]-= 0.5 * ingameCharacters[i][3];
                if (ingameCharacters[i][1] < 0) {
                    ingameCharacters[i][2]-= 1 * ingameCharacters[i][3];
                    if (!powerConsumers[2]) {ctx.drawImage(beemsCharacter,-cameraX/3 + 430, 488, 200, 400)}
                    if (powerConsumers[0]) {
                        ingameCharacters[i][1] = Math.random() * 20*FPS + 10*FPS;
                        ingameCharacters[i][2] = 10*FPS;
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
        }
    }
    if (!powerConsumers[2]) {
        ctx.drawImage(fog1,0, 0, canvas.width, canvas.height)
    }
    if (powerConsumers[3]) {ctx.drawImage(flashlightGlow,cameraX-250,cameraY-250,500,500);}
    ctx.drawImage(maskImg,0,-1080 + maskAnimationFrame*(1080/15),1920,1080);
    if (power <= 0) {
        ctx.drawImage(powerOutageDarkness,0,0,canvas.width,canvas.height);
    }
    if (!winState && !deathState) {
        blackBgTransparency[1]++;
        if (blackBgTransparency[1] > 3) {
            if (blackBgTransparency[0] > 0.01) {
                blackBgTransparency[0] -= 0.01;
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
            ctx.fillText(`Night ${night}`, canvas.width/2.8, 300);
            ctx.globalAlpha = 1.0;
        }
        ctx.fillStyle = "black";
        ctx.globalAlpha = blackBgTransparency[0];
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
    }
    ctx.fillStyle = "white";
    ctx.font = "bold 75px FnafFont";
    ctx.fillText(`Power: ${power.toFixed(1)}%`, 30, 1000);
    ctx.fillText(`${Math.round((nightTimer[0]/nightTimer[1]*6)-0.5)}AM`, 30, 1100);

    frameClick = false;
    if (nightTimer[0] >= nightTimer[1]) {
        winState = true;
        sixAM.play();
        if (blackBgTransparency[0] < 1) {
            blackBgTransparency[1]++;
            if (blackBgTransparency[1] >= 4) {
                blackBgTransparency[0]+=0.01;
                blackBgTransparency[1] = 0;
            }
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

    if (deathState) {
        if(deathBy == "beems") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 3*60) { 
                backMainMenu();
            } else {
                ctx.drawImage(beemsCharacter,0,0,canvas.width,canvas.height)
            }
        }
        if(deathBy == "jolly beems") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 3*60) { 
                backMainMenu();
            } else {
                ctx.drawImage(jollyBeemsCharacter,0,0,canvas.width,canvas.height)
            }
        }
        if(deathBy == "bryan") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 3*60) { 
                backMainMenu();
            } else {
                ctx.drawImage(bryanDeath,0,0,canvas.width,canvas.height)
            }
        }
        if(deathBy == "jane") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 3*60) { 
                backMainMenu();
            } else {
                ctx.drawImage(janeCharacter,0,0,canvas.width,canvas.height)
            }
        }
        if(deathBy == "bubzeee") {
            deathAnimationTimer++;
            if (deathAnimationTimer >= 3*60) { 
                backMainMenu();
            } else {
                ctx.drawImage(janeCharacter,0,0,canvas.width,canvas.height)
            }
        }
    }
    for (let key in singleTapKeys) {
        singleTapKeys[key] = false;
    }
}
menuInterval = setInterval(updateMenu, 1000/FPS);