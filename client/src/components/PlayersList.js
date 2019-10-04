import React, {Component} from "react";
import PlayerDetails from './PlayerDetails';
import axios from  "axios";

export default class PlayersList extends Component {
    constructor(){
        super();

        this.state= {
            playerList: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/players")
        .then(response => {
        this.setState({ playerList: response.data })
        }).catch(error => console.log(error.data));
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