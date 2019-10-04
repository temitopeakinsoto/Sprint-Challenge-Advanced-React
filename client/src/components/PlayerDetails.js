import React, {Component} from "react";

export default class PlayerDetails extends Component {

    render(){  
        const {name, country, searches} = this.props.playerData;      
        return(
            <div>
                <p>{name}</p>
                <p>{country}</p>
                <p>{searches}</p>
            </div>
        )
    }

}