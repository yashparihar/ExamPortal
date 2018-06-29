import React from "react";

export class PortalQuestion extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const op = this.props.questionBody;
        console.log('to shpw ',op);




        return (
            
            <div>
                {/* {options()} */}
                <p>Question {} </p>
                <br/>
                <span> Choose Anwser </span>
                <div>
                 <label>
                     <input type="radio" value="A" checked={false} />
                          Option 1
                 </label>

                </div>    
            </div>
        )
    }
}