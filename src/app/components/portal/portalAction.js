import React from "react";

export class PortalAction extends React.Component {

    constructor(props){
        super(props);
    }

    

    render() {
        const qno = this.props.questionNo;
        const totQ = this.props.totalquestion;

        const prevBtn = () => {
            if (qno > 0) {
                return (
                    <button onClick={this.props.prevQuestion}> 
                    Prev 
                    </button>
                )
            }
        }
        const nextBtn = () => {
            if (qno < (totQ - 1))  {
                console.log('nextbtn also');
                return (
                    <button onClick={this.props.nextQuestion}> 
                    Next 
                    </button>
                )
            }
        }

        return (
            <div>
                {prevBtn()}      
                
                <button onClick={this.props.submitQuestion}>  
                     Submit 
                </button>

                {nextBtn()}
            </div>
        )
    }
}