import React from "react";

export class PortalQuestion extends React.Component {
    constructor(){
        super();
    }

    render(){

        return (
            <div>
                <p>Question {} </p>
                <br/>
                <span> Choose Anwser </span>
                <div>
                 <label>
                     <input type="radio" value="A" checked={true} />
                          Option 1
                 </label>

                </div>    
            </div>
        )
    }
}