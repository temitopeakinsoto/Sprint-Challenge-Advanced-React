import React, {Component} from "react";

export default class PlayerDetails extends Component {

    render(){  
        const {name, country, searches} = this.props.playerData;      
        return(
            <div className="playerDetails">
                <h1>{name}</h1>
                <p>Country: {country}</p>
                <p>Searches: {searches}</p>
            </div>
        )
    }

}