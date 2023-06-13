document.addEventListener("click", event => {
    bursty(event.pageX, event.pageY);
});

setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
            fill: { white: "#34E1FF" },
            duration: 2000
        }
    }).tune({
        x: x,
        y: y
    });

    burst.replay();
}

function randomizedConfetti() {
    let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
    let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
    const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 0: 200 },
        count: 20,
        degree: 360,
        children: {
            fill: { white: "#34E1FF" },
            duration: 2000
        }
    }).tune({
        x: randomX,
        y: randomY
    });

    burst.replay();
}

Splitting();
var w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    ctx = c.getContext('2d'),

    hw = w / 2, // half-width
    hh = h / 2,

    opts = {
        strings: ['HAPPY', 'BIRTHDAY!', 'PHẠM THẾ SƠN'],
        charSize: 30,
        charSpacing: 35,
        lineHeight: 40,

        cx: w / 2,
        cy: h / 2,

        fireworkPrevPoints: 10,
        fireworkBaseLineWidth: 5,
        fireworkAddedLineWidth: 8,
        fireworkSpawnTime: 200,
        fireworkBaseReachTime: 30,
        fireworkAddedReachTime: 30,
        fireworkCircleBaseSize: 20,
        fireworkCircleAddedSize: 10,
        fireworkCircleBaseTime: 30,
        fireworkCircleAddedTime: 30,
        fireworkCircleFadeBaseTime: 10,
        fireworkCircleFadeAddedTime: 5,
        fireworkBaseShards: 5,
        fireworkAddedShards: 5,
        fireworkShardPrevPoints: 3,
        fireworkShardBaseVel: 4,
        fireworkShardAddedVel: 2,
        fireworkShardBaseSize: 3,
        fireworkShardAddedSize: 3,
        gravity: .1,
        upFlow: -.1,
        letterContemplatingWaitTime: 360,
        balloonSpawnTime: 20,
        balloonBaseInflateTime: 10,
        balloonAddedInflateTime: 10,
        balloonBaseSize: 20,
        balloonAddedSize: 20,
        balloonBaseVel: .4,
        balloonAddedVel: .4,
        balloonBaseRadian: -(Math.PI / 2 - .5),
        balloonAddedRadian: -1,
    },
    calc = {
        totalWidth: opts.charSpacing * Math.max(opts.strings[0].length, opts.strings[1].length)
    },

    Tau = Math.PI * .2;