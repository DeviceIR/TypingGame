/**
 * Class: Timer
 *
 * Description:
 * This class creates a timer that counts down from a specified time limit and updates an HTML element with the remaining time.
 */
export default class Timer {
    /**
     * @property {string} timerTagId - The ID of the HTML element to update with the remaining time.
     */
    timerTagId;

    /**
     * @property {number} timeLimit - The time limit in seconds.
     */
    timeLimit;

    /**
     * @constructor
     * @param {number} timeLimit - The time limit in seconds.
     * @param {string} timerTagId - The ID of the HTML element to update with the remaining time.
     */
    constructor(timeLimit, timerTagId) {
        this.timerTagId = timerTagId;
        this.timeLimit = timeLimit;
    }

    /**
     * Starts the timer.
     * With the given html tag as timer, it changes the text inside that tag
     * to mach the timer each second.
     */
    start() {
        const timerTag = document.querySelector(this.timerTagId);

        timerTag.innerText = this.timeLimit;

        const timerInterval = window.setInterval(() => {
            let time = parseInt(timerTag.innerText) - 1;
            timerTag.innerText = `${time}s`;

            if (time === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
}
