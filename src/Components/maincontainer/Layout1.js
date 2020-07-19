import React, { Component } from 'react'

class Layout1 extends Component {

constructor(props){
    super(props)
    this.state={
        paragraphContent:"Quickly Build an effective pricing table for your potential customers"
        +" with this layout. It's built with default Material-UI with little customization."
    }
}

    render(){
        return(
            <div className="Layout1" >
            <div className="Layout1-Heading">
            <h1>Pricing</h1>          
            </div>
            <div className="Layout1-Paragraph"  >
            <p>{this.state.paragraphContent}</p>  
            </div>
            </div>
        )
    }
}
export default Layout1;