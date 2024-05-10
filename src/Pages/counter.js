import { Connect } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom/client'
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
    }
    render() {
        return (
            <div>
                <h1>{this.state}</h1>
                {/* <button onClick={() => {
                    this.state({
                        counter: this.counter + 1
                    })
                }}>update counter</button> */}
            </div>

        )
    }
}

// const mapStateToProps=(state)=>{

// }
// const mapDispatchToProps=(dispatch)=>{

// }