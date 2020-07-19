import React, { Component } from 'react'

class CompanyName extends Component {

    constructor(props){
        super(props);
        this.state={
            company:"Company Name"
        }
    }

    render(){
        return (
            <div className='CompanyName'  >
            <h1>{this.state.company}</h1>
            </div>
        )
    }
}
export default CompanyName;