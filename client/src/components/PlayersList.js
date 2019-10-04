import React, {Component} from "react";
import PlayerDetails from './PlayerDetails';

export default class PlayersList extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h3>This is the player list component</h3>
                <PlayerDetails />
            </div>
        )
    }

}