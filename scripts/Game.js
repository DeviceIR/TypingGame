import Document from "./Doc.js";

export default class Game {
    /**
     * These are the states that the game is currently in.
     * @type {{WAITING_TO_START: number, IN_PROGRESS: number, PAUSED: number, FINISHED: number}}
     */
    static State = {
        WAITING_TO_START: 0,
        IN_PROGRESS: 1,
        PAUSED: 2,
        FINISHED: 3
    };

    /**
     * @type {Game.State}
     * @property
     */
    state;

    /**
     * Holds the document that game will control
     * @type {Document}
     * @property
     */
    doc


    /**
     * changes the state of the game
     * sets the document
     * initializes the game
     * @constructor
     * @param {Document} Document
     */
    constructor(Document) {
        // changing state of the game
        this.state = Game.State.WAITING_TO_START;

        // setting the input field
        this.doc = Document;

        // game init
        this.initGame();
    }

    /**
     * initializes the game with adding event listeners to input field
     * and then the input field can track the changes in user behaviour and do what is needed
     * @method
     */
    initGame() {
        // Binding the event listener function reference
        this.doc.inputElement.addEventListener('focusin', this.inputFocusInListener.bind(this));
        this.doc.inputElement.addEventListener('focusout', this.inputFocusOutListener.bind(this));
    }


    /**
     * Will listen for focusin
     * and starts the game if it is not already started abd resumes the game if it is paused
     * @method
     */
    inputFocusInListener()
    {
        this.stateToInProgress()
        this.doc.gameInit();
    }

    /**
     * Will track the focusout event and pauses the game if it is playing
     * if the game has ended this will do nothing right now
     * @method
     */
    inputFocusOutListener() {
        this.stateToPaused();
        // this.doc.pauseGame();
    }


    /**
     * changes state of the game to in progress the game
     * @method
     */
    stateToInProgress()
    {
        this.state = Game.State.IN_PROGRESS;
    }


    /**
     * changes state of the game to paused
     * @method
     */
    stateToPaused()
    {
        this.state = Game.State.PAUSED;
    }

    /**
     * changes state of the game to finished
     * @method
     */
    stateToFinished()
    {
        this.state = Game.State.FINISHED;
    }

    /**
     * changes state of the game to waiting to start
     * @method
     */
    stateToWaitingToStart()
    {
        this.state = Game.State.WAITING_TO_START;
    }
}
