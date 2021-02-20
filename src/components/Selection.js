
import React, { Component } from 'react';

class Selection extends Component {

    constructor(props){
        super(props);
        this.state={
            background:"",
        };
    }

    fixColor=(val)=>{
        this.setState({
            background:val.background,
        })
    }

    render() {
        return (
            <div className="fix-box" style={{background:this.state.background}} onClick={()=>this.props.applyColor(this.fixColor)}>
                <h2 className="subheading">Selection</h2>
            </div>
        );
    }
}

export default Selection;
