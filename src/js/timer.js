import refs from './refs.js'


class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.metod = () => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            this.getTimeComponents(time);
            this.finishTime(time);
        }
    }

    startTimer() {
        this.metod();
        this.intervalId = setInterval(() => {
            this.metod();
        }, 1000);
    }

   
 pad(value) {
    return String(value).padStart(2, '0');
  }

 getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
 refs.days.textContent = `${days}`;
 refs.hours.textContent = `${hours}`;
 refs.mins.textContent = `${mins}`;
 refs.secs.textContent = `${secs}`;
}

    finishTime(time) {
        if (time < 0) {
            clearInterval(this.intervalId);
            this.time = 0;
            this.getTimeComponents(this.time);
        }
    }
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 24, 2021'),
});
countdownTimer.startTimer();