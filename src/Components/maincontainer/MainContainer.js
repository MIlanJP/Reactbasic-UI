import React, { Component } from 'react'
import L1 from './Layout1'
import L2 from './Layout2'
class MainContainer extends Component {
    render(){
        return(
            <div className="MainContainer" >
            <L1/>
            <L2/>
            </div>
        )
    }
}
export default MainContainer;