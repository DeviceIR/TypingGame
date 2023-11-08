/**
 * This Class is responsible for alternating the dom based on the how game goes
 */
export default class Document
{
    // ScoreBoard properties ----------------------------------------------------
    /**
     * scoreBoard
     * @property
     * @type Element
     */
    scoreBoardElement = this.$('scoreBoard');
    /**
     * current game's word per minute counter element
     * @property
     * @type {Element}
     */
    wordPerMinuteElement = this.$("scoreBoard_WPM");
    /**
     * the current game's errors element'
     * @property
     * @type {Element}
     */
    errorsElement = this.$('scoreBoard_errors');


    // other properties ----------------------------------------------------

    /**
     * the text in the middle of the screen that changes based on what user is doing
     * at first it will tell user to focus and after that it will guide user though the game
     * @property
     * @type Element
     */
    pageGuideElement = this.$("pageGuide");
    /**
     * input files
     * @property
     * @type {Element}
     */
    inputElement = this.$("input");



    /**
     * @constructor
     * the constructor will make changes to make the Doc ready for player to start the game
     */
    constructor()
    {
        this.pageGuideElement.textContent = "GET READY TO PLAY!";
    }


    /**
     * Just making life easier and adding a way to get dom elements faster
     * @param elementId : string
     * @returns {Element}
     * @method
     */
    $(elementId)
    {
        return document.querySelector("#"+elementId)
    }

    scoreBoardReset()
    {
        this.wordPerMinuteElement.textContent = 0;
        this.errorsElement.textContent = 0
    }

    gameInit() {
        this.scoreBoardReset();
        this.pageGuideElement.textContent = "Stay Focused";
        this.inputElement.value = "c";
    }
}