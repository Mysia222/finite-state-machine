class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {

        //this.config=config;
        this.state = config.initial
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state

     */
    changeState(state) {
this.state=state;
}
    /**
     * Changes state according to event transition rules.
     * @param event
     */
     trigger(event) {
        //this.state=event.state;
        if(this.event='study')
            
                this.state='busy';

        else
            if(this.event='get_up')
                this.state='normal';
            else 
                this.state='normal';
        //if (this.event=='get_hungry' && this.state=='busy') 
         //   this.state='hangry';
       // else
        //    (this.event='get_tired') 
         //   this.state='sleeping';
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state='normal'
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
