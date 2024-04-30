function clock() {
    const clock = document.querySelector('.clock');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    const step = 6;

    setInterval(function() {
        const now = new Date();
        const nowHour = now.getHours() * 30;
        const nowMinute = now.getMinutes() * step;
        const nowSecond = now.getSeconds() * step;

        hours.style.transform = `rotateZ(${nowHour + (nowMinute / 12)}deg)`;
        minutes.style.transform = `rotateZ(${nowMinute}deg)`;
        seconds.style.transform = `rotateZ(${nowSecond}deg)`;
    }, 0);
    
    const clockAnimation = clock.animate(
        [
            {boxShadow: '0 0 0 0 rgba(234, 0, 217, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
            {boxShadow: '0 0 600px 30px rgba(234, 0, 217, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
            {boxShadow: '0 0 0 0 rgba(234, 0, 217, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
            {boxShadow: '0 0 100px 5px rgba(10, 189, 198, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
            {boxShadow: '0 0 600px 30px rgba(10, 189, 198, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
            {boxShadow: '0 0 0 0 rgba(10, 189, 198, .5), inset 0 0 35px 5px rgba(234, 0, 217, .5)'},
        ],
        {
            duration: 60000,
            iterations: Infinity,
            easing: 'linear',
            fill: 'forwards'
        }
    )

    clockAnimation.play();
}

clock();